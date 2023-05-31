import React, { useState, useEffect } from 'react';
import Websocket from 'react-websocket';

function PacketLatencyDisplay() {
  const [latency, setLatency] = useState(null);
  const [connected, setConnected] = useState(false);

  const handleData = (data) => {
    const packet = JSON.parse(data);
    const packetTimestamp = packet.timestamp;
    const currentTimestamp = Date.now();
    const calculatedLatency = currentTimestamp - packetTimestamp;
    setLatency(calculatedLatency);
  };

  const handleOpen = () => {
    setConnected(true);
  };

  useEffect(() => {
    setConnected(false);
  }, []);

  return (
    <div>
      <h2>Packet Latency from Pylon:</h2>
      {connected ? (
        latency !== null ? (
          <p>{latency} ms</p>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <p>Connecting to Pylon...</p>
      )}
      <Websocket
        url="ws://localhost:55455"
        onMessage={handleData}
        onOpen={handleOpen}
      />
    </div>
  );
}

export default PacketLatencyDisplay;

