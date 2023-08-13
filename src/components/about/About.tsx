import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoVuejs,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoSass,
} from "react-icons/bi";

const About = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src="/profilephoto.jpg"
        width={250}
        height={351}
        alt="hero"
      />

      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2 className={styles.title}>About me 😎</h2>
          <p className={styles.text}>
            Hello! My name is Neil, and I am a passionate full stack developer
            with a background in tech consulting and implementation. I
            specialize in creating customized solutions for clients across
            different industries, I have a proven track record of delivering
            projects, and I get things done. Let's work together to bring your
            vision to life!
          </p>
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>Tech stack</h2>
          <div className={styles.stack}>
            <BiLogoHtml5 />
            <BiLogoCss3 />
            <BiLogoJavascript />
            <BiLogoTypescript />
            <BiLogoReact />
            <BiLogoVuejs />
            <BiLogoNodejs />
            <BiLogoMongodb />
            <BiLogoTailwindCss />
            <BiLogoSass />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
