import React from "react";
import Navbar from "../../components/navbar/navbar";
import IphoneCallscreen from "../../components/callscreen/iphoneCallScreen";

const HomeModules = () => {
  return (
    <div>
      <Navbar />
      <div className="App">
        <IphoneCallscreen />
      </div>
    </div>
  );
};

export default HomeModules;
