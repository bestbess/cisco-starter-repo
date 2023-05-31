import Exhibit from './Exhibit';
import './App.css';
import Banner from './Banner';
import IPAddressDisplay from './IPAddressDisplay';
import PacketLatencyDisplay from './PacketLatencyDisplay';

function App() {
  return (
    <div className="App">
      <Banner/>

      <Exhibit heading="Exhibit Heading ">
        {/* Child components */}
        <IPAddressDisplay ipAddressType={false} /> {/* Request IPv4 address */}
      <IPAddressDisplay ipAddressType={true} /> {/* Request IPv6 address */}
      </Exhibit>
      
      <PacketLatencyDisplay />
    </div>
  );
}

export default App;
