"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import hero from "../../public/hero.json";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Hi, I'm Neil, <br />a Web Developer
        </h1>
        <p className={styles.desc}>Have a project in mind?</p>
        <div className={styles.links}>
          <Link href="/" target="_blank">
            <button className={styles.live}>Let's chat</button>
          </Link>
          <Link href="/" target="_blank">
            <button className={styles.portfolio}>My portfolio</button>
          </Link>
        </div>
      </div>
      <div className={styles.item}>
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
