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
      <div className="bg-black min-h-screen" style={{ overflowX: 'hidden' }}>
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
                height: '96px',
                fontFamily: 'Urbanist',
                fontWeight: 900,
                fontSize: '64px',
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
              Our Behind the Scenes
            </h1>
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
                  backgroundColor: '#00064B80',
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
                    fontFamily: 'Roboto',
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
                  backgroundColor: '#00064B80',
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
                    fontFamily: 'Roboto',
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
        {/* Pass click handler to OurBlogs */}
        <OurBlogs onCardClick={handleBlogCardClick} />
        <Footer />
      </div>
    </>
  );
};

export default OurJourney;
