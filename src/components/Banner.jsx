import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      
      <div className={styles.bottom}>
        <p>Discover new things on SuperApp</p>
      </div>
      <img src='banner.png' alt="banner"/>
    </>
  );
};

export default Banner;