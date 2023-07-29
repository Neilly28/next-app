import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>Turn your ideas into reality.</p>
        <button className={styles.btn}>See our works</button>
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
