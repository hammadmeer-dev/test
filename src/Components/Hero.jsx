import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import HeroSlide from "./HeroSlide";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute hidden -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 text-6xl lg:flex item-center"
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
      className="absolute hidden -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 text-6xl text-bold lg:flex item-center"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
};
const Hero = ({setIsOpen,isOpen}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="max-w-dvw bg-image  ">
    <div className="max-w-dvw pattern bg-[rgba(1,44,31)]/70 ">
    <div className="mx-10 mb-10 lg:h-[550px] md:h-[400px] h-[550px] md:pb-20">
      <Slider {...settings}>
        <div className="flex">
          <HeroSlide  setIsOpen={setIsOpen}  IsOpen={isOpen}/>
        </div>
        <div className="flex">
          <HeroSlide setIsOpen={setIsOpen}  IsOpen={isOpen}/>
        </div>
        <div className="flex">
          <HeroSlide setIsOpen={setIsOpen}  IsOpen={isOpen}/>
        </div>
        <div className="flex">
          <HeroSlide setIsOpen={setIsOpen}  IsOpen={isOpen}/>
        </div>
      </Slider>
    </div>
    </div>
    </div>
  );
};

export default Hero;
