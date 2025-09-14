import { useState } from "react";
import Headline from "./Components/Headline";
import Navigation from "./Components/Navigation";
import Events from "./Components/Events";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import BannerShowCase from "./Components/BannerShowCase";
import CTA from "./Components/CTA";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Hero from "./Components/Hero";
import VideoPopup from "./Components/VideoPopup";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Headline />
      <Navigation />
      <Header />
      <VideoPopup setIsOpen={setIsOpen}  isOpen={isOpen} /> 
      <Hero setIsOpen={setIsOpen}  isOpen={isOpen} />
      <div className="max-w-screen-xl mx-auto items-center overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-9 md:col-span-8 col-span-12">
            <Products />
            
            <Blog />
            <BannerShowCase />
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-12 mt-10">
            <Events />
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}

export default App;
