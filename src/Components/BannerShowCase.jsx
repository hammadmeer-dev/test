import React from 'react'
import Banner from './Banner'

const BannerShowCase = () => {


  return (
    <div className='md:ml-20 md:mr-12 ml-0 pt-10 md:pb-10 '>
        <Banner image={`/zig-zag-img-1.png`} title="2019 NATIONAL CHAMPIONS CROWNED AT Reebok" desc="Membership has its perks. Joining ADIDAS means you can race at your local tracks" reverse={false} />
        <Banner image={`/zig-zag-img-2.png`} title="2019 NATIONAL CHAMPIONS CROWNED AT Reebok" desc="Membership has its perks. Joining ADIDAS means you can race at your local tracks" reverse={true} />
    </div>
  )
}

export default BannerShowCase