import React, { useState } from 'react';
import { Menu, X, Landmark, Search, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ currentView, setView, setSelectedService }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view) => {
    setView(view);
    setSelectedService(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo-wrapper" onClick={() => handleNav('home')}>
          <img src={logoImg} className="logo-img" alt="RM Technosoft Logo" />
          <span className="brand-name">RM Technosoft</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li 
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => handleNav('home')}
          >
            Home
          </li>
          <li 
            className="nav-link"
            onClick={() => {
              handleNav('home');
              setTimeout(() => {
                const element = document.getElementById('services-dashboard');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            Services
          </li>
          <li
            className={`nav-link ${currentView === 'tracker' ? 'active' : ''}`}
            onClick={() => handleNav('tracker')}
          >
            Track Status
          </li>
          <li
            className={`nav-link ${currentView === 'history' ? 'active' : ''}`}
            onClick={() => handleNav('history')}
          >
            History
          </li>
          <li 
            className={`nav-link ${currentView === 'about' ? 'active' : ''}`}
            onClick={() => handleNav('about')}
          >
            About
          </li>
          <li 
            className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}
            onClick={() => handleNav('contact')}
          >
            Contact
          </li>
          <li>
            <button className="btn nav-btn-portal" onClick={() => alert("CSC Retailer Portal Secure Login - Demonstration Mode")}>
              <ShieldCheck size={16} /> Retailer Login
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button 
          className="menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer animate-slide-up" style={{
          backgroundColor: '#081426',
          borderTop: '1px solid rgba(0, 245, 212, 0.1)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          boxShadow: '0 10px 15px rgba(0,0,0,0.3)',
          zIndex: 99
        }}>
          <div className="nav-link" style={{ padding: '8px 0' }} onClick={() => handleNav('home')}>Home</div>
          <div className="nav-link" style={{ padding: '8px 0' }} onClick={() => {
            handleNav('home');
            setTimeout(() => {
              const element = document.getElementById('services-dashboard');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}>Services</div>
          <div className="nav-link" style={{ padding: '8px 0' }} onClick={() => handleNav('tracker')}>Track Status</div>
          <div className="nav-link" style={{ padding: '8px 0' }} onClick={() => handleNav('history')}>History</div>
          <div className="nav-link" style={{ padding: '8px 0' }} onClick={() => handleNav('about')}>About</div>
          <div className="nav-link" style={{ padding: '8px 0' }} onClick={() => handleNav('contact')}>Contact</div>
          <button 
            className="btn nav-btn-portal" 
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
            onClick={() => alert("CSC Retailer Portal Secure Login - Demonstration Mode")}
          >
            <ShieldCheck size={16} /> Retailer Login
          </button>
        </div>
      )}
    </nav>
  );
}
