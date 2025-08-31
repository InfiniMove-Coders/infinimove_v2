import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AnimatedVideoBackground from '../components/Background/AnimatedVideoBackground';
import TrustedBySection from '../components/Home/TrustedBySection';
import ProductBadge from '../components/Home/ProductBadge';
import Footer from '../components/Footer/Footer';
const Home = () => {
  return (
    <div className="bg-black min-h-screen" style={{ overflowX: 'hidden' }}>
      {/* Fixed Navbar at top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        className="relative bg-black flex items-center justify-center overflow-hidden rounded-[32px]"
        style={{
          width: '100%',
          maxWidth: '1440px',
          height: '530px',
          paddingLeft: '150px',
          paddingRight: '150px',
          boxSizing: 'border-box',
          margin: '0 auto',
          marginTop: '78px',
        }}
      >
        <AnimatedVideoBackground />

        <div
          className="relative z-10 flex flex-col items-center"
          style={{
            width: '100%',
            maxWidth: '1140px',
            height: '333px',
            gap: '28px',
            opacity: 1,
          }}
        >
          <ProductBadge />

          <h1
            style={{
              width: '100%',
              maxWidth: '907px',
              height: '192px',
              fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
              fontWeight: 700,
              fontSize: '54px',
              lineHeight: '150%',
              letterSpacing: '-2%',
              textAlign: 'center',
              verticalAlign: 'middle',
              textTransform: 'capitalize',
              color: '#FFFFFF',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
            }}
          >
            We Build a Better Digital Future for Your Business
          </h1>

          <p
            style={{
              width: '100%',
              maxWidth: '566px',
              height: '19px',
              fontFamily: 'Roboto, system-ui, -apple-system, sans-serif',
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '121%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              textTransform: 'capitalize',
              color: '#D6D6D6',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
            }}
          >
            High-performance software, apps, and web platforms. Engineered for impact.
          </p>

          <div
            style={{
              width: '393px',
              height: '50px',
              gap: '25px',
              opacity: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              style={{
                width: '220px',
                height: '50px',
                paddingTop: '10px',
                paddingRight: '14px',
                paddingBottom: '10px',
                paddingLeft: '14px',
                gap: '8px',
                opacity: 1,
                borderRadius: '32px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#FFFFFF',
                backgroundColor: '#0038A0CC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <span
                style={{
                  width: '192px',
                  height: '30px',
                  opacity: 1,
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                Schedule a call Today
              </span>
            </button>

            <button
              style={{
                width: '148px',
                height: '44px',
                paddingTop: '10px',
                paddingRight: '14px',
                paddingBottom: '10px',
                paddingLeft: '14px',
                gap: '8px',
                opacity: 1,
                borderRadius: '32px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#FFFFFF',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = '#FFFFFF')}
              onMouseLeave={(e) => (e.target.style.borderColor = '#FFFFFF')}
            >
              <span
                style={{
                  width: '192px',
                  height: '30px',
                  opacity: 1,
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Explore Our Work
              </span>
            </button>
          </div>
        </div>
      </section>
      <TrustedBySection />
      <Footer/>
    </div>
  );
};

export default Home;
