"use client";

import styles from "./hero.module.css";
import Lottie from "lottie-react";
import hero from "../../../public/hero.json";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Neil,</span>
          <br /> a Web Developer 👋🏻
        </h1>
        <p className={styles.desc}>
          Have a project in mind?{" "}
          <Link href="/" className={styles.chat}>
            Let's chat
          </Link>
        </p>
        {/* <div className={styles.links}>
          <Link href="/" target="_blank">
            <button className={styles.live}>Let's chat</button>
          </Link>
          <Link href="/" target="_blank">
            <button className={styles.portfolio}>My portfolio</button>
          </Link>
        </div> */}
      </div>
      <div className={styles.hero}>
        <Lottie animationData={hero} loop={true} />
        {/* <Image
          className={styles.img}
          src="/hero.png"
          width={500}
          height={500}
          alt="hero"
        /> */}
      </div>
    </div>
  );
}
