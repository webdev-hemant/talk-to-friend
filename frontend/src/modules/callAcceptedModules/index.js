import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import CallFace from "./callFace";
import { allMen } from "../../constants";
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
      </div>
    </>
  );
};

export default CallAcceptedModules;
