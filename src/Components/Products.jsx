import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 text-4xl flex item-center"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};
const SamplePrevArrow = (props) => {
    const { onClick } = props;
  return (
    <div
      className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 text-4xl flex item-center"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
};
const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
    {
      breakpoint: 1024, // tablets and below
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
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
    <div className="slider-container mx-10 my-10">
      <Slider {...settings}>
        <div className="flex">
          <img
            src="/thubnail-slider-img.png"
            className="mx-auto p-2 pattern shadow-lg"
          />
        </div>
        <div className="flex">
          <img
            src="/thubnail-slider-img.png"
            className="mx-auto p-2 pattern shadow-lg"
          />
        </div>
        <div className="flex">
          <img
            src="/thubnail-slider-img.png"
            className="mx-auto p-2 pattern shadow-lg"
          />
        </div>
        <div className="flex">
          <img
            src="/thubnail-slider-img.png"
            className="mx-auto p-2 pattern shadow-lg"
          />
        </div>
        <div className="flex">
          <img
            src="/thubnail-slider-img.png"
            className="mx-auto p-2 pattern shadow-lg"
          />
        </div>
        <div className="flex">
          <img
            src="/thubnail-slider-img.png"
            className="mx-auto p-2 pattern shadow-lg"
          />
        </div>
        <div className="flex">
          <img
            src="/thubnail-slider-img.png"
            className="mx-auto p-2 pattern shadow-lg"
          />
        </div>
        <div className="flex">
          <img
            src="/thubnail-slider-img.png"
            className="mx-auto p-2 pattern shadow-lg"
          />
        </div>
        <div className="flex">
          <img
            src="/thubnail-slider-img.png"
            className="mx-auto p-2 pattern shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Products;
