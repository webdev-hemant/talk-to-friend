import React from "react";
import { MdCallEnd } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaMicrophoneSlash } from "react-icons/fa";
import styles from "./callButton.module.scss";

const CallButton = () => {
  return (
    <div className={styles.callBtnWrapper}>
      <ul className={styles.listContainer}>
        <li>
          <BiSolidCameraMovie />
        </li>
        <li>
          <MdCallEnd />
        </li>
        <li>
          <FaMicrophoneSlash />
        </li>
      </ul>
    </div>
  );
};

export default CallButton;
