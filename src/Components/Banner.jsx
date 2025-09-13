import React from 'react'

const Banner = ({image,title,desc,reverse}) => {
    const clipPathreverse = reverse?"Polygon(0 0,100% 0,100% 100%,15% 100%)":"Polygon(0 0,100% 0,87% 100%,0% 100%)";
  return (
    <div className={`flex flex-col md:flex-row w-full md:px-0 px-6  ${reverse ? "md:flex-row-reverse":""}`}>
        <div className=' md:w-3/5 md:h-60 h-50  bg-[#238041] pattern'>
            <div className={`w-full h-full bg-cover bg-center pattern md:[clip-path:var(--clipPath)]`} style={{backgroundImage:`url(${image})`,"--clipPath":clipPathreverse}}/>
        </div>
         <div className='w-full lg:w-2/5 md:h-60 md:pt-0 pt-3 md:pl-0 pl-2 bg-[#238041] pattern text-white flex items-center justify-center'>
            <div className={`md:pr-10  ${reverse?"md:pl-10":""}`}>
           <h2 className='font-oswald text-capitalize text-xl font-bold mr-2 md:mr-0'>{title}</h2>
           <p className='font-roboto text-sm font-thin leading-[1.4] md:mb-0 md:pb-0 p-1 mb-1' >{desc}</p>
           </div>
        </div>
    </div>
  )
}

export default Banner