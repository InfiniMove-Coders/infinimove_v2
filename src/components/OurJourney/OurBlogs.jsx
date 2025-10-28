import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurBlogs = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      tags: ['B2B', 'Web Development'],
      title: 'We Build and Deliver Web Applications',
      description:
        'Designed and delivered scalable, high-performance web applications tailored to client needs, ensuring exceptional quality, user experience, and business impact.',
      author: 'Tech Team',
      avatar: '/infinimove_v2/images/Testimony.png',
      image: '/infinimove_v2/images/Web.png',
      heroImage: '/infinimove_v2/images/Web.png',
      toc: ['Intro', 'Process', 'Results', 'Conclusion'],
      content: [
        'We analyze client requirements in detail before starting the development process, ensuring all objectives are captured and documented.',
        'Our team designs scalable and high-performance architecture tailored to business needs, focusing on modularity, maintainability, and future growth.',
        'Implementation follows best practices, testing, and quality assurance, including code reviews, unit testing, and automated CI/CD pipelines.',
        'We integrate modern UI/UX principles to ensure intuitive and engaging user experiences that meet end-user expectations.',
        'Security and compliance are key priorities, with data protection measures implemented throughout the application lifecycle.',
        'Post-deployment, we provide ongoing monitoring, support, and iterative improvements based on user feedback and analytics.',
        'We deliver projects that maximize user experience and business impact, creating measurable ROI for clients.',
        'Our approach promotes collaboration with clients at every stage, ensuring transparency and alignment with their strategic goals.',
      ],
    },
    {
      id: 2,
      tags: ['Innovation', 'Hackathons'],
      title: 'We Host Hackathons for Innovation & Collaboration',
      description:
        'Organized large-scale hackathons that bring together innovators, developers, and entrepreneurs to solve real-world challenges with creativity and technology.',
      author: 'Innovation Team',
      avatar: '/infinimove_v2/images/Testimony.png',
      image: '/infinimove_v2/images/Hackathon.svg',
      heroImage: '/infinimove_v2/images/Hackathon.svg',
      toc: ['Overview', 'Highlights', 'Impact'],
      content: [
        'We organize hackathons to foster innovation and collaboration among participants from diverse backgrounds.',
        'Events include workshops, mentorship sessions, and networking opportunities with industry leaders.',
        'Participants develop creative solutions to real-world problems, leveraging emerging technologies like AI, blockchain, and IoT.',
        'Hackathons promote cross-functional teamwork, allowing participants to learn from each other and share unique perspectives.',
        'Our evaluation process focuses not only on technical execution but also on creativity, feasibility, and potential impact.',
        'Winners receive recognition, funding opportunities, and access to incubation programs for further development.',
        'These events strengthen community engagement and help identify future talent and innovative solutions for our organization.',
        'Overall, hackathons are a catalyst for ideation, experimentation, and driving meaningful innovation in the tech ecosystem.',
      ],
    },
    {
      id: 3,
      tags: ['Startup', 'India'],
      title: 'Officially Registered in STARTUP INDIA',
      description:
        'Proudly registered in India, our startup operates with compliance and credibility, enabling us to innovate, collaborate, and scale with trust and recognition.',
      author: 'Founding Team',
      avatar: '/infinimove_v2/images/Testimony.png',
      image: '/infinimove_v2/images/StartUp.svg',
      heroImage: '/infinimove_v2/images/StartUp.svg',
      toc: ['Introduction', 'Why Registration Matters', 'Impact on Growth', 'Future Vision'],
      content: [
        'We are proud to announce that our startup is officially registered in India, marking an important milestone in our journey.',
        'Being registered ensures compliance, credibility, and trust, allowing us to operate transparently and confidently within the Indian startup ecosystem.',
        'This recognition gives us access to opportunities, industry collaborations, and resources that will accelerate our growth.',
        'It enables us to participate in government initiatives, apply for grants, and secure funding from investors.',
        'Registration protects our intellectual property and brand identity, providing legal safeguards for our innovations.',
        'We can now expand our operations nationally and internationally with credibility and recognition.',
        'The registration process has strengthened our internal processes and governance, ensuring long-term sustainability.',
        'Looking ahead, we are committed to scaling innovations, creating meaningful impact, and contributing positively to the community and industry.',
      ],
    },
    {
      id: 4,
      tags: ['Collaboration', 'Partnership'],
      title: 'Soon to Sign MoU with Industries',
      description:
        'We are in the process of signing Memorandums of Understanding with industries, fostering strong partnerships that will drive innovation and impactful opportunities.',
      author: 'Partnerships Team',
      avatar: '/infinimove_v2/images/Testimony.png',
      image: '/infinimove_v2/images/mou.svg',
      heroImage: '/infinimove_v2/images/mou.svg',
      toc: ['Overview', 'Why MoUs Matter', 'Benefits of Collaboration', 'What’s Next'],
      content: [
        'We are preparing to sign strategic Memorandums of Understanding (MoUs) with leading industries to foster collaboration.',
        'MoUs represent formal agreements that outline shared goals, responsibilities, and areas of cooperation between parties.',
        'These partnerships open doors to knowledge sharing, joint research initiatives, and co-development of innovative solutions.',
        'Collaboration with industry experts enhances our capabilities, providing mentorship, resources, and insights into best practices.',
        'The agreements help bridge the gap between academia, industry, and the innovation ecosystem, creating stronger networks.',
        'Partnerships increase opportunities for internships, employment, and skill development for our team and community members.',
        'We anticipate impactful outcomes, such as improved technology adoption, commercialization of solutions, and increased market reach.',
        'Stay tuned as we finalize these agreements and step into a new chapter of impactful collaborations, shaping a brighter future.',
      ],
    },
  ];
  return (
    <section
      className="flex flex-col items-center w-full max-w-[1440px] mx-auto h-[200px] md:h-auto lg:h-[700px]"
      style={{ background: 'black' }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-8 w-full">
        <h2 className="uppercase text-urbanist font-extrabold text-[18px] text-[#F0F0F0] mb-1 tracking-widest sm:text-[36px] md:text-[42px]">
          OUR BLOGS
        </h2>
        <h3 className="text-[#ABABAB] text-[8px] font-medium sm:text-[14px] md:text-[16px] text-urbanist">
          Read till the end - to not miss anything
        </h3>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-6 w-full px-3 sm:px-4">
        {blogPosts.slice().map((post, idx) => (
          <div
            key={idx}
            className="rounded-[16px] p-[1.5px] mx-auto w-full"
            style={{
              padding: '0.81px',
              background:
                'linear-gradient(0deg, #FFFFFF 0%, #0038A0 41%, #8083A5 73%, #FFFFFF 100%)',
              boxSizing: 'border-box',
              cursor: 'pointer',
            }}
            onClick={() => navigate(`/blogs/${post.id}`, { state: { post } })}
          >
            <div className="rounded-[16px] bg-[#000814] flex flex-row sm:flex-row items-center sm:items-stretch px-2 sm:px-5 py-4 sm:py-5 shadow-md min-h-[115px] lg:min-h-[260px] md:min-h-[190px] w-full">
              {/* Left content */}
              <div className="flex flex-col flex-1">
                {/* Tags */}
                <div className="flex mb-2 sm:mb-3 flex-wrap gap-1 lg:gap-2">
                  {post.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="bg-[#000814] min-w-[12px] md:h-[15px] lg:h-[20px]  h-[7px] border border-[#FFE2E2] text-[#F0F0F0] text-[3px] sm:text-[12px] md:text-[10px] font-extrabold px-1 py-[0.5px] rounded-xl font-[Urbanist]"
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
                  <span className="text-[4px] sm:text-[13px] md:text-[10px] text-[#FFF] font-normal font-[Urbanist]">{`By ${post.author}`}</span>
                </div>
              </div>
              {/* Right image */}
              <div className=" sm:mt-0 sm:ml-4 flex-shrink-0 flex items-center justify-center">
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
  );
};

export default OurBlogs;
