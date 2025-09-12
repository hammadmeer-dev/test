import { useState } from 'react'
import Headline from './Components/Headline'
import Navigation from './Components/Navigation'
import Events from './Components/Events'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import BannerShowCase from './Components/BannerShowCase'
import CTA from './Components/CTA'
import Header from './Components/Header'
import Products from './Components/Products'
import Hero from './Components/Hero'
function App() {

  return (
    <>
    <Headline/>
    <Navigation/>
    <Header/>
    <Hero/>
    <div className='max-w-screen-xl mx-auto items-center'>
      <div className='grid grid-cols-12'>
        <div className='md:col-span-9 col-span-12 mt-10'>
          <Products/>
          <Blog/>
          <BannerShowCase/>
          
        </div>
         <div className='md:col-span-3 col-span-12 mt-10'>
          <Events/>
         </div>
      </div>
    </div>
    <CTA/>
    <Footer/>
    </>
  )
}

export default App
