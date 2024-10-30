import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeDisplay({ url, size, fgColor, bgColor, qrRef }) {
  return (
    <div 
      ref={qrRef}
      className="bg-white p-8 rounded-xl shadow-lg inline-block transition-all duration-300 hover:shadow-xl"
      style={{ backgroundColor: bgColor }}
    >
      <QRCode 
        value={url || 'https://stackblitz.com'} 
        size={size} 
        fgColor={fgColor}
        bgColor={bgColor}
        level="Q"
      />
    </div>
  );
}

export default QRCodeDisplay;