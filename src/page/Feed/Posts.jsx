import React from "react";

const Posts = ({ posts }) => {
  if (!Array.isArray(posts)) {
    console.error("Posts data is not an array:", posts);
    return <p>No posts available</p>;
  }

  return (
    <div className="space-y-6 p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-4 border rounded shadow-md flex flex-col items-center"
        >
          <img
            src={post.imageUrl || "https://via.placeholder.com/150"}
            alt="Post Image"
            onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-bold text-center">{post.title}</h3>
          <p className="text-gray-600 text-center">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
