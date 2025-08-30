import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import AnimatedVideoBackground from '../components/Background/AnimatedVideoBackground';
import ProductBadge from '../components/About/ProductBadge';
import VisionStats from '../components/About/VisionStats';
import GuidingPrinciples from '../components/About/GuidingPrinciples';
import AboutForm from '../components/About/AboutForm';
import Footer from '../components/Footer/Footer';

const About = () => {
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
                            We believe our work is a direct reflection of our capabilities. <br></br>
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
                <VisionStats />
                <GuidingPrinciples />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "black"
                    }}
                >
                    {/* Heading */}
                    <h1
                        style={{
                            color: "#F0F0F0",
                            fontSize: "48px",
                            fontWeight: 900,
                            margin: 0,
                            letterSpacing: "1px"
                        }}
                    >
                        OUR MISSION
                    </h1>
                    {/* Subtitle */}
                    <p
                        style={{
                            color: "#ABABAB",
                            fontSize: "24px",
                            marginTop: "18px",
                            marginBottom: "40px",
                            fontWeight: 700,
                            textAlign: "center"
                        }}
                    >
                        To be a recognized leader in the digital transformation of industries, defined by our <br></br>
                        unwavering commitment to excellence and the success of our clients.
                    </p>
                </div>
            </div>
            <AboutForm/>
            <Footer/>
        </>
    )
}

export default About