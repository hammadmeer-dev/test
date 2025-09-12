import React from 'react'

const Banner = ({image,title,desc,reverse}) => {
    const clipPathreverse = reverse?"Polygon(0 0,100% 0,100% 100%,15% 100%)":"Polygon(0 0,100% 0,87% 100%,0% 100%)";
  return (
    <div className={`flex flex-col md:flex-row w-full ${reverse ? "md:flex-row-reverse":""}`}>
        <div className='w-3/5 md:h-60  bg-green-700 pattern'>
            <div className='w-full h-full bg-cover bg-center pattern' style={{backgroundImage:`url(${image})`,clipPath:clipPathreverse}}/>
        </div>
         <div className='w-2/5 h-60 bg-green-700 pattern text-white flex items-center justify-center'>
            <div className={`md:pr-10  ${reverse?"pl-10":""}`}>
           <h2 className='font-oswald text-capitalize text-xl font-md'>{title}</h2>
           <p className='font-roboto '>{desc}</p>
           </div>
        </div>
    </div>
  )
}

export default Banner