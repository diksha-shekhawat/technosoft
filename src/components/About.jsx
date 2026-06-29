import React from 'react';
import logoImg from '../assets/logo.png';
import heroImg from '../assets/hero.png';
import { Award } from 'lucide-react';

export default function About() {
  return (
    <div className="container animate-fade-in" style={{ padding: '60px 0 80px' }}>
      <div className="about-grid">
        {/* Left Col: Text Content */}
        <div className="about-content">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ff7043', fontWeight: '600', fontSize: '14px', marginBottom: '12px' }}>
            <Award size={16} /> ABOUT RM TECHNOSOFT
          </div>
          <h2>India's Trusted Merchant Utility &amp; Fintech Platform</h2>
          <p>
            RM Technosoft is a specialized developer of transaction gateways and utility payment solutions designed to empower local shopkeepers, Common Service Center (CSC) retailers, and telecom recharge booths.
          </p>
          <p>
            We bridge the gap between complex banking backends and retail entrepreneurs by building high-density, accessible web dashboards that operate efficiently even under constrained cellular connections. Our design ethos prioritizes ease of input, minimal typing, and clear printable invoices.
          </p>
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#64748b' }}>
            <strong style={{ color: '#0f223a' }}>Registered Office:</strong> Govindpura, Jhotwara, Jaipur, Rajasthan
          </p>
        </div>

        {/* Right Col: Hero Image */}
        <div className="about-img-container">
          <div className="about-img-box" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f223a' }}>
            <img
              src={heroImg}
              alt="RM Technosoft Digital Services"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', opacity: 0.95 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
