import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import { projects } from "../../../src/app/data/projects";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Lottie from "lottie-react";
import arrow from "../../../public/arrow.json";

const Portfolio = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.subtitle}>My recent work</h2>
        <Lottie
          animationData={arrow}
          loop={true}
          className={styles.arrow}
        />{" "}
      </div>

      {projects.map((project, index) => (
        <div id="portfolio" className={styles.container} key={index}>
          <div className={styles.text}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.list}>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.buttons}>
              <Link href={project.live} target="_blank">
                <button className={styles.live}>Visit the live site</button>
              </Link>
              {project.github ? (
                <Link href={project.github} target="_blank">
                  <button className={styles.github}>
                    <BsGithub /> <span>GitHub</span>
                  </button>
                </Link>
              ) : null}
            </div>
          </div>

          <Image
            className={styles.img}
            src={project.image}
            width={500}
            height={600}
            alt="hero"
          />
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
