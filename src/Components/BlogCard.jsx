import React from "react";
import Blog from "./Blog";

const BlogCard = ({title,desc}) => {
  return (
    <div className="md:max-w-64 mx-6 md:mx-0 lg:h-89 h-full  overflow-hidden bg-primary mt-5 md:mt-0 pattern">
      <img
        src="/post-img.png"
        alt="Post Image"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 bg-[#238041] pattern lg:h-38 h-54 capitalize">
        <h2 className="font-oswald lg:font-medium lg:text-xl text-lg">
          {title}
        </h2>
        <p className="font-roboto  text-sm mt-2 ">
          {desc}
        </p>
      </div>
      <div className="bg-secondary pattern h-auto text-center py-3">
        <button className="text-white uppercase font-bold tracking-wide font-oswald">
            Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
