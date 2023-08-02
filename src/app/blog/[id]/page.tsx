import React from "react";
import { notFound } from "next/navigation";

async function getData(id: any) {
  // by default, fetch will automatically fetch and cache data indefinietley
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      // use no-store if data changes all the time
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return notFound();
  }

  return response.json();
}
const BlogPost = async ({ params }: any) => {
  const data = await getData(params.id);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default BlogPost;
