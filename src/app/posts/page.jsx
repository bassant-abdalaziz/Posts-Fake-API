import PostsClient from "../components/PostsClient";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Posts = async () => {
  const data = await getPosts();

  return <PostsClient data={data} />;
};

export default Posts;
