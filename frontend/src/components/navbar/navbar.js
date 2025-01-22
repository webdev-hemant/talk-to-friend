import React from "react";
import { MdOutlineGrain } from "react-icons/md";
import { GiCircleClaws } from "react-icons/gi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import googlePng from "../../images/google.png";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.iconWrapper}>
        <GiCircleClaws className={styles.icon} />
        {/* <MdOutlineGrain className={styles.icon} /> */}
        <header>
          <SignedOut>
            <SignInButton>
              <button className="hover:bg-slate-400 py-1 px-2 border border-blue-700 rounded flex items-center justify-center gap-2">
                <img
                  width={20}
                  height={20}
                  src={googlePng}
                  alt="google login"
                />
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
