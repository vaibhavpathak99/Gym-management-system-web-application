import React from 'react';
import gymImage from './gymImage/pricep.png'

function Price() {
  return (
    <div
      style={{
        backgroundImage: `url(${gymImage})`,
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '120vh', // Full viewport height
        width: '100vw', // Full viewport width
        position: 'relative',
        overflowY: 'scroll', // Ensures scrolling works
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none',
      }}
    >
      {/* Content goes here */}
    </div>
  );
}

export default Price;
