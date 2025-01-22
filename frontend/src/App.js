import CallScreen from "./components/callscreen";
import "./App.css";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="App">
        <CallScreen />
      </div>
    </div>
  );
}

export default App;
