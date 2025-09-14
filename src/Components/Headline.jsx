import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";
const Headline = () => {
  const [isOpen,setIsOpen] = useState(true);
  return (
    <div className={`md:font-bold font-thin text-sm md:w-full flex md:items-center bg-white text-black py-4 px-4 ${isOpen?"":"hidden"}`} >
  {/* Center message */}
  <div className="flex-1 md:text-center w-dvw">
    LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL / 
    <span className="text-[#217f40]"> WATCH NOW </span>
  </div>

  {/* End (cancel icon) */}
  <div className="mr-auto cursor-pointer text-[#217f40] text-xl" onClick={()=>setIsOpen(!isOpen)}>
    <MdCancel  />
  </div>
</div>

  )
}

export default Headline