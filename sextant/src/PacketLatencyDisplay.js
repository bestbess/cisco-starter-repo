import React, { useState } from 'react';
import Websocket from 'react-websocket';

function PacketLatencyDisplay() {
  const [latency, setLatency] = useState(null);

  const handleData = (data) => {
    const latencyData = JSON.parse(data);
    setLatency(latencyData.latency);
  };

  return (
    <div>
      <h2>Packet Latency from Pylon:</h2>
      {latency !== null ? <p>{latency} ms</p> : <p>Loading...</p>}
      <Websocket
        url="ws://localhost:55455"
        onMessage={handleData}
      />
    </div>
  );
}

export default PacketLatencyDisplay;
