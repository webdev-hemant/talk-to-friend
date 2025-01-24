import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeModules from "./modules/homeModules";
import CallAcceptedModules from "./modules/callAcceptedModules";

const NotFound = () => {
  return <h2>Page Not Found</h2>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeModules />} />
        <Route path="/call" element={<CallAcceptedModules />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
