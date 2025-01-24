import React, { useEffect, useState } from "react";
import styles from "./CallScreen.module.scss";

const DEFAULT_RANGE = 4;
let RANGE_TIMEOUT = null;

const IphoneCallscreen = () => {
  const [isIncoming, setIsIncoming] = useState(true);
  const [range, setRange] = useState(DEFAULT_RANGE);

  const handleAccept = () => {
    alert("Call Accepted");
  };

  const handleDecline = () => {
    alert("Call Declined");
  };

  const handleRange = (e) => {
    const value = e.target.value;
    if (value > 3 && value < 97) {
      setRange(e.target.value);
    }
  };

  useEffect(() => {
    if (range >= 90) {
      handleAccept();
      setRange(DEFAULT_RANGE);
    } else {
      if (RANGE_TIMEOUT) clearTimeout(RANGE_TIMEOUT);
      RANGE_TIMEOUT = setTimeout(() => setRange(DEFAULT_RANGE), 500);
    }
  }, [range]);

  return (
    <div className={`text-center ${styles.iphoneCallscreenWrapper}`}>
      <h1 className="text-6xl py-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg">
        Start call with your friend!
      </h1>
      <div className="flex justify-center">
        <input
          style={{ borderRadius: "2rem" }}
          id="large-range"
          type="range"
          value={range}
          onChange={handleRange}
          className={styles.rangeSlider}
        />
      </div>
    </div>
  );
};

export default IphoneCallscreen;
