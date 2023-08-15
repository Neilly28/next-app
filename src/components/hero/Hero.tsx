"use client";

import styles from "./hero.module.css";
import Lottie from "lottie-react";
import hero from "../../../public/hero.json";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Hi! I&apos;m <span className={styles.name}>Neil,</span>
          <br /> a Web Developer👋
        </h1>
        <p className={styles.desc}>Have a project in mind?</p>
        <div className={styles.links}>
          <ScrollLink to="about" smooth={true} duration={1000}>
            <button className={styles.btn}>Let&apos;s chat</button>
          </ScrollLink>
          <Link href="https://github.com/Neilly28" target="_blank">
            <BsGithub className={styles.icon} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/neil-pilarca/"
            target="_blank"
          >
            <BsLinkedin className={styles.icon} />
          </Link>
        </div>
      </div>
      <Lottie animationData={hero} loop={true} className={styles.img} />
    </div>
  );
}
