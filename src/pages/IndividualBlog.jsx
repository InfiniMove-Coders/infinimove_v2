import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const blogData = {
  title: 'AI AGENT TESTING NEEDS TO BE AGENTIC TOO',
  author: 'Jenny',
  date: '26 Apr 25',
  readTime: '5 mins read',
  heroImage: '/images/FP1.png',
  avatar: '/images/Testimony.png',
  toc: ['Intro', 'Main', 'Pros And Cons', 'Conclusion'],
  content: [
    `As AI agents become the primary interface between enterprises and customers, ensuring their reliability becomes crucial. Organizations need confidence that their AI will perform consistently across every interaction, not just the expected scenarios they anticipated and planned for.`,
    `After helping customers deploy hundreds of enterprise AI agents this year, we’ve discovered that traditional testing methods – designed for predictable, deterministic software – simply aren’t built for AI’s probabilistic nature. A single change can ripple through thousands of conversational scenarios in ways manual testing will never catch. Today’s AI agents require testing infrastructure that can systematically validate behaviors across thousands of potential conversation paths.`,
    `At Yellow.ai, we’ve built Agentic AI-powered Automated Testing specifically for this new reality, to ensure your AI agents perform reliably across every scenario your customers might create.`,
    `By Jenny | Marketing Specialist`,
  ],
};

const blogPosts = [
  {
    tags: ['B2C', 'E Commerce'],
    title: 'AI-Powered Customer Service Revolution',
    description:
      'Implemented conversational AI that reduced response time by 80% and increased customer satisfaction to 95%.',
    author: 'Jenny',
    date: '26 Apr 25',
    avatar: '/images/Testimony.png',
    image: '/images/FP1.png',
  },
  {
    tags: ['B2C', 'E Commerce'],
    title: 'AI-Powered Customer Service Revolution',
    description:
      'Implemented conversational AI that reduced response time by 80% and increased customer satisfaction to 95%.',
    author: 'Jenny',
    date: '26 Apr 25',
    avatar: '/images/Testimony.png',
    image: '/images/FP1.png',
  },
];

const IndividualBlog = ({ onCardClick }) => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Blog Container */}
      <div className="w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-0 md:mt-[40px] lg:mt-[60px]">
        <div className="max-w-[900px] w-full bg-black rounded-[20px] pt-12 flex flex-col gap-4">
          {/* Blog Meta */}
          <div className="flex flex-wrap items-center gap-2 ">
            <span className="text-[#0464DA] text-[8px] sm:text-[1px] md:text-[14px] lg:text-[16px]">
              Blog
            </span>
            <span className="text-white text-[8px] sm:text-[20px] md:text-[14px] lg:text-[16px]">
              | {blogData.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-white font-black leading-tight tracking-tight text-[14px] sm:text-[14px] md:text-[24px] lg:text-[36px]">
            {blogData.title}
          </h1>

          {/* Author & Date */}
          <div className="text-[#dddddd] text-[12px] sm:text-[18px] md:text-[10px] lg:text-[12px]">
            <div className="w-full flex sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <img
                  src={blogData.avatar}
                  alt="Author"
                  className="lg:w-[16px] lg:h-[16px] w-[12px] h-[12px] sm:w-[12px] sm:h-[12px] md:w-[25px] md:h-[25px] rounded-full"
                />
                <span>By {blogData.author}</span>
                <span>|</span>
                <span>{blogData.date}</span>
              </div>
              <div className="text-[#0464DA] text-[12px] sm:text-[12px] md:text-[25px] lg:text-[16px] tracking-[6px] lg:tracking-[9px]">
                ●●●
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <img
            src={blogData.heroImage}
            alt="Blog visual"
            className="w-full rounded-[16px] object-cover mb-4 shadow-md h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px]"
          />

          {/* Blog Body + TOC */}
          <div className="w-full bg-[radial-gradient(48.66%_48.66%_at_50%_99.97%,#00064B_0%,rgba(0,0,0,0)_100%),rgba(24,26,34,0)] rounded-[20px] shadow-[0_8px_36px_4px_#171B3838] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-row gap-6 lg:gap-8">
            {/* Sidebar TOC */}
            <aside className="w-full sm:w-[100px] md:w-[220px] lg:w-[271px] bg-black rounded-[14px] text-white text-[14px] sm:text-[15px] mb-4 md:mb-0">
              <strong className="block mb-1 text-[7px] sm:text-[10px] md:text-[16px] lg:text-[20px]">
                Table of Contents
              </strong>
              <div className="leading-[2] text-[7px] sm:text-[10px] md:text-[16px] lg:text-[20px]">
                {blogData.toc.map((item, idx) => (
                  <div key={idx}>{item}</div>
                ))}
              </div>
            </aside>

            {/* Blog Content */}
            <div className=" text-white text-[7px] sm:text-[10px] md:text-[14px] lg:text-[16px] leading-relaxed">
              {blogData.content.map((para, idx) => (
                <p key={idx} className="mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <section className="w-full max-w-[1440px] mx-auto bg-black">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-6 w-full px-3 sm:px-4">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="rounded-[16px] p-[1.5px] mx-auto w-full"
              style={{
                padding: '0.81px',
                background:
                  'linear-gradient(0deg, #FFFFFF 0%, #0038A0 41%, #8083A5 73%, #FFFFFF 100%)',
                boxSizing: 'border-box',
                cursor: onCardClick ? 'pointer' : 'default',
              }}
              onClick={() => {
                if (onCardClick) onCardClick(idx);
              }}
            >
              <div className="rounded-[16px] bg-[#000814] flex flex-row items-center sm:items-stretch px-2 sm:px-5 py-4 sm:py-5 shadow-md min-h-[100px] sm:min-h-[260px] md:min-h-[190px] w-full">
                {/* Left Content */}
                <div className="flex flex-col flex-1">
                  {/* Tags */}
                  <div className="flex mb-2 sm:mb-3 flex-wrap gap-1 lg:gap-2">
                    {post.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="bg-[#000814] min-w-[12px] md:h-[15px] lg:h-[20px] h-[7px] border border-[#FFE2E2] text-[#F0F0F0] text-[3px] sm:text-[12px] md:text-[10px] font-extrabold px-1 py-[0.5px] rounded-xl font-[Urbanist]"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  {/* Title */}
                  <h4 className="font-bold text-[7px] sm:text-[18px] md:text-[10px] lg:text-[30px] text-[#FFFFFF] leading-snug mb-1 font-[Urbanist]">
                    {post.title}
                  </h4>
                  {/* Description */}
                  <p className="text-[4px] sm:text-[13px] md:text-[8px] lg:text-[15px] text-[#ABABAB] leading-snug mb-2 font-[Urbanist]">
                    {post.description}
                  </p>
                  {/* Author/Date */}
                  <div className="flex items-center gap-1 mt-auto">
                    <img
                      src={post.avatar}
                      alt="Author"
                      className="w-[7px] h-[7px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:h-[20px] lg:w-[20px] rounded-full object-cover"
                    />
                    <span className="text-[4px] sm:text-[13px] md:text-[10px] text-[#FFF] font-normal font-[Urbanist]">{`By ${post.author} | ${post.date}`}</span>
                  </div>
                </div>
                {/* Right Image */}
                <div className="sm:mt-0 sm:ml-4 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={post.image}
                    alt="blog"
                    className="rounded-md w-[70px] h-[50px] sm:w-[200px] sm:h-[130px] md:w-[180px] md:h-[110px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndividualBlog;
