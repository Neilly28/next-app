import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { projects } from "../data/projects";

const Portfolio = () => {
  console.log(projects);

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
          </div>
          <div className={styles.box}>
            <Image
              className={styles.img}
              src={project.image}
              width={500}
              height={500}
              alt="hero"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
