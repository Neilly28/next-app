"use client";

import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  // take what you need from the context
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.iconToggle}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      >
        {mode === "light" ? "😎" : "😴"}
      </div>
    </div>
  );
};

export default DarkModeToggle;
