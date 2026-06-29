import React, { useState } from 'react';
import { 
  Smartphone, Zap, Droplet, Flame, Wifi, Tv, 
  CreditCard, Send, Plane, Package, History, 
  Shield, Award, Users, ArrowRight
} from 'lucide-react';

const SERVICES = [
  { id: 'mobile',         title: 'Mobile Recharge',      desc: 'Prepaid & Postpaid mobile recharges',         category: 'recharge', icon: Smartphone, badge: 'Popular' },
  { id: 'dth',            title: 'DTH Recharge',         desc: 'Airtel, Tata Play, Dish TV, Sun Direct',      category: 'recharge', icon: Tv },
  { id: 'fastag',         title: 'FASTag Recharge',      desc: 'Instant toll payments for all banks',         category: 'recharge', icon: CreditCard, badge: 'New' },
  { id: 'electricity',    title: 'Electricity Bills',    desc: 'Pay utilities across all Indian states',      category: 'bills',    icon: Zap, badge: 'Auto Fetch' },
  { id: 'water',          title: 'Water Bills',          desc: 'Water boards & corporation payments',         category: 'bills',    icon: Droplet },
  { id: 'gas',            title: 'Gas Booking',          desc: 'LPG Refill booking & bill payments',         category: 'bills',    icon: Flame },
  { id: 'broadband',      title: 'Broadband / Landline', desc: 'Airtel, Jio, ACT, BSNL broadband',           category: 'bills',    icon: Wifi },
  { id: 'money_transfer', title: 'Money Transfer',       desc: 'Domestic DMT instant cash transfers',        category: 'finance',  icon: Send, badge: '100% Safe' },
  { id: 'travel',         title: 'Travel Booking',       desc: 'Bus, train, flight & hotel ticketing',       category: 'travel',   icon: Plane },
  { id: 'courier',        title: 'Courier Booking',      desc: 'Package pickup & parcel dispatch',           category: 'travel',   icon: Package },
];

export default function Dashboard({ searchTerm, onSelectService, completedTransactions = [], onViewHistory }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.desc.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === 'all') return matchesSearch;
    return service.category === activeTab && matchesSearch;
  });

  const recentTx = completedTransactions.slice(0, 4);

  return (
    <section className="dashboard-section container" id="services-dashboard">
      {/* Category Tabs */}
      <div className="tabs-header">
        {[
          { id: 'all',     label: 'All Services' },
          { id: 'recharge',label: 'Recharges' },
          { id: 'bills',   label: 'Bill Payments' },
          { id: 'finance', label: 'Money Transfer' },
          { id: 'travel',  label: 'Travel & Courier' },
        ].map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="services-grid animate-fade-in">
        {filteredServices.map(service => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="service-card"
              onClick={() => onSelectService(service.id)}
            >
              {service.badge && <span className="service-badge">{service.badge}</span>}
              <div className="service-icon-container">
                <IconComponent size={24} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          );
        })}
        {filteredServices.length === 0 && (
          <div style={{
            gridColumn: '1 / -1', textAlign: 'center', padding: '40px',
            backgroundColor: '#ffffff', borderRadius: '12px', color: '#64748b'
          }}>
            No services found matching your search. Try looking for "recharge" or "bill".
          </div>
        )}
      </div>

      {/* Session Transaction History Strip */}
      <div className="quick-pay-section animate-slide-up">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <h2 className="section-title">
            <History size={22} style={{ color: '#ff7043' }} /> Transaction History
          </h2>
          <button
            className="btn btn-light"
            onClick={onViewHistory}
            style={{ fontSize: '12px', gap: '6px', display: 'flex', alignItems: 'center' }}
          >
            View All <ArrowRight size={14} />
          </button>
        </div>
        <p className="section-subtitle" style={{ marginBottom: '20px' }}>
          Transactions completed in this session. Use the "View All" button for full history.
        </p>

        {recentTx.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '32px 20px',
            border: '1px dashed #e2e8f0', borderRadius: '12px',
            color: '#94a3b8', fontSize: '13px'
          }}>
            <History size={32} style={{ color: '#cbd5e1', display: 'block', margin: '0 auto 10px' }} />
            No transactions yet this session — complete a payment to see history here.
          </div>
        ) : (
          <div className="quick-pay-list">
            {recentTx.map((tx, i) => (
              <div key={tx.id || i} className="quick-pay-card" style={{
                borderLeft: `3px solid ${tx.status === 'SUCCESS' ? '#10b981' : '#ef4444'}`
              }}>
                <div className="quick-pay-avatar" style={{
                  backgroundColor: tx.status === 'SUCCESS' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                  color: tx.status === 'SUCCESS' ? '#10b981' : '#ef4444'
                }}>
                  {tx.service ? tx.service[0].toUpperCase() : '?'}
                </div>
                <h4 className="quick-pay-name">{tx.service}</h4>
                <p className="quick-pay-detail">{tx.provider}</p>
                <span className="quick-pay-tag" style={{
                  backgroundColor: tx.status === 'SUCCESS' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                  color: tx.status === 'SUCCESS' ? '#10b981' : '#ef4444'
                }}>
                  ₹{tx.amount}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info banner */}
      <div className="retail-info-banner animate-fade-in">
        <div className="retail-info-card">
          <Shield size={32} className="retail-info-icon" />
          <div>
            <h3 className="retail-info-title">100% Secure Settlements</h3>
            <p className="retail-info-desc">Licensed agent portal connected directly to National Payments Corporation of India (NPCI) networks.</p>
          </div>
        </div>
        <div className="retail-info-card">
          <Award size={32} className="retail-info-icon" />
          <div>
            <h3 className="retail-info-title">High Speed Booking</h3>
            <p className="retail-info-desc">Optimized API queries designed for rural broadband connectivity and high density ticket reservations.</p>
          </div>
        </div>
        <div className="retail-info-card">
          <Users size={32} className="retail-info-icon" />
          <div>
            <h3 className="retail-info-title">Merchant Friendly Dashboard</h3>
            <p className="retail-info-desc">Built for fast inputs, large click targets, minimal typing, and clear printable receipts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
