import Link from "next/link";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <h2 className="mb-3 font-bold text-lg lg:text-xl">Post: {post.id}</h2>
      <Link href={`posts/${post.id}`}>
        <h3 className="lg:text-lg ">{post.title}</h3>
      </Link>
    </div>
  );
};
export default Post;
