import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <a href="/">Home</a>
        <a href="/about-me">About me</a>
        <a href="/contact">Contact</a>
      </ul>
    </div>
  );
};
export default Navbar;
