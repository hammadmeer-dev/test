import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import HeroSlide from "./HeroSlide";
import ModalVideo from 'react-modal-video';
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
    <div className="max-w-dvw bg-image">
    <div className="max-w-dvw pattern">
    <div className="mx-10 mb-10 lg:h-[550px] md:h-[400px] h-[550px] md:pb-20 bg-[`/bg-hero.png`]">
      <Slider {...settings}>
        <div className="flex">
          <HeroSlide  setIsOpen={setIsOpen}  IsOpen={isOpen}/>
        </div>
        <div className="flex">
          <HeroSlide/>
        </div>
        <div className="flex">
          <HeroSlide/>
        </div>
        <div className="flex">
          <HeroSlide/>
        </div>
      </Slider>
    </div>
    </div>
    </div>
  );
};

export default Hero;
