import React from 'react';
import { Search } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function HeroSection({ searchTerm, setSearchTerm }) {
  return (
    <section className="hero">
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: '48px',
        padding: '60px 20px'
      }}>
        {/* Left: Text & Search */}
        <div className="animate-slide-up">
          <h1 className="hero-title">
            All-in-One Digital <span>Services &amp; Billing</span> Platform
          </h1>

          <p className="hero-subtitle">
            Secure, lightning-fast bill payments, recharges, money transfers, and travel bookings — designed for retailers, CSC center operators, and shop owners across India.
          </p>

          <div className="search-container">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                className="search-input"
                placeholder="Search for services (e.g. mobile, electricity, travel)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search services"
              />
            </div>
          </div>
        </div>

        {/* Right: Rocket Hero Image */}
        <div style={{
          flexShrink: 0,
          width: '220px',
          display: 'flex',
          justifyContent: 'center',
          animation: 'successCheck 3s ease-in-out infinite alternate'
        }}>
          <img
            src={heroImg}
            alt="RM Technosoft Digital Services"
            style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
          />
        </div>
      </div>
    </section>
  );
}
