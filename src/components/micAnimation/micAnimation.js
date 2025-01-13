import React from "react";
import { FaMicrophoneLines, FaMicrophoneLinesSlash } from "react-icons/fa6";
import "./micAnimation.css"; // Make sure to create this CSS file.

const MicrophoneIcon = ({ isMicActive = false }) => {
  return (
    <div
      className={`${isMicActive ? "active" : "nonActive"} microphone-icon`}
    >
      {isMicActive ? (
        <FaMicrophoneLines className="pulse" />
      ) : (
        <FaMicrophoneLinesSlash />
      )}
    </div>
  );
};

export default MicrophoneIcon;
