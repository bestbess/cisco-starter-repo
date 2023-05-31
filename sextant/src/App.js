import Exhibit from './Exhibit';
import './App.css';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner/>

      <Exhibit heading="Exhibit Heading ">
        {/* Child components */}
        <p>This is the content of the exhibit.</p>
        <img src="example.jpg" alt="Example" />
      </Exhibit>
      
    </div>
  );
}

export default App;
