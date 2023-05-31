import React, { useState, useEffect } from 'react';

function IPAddressDisplay({ ipAddressType }) {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      const response = await fetch(
        `https://api.ipify.org?format=json&${ipAddressType ? 'ipv6' : 'ipv4'}`
      );
      const data = await response.json();
      setIPAddress(data.ip);
    };

    fetchIPAddress();
  }, [ipAddressType]);

  return (
    <div>
      <h2>Your {ipAddressType ? 'IPv6' : 'IPv4'} Address:</h2>
      <p>{ipAddress}</p>
    </div>
  );
}

export default IPAddressDisplay;
