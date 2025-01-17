import React from "react";
import { FaMicrophoneLines, FaMicrophoneLinesSlash } from "react-icons/fa6";
import "./micAnimation.css";

const MicrophoneIcon = ({ isMicActive = false, speechStatus, startMic }) => {
  return (
    <div className={`${isMicActive ? "active" : "nonActive"} microphone-icon`}>
      {isMicActive ? (
        <FaMicrophoneLines className="pulse" />
      ) : (
        <FaMicrophoneLinesSlash
          style={{ cursor: "pointer" }}
          onClick={() => startMic()}
        />
      )}
    </div>
  );
};

export default MicrophoneIcon;
