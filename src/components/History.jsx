import React, { useState } from 'react';
import { ArrowLeft, History as HistoryIcon, CheckCircle2, AlertCircle, Smartphone, Zap, Droplet, Flame, Wifi, Tv, CreditCard, Send, Plane, Package, Clock, RefreshCw, Trash2 } from 'lucide-react';

const SERVICE_ICONS = {
  mobile: Smartphone,
  electricity: Zap,
  water: Droplet,
  gas: Flame,
  broadband: Wifi,
  dth: Tv,
  fastag: CreditCard,
  money_transfer: Send,
  travel: Plane,
  courier: Package,
};

const SERVICE_COLORS = {
  mobile:         '#3b82f6',
  electricity:    '#f59e0b',
  water:          '#06b6d4',
  gas:            '#ef4444',
  broadband:      '#8b5cf6',
  dth:            '#ec4899',
  fastag:         '#10b981',
  money_transfer: '#ff7043',
  travel:         '#6366f1',
  courier:        '#84cc16',
};

export default function History({ transactions, onBack, onRetry }) {
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = transactions.filter(tx => {
    if (filterStatus === 'all') return true;
    return tx.status === filterStatus;
  });

  // Detect service id from service name for icon lookup
  const getServiceKey = (tx) => {
    const name = (tx.service || '').toLowerCase();
    if (name.includes('mobile') || name.includes('recharge')) return 'mobile';
    if (name.includes('electricity') || name.includes('electric')) return 'electricity';
    if (name.includes('water')) return 'water';
    if (name.includes('gas')) return 'gas';
    if (name.includes('broadband')) return 'broadband';
    if (name.includes('dth')) return 'dth';
    if (name.includes('fastag') || name.includes('fas')) return 'fastag';
    if (name.includes('money') || name.includes('transfer') || name.includes('dmt')) return 'money_transfer';
    if (name.includes('travel') || name.includes('bus') || name.includes('train') || name.includes('flight') || name.includes('hotel')) return 'travel';
    if (name.includes('courier')) return 'courier';
    return 'mobile';
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 0 80px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <button
          className="btn btn-light"
          onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div>
          <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#081426', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HistoryIcon size={24} style={{ color: '#ff7043' }} /> Transaction History
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
            All transactions completed during this session
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="tabs-header" style={{ marginBottom: '24px' }}>
        {['all', 'SUCCESS', 'FAILED'].map(status => (
          <button
            key={status}
            className={`tab-btn ${filterStatus === status ? 'active' : ''}`}
            onClick={() => setFilterStatus(status)}
          >
            {status === 'all' ? 'All Transactions' : status === 'SUCCESS' ? '✓ Successful' : '✗ Failed'}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '80px 40px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1px dashed #e2e8f0'
        }}>
          <HistoryIcon size={48} style={{ color: '#cbd5e1', marginBottom: '16px' }} />
          <h3 style={{ fontSize: '20px', color: '#475569', marginBottom: '8px' }}>No Transactions Yet</h3>
          <p style={{ fontSize: '13px', color: '#94a3b8', maxWidth: '360px', margin: '0 auto 24px' }}>
            Once you process a payment or booking through any service, it will appear here for review.
          </p>
          <button className="btn btn-primary" onClick={onBack}>Browse Services</button>
        </div>
      )}

      {/* Transaction list */}
      {filtered.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map((tx, idx) => {
            const svcKey = getServiceKey(tx);
            const IconComp = SERVICE_ICONS[svcKey] || Smartphone;
            const iconColor = SERVICE_COLORS[svcKey] || '#64748b';
            const isSuccess = tx.status === 'SUCCESS';

            return (
              <div
                key={tx.id || idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  border: `1px solid ${isSuccess ? '#e2e8f0' : 'rgba(239,68,68,0.15)'}`,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.03)'}
              >
                {/* Icon */}
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  backgroundColor: `${iconColor}15`,
                  color: iconColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <IconComp size={22} />
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#081426' }}>{tx.service}</span>
                    <span style={{
                      fontSize: '10px', fontWeight: '700', padding: '2px 8px',
                      borderRadius: '20px',
                      backgroundColor: isSuccess ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                      color: isSuccess ? '#10b981' : '#ef4444'
                    }}>
                      {isSuccess ? '✓ SUCCESS' : '✗ FAILED'}
                    </span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '2px' }}>{tx.provider}</p>
                  <p style={{ fontSize: '11px', color: '#94a3b8' }}>{tx.account}</p>
                </div>

                {/* Amount */}
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: isSuccess ? '#081426' : '#ef4444' }}>
                    ₹{tx.amount}
                  </div>
                  <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'flex-end' }}>
                    <Clock size={10} /> {tx.date}
                  </div>
                </div>

                {/* Txn ID */}
                {tx.id && (
                  <div style={{
                    fontSize: '10px', color: '#00b4d8', fontFamily: 'monospace',
                    backgroundColor: 'rgba(0,180,216,0.06)', padding: '4px 8px',
                    borderRadius: '6px', letterSpacing: '0.5px', flexShrink: 0,
                    border: '1px solid rgba(0,180,216,0.1)'
                  }}>
                    {tx.id}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Summary footer */}
      {filtered.length > 0 && (
        <div style={{
          marginTop: '32px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px 24px',
          border: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '2px' }}>Total Transactions</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#081426' }}>{transactions.length}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '2px' }}>Successful</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#10b981' }}>
                {transactions.filter(t => t.status === 'SUCCESS').length}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '2px' }}>Failed</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#ef4444' }}>
                {transactions.filter(t => t.status !== 'SUCCESS').length}
              </div>
            </div>
          </div>
          <div style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>
            Session data only — clears on page refresh
          </div>
        </div>
      )}
    </div>
  );
}
