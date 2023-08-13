import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { projects } from "../data/projects";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section>
      {projects.map((project, index) => (
        <div className={styles.container} key={index}>
          <div className={styles.text}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.list}>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={styles.tags}>
                  {tag}
                </span>
              ))}
            </div>
            <p className={styles.description}>{project.description}</p>
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
          <div className={styles.wrapper}>
            <Image
              className={styles.img}
              src={project.image}
              width={500}
              height={600}
              alt="hero"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
