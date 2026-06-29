import React, { useState } from 'react';
import { Search, Clock, FileText, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';

const TRACK_HISTORY = [
  { id: 'RMTM88726510', service: 'Mobile Recharge', detail: '+91 98765 43210', date: '29-June-2026 15:45', status: 'Delivered', type: 'recharge', steps: [
    { title: 'Recharge Initiated', desc: 'Request submitted to billing terminal', date: '29-June-2026 15:45', completed: true },
    { title: 'NPCI Hub Verification', desc: 'Settlement token fetched from gateway', date: '29-June-2026 15:45', completed: true },
    { title: 'Operator Settlement', desc: 'Jio network balance recharged', date: '29-June-2026 15:46', completed: true }
  ]},
  { id: 'RMTE22415609', service: 'Electricity Bill', detail: 'Cons ID: 198425109', date: '28-June-2026 11:20', status: 'Paid', type: 'utility', steps: [
    { title: 'Bill Fetch Requested', desc: 'Pulled billing detail from board database', date: '28-June-2026 11:19', completed: true },
    { title: 'Bill Settlement Payment', desc: 'Cleared pending sum from CSC escrow wallet', date: '28-June-2026 11:20', completed: true },
    { title: 'Biller Clearing Acknowledgement', desc: 'Acknowledged by MSEDCL authority board', date: '28-June-2026 11:20', completed: true }
  ]},
  { id: 'RMTCUR5566778', service: 'Courier Dispatch', detail: 'From: 400001 To: 700091', date: '27-June-2026 10:15', status: 'In Transit', type: 'courier', steps: [
    { title: 'Courier Package Booked', desc: 'Weight check: 1.5kg, Standard service', date: '27-June-2026 10:15', completed: true },
    { title: 'Parcel Picked Up', desc: 'Agent collected parcel from pickup terminal', date: '27-June-2026 16:30', completed: true },
    { title: 'Dispatched to Sorting Center', desc: 'Sorted at Mumbai HUB and loaded in cargo truck', date: '28-June-2026 04:45', completed: true },
    { title: 'In Transit', desc: 'Truck dispatched and in transit to West Bengal', date: '29-June-2026 08:30', completed: true, active: true },
    { title: 'Delivered', desc: 'Delivery code SMS sent to recipient', date: 'Pending', completed: false }
  ]}
];

export default function Tracker({ trackingTransactions }) {
  const [searchId, setSearchId] = useState('');
  const [selectedTx, setSelectedTx] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchId) return;

    // Search in our tracking history mock
    const found = TRACK_HISTORY.find(h => h.id.toUpperCase() === searchId.trim().toUpperCase());
    
    // Also search in currently completed transactions in the active session
    const sessionFound = trackingTransactions.find(t => t.id.toUpperCase() === searchId.trim().toUpperCase());

    if (found) {
      setSelectedTx(found);
      setErrorMsg('');
    } else if (sessionFound) {
      // create timeline on the fly for session transactions
      const steps = [
        { title: 'Transaction Initiated', desc: 'Request submitted to billing terminal', date: sessionFound.date, completed: true },
        { title: 'NPCI Hub Verification', desc: 'Settlement token fetched from gateway', date: sessionFound.date, completed: true },
        { title: 'Operator Settlement', desc: `${sessionFound.service} transaction processed successfully`, date: sessionFound.date, completed: true }
      ];
      setSelectedTx({
        id: sessionFound.id,
        service: sessionFound.service,
        detail: sessionFound.account,
        date: sessionFound.date,
        status: sessionFound.status === 'SUCCESS' ? 'Completed' : 'Failed',
        steps: steps
      });
      setErrorMsg('');
    } else {
      setSelectedTx(null);
      setErrorMsg('Transaction ID not found. Please double check the ID (e.g. try RMTCUR5566778 or RMTM88726510).');
    }
  };

  const handleSelectRecent = (tx) => {
    setSelectedTx(tx);
    setSearchId(tx.id);
    setErrorMsg('');
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 0 80px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '12px' }}>Track Transaction Status</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '32px' }}>
          Enter your RM transaction Ref ID or Courier AWB number to trace real-time payment settlement or parcel status.
        </p>

        {/* Search form */}
        <form onSubmit={handleSearch} style={{ marginBottom: '40px' }}>
          <div className="search-input-wrapper" style={{ border: '1px solid #e2e8f0' }}>
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              className="search-input"
              placeholder="Enter Ref ID (e.g. RMTM88726510, RMTCUR5566778)..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
              Track ID
            </button>
          </div>
        </form>

        {errorMsg && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            color: '#ef4444',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '13px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Track results view */}
        {selectedTx ? (
          <div className="flow-card animate-scale-in" style={{ padding: '30px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '16px',
              marginBottom: '24px'
            }}>
              <div>
                <span style={{ fontSize: '12px', color: '#64748b' }}>{selectedTx.service} Status</span>
                <h3 style={{ fontSize: '18px', color: '#081426' }}>ID: {selectedTx.id}</h3>
              </div>
              <span style={{
                backgroundColor: selectedTx.status === 'Delivered' || selectedTx.status === 'Paid' || selectedTx.status === 'Completed' ? 'rgba(16,185,129,0.1)' : 'rgba(0,180,216,0.1)',
                color: selectedTx.status === 'Delivered' || selectedTx.status === 'Paid' || selectedTx.status === 'Completed' ? '#10b981' : '#00b4d8',
                fontWeight: '700',
                fontSize: '13px',
                padding: '4px 12px',
                borderRadius: '50px'
              }}>
                {selectedTx.status}
              </span>
            </div>

            <div style={{ fontSize: '14px', marginBottom: '24px' }}>
              <p style={{ color: '#64748b' }}>Account/Reference Details: <strong>{selectedTx.detail}</strong></p>
              <p style={{ color: '#64748b' }}>Initiated Time: <strong>{selectedTx.date}</strong></p>
            </div>

            <h4 style={{ fontSize: '15px', marginBottom: '16px' }}>Status Log Timeline</h4>
            <div className="timeline">
              {selectedTx.steps.map((step, idx) => (
                <div key={idx} className={`timeline-item ${step.completed ? 'completed' : ''} ${step.active ? 'active' : ''}`}>
                  <div className="timeline-dot" style={{
                    backgroundColor: step.completed ? '#00b4d8' : '#ffffff',
                    borderColor: step.completed || step.active ? '#00b4d8' : '#cbd5e1',
                    color: step.completed ? '#081426' : '#94a3b8'
                  }}>
                    {step.completed ? <CheckCircle2 size={16} /> : idx + 1}
                  </div>
                  <div className="timeline-content">
                    <h5 className="timeline-title" style={{ color: step.active ? '#00b4d8' : '#0f223a' }}>{step.title}</h5>
                    <p className="timeline-desc">{step.desc}</p>
                    <span style={{ fontSize: '10px', color: '#94a3b8' }}>{step.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Suggest default search options if nothing is searched */
          <div className="quick-pay-section animate-slide-up" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} style={{ color: '#00b4d8' }} /> Select Mock ID to Test Tracker Flow:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {TRACK_HISTORY.map(tx => (
                <div 
                  key={tx.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    cursor: 'pointer',
                    backgroundColor: '#ffffff',
                    transition: 'var(--transition)'
                  }}
                  onClick={() => handleSelectRecent(tx)}
                >
                  <div>
                    <strong style={{ fontSize: '13px', color: '#081426' }}>{tx.id}</strong>
                    <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '12px' }}>{tx.service} ({tx.detail})</span>
                  </div>
                  <ChevronRight size={16} style={{ color: '#00b4d8' }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
