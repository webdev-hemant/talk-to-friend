import CallScreen from "./components/callscreen";
import Navbar from "./components/navbar/navbar";
import IphoneCallscreen from "./components/callscreen/iphoneCallScreen";
import "./App.css";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="App">
        <IphoneCallscreen />
        {/* <CallScreen /> */}
      </div>
    </div>
  );
};

export default App;
