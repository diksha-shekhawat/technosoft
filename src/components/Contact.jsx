import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MapPin as PinIcon, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 0 80px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '12px' }}>Merchant Support Help Desk</h2>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
        Are you a retailer looking to activate services or require support? Connect with our technical help desk.
      </p>

      <div className="contact-grid">
        {/* Left: Details & Map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="contact-card">
            <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Company Details</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin style={{ color: '#ff7043', marginTop: '2px', flexShrink: 0 }} size={20} />
                <div>
                  <strong>Office Address</strong>
                  <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                    Govindpura, Jhotwara, Jaipur, Rajasthan
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone style={{ color: '#00b4d8', flexShrink: 0 }} size={20} />
                <div>
                  <strong>Phone Support</strong>
                  <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px', fontStyle: 'italic' }}>
                    — (to be updated)
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail style={{ color: '#00b4d8', flexShrink: 0 }} size={20} />
                <div>
                  <strong>Email Queries</strong>
                  <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                    support@rmtechnosoft.in / partner@rmtechnosoft.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map mock */}
          <div className="contact-card" style={{ padding: '16px' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>Office Location — Jhotwara, Jaipur</h4>
            <div className="contact-map-mock">
              <div className="contact-map-grid"></div>
              <div style={{ position: 'absolute', top: '100px', left: 0, right: 0, height: '24px', backgroundColor: '#cbd5e1', transform: 'rotate(-5deg)' }}></div>
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '200px', width: '28px', backgroundColor: '#cbd5e1', transform: 'rotate(15deg)' }}></div>
              <div style={{ position: 'absolute', top: '80px', bottom: 0, left: '300px', right: 0, border: '4px dashed #94a3b8', borderRadius: '50% 0 0 50%' }}></div>
              <div className="contact-map-pin">
                <PinIcon size={32} fill="#ff7043" style={{ color: '#081426' }} />
              </div>
              <div style={{
                position: 'absolute', top: '55%', left: '52%',
                backgroundColor: '#081426', color: '#fff',
                padding: '4px 8px', borderRadius: '4px',
                fontSize: '10px', fontWeight: 'bold', border: '1px solid #00f5d4'
              }}>
                RM Technosoft · Jhotwara
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-card">
          <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Submit Partner Ticket</h3>

          {submitted ? (
            <div style={{
              backgroundColor: 'rgba(239,68,68,0.05)',
              border: '1px solid rgba(239,68,68,0.2)',
              padding: '28px 20px',
              borderRadius: '12px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}>
              <AlertCircle size={40} style={{ color: '#ef4444' }} />
              <h4 style={{ color: '#ef4444', fontSize: '16px' }}>Backend Not Connected</h4>
              <p style={{ fontSize: '13px', color: '#64748b', maxWidth: '280px' }}>
                The contact form backend is not configured yet. Please reach out directly via email at <strong>support@rmtechnosoft.in</strong>
              </p>
              <button className="btn btn-light" style={{ marginTop: '8px' }} onClick={() => setSubmitted(false)}>
                Try Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">First &amp; Last Name</label>
                <input
                  type="text" className="form-input" placeholder="Enter your name"
                  value={name} onChange={(e) => setName(e.target.value)} required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email" className="form-input" placeholder="Enter email address"
                  value={email} onChange={(e) => setEmail(e.target.value)} required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Merchant Phone Number</label>
                <input
                  type="tel" className="form-input" placeholder="Enter 10-digit mobile"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Query Description</label>
                <textarea
                  className="form-input" placeholder="Describe your query or request activation details"
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  style={{ height: '120px', resize: 'vertical' }} required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '8px' }}>
                <Send size={16} /> Submit Ticket
              </button>

              <p style={{ fontSize: '11px', color: '#94a3b8', textAlign: 'center', marginTop: '12px' }}>
                Note: Form submission will indicate backend connection status.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
