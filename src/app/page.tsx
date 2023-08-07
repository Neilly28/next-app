import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Hi, I'm Neil, a Web Developer</h1>
        <p className={styles.desc}>I love creating web apps.</p>
        <button className={styles.btn}>Let's chat</button>
      </div>
      <div className={styles.item}>
        <Image
          className={styles.img}
          src="/hero.png"
          width={500}
          height={500}
          alt="hero"
        />
      </div>
    </div>
  );
}
