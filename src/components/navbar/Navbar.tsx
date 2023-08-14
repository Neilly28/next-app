"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const links = [
  // { id: 1, title: "Home", url: "/" },
  { id: 2, title: "portfolio", url: "/portfolio" },
  // { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "about", url: "/about" },
  { id: 6, title: "GitHub", url: "https://github.com/Neilly28" },
  {
    id: 7,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/neil-pilarca/",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        neily.dev
      </Link>
      <div className={styles.links}>
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <ScrollLink
            key={link.id}
            to={link.title.toLowerCase()}
            smooth={true}
            duration={1000}
            className={styles.link}
            target={
              link.title === "GitHub" || link.title === "Linkedin"
                ? "_blank"
                : ""
            }
          >
            {link.title === "GitHub" ? (
              <BsGithub />
            ) : link.title === "Linkedin" ? (
              <BsLinkedin />
            ) : (
              link.title
            )}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
