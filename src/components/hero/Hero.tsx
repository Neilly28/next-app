"use client";

import styles from "./hero.module.css";
import Lottie from "lottie-react";
import hero from "../../../public/hero.json";
// import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Neil,</span>
          <br /> a Web Developer 👋🏻
        </h1>
        <p className={styles.desc}>Have a project in mind?</p>
        <div className={styles.links}>
          <ScrollLink to="about" smooth={true} duration={1000}>
            <button className={styles.live}>Let's chat</button>
          </ScrollLink>
          <ScrollLink to="portfolio" smooth={true} duration={1000}>
            <button className={styles.portfolio}>My portfolio</button>
          </ScrollLink>
        </div>
      </div>
      <div className={styles.hero}>
        <Lottie animationData={hero} loop={true} />
      </div>
    </div>
  );
}
