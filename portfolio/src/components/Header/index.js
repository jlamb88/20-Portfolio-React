import React from 'react';
// Import React Router Link component for internal hyperlinks

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        {/* Use Link component to create a link that returns to the homepage on click */}
        <h1 className="m-0" style={{ fontSize: '3rem' }}>
          Joseph Lamb
        </h1>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Portfolio
        </p>
      </div>
    </header>
  );
};

export default Header;
