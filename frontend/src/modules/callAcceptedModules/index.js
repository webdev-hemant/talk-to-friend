import React from "react";
import Navbar from "../../components/navbar/navbar";
import CallFace from "./callFace";
import styles from "./callAcceptedModules.module.scss";

const CallAcceptedModules = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.callAcceptedWrapper}>
        <CallFace />
      </div>
    </>
  );
};

export default CallAcceptedModules;
