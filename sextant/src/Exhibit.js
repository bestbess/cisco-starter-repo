import React from 'react';

function Exhibit({ heading, children }) {
  return (
    <div className="exhibit">
      <h2>{heading}</h2>
      {children}
    </div>
  );
}

export default Exhibit;
