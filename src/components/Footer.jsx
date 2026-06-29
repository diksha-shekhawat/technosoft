import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer({ setView, setSelectedService }) {
  const handleNav = (view) => {
    setView(view);
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId) => {
    setView('service');
    setSelectedService(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer animate-fade-in">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Branding */}
          <div className="footer-info">
            <div className="footer-logo">
              <img src={logoImg} className="footer-logo-img" alt="RM Technosoft Logo" />
              <span className="footer-brand">RM Technosoft</span>
            </div>
            <p className="footer-desc">
              Empowering local retailers, CSC centers, and digital service providers across India with a trusted fintech utility toolkit.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h3 className="footer-col-title">Utility Services</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('mobile'); }}>Mobile Recharge</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('electricity'); }}>Electricity Bills</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('water'); }}>Water Bills</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('gas'); }}>LPG Gas Booking</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('broadband'); }}>Broadband Payments</a></li>
            </ul>
          </div>

          {/* Col 3: Finance & Travel */}
          <div>
            <h3 className="footer-col-title">Premium Services</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('money_transfer'); }}>Domestic Money Transfer</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('travel'); }}>Travel Booking</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('fastag'); }}>FASTag Recharge</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('dth'); }}>DTH Recharge</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('courier'); }}>Courier Booking</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="footer-col-title">Merchant Support</h3>
            <ul className="footer-links" style={{ color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={18} style={{ color: '#00f5d4', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '13px' }}>Govindpura, Jhotwara, Jaipur, Rajasthan</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={18} style={{ color: '#00f5d4', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontStyle: 'italic', color: '#64748b' }}>— (to be updated)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={18} style={{ color: '#00f5d4', flexShrink: 0 }} />
                <span style={{ fontSize: '13px' }}>support@rmtechnosoft.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RM Technosoft. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>About Us</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleNav('history'); }}>History</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Contact Us</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleNav('tracker'); }}>Status Tracker</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
