import React from 'react';

const OurBlogs = ({ onCardClick }) => {
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
    },
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
    },
  ];

  return (
    <section
      className="flex flex-col items-center w-full max-w-[1440px] mx-auto h-[200px] lg:h-[700px]"
      style={{ background: 'black', }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-8 w-full">
        <h2 className="uppercase text-urbanist font-extrabold text-[18px] text-[#F0F0F0] mb-1 tracking-widest sm:text-[36px] md:text-[42px]"
          
        >
          OUR BLOGS
        </h2>
        <h3
          className="text-[#ABABAB] text-[8px] font-medium sm:text-[14px] md:text-[16px] text-urbanist"
        >
          Read till the end - to not miss anything
        </h3>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-6 w-full px-3 sm:px-4">
        {blogPosts.slice().map((post, idx) => ( // ensure only 4 posts = 2 rows
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
            <div className="rounded-[16px] bg-[#000814] flex flex-row sm:flex-row items-center sm:items-stretch px-2 sm:px-5 py-4 sm:py-5 shadow-md min-h-[100px] sm:min-h-[260px] w-full">
              {/* Left content */}
              <div className="flex flex-col flex-1">
                {/* Tags */}
                <div className="flex mb-2 sm:mb-3 flex-wrap gap-1 lg:gap-2">
                  {post.tags.map((tag, i) => (
                    <div
                      key={i}
                    className="bg-[#000814] min-w-[12px] lg:h-[20px]  h-[7px] border border-[#FFE2E2] text-[#F0F0F0] text-[3px] sm:text-[12px] font-extrabold px-1 py-[0.5px] rounded-xl font-[Urbanist]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                {/* Title */}
                <h4 className="font-bold text-[7px] sm:text-[18px] md:text-[28px] text-[#FFFFFF] leading-snug mb-1 font-[Urbanist]">
                  {post.title}
                </h4>
                {/* Description */}
                <p className="text-[4px] sm:text-[13px] md:text-[14px] text-[#ABABAB] leading-snug mb-2 font-[Urbanist]">
                  {post.description}
                </p>
                {/* Author/Date */}
                <div className="flex items-center gap-1 mt-auto">
                  <img
                    src={post.avatar}
                    alt="Author"
                    className="w-[7px] h-[7px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] rounded-full object-cover"
                  />
                  <span className="text-[4px] sm:text-[13px] md:text-[14px] text-[#FFF] font-normal font-[Urbanist]">{`By ${post.author} | ${post.date}`}</span>
                </div>
              </div>
              {/* Right image */}
              <div className=" sm:mt-0 sm:ml-4 flex-shrink-0 flex items-center justify-center">
                <img
                  src={post.image}
                  alt="blog"
                  className="rounded-md w-[70px] h-[50px] sm:w-[200px] sm:h-[130px] md:w-[280.5px] md:h-[172px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlogs;
