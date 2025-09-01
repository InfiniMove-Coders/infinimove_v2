import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import AnimatedVideoBackground from '../components/Background/AnimatedVideoBackground';
import ProductBadge from '../components/About/ProductBadge';
import VisionStats from '../components/About/VisionStats';
import GuidingPrinciples from '../components/About/GuidingPrinciples';
import AboutForm from '../components/About/AboutForm';
import Footer from '../components/Footer/Footer';

const About = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
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
                height: '96px',
                fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
                fontWeight: 900,
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
              InfiniMove
            </h1>

            <p
              style={{
                width: '100%',
                maxWidth: '890px',
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
              We believe our work is a direct reflection of our capabilities. <br />
              We invite you to explore a selection of our projects to understand how we have enabled businesses like yours to thrive.
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
              {/* Buttons omitted for brevity */}
            </div>
          </div>
        </section>
        <VisionStats />
        <GuidingPrinciples />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'black',
          }}
        >
          {/* Mission content omitted for brevity */}
        </div>
      </div>
      {/* Contact form section with id */}
      <div id="contact">
        <AboutForm />
      </div>
      <Footer />
    </>
  );
};

export default About;
