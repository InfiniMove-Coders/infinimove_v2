import React from 'react';
import { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ExpertiseSection from '../components/Home/ExpertiseSection';
import ServicesSection from '../components/Home/ServicesSection';
import Footer from '../components/Footer/Footer';
import ProductBadge from '../components/Home/ProductBadge';
import AnimatedVideoBackground from '../components/Background/AnimatedVideoBackground';
import FPCorousal from '../components/Home/FPCorousal';
import { TestimonialCarousel } from '../components/Home/Testimonials';
import MetricsSection from '../components/Home/Metrics';
import AboutForm from '../components/About/AboutForm';
import { useNavigate } from 'react-router-dom';

const HeroContent = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto
                 space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-7 text-center px-3 sm:px-4"
    >
      <ProductBadge />

      {/* Heading */}
      <h1
        className="
          text-xl sm:text-2xl md:text-3xl 
          lg:text-5xl xl:text-6xl 
          font-bold text-white leading-snug sm:leading-snug md:leading-tight lg:leading-tight 
          tracking-tight text-center capitalize font-urbanist max-w-4xl 
        "
      >
        We Build a Better Digital Future for Your Business
      </h1>

      {/* Subtext */}
      <p
        className="
          text-[7px] sm:text-[10px] md:text-base 
          lg:text-lg 
          text-gray-300 text-center capitalize font-medium font-roboto max-w-xl sm:max-w-2xl
        "
      >
        High-performance software, apps, and web platforms. Engineered for impact.
      </p>

      {/* Buttons */}
      <div className="flex flex-row gap-2 sm:gap-3 md:gap-5 lg:gap-6 w-full max-w-xs sm:max-w-md justify-center">
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
  );
};


// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-black flex items-center justify-center overflow-hidden w-full h-[200px] sm:h-[480px] lg:h-[530px]">
      {/* Full-screen video */}
      <AnimatedVideoBackground />

      {/* Centered Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8">
        <HeroContent />
      </div>
    </section>
  );
};

// Trusted By Section 
const TrustedBySection = () => {
  return (
    <section className="w-full lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Trusted By Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-[10px] sm:text-xs md:text-sm lg:text-3xl font-bold text-white font-urbanist tracking-tight">
            Trusted By
          </h2>
        </div>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 lg:gap-16 xl:gap-20">
          <div className="flex items-center justify-center text-gray-200 text-[8px] sm:text-[10px] md:text-xs lg:text-lg font-bold hover:text-white transition-colors duration-300">
            <span><img src="/companyImages/l&t.png" alt="" className='w-full h-3 md:h-6 lg:h-8'/></span>
          </div>

          <div className="flex items-center justify-center text-gray-200 text-[8px] sm:text-[10px] md:text-xs lg:text-lg font-bold hover:text-white transition-colors duration-300">
            <span><img src="/companyImages/mphasis.png" alt="" className='w-full h-3 md:h-6 lg:h-8'/></span>
          </div>

          <div className="flex items-center justify-center text-gray-200 text-[8px] sm:text-[10px] md:text-xs lg:text-lg font-bold hover:text-white transition-colors duration-300">
            <span><img src="/companyImages/oracle.png" alt="" className='w-full h-3 md:h-6 lg:h-8'/></span>
          </div>

          <div className="flex items-center justify-center text-gray-200 text-[8px] sm:text-[10px] md:text-xs lg:text-lg font-bold hover:text-white transition-colors duration-300">
            <span><img src="/companyImages/tcs.png" alt="" className='w-full h-3 md:h-6 lg:h-8'/></span>
          </div>

          <div className="flex items-center justify-center text-gray-200 text-[8px] sm:text-[10px] md:text-xs lg:text-lg font-bold hover:text-white transition-colors duration-300">
            <span><img src="/companyImages/Infosys.png" alt="" className='w-full h-3 md:h-6 lg:h-8'/></span>
          </div>

          <div className="flex items-center justify-center text-gray-200 text-[8px] sm:text-[10px] md:text-xs lg:text-lg font-bold hover:text-white transition-colors duration-300">
            <span><img src="/companyImages/wipro.png" alt="" className='w-full h-3 md:h-6 lg:h-8'/></span>
          </div>

          <div className="flex items-center justify-center text-gray-200 text-[8px] sm:text-[10px] md:text-xs lg:text-lg font-bold hover:text-white transition-colors duration-300">
            <span><img src="/companyImages/techmahindra.png" alt="" className='w-full h-3 md:h-6 lg:h-8'/></span>
          </div>

        </div>
      </div>
    </section>
  );
};



const Home = () => {
  return (
    <div className="bg-black min-h-screen">

      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="w-full bottom-0 flex flex-col pt-20 space-y-16"
      >
        {/* Hero Section */}
        <div className="flex-shrink-0">
          <HeroSection />
        </div>

        {/* Trusted By Section */}
        <div className="flex-shrink-0">
          <TrustedBySection />
        </div>

        {/* Expertise Section - Gradient Background */}
        <div className="flex-shrink-0">
          <ExpertiseSection />
        </div>

        {/* Services Section - Plain Background */}
        <div className="flex-shrink-0">
          <ServicesSection />
        </div>
        <div className="flex-shrink-0">
          <FPCorousal />
        </div>
        <div>
          <MetricsSection />
        </div>
        <div className='flex-shrink-0'>
          <TestimonialCarousel />
        </div>
        <div className='flex-shrink-0'>
          <AboutForm />
        </div>
        {/* Footer Section */}
        <div className="flex-shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
