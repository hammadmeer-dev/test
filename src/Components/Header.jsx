import React from 'react'

const Header = () => {
  return (
    <div className='w-dvw bg-[#238041] pattern mb-0'>
        <div className='max-w-screen-xl h-24 mx-auto items-center flex justify-between'>
            <div>
                <h2 className='font-oswald text-5xl font-bold'>HOME PAGE</h2>
            </div>
            <div className='absolute right-0 h-24'>
                <div className='bg-gray-100 pattern h-full flex items-center justify-center px-8 lg:px-16' style={{width:'400px',clipPath:'polygon(6% 0%, 100% 0, 100% 100%, 0% 100%)'}}>
                    <div className='ml-16 text-center'>
                        <div className='text-green-700 text-sm  font-medium '>
                            PARTENERSHIP BY
                        </div>
                        <div className='flex items-center justify-center'>
                           <img src='/reebok-logo.png'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header