import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProductBadge from '../components/Services/ProductBadge';
import AnimatedVideoBackground from '../components/Background/AnimatedVideoBackground';
import ServiceCards1 from '../components/Services/Services1';
import ServiceCards2 from '../components/Services/Services2';
import ServiceCards3 from '../components/Services/Services3';
import ServiceCards4 from '../components/Services/Services4';
import AboutForm from '../components/About/AboutForm';
import Footer from '../components/Footer/Footer';

const Services = () => {
    return (
        <div className="bg-black min-h-screen" style={{ overflowX: 'hidden' }}>
            {/* Fixed Navbar at top */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            {/* Hero Section */}
            <section
                className="
    relative bg-black flex items-center justify-center overflow-hidden rounded-[32px]
    w-full max-w-[1440px] h-[200px] sm:h-[360px] md:h-[460px] lg:h-[530px]
    mx-auto mt-[60px] sm:mt-[65px] md:mt-[70px] lg:mt-[78px]
    px-4 sm:px-8 md:px-16 lg:px-[150px]
  "
            >
                <AnimatedVideoBackground />

                <div
                    className="
      relative z-10 flex flex-col items-center text-center
      w-full max-w-[1140px] gap-3 sm:gap-4 md:gap-5 lg:gap-6
    "
                >
                    <ProductBadge />

                    {/* Title */}
                    <h1
                        className="
        font-urbanist text-[#F0F0F0] font-extrabold tracking-tight
        text-xl sm:text-3xl md:text-4xl lg:text-[54px]
      "
                    >
                        Our Services
                    </h1>

                    {/* Buttons */}
                    <div className="flex flex-row gap-2 sm:gap-3 md:gap-5 lg:gap-6 justify-center">
                        <button
                            className="
          px-3 sm:px-4 md:px-6 
          py-1.5 sm:py-2 md:py-3 
          bg-[#00064B80] border border-white rounded-full 
          text-white font-semibold 
          text-[9px] sm:text-xs md:text-sm lg:text-base
          hover:bg-blue-600 transition-all duration-300 backdrop-blur-sm
        "
                        >
                            Schedule a Call Today
                        </button>

                        <button
                            className="
          px-3 sm:px-4 md:px-6 
          py-1.5 sm:py-2 md:py-3 
          bg-[#00064B80] border border-white rounded-full 
          text-white font-semibold 
          text-[9px] sm:text-xs md:text-sm lg:text-base
          hover:bg-black/30 transition-all duration-300 backdrop-blur-md
        "
                        >
                            Explore Our Work
                        </button>
                    </div>
                </div>
            </section>
            <div className="w-full bottom-0 flex flex-col pt-20 space-y-16"
            >

                <div className='flex-shrink-0'>
                    <ServiceCards1 />
                </div>
                <div className='flex-shrink-0'>
                    <ServiceCards2 />
                </div>
                <div className='flex-shrink-0'>
                    <ServiceCards3 />
                </div>
                <div className='flex-shrink-0'>
                    <ServiceCards4 />
                </div>
                <div className='flex-shrink-0'>
                    <AboutForm />
                </div>
                <div className='flex-shrink-0'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Services;