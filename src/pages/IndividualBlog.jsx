import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import OurBlogs from '../components/OurJourney/OurBlogs'; 

const IndividualBlog = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const blogData =
    state?.post || OurBlogs.find((blog) => blog.id.toString() === id);

  if (!blogData) {
    return (
      <div className="p-6 text-white text-center">
        <h2>Blog not found</h2>
        <p>No data available for blog ID: {id}</p>
      </div>
    );
  }

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
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#0464DA] text-[8px] sm:text-[1px] md:text-[14px] lg:text-[16px]">
              Blog
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
                <span>By {blogData.author}</span>
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
              <strong className="block mb-1 text-[7px] sm:text-[10px] md:text-[16px] lg:text-[18px]">
                Table of Contents
              </strong>
              <div className="leading-[2] text-[7px] sm:text-[10px] md:text-[14px] lg:text-[16px]">
                {blogData.toc?.map((item, idx) => (
                  <div key={idx}>{item}</div>
                ))}
              </div>
            </aside>

            {/* Blog Content */}
            <div className="text-white text-[7px] sm:text-[10px] md:text-[14px] lg:text-[16px] leading-relaxed">
              {blogData.content?.map((para, idx) => (
                <p key={idx} className="mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndividualBlog;
