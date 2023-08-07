import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  // by default, fetch will automatically fetch and cache data indefinietley
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  console.log({ response });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

const Blog = async () => {
  const data = await getData();
  console.log({ data });

  return (
    <div>
      {data.map((item: any) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item._id}
        >
          <div className={styles.imgContainer}></div>
          <div className={styles.content}>
            <Image
              src={item.image}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
