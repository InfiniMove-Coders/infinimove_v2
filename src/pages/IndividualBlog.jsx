import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const blogPosts = [
    {
      tags: ['B2C', 'E Commerce'],
      title: 'AI-Powered Customer Service Revolution',
      description: 'Implemented conversational AI that reduced response time by 80% and increased customer satisfaction to 95%.',
      author: 'Jenny',
      date: '26 Apr 25',
      avatar: '/images/Testimony.png',
      image: '/images/FP1.png',
    },
    {
      tags: ['B2C', 'E Commerce'],
      title: 'AI-Powered Customer Service Revolution',
      description: 'Implemented conversational AI that reduced response time by 80% and increased customer satisfaction to 95%.',
      author: 'Jenny',
      date: '26 Apr 25',
      avatar: '/images/Testimony.png',
      image: '/images/FP1.png',
    },]
const IndividualBlog = () => {
    return (
        <>
            <div className="bg-black min-h-screen" style={{ overflowX: 'hidden' }}>
                {/* Fixed Navbar at top */}
                <div className="fixed top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>
                <div
                    style={{

                        marginTop: '20px',
                        width: '100%',
                        color: "#fff",
                        fontFamily: 'Urbanist',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "48px 0",

                    }}
                >
                    <div
                        style={{
                            maxWidth: "900px",
                            width: "100%",
                            background: "black",
                            borderRadius: "20px",
                            paddingTop: "48px",
                            display: "flex",
                            flexDirection: "row",
                            gap: "32px",
                        }}
                    >
                        {/* Main Content */}
                        <main style={{ flex: 1 }}>
                            {/* Blog Meta */}
                            <span style={{ color: "#0464DA", fontSize: "24px", marginBottom: "10px", marginRight: '5px' }}>
                                Blog
                            </span>
                            <span style={{ color: "#FFFFFF", fontSize: "24px", marginBottom: "10px" }}>
                                | 5 mins read
                            </span>

                            {/* Title */}
                            <h1
                                style={{
                                    width: '100%',
                                    fontSize: "48px",
                                    fontWeight: 900,
                                    marginTop: '20px',
                                    lineHeight: 1.17,
                                    letterSpacing: "-2px",
                                    color: "#fff",
                                }}
                            >
                                AI AGENT TESTING NEEDS TO BE AGENTIC TOO
                            </h1>

                            {/* Author and date */}
                            <div
                                style={{
                                    fontSize: "28px",
                                    color: "#dddddd",
                                    marginBottom: "26px",
                                    marginTop: "20px",
                                    alignItems: "center",
                                    gap: "6px",
                                }}

                            >
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                        <span><img src="/images/Testimony.png" alt="" style={{
                                            width: '40px',
                                            height: '40px',
                                            marginRight: '5px'
                                        }} /></span>
                                        <span>By Jenny</span>
                                        <span>|</span>
                                        <span>26 Apr 25</span>
                                    </div>
                                    <div>
                                        <span style={{ color: "#0464DA", fontSize: "36px", marginLeft: "14px", letterSpacing: "9px" }}>
                                            ●●●
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <img
                                src="/images/FP1.png"
                                alt="Meeting blog visual"
                                style={{
                                    width: "100%",
                                    height: "513px",
                                    borderRadius: "16px",
                                    marginBottom: "30px",
                                    objectFit: "cover",
                                    boxShadow: "0 2px 14px 2px rgba(0,0,0,0.09)",
                                }}
                            />
                            <div
                                style={{
                                    maxWidth: "900px",
                                    width: "100%",
                                    background: "radial-gradient(48.66% 48.66% at 50% 99.97%, #00064B 0%, rgba(0, 0, 0, 0) 100%), rgba(24, 26, 34, 0)",
                                    borderRadius: "20px",
                                    boxShadow: "0 8px 36px 4px #171B3838",
                                    padding: "48px",
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "32px",
                                    alignItems: "flex-start",
                                }}

                            >

                                {/* Sidebar */}
                                <aside
                                    style={{
                                        Width: "271px",
                                        background: "black",
                                        borderRadius: "14px",
                                        fontSize: "15px",
                                        color: "#fff",
                                        height: "fit-content",
                                        marginRight: '50px'
                                    }}
                                >
                                    <strong style={{ marginBottom: "18px", display: "block", fontSize: "27px", width: '221px' }}>
                                        Table of Contents
                                    </strong>
                                    <div style={{ lineHeight: "2.1" }}>
                                        <div>Intro</div>
                                        <div>Main</div>
                                        <div>Pros And Cons</div>
                                        <div>Conclusion</div>
                                    </div>
                                </aside>

                                {/* Blog Text */}
                                <div
                                    style={{
                                        width: '100%',
                                        color: "#fff",
                                        fontSize: "20px",
                                        fontWeight: '400',
                                        lineHeight: "1.7",
                                        textAlign: "left",
                                    }}
                                >
                                    As AI agents become the primary interface between enterprises and customers, ensuring their reliability becomes crucial. Organizations need confidence that their AI will perform consistently across every interaction, not just the expected scenarios they anticipated and planned for.
                                    <br />
                                    <br />
                                    After helping customers deploy hundreds of enterprise AI agents this year, we’ve discovered that traditional testing methods – designed for predictable, deterministic software – simply aren’t built for AI’s probabilistic nature. A single change can ripple through thousands of conversational scenarios in ways manual testing will never catch. Today’s AI agents require testing infrastructure that can systematically validate behaviors across thousands of potential conversation paths.
                                    <br />
                                    <br />
                                    At Yellow.ai, we’ve built Agentic AI-powered Automated Testing specifically for this new reality, to ensure your AI agents perform reliably across every scenario your customers might create.
                                    <br />
                                    <br />
                                    By Jenny | Marketing Specialist
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <section
                    className="flex flex-col items-center w-full max-w-[1440px] mx-auto pt-12 pb-10"
                    style={{ background: 'black',}}
                >
                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-8 w-full px-4">
                        {blogPosts.map((post, idx) => (
                            <div
                                key={idx}
                                className="rounded-[20px] p-[1.5px] mx-auto"
                                style={{
                                    padding: '0.81px',
                                    background:
                                        'linear-gradient(0deg, #FFFFFF 0%, #0038A0 41%, #8083A5 73%, #FFFFFF 100%)',
                                    boxSizing: 'border-box',
                                }}
                            >
                                <div className="rounded-[20px] bg-[#000814] flex flex-row items-center px-8 py-6 shadow-md min-h-[293px] w-full max-w-[645px]">
                                    {/* Left content */}
                                    <div className="flex flex-col flex-1">
                                        {/* Tags */}
                                        <div className="flex gap-2 mb-3">
                                            {post.tags.map((tag, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-[#000814] border border-[#FFE2E2] text-[#F0F0F0] text-[14px] font-extrabold px-3 py-1 rounded-[22px] font-[Urbanist] flex items-center"
                                                >
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                        {/* Title */}
                                        <h4 className="font-bold text-[28px] text-[#FFFFFF] leading-[34px] mb-2 font-[Urbanist]">
                                            {post.title}
                                        </h4>
                                        {/* Description */}
                                        <p className="text-[14px] text-[#ABABAB] leading-[17px] mb-6 font-[Urbanist]">
                                            {post.description}
                                        </p>
                                        {/* Author/Date */}
                                        <div className="flex items-center gap-2 mt-auto">
                                            <img
                                                src={post.avatar}
                                                alt="Author"
                                                className="w-[18px] h-[18px] rounded-full object-cover"
                                            />
                                            <span className="text-[14px] text-[#FFF] font-normal font-[Urbanist]">{`By ${post.author} | ${post.date}`}</span>
                                        </div>
                                    </div>
                                    {/* Right image */}
                                    <div className="ml-7 flex-shrink-0 flex items-center justify-center">
                                        <img
                                            src={post.image}
                                            alt="blog"
                                            className="rounded-[12px] w-[280.5px] h-[172px] object-cover"
                                            style={{ minWidth: '280.5px', minHeight: '172px' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default IndividualBlog;
