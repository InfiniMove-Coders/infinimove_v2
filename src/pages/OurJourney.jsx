import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductBadge from '../components/OurJourney/ProductBadge';
import Navbar from '../components/Navbar/Navbar';
import AnimatedVideoBackground from '../components/Background/AnimatedVideoBackground';
import Footer from '../components/Footer/Footer';
import OurBlogs from '../components/OurJourney/OurBlogs';

const OurJourney = () => {
  const navigate = useNavigate();

  const handleBlogCardClick = () => {
    navigate('/individualblog');
  };

  return (
    <>
      <div className="bg-black" style={{ overflowX: 'hidden' }}>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        {/* Hero Section */}
        <section
          className="
            relative bg-black flex items-center justify-center overflow-hidden rounded-[32px]
            w-full max-w-[1440px] h-[200px] md:h-[460px] lg:h-[500px] mx-auto mt-[78px]
            px-4 sm:px-8 md:px-16 lg:px-[150px]
          "
        >
          <AnimatedVideoBackground />

          <div
            className="
              relative z-10 flex flex-col items-center text-center
              w-full max-w-[1140px] gap-6
            "
          >
            <ProductBadge />

            {/* Title */}
            <h1
              className="
                font-urbanist text-[#F0F0F0] font-extrabold tracking-tight
                text-3xl sm:text-4xl md:text-5xl lg:text-[64px]
              "
            >
              Our Behind the Scenes
            </h1>
            {/* Buttons Row */}
            {/* Buttons */}
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-5 lg:gap-6 justify-center">
              <button
                className="
                px-3 sm:px-4 md:px-6 
                py-1.5 sm:py-2 md:py-3 
                bg-[#0038A0CC] border border-white rounded-full 
                text-white font-semibold 
                text-[10px] sm:text-xs md:text-sm lg:text-base
                hover:bg-blue-600 transition-all duration-300 backdrop-blur-sm
              "
              >
                Schedule a call Today
              </button>

              <button
                className="
                px-3 sm:px-4 md:px-6 
                py-1.5 sm:py-2 md:py-3 
                bg-black/20 border border-white rounded-full 
                text-white font-semibold 
                text-[10px] sm:text-xs md:text-sm lg:text-base
                hover:bg-black/30 transition-all duration-300 backdrop-blur-md
              "
              >
                Explore Our Work
              </button>
            </div>

          </div>
        </section>

        <div className="w-full bottom-0 flex flex-col pt-20 space-y-16">
          <div className='flex-shrink-0'>
            <OurBlogs onCardClick={handleBlogCardClick} />
          </div>
          <div className='flex-shrink-0'  >
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurJourney;
