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
      className="flex flex-col items-center w-full max-w-[1440px] mx-auto pt-12 pb-10"
      style={{ background: 'black', minHeight: '777px' }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-8 w-full">
        <h2
          className="font-extrabold uppercase text-[48px] text-[#F0F0F0] tracking-tight"
          style={{
            fontFamily: 'Urbanist',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          }}
        >
          OUR BLOGS
        </h2>
        <h3
          className="font-bold text-[24px] text-center text-[#ABABAB]"
          style={{
            fontFamily: 'Urbanist, sans-serif',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          }}
        >
          Read till the end - to not miss anything
        </h3>
      </div>

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
              cursor: onCardClick ? 'pointer' : 'default',
            }}
            onClick={() => {
              if (onCardClick) onCardClick(idx);
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
  );
};

export default OurBlogs;
