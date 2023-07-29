import React from "react";

async function getData() {
  // by default, fetch will automatically fetch and cache data indefinietley
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

const BlogPost = async ({ params }: any) => {
  const data = await getData(params.id);
  return <div>BlogPost</div>;
};

export default BlogPost;
