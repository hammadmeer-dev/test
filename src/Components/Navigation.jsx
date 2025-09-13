import React, { useState } from "react";
import Headline from "./Headline";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  const arr = [
    {
      name: "MEMBERSHIP",
      active: true,
    },
    {
      name: "ACCOUNT",
      active: false,
    },
  ];

  const nav = [
    {
      name: "OUR TRACKS",
      active: true,
    },
    {
      name: "FIND EVENTS",
      active: false,
    },
    {
      name: "TRACK MAPS",
      active: false,
    },
    {
      name: "SHOPS",
      active: false,
    },
    {
      name: "ABOUT US",
      active: false,
    },
  ];
  return (
    <>
      <div className="w-full  bg-[#012c1f] pattern">
        <div className="max-w-screen-xl mx-auto items-center flex justify-between p-3 md:p-0  ">
          <div>
            <img src="/logo.png" className="h-4 ml-2 md:h-8 "/>
          </div>
          <div className="block md:hidden pr-2" onClick={onMenuClick}>
            <img src="burger-icon.png" className="w-6"/>
          </div>
          <div className="md:block hidden p-2">
            {arr.map((elem, index) => (
              <button
                key={index}
                className={`mr-2 w-34 h-10 -skew-x-12 font-oswald font-semibold  ${
                  elem.active ? "bg-[#217f40]" : "bg-[#012c1f]"
                }`}
              >
                <span className="inline-block transform skew-x-12">
                {elem?.name}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="w-dvw grid grid-cols-2 md:hidden">
            {arr.map((elem, index) => (
              <button
                key={index}
                className={` col-span-1 h-10 font-oswald font-semibold ${index === 0? "border-r-2 border-white" : ""} ${
                  elem.active ? "bg-[#217f40]" : "bg-[#012c1f]"
                }`}
              >
                {elem?.name}
              </button>
            ))}
          </div>
      </div>
      <div className="w-full bg-[#08512d] pattern md:block hidden">
        <div className="max-w-screen-xl mx-auto items-center flex justify-between pr-30 ">
          <div className="h-full">
            {nav.map((elem, index) => (
              <button
                key={index}
                className={`w-34 h-16 -skew-x-12 font-oswald font-semibold hover:shadow-2xl ${
                  elem.active ? "bg-[#217f40] pattern" : ""
                }`}
              >
                <span className="inline-block transform skew-x-12"> {elem?.name}</span>
              </button>
            ))}
          </div>
          <div className="flex w-64 py-2 font-oswald font-bold items-center bg-[#012c1f] pattern ">
            <input
              className="transparent outline-none pl-4 w-full"
              type="text"
              placeholder="SEARCH"
            />
            <img className="pr-4" src="/search-icon.png" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full bg-secondary pattern overflow-hidden h-dvh   fixed top-0 bottom-0 left-0 z-50">
          <Headline />
          <div className="max-w-dvw flex justify-between p-3 bg-primary pattern">
          <div className="flex">
            <img src="/logo.png" className="h-4 ml-2" />
          </div>
           <div className="my-auto pr-2 md:hidden " onClick={onMenuClick}>
            <img src="burger-icon.png" className="w-6" />
          </div>
        
          </div>
                <div className="pattern max-w-dvw grid grid-cols-2 bg-primary pattern ">
            {arr.map((elem, index) => (
              <button
                key={index}
                className={` col-span-1 h-10 font-oswald font-semibold ${index === 0? "border-r-2 border-white" : ""} ${
                  elem.active ? "bg-[#217f40]" : "bg-[#012c1f]"
                }`}
              >
                {elem?.name}
              </button>
            ))}
          </div>
          <div className="w-dvw mt-3 px-3">
          <div className="flex w-auto  h-10 font-oswald font-bold overflow-hidden items-center bg-[#012c1f] pattern mx-auto">
            <input
              className="transparent outline-none pl-4 w-full"
              type="text"
              placeholder="SEARCH"
            />
            <img className="mr-3" src="/search-icon.png" />
          </div>
          </div>
          <div className="block">
            <div className="h-dvh mt-5">
            {nav.map((elem, index) => (
              <button
                key={index}
                className={`px-6 py-5 ml-5  font-oswald font-semibold block ${
                  elem.active ? "bg-[#217f40] pattern" : ""
                }`
            }
            style={{clipPath:'Polygon(0 0,100% 0,87% 100%,0% 100%)'}}
              >
                <span className=""> {elem?.name}</span>
              </button>
            ))}
          </div>
          </div>
          </div>
      )}
    </>
  );
};

export default Navigation;
