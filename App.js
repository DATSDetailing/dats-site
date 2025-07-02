
import React from 'react';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <img src="/dats_logo_web.png" alt="DATS Logo" style={{ width: '200px', margin: '0 auto', display: 'block' }} />
      <h1>DATS – Detailing and Tinting Solutions</h1>
      <p>Complete Mobile Detailing & Tinting Services in Palm Beach</p>

      <h2>Our Services</h2>
      <ul>
        <li>Complete Mobile Detailing</li>
        <li>Ceramic Coatings</li>
        <li>Paint Correction</li>
        <li>Headlight Restoration</li>
        <li>Scratch Removal</li>
        <li>Interior Shampoo</li>
        <li>Ceramic Glass Treatment</li>
        <li>Window Tinting</li>
        <li>Monthly Plans Available</li>
      </ul>

      <h2>Gallery</h2>
      <video controls width="100%" style={{ borderRadius: '12px', marginBottom: '1rem' }}>
        <source src="/tinting_clip_1.mp4" type="video/mp4" />
      </video>
      <video controls width="100%" style={{ borderRadius: '12px' }}>
        <source src="/detailing_clip_1.mp4" type="video/mp4" />
      </video>

      <h2>Contact</h2>
      <p><strong>Phone:</strong> <a href="tel:5613519917">561-351-9917</a></p>
      <p><strong>Service Area:</strong> Palm Beach, FL</p>

      <h2>Follow Us</h2>
      <a href="https://instagram.com/_dats93" target="_blank" rel="noopener noreferrer">Instagram</a> | 
      <a href="https://www.tiktok.com/@dats93" target="_blank" rel="noopener noreferrer"> TikTok</a>
    </div>
  );
}

export default App;
