import React from "react";
import { MdCallEnd } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaMicrophoneSlash } from "react-icons/fa";
import styles from "./callButton.module.scss";

const CallButton = () => {
  const handleCameraClick = () => {
    alert("camera click!");
  };

  const handleCallClick = () => {
    alert("call click!");
  };

  const handleMicClick = () => {
    alert("mic click!");
  };

  return (
    <div className={styles.callBtnWrapper}>
      <ul className={styles.listContainer}>
        <li onClick={() => handleCameraClick()}>
          <BiSolidCameraMovie />
        </li>
        <li onClick={() => handleCallClick()}>
          <MdCallEnd />
        </li>
        <li onClick={() => handleMicClick()}>
          <FaMicrophoneSlash />
        </li>
      </ul>
    </div>
  );
};

export default CallButton;
