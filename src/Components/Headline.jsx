import React from 'react'
import { MdCancel } from "react-icons/md";
const Headline = () => {
  return (
    <div className="md:font-bold font-thin text-sm md:w-full flex md:items-center bg-white text-black py-4 px-4">
  {/* Center message */}
  <div className="flex-1 md:text-center w-dvw">
    LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL / 
    <span className="text-[#217f40]"> WATCH NOW </span>
  </div>

  {/* End (cancel icon) */}
  <div className="mr-auto cursor-pointer text-[#217f40] text-xl">
    <MdCancel  />
  </div>
</div>

  )
}

export default Headline