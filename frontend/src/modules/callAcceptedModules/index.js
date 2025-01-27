import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import CallFace from "./callFace";
import { allMen } from "../../constants";
import CallButton from "./callButton";
import styles from "./callAcceptedModules.module.scss";

const CallAcceptedModules = () => {
  const [avatar, setAvatar] = useState(allMen["men1"]);

  const handleSetAvatar = (avatarName = "men2") => {
    setAvatar(allMen[avatarName]);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.callAcceptedWrapper}>
        <CallFace {...avatar} />
        <CallButton />
      </div>
    </>
  );
};

export default CallAcceptedModules;
