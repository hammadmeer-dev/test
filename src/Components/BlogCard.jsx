import React from "react";
import Blog from "./Blog";

const BlogCard = ({title,desc}) => {
  return (
    <div className="md:max-w-64 mx-6 md:mx-0 h-89 overflow-hidden bg-primary mt-5 md:mt-0 pattern">
      <img
        src="/post-img.png"
        alt="Post Image"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 bg-[#238041] pattern h-38 capitalize">
        <h2 className="font-oswald font-medium text-xl">
          {title}
        </h2>
        <p className="font-roboto text-sm mt-2 ">
          {desc}
        </p>
      </div>
      <div className="bg-secondary pattern text-center py-3">
        <button className="text-white uppercase font-bold tracking-wide font-oswald">
            Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
