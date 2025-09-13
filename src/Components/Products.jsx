import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SampleNextArrow = ({ onClick }) => (
  <div
    className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 text-4xl flex items-center justify-center cursor-pointer"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 text-4xl flex items-center justify-center cursor-pointer"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

const Products = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="absolute w-full">
        <ul className="flex justify-center gap-2 m-0 p-0 list-none">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "20px",
          height: "6px",
          background: "#d1d5db",
        }}
      />
    ),
  };

  return (
    <div className="slider-container lg:mx-10 md:mx-2  mx-2 my-10 relative">
      <Slider {...settings}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="flex">
            <img
              src="/thubnail-slider-img.png"
              className="mx-auto p-2 pattern shadow-lg  w-84 md:w-44"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
