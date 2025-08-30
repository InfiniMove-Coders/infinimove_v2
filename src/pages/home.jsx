import React from 'react';
import { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';// Import your Navbar component
import ExpertiseSection from '../components/ExpertiseSection';
import ServicesSection from '../components/ServicesSection';
import InfiniMoveFooter from '../components/footer';


const AnimatedVideoBackground = ({ 
  videoSrc = "/clarity-stream.mp4",
  overlayOpacity = 0.2,
  showGradient = true 
}) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.play().catch(console.error);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base black background as fallback */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
      
      {/* Video background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {overlayOpacity > 0 && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ 
            opacity: overlayOpacity,
            mixBlendMode: 'multiply' 
          }}
        ></div>
      )}
      
      {showGradient && (
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.1) 100%)'
          }}
        ></div>
      )}
    </div>
  );
};


const ProductBadge = () => {
    return (
      <div>
        <div className="inline-flex items-center border border-gray-500 rounded-[36px] px-3 sm:px-4 py-2 max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <span className="font-light text-gray-300 font-urbanist capitalize">
              delivering end to end •
            </span>
            <span className="font-bold text-white font-urbanist capitalize">
              B2B | B2C | SAAS | SPA
            </span>
            <span className="font-light text-gray-300 font-urbanist capitalize">
              Products
            </span>
          </div>
        </div>
      </div>
    );
};
  
// Main Hero Content Component
const HeroContent = () => {
    return (
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto space-y-6 lg:space-y-7 text-center px-4"
      >
        <ProductBadge />
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight text-center capitalize font-urbanist max-w-4xl">
          We Build a Better Digital Future for Your Business
        </h1>
        
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 text-center capitalize font-medium font-roboto max-w-2xl">
          High-performance software, apps, and web platforms. Engineered for impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
        <button className="w-full sm:w-auto px-6 py-3 bg-blue-600/80 border border-white rounded-full text-white font-semibold text-sm sm:text-base hover:bg-blue-600 transition-all duration-300 backdrop-blur-sm">
          Schedule a call Today
        </button>
        
        <button className="w-full sm:w-auto px-6 py-3 bg-black/20 border border-white rounded-full text-white font-semibold text-sm sm:text-base hover:bg-black/30 transition-all duration-300 backdrop-blur-md">
          Explore Our Work
        </button>
      </div>
      </div>
    );
  };


// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-black flex items-center justify-center overflow-hidden w-full h-[400px] sm:h-[480px] lg:h-[530px]">
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
      <section className="w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Trusted By Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-urbanist tracking-tight">
              Trusted By
            </h2>
          </div>
 
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20"
        >
 
          <div className="flex items-center justify-center text-gray-200 text-base sm:text-lg font-bold hover:text-white transition-colors duration-300">
            ◆ logoipsum
          </div>
  
          <div className="flex items-center justify-center text-gray-200 text-base sm:text-lg font-bold hover:text-white transition-colors duration-300">
            ★ logoipsum
          </div>
  
          <div className="flex items-center justify-center text-gray-200 text-base sm:text-lg font-bold hover:text-white transition-colors duration-300">
            ▲ logoipsum
          </div>
  
          <div className="flex items-center justify-center text-gray-200 text-base sm:text-lg font-bold hover:text-white transition-colors duration-300">
            ● logoipsum
          </div>
  
          <div className="flex items-center justify-center text-gray-200 text-base sm:text-lg font-bold hover:text-white transition-colors duration-300">
            ◉ logoipsum
          </div>
        </div>
        </div>
      </section>
    );
}


 
const CompleteLandingPage = () => {
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
        {/* Footer Section */}
        <div className="flex-shrink-0">
          <InfiniMoveFooter />
        </div>
      </div>
    </div>
  );
};


export default CompleteLandingPage;