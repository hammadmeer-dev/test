import React from "react";
import Blog from "./Blog";

const BlogCard = ({title,desc}) => {
  return (
    <div className="max-w-64 h-89 overflow-hidden bg-primary">
      <img
        src="/post-img.png"
        alt="Post Image"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 bg-secondary h-38 capitalize">
        <h2 className="font-oswald font-medium">
          {title}
        </h2>
        <p className="font-roboto ">
          {desc}
        </p>
      </div>
      <div className="bg-primary text-center py-3">
        <button className="text-white uppercase font-bold tracking-wide font-oswald">
            Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
