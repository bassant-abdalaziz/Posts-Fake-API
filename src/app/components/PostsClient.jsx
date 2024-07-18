"use client";
import { useState } from "react";
import Post from "@/app/components/Post";
import Pagination from "../components/pagination";

const PostsClient = ({ data }) => {
  //Pagination
  const items = 20;
  const [current, setCurrent] = useState(1);
  const numPages = Math.ceil(data.length / items);

  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;

  const DataPerPage = data.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {DataPerPage.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <Pagination
        numPages={numPages}
        current={current}
        setCurrent={setCurrent}
      />
    </>
  );
};

export default PostsClient;
