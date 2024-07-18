const getPostsDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const postDetails = async ({ params }) => {
  const { id, userId, title, body } = await getPostsDetails(params.id);

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-screen-md w-full">
        <h2 className="mb-3 font-bold text-xl lg:text-2xl">Post: {id}</h2>
        <h2 className="mb-3 font-bold text-xl lg:text-2xl">
          User ID: {userId}
        </h2>
        <h3 className="text-lg lg:text-xl capitalize mb-2">{title}</h3>
        <p className="text-lg lg:text-xl">{body}</p>
      </div>
    </div>
  );
};

export default postDetails;
