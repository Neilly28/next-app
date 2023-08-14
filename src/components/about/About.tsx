import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";

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

import { Icon } from "@iconify/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
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
            <h2 className={styles.about}>About me 😎</h2>
            <p className={styles.text}>
              👋 Hey there, I&apos;m Neil – a frontend developer based in
              Berlin. I have a passion for crafting seamless user experiences
              tailored for clients across different industries. Let&apos;s bring
              your vision to life! 🚀
            </p>
          </div>

          <div className={styles.text}>
            <h2 className={styles.title}>Tech stack 🧑‍💻</h2>
            <div className={styles.stack}>
              <Icon icon="devicon:html5" />
              <Icon icon="devicon:css3" />
              <Icon icon="devicon:javascript" />
              <Icon icon="devicon:typescript" />
              <Icon icon="devicon:react" />
              <Icon icon="devicon:vuejs" />
              <Icon icon="devicon:nodejs" />
              <Icon icon="devicon:mongodb" />
              <Icon icon="devicon:tailwindcss" />
              <Icon icon="devicon:sass" />
            </div>
          </div>

          <div className={styles.text}>
            <h2 className={styles.title}>Contact 📱</h2>
            <p className={styles.text}>
              <Link
                className={styles.links}
                href="mailto:neilpilarca@gmail.com"
              >
                <span>neilpilarca@gmail.com</span>
              </Link>
              <Link className={styles.links} href="tel:+491623314389">
                <span>+491623314389</span>
              </Link>
              <Link
                className={styles.links}
                href="https://calendly.com/neilpilarca-fullstack-developer/meetme"
                target="_blank"
              >
                <span>Calendly</span>
              </Link>
              <Link
                className={styles.links}
                href="https://github.com/Neilly28"
                target="_blank"
              >
                <span>GitHub</span>
              </Link>
              <Link
                className={styles.links}
                href="https://www.linkedin.com/in/neil-pilarca/"
                target="_blank"
              >
                <span>LinkedIn</span>
              </Link>
              <Link
                className={styles.links}
                href=" https://drive.google.com/file/d/1N0epx02gBInJSO3QebV6MOInsw5UC2iY/view"
                target="_blank"
              >
                <span>Google Drive CV</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
