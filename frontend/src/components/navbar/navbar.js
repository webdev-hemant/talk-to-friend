import React from "react";
import { MdOutlineGrain } from "react-icons/md";
import { GiCircleClaws } from "react-icons/gi";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.iconWrapper}>
        <GiCircleClaws className={styles.icon} />
        <MdOutlineGrain className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
