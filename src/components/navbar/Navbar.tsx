"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link href="/" className="title">
        neily.dev
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <ScrollLink to="portfolio" smooth={true} duration={1000}>
            portfolio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={1000}>
            contact
          </ScrollLink>
        </li>
        <li>
          <Link href="https://github.com/Neilly28" target="_blank">
            <BsGithub />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/neil-pilarca/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
