import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

async function getData() {
  // by default, fetch will automatically fetch and cache data indefinietley
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

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
          href={`/blog/${item.id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imgContainer}></div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
