import React, { useState } from 'react';
import '../../style.css';
import donateImg from '../../images/donate-1.svg';
import { FaHeart, FaHandHoldingUsd, FaMobileAlt, FaRegSmile } from 'react-icons/fa';

const DonateSection = () => {
  const [selectedAmount, setSelectedAmount] = useState('');

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  return (
    <section className="donate-section-modern section-padding" style={{ fontFamily: 'Poppins, Arial, sans-serif', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', minHeight: 600 }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', padding: 40 }}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 text-center">
            <img src={donateImg} alt="Donate" style={{ maxWidth: 260, marginBottom: 24 }} />
            <h2 style={{ color: '#2e26b2', fontWeight: 700, fontSize: 32, marginBottom: 12 }}>Support a Brighter Future</h2>
            <p style={{ color: '#444', fontSize: 18, marginBottom: 16 }}>
              Your donation helps us provide education, food, and hope to underprivileged children. Every contribution makes a difference!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
              <span style={{ color: '#1c3252', fontWeight: 600, fontSize: 18 }}><FaHeart style={{ color: '#e63946', marginRight: 6 }} /> 24/7 Support</span>
              <span style={{ color: '#1c3252', fontWeight: 600, fontSize: 18 }}><FaMobileAlt style={{ color: '#2e26b2', marginRight: 6 }} /> Mobile Friendly</span>
            </div>
            <div style={{ background: '#f1f5fa', borderRadius: 12, padding: 16, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                <span style={{ color: '#2e26b2' }}>$7,560 <span style={{ fontWeight: 400, color: '#888', fontSize: 14 }}>Raised</span></span>
                <span style={{ color: '#1c3252' }}>$10,000 <span style={{ fontWeight: 400, color: '#888', fontSize: 14 }}>Goal</span></span>
              </div>
              <div style={{ background: '#e0e7ff', borderRadius: 8, height: 12, marginTop: 8, marginBottom: 4, overflow: 'hidden' }}>
                <div style={{ width: '75%', background: 'linear-gradient(90deg, #2e26b2 0%, #1c3252 100%)', height: '100%' }}></div>
              </div>
              <span style={{ color: '#2e26b2', fontWeight: 600, fontSize: 14 }}>75% of goal</span>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div style={{ background: '#f8fafc', borderRadius: 16, padding: 32, boxShadow: '0 2px 8px rgba(44,62,80,0.04)' }}>
              <h3 style={{ color: '#1c3252', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Choose Your Amount</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
                {[100, 200, 500, 1000, 2500].map(amount => (
                  <button
                    key={amount}
                    className={`amount-btn-modern${selectedAmount === `$${amount}` ? ' active' : ''}`}
                    style={{
                      background: selectedAmount === `$${amount}` ? '#2e26b2' : '#fff',
                      color: selectedAmount === `$${amount}` ? '#fff' : '#2e26b2',
                      border: '2px solid #2e26b2',
                      borderRadius: 8,
                      padding: '10px 24px',
                      fontWeight: 600,
                      fontSize: 18,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onClick={() => handleAmountClick(`$${amount}`)}
                  >
                    ${amount}
                  </button>
                ))}
                <input
                  type="text"
                  className="addAmount-value-modern"
                  placeholder="$Custom"
                  value={selectedAmount}
                  onChange={e => setSelectedAmount(e.target.value)}
                  style={{
                    border: '2px solid #2e26b2',
                    borderRadius: 8,
                    padding: '10px 16px',
                    fontSize: 18,
                    width: 120,
                  }}
                />
              </div>
              <button
                className="theme-btn-modern"
                style={{
                  background: 'linear-gradient(90deg, #2e26b2 0%, #1c3252 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '14px 36px',
                  fontWeight: 700,
                  fontSize: 20,
                  width: '100%',
                  marginTop: 10,
                  boxShadow: '0 2px 8px rgba(44,62,80,0.08)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}
              >
                <FaHandHoldingUsd style={{ fontSize: 22, marginRight: 6 }} /> Donate Now
              </button>
              <div style={{ marginTop: 18, color: '#888', fontSize: 15, textAlign: 'center' }}>
                <FaRegSmile style={{ color: '#2e26b2', marginRight: 6 }} />
                100% Secure &amp; Tax Exempt. Thank you for your kindness!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
