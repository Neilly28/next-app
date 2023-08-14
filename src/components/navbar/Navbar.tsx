"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        neily.dev
      </Link>
      <div className={styles.links}>
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={1000}
          className={styles.link}
        >
          portfolio
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={1000}
          className={styles.link}
        >
          about
        </ScrollLink>
        <Link
          href="https://github.com/Neilly28"
          target="_blank"
          className={styles.link}
        >
          <BsGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/neil-pilarca/"
          target="_blank"
          className={styles.link}
        >
          <BsLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
