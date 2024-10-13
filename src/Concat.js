import React from 'react';

function Contact() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100vh', // Full viewport height
        backgroundColor: '#CCCCFF', // Light background color
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff', // Card background color
          borderRadius: '8px', // Rounded corners
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Shadow for depth
          padding: '30px', // Padding inside the card
          maxWidth: '400px', // Max width of the card
          textAlign: 'center', // Center text inside the card
        }}
      >
        <h2>Contact Us</h2>
        <p style={{ margin: '10px 0' }}>Email: info@vaibhavfitness.com</p>
        <p style={{ margin: '10px 0' }}>Phone: +91-1234567890</p>
        <p style={{ margin: '10px 0' }}>Location: 123 Fitness St, Mumbai, India</p>
      </div>
    </div>
  );
}

export default Contact;
