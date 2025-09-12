import React from 'react'

const Footer = () => {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto text-center pt-8'>
            <p className='text-xl font-oswald font-medium whitespace-break-spaces'>Our Tracks / Find Events /Track Map/Shop/ About Us</p>
        </div>
        <div className='max-w-screen-xl mx-auto justify-center text-center flex pt-2 gap-6'>
            <span>
                <img src='/facebook-icon.png'/>
            </span>
            <span>
                <img src='/twitter-icon.png'/>
            </span>
            <span>
                <img src='/instagram-icon.png'/>
            </span>
            <span>
                <img src='/linkedin-icon.png'/>
            </span>
            
        </div>
        <div className='max-w-screen-xl mx-auto text-center pt-2 pb-8'>
            <p className='font-montserrat font-light'>© copyright 2020 Adidas </p>
        </div>
    </div>
  )
}

export default Footer