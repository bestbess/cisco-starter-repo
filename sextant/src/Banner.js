import React from 'react';

function Banner() {
  const bannerStyle = {
    backgroundColor: 'blue',
    color: 'black',
    padding: '10px',
    textAlign: 'center',
    fontFamily: "Architect's Daughter, cursive",
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
  };

  return (
    <div className="banner" style={bannerStyle}>
      <h1 style={headingStyle}>Sextant</h1>
    </div>
  );
}

export default Banner;

