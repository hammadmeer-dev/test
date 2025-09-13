import React from 'react'

const Events = () => {
   const events = [
    { id: 1, title: "Show in USA", location: "USA" },
    { id: 2, title: "Adidas Show in USA", location: "USA" },
    { id: 3, title: "Adidas Show", location: "USA" },
    { id: 4, title: "Adidas in USA", location: "USA" },
   ]
  return (
    <div className='flex md:justify-start  justify-center mb-13'>
    <div className='md:w-[250px] w-full mx-6 bg-secondary pattern text-white'>
        <div className='px-4 py-2'>
            <h2 className='font-oswald font-bold text-xl uppercase'>
                Events
            </h2>
        </div>
        <div className='p-5 space-y-5 bg-[#238041] pattern'>
            {events.map((elem,index)=>(
                <div key={index} className='flex items-start gap-2'>
                    <div className=' font-oswald font-bold bg-white text-primary flex w-12 h-12 items-center justify-center'>
                        {elem.id}
                    </div>
                    <div>
                        <h3 className='underline'>
                            {elem.title}
                        </h3>
                        <p>{elem.location}</p>
                    </div>


                </div>
            ))
}
        </div> 
    </div>
    </div>
  )
}

export default Events