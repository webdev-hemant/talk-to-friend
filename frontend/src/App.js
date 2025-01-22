import CallScreen from "./components/callscreen";
import Navbar from "./components/navbar/navbar";
import "./App.css";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="App">
        <CallScreen />
      </div>
    </div>
  );
};

export default App;
