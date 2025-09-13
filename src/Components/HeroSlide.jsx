import React from 'react'

function HeroSlide({setIsOpen,IsOpen}) {
  return (
    <div><div className="flex flex-wrap justify-between md:p-2 text-white lg:mb-30 md:mb-0 mb-6 ">
            <div className="md:pl-2 w-full md:w-1/2 order-2 md:order-1 mt-8 sm:mt-4">
              <div className="w-full mx-auto my-auto  justify-center items-center h-full">
                <h2 className="md:text-5xl text-2xl font-bold md:font-extrabold font-oswald md:w-[450px]  mx-auto md:mt-20 lg:ml-42 ">GET READY FOR NEW ADIDAS BANDS</h2>
                <p className="font-normal font-roboto md:mt-8 lg:ml-42  ">
                  Adidas tracks all begin with a starting gate and end with a
                  finish line, but everything in between varies from track to
                  track. Because no two tracks are alike, this action sport
                  keeps you on your toes wherever you are racing.
                </p>
              </div>
            </div>
            <div className="order-1 w-full md:order-2 md:w-1/2 flex justify-center items-center md:pt-[60px] md:pl-[150px]">
              <img
                src="/video-thumbnail-img.png"
                alt="hero"
                className="md:h-[370] h-[200px] transform object-cover object-center mt-2 md:mt-0"
              />
              <div className='absolute flex justify-center items-center transform translate-y-2 translate-x-2'> 
                    <button className='w-[85px] h-[85px] bg-primary pattern text-white rounded-full shadow-lg justify-center text-center flex ' onClick={() => setIsOpen(true)}><img src='/play-icon.png' className='h-8 w-8 mx-auto my-auto'/></button>
              </div>
            </div>
            
          </div></div>
  )
}

export default HeroSlide