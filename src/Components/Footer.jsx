import React from "react";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto text-center pt-6">
        <p className="text-xl font-oswald font-normal text-center flex justify-center space-x-4">
          <span>OUR TRACKS</span>
          <span>/</span>
          <span>FIND EVENTS</span>
          <span>/</span>
          <span>TRACK MAP</span>
          <span>/</span>
          <span>SHOP</span>
          <span>/</span>
          <span>ABOUT US</span>
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto justify-center text-center flex mt-[18px] gap-6">
        <span className="flex" >
          <img src="/facebook-icon.png" className="justify-center" />
        </span>
        <span className="flex">
          <img src="/twitter-icon.png" className="justify-center" />
        </span>
        <span className="flex">
          <img src="/instagram-icon.png" className="justify-center" />
        </span>
        <span className="flex">
          <img src="/linkedin-icon.png" className="justify-center" />
        </span>
      </div>
      <div className="max-w-screen-xl mx-auto text-center pt-3 pb-8">
        <p className="font-montserrat text-md font-light">© copyright 2020 Adidas </p>
      </div>
    </div>
  );
};

export default Footer;
