import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blog = [
    {
      title: "2019 NATIONAL CHAMPIONS CROWNED AT Reebok",
      desc: "Membership has its perks. Joining ADIDAS means you can race at your local tracks",
    },
    {
      title: "2019 NATIONAL CHAMPIONS",
      desc: "Membership has its perks",
    },
    {
      title: "2019 NATIONAL CHAMPIONS CROWNED AT Reebok",
      desc: "Membership has its perks. Joining ADIDAS means you can race at your local tracks",
    },
  ];
  return (
    <div className="flex item-center justify-center border-top-1">
    <div className="md:ml-20 md:mr-12 ml-0 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8">
      {
        blog.map((elem,i)=>(
          <div key={i}>
              <BlogCard title={elem?.title} desc={elem?.desc} />
            </div>
        ))
      }
    </div>
    </div>
  );
};

export default Blog;
