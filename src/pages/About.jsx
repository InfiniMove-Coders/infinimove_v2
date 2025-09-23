import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import AnimatedVideoBackground from '../components/Background/AnimatedVideoBackground';
import ProductBadge from '../components/About/ProductBadge';
import VisionStats from '../components/About/VisionStats';
import GuidingPrinciples from '../components/About/GuidingPrinciples';
import AboutForm from '../components/About/AboutForm';
import Footer from '../components/Footer/Footer';

const About = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <div className="bg-black min-h-screen overflow-x-hidden">
        {/* Navbar */}
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
              InfiniMove
            </h1>

            {/* Subtitle */}
            <p
              className="
                text-gray-300 font-roboto font-medium
                text-[6px] sm:text-sm md:text-base lg:text-[15px]
                max-w-[890px] text-center leading-snug
              "
            >
              We believe our work is a direct reflection of our capabilities. <br />
              We invite you to explore a selection of our projects to
              understand how we have enabled businesses like yours to thrive.
            </p>

            {/* Buttons Row */}
            {/* Buttons */}
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-5 lg:gap-6 justify-center">
              <button onClick={() => navigate("/about#contact")}
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

              <button onClick={() => navigate("/projects")}
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
        <div className="flex items-center justify-center">
          <p
            className="
            font-urbanist 
            font-bold 
            text-center 
            text-[#ABABAB] 
            mt-3 mb-6 
            text-[8px] 
            sm:text-[12px] 
            md:text-[14px] 
            lg:text-[24px] 
            lg:w-[1000px]
            md:w-[800px]
            w-[400px]
    "
          >
            Infinimove Technologies Pvt Ltd is a technology company based in India, providing web application development, custom software solutions, and design services. The company focuses on delivering innovative and scalable digital products tailored to meet the unique needs of businesses. With a commitment to quality and customer satisfaction, Infinimove helps organizations enhance their digital presence and streamline operations through cutting-edge technology.
          </p>
        </div>


        <div className="w-full bottom-0 flex flex-col pt-20 space-y-16">
          <div className='flex-shrink-0'>
            <VisionStats />
          </div>
          <div className='flex-shrink-0'>
            <GuidingPrinciples />
          </div>
          {/* Contact Form */}
          <div className="flex-shrink-0">
            {/* Heading */}
            <h2 className="font-urbanist font-extrabold text-[#F0F0F0] text-center
                     text-[16px] sm:text-[20px] md:text-[28px] lg:text-[48px]">
              OUR MISSION
            </h2>

            {/* Subtitle */}
            <p className="font-urbanist font-bold text-center text-[#ABABAB] mt-3 mb-6
                    text-[8px] sm:text-[12px] md:text-[16px] lg:text-[24px] max-w-[1400px]">
              To be a recognized leader in the digital transformation of industries, defined by our <br />
              unwavering commitment to excellence and the success of our clients.
            </p>
            <div id="contact" className="flex-shrink-0">
              <AboutForm />
            </div>
          </div>
          <div className='flex-shrink-0'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
