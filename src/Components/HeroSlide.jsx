import React from 'react'

function HeroSlide() {
  return (
    <div><div className="flex flex-wrap justify-between p-2 text-white ">
            <div className="pl-2 w-full md:w-1/2 order-2 md:order-1 mt-8 sm:mt-4">
              <div className="w-full mx-auto my-auto  justify-center items-center h-full">
                <h2 className="text-5xl font-extrabold font-oswald md:w-[450px]  mx-auto md:mt-20 md:ml-42 ">GET READY FOR NEW ADIDAS BANDS</h2>
                <p className="font-normal font-roboto md:mt-8 md:ml-42 ">
                  Adidas tracks all begin with a starting gate and end with a
                  finish line, but everything in between varies from track to
                  track. Because no two tracks are alike, this action sport
                  keeps you on your toes wherever you are racing.
                </p>
              </div>
            </div>
            <div className="order-1 w-full md:order-2 md:w-1/2 flex justify-center items-center pt-[60px] pl-[150px]">
              <img
                src="/video-thumbnail-img.png"
                alt="hero"
                className="md:h-[370] h-full transform "
              />
              <div className='absolute flex justify-center items-center transform translate-y-2 translate-x-2'> 
                    <button className='w-[85px] h-[85px] bg-black text-white rounded-full shadow-lg justify-center text-center flex'><img src='/play-icon.png' className='h-8 w-8 mx-auto my-auto'/></button>
              </div>
            </div>
            
          </div></div>
  )
}

export default HeroSlide