import React from "react";
import Slider from "react-slick";

const projectCards = [
  {
    stats: [
      { text: "80% faster response time", color: "text-yellow-400" },
      { text: "95% customer satisfaction", color: "text-yellow-400" },
      { text: "60% cost reduction", color: "text-yellow-400" },
    ],
    quote: {
      text: "“The AI chatbot handles 90% of our customer queries automatically. Our team can now focus on complex issues.”",
      name: "Jennifer Martinez",
      title: "Customer Success Director",
      avatar: "/images/Testimony.png",
    },
    image: "/images/FP1.png",
    dark: true,
  },
  {
    stats: [
      { text: "80% faster response time", color: "text-yellow-400" },
      { text: "95% customer satisfaction", color: "text-yellow-400" },
      { text: "60% cost reduction", color: "text-yellow-400" },
    ],
    quote: {
      text: "“The AI chatbot handles 90% of our customer queries automatically. Our team can now focus on complex issues.”",
      name: "Jennifer Martinez",
      title: "Customer Success Director",
      avatar: "/images/Testimony.png",
    },
    image: "/images/FP1.png",
    dark: false,
  },
  {
    stats: [
      { text: "80% faster response time", color: "text-yellow-400" },
      { text: "95% customer satisfaction", color: "text-yellow-400" },
      { text: "60% cost reduction", color: "text-yellow-400" },
    ],
    quote: {
      text: "“The AI chatbot handles 90% of our customer queries automatically. Our team can now focus on complex issues.”",
      name: "Jennifer Martinez",
      title: "Customer Success Director",
      avatar: "/images/Testimony.png",
    },
    image: "/images/FP1.png",
    dark: true,
  },
  {
    stats: [
      { text: "80% faster response time", color: "text-yellow-400" },
      { text: "95% customer satisfaction", color: "text-yellow-400" },
      { text: "60% cost reduction", color: "text-yellow-400" },
    ],
    quote: {
      text: "“The AI chatbot handles 90% of our customer queries automatically. Our team can now focus on complex issues.”",
      name: "Jennifer Martinez",
      title: "Customer Success Director",
      avatar: "/images/Testimony.png",
    },
    image: "/images/FP1.png",
    dark: false,
  },
];

const cardBg = ["bg-[#00064B]", "bg-[#0038A0]", "bg-[#000814]", "bg-[#00064B]"];
const cardText = ["text-white", "text-white", "text-white", "text-white"];

export default function FPCorousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets/laptops
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 }, // show 1 card on mobile
      },
    ],
  };

  return (
    <section className="w-full h-[150px] lg:h-auto bg-black flex flex-col items-center text-urbanist">
      {/* Header */}
      <div className="text-center px-4 sm:px-6">
        <div className="uppercase font-extrabold text-[18px] text-[#F0F0F0] mb-1 tracking-widest sm:text-[36px] md:text-[42px]">
          Featured Projects
        </div>
        <div className="text-[#ABABAB] text-[8px] font-medium sm:text-[14px] md:text-[16px]">
          Discover how we can elevate your business.
        </div>
      </div>

      {/* Carousel */}
      <div className="w-[350px] lg:w-[1050px] mt-2 px-4">
        <Slider {...settings}>
          {projectCards.map((card, idx) => (
            <div key={idx} className="p-2">
              <div
                className="rounded-md p-[2px] shadow-lg h-full"
                style={{
                  background:
                    "linear-gradient(0deg, #FFFFFF 0%, #0038A0 41%, #8083A5 73%, #FFFFFF 100%)",
                }}
              >
                <div
                  className={`rounded-md flex flex-row items-stretch w-full h-full ${cardBg[idx]} ${cardText[idx]} p-4 md:p-6`}
                >
                  {/* Left text/blurb */}
                  <div className="flex-1 flex flex-col justify-between lg:p-3 pr-2 md:pr-6 py-1">
                    <div>
                      <h3 className="text-[7px] font-bold mb-1 sm:text-[20px] md:text-[24px]">
                        AI-Powered Customer Service Revolution
                      </h3>
                      <div className="opacity-90 mb-2 text-[5px] font-400 leading-snug sm:text-[12px] md:text-[13px]">
                        Implemented conversational AI that reduced response time
                        by 80% and increased customer satisfaction to 95%.
                      </div>
                      <ul className="mb-4 space-y-1">
                        {card.stats.map((stat, i) => (
                          <li key={i} className="flex items-center ">
                            <span
                              className={`${stat.color} text-[5px] font-bold sm:text-base md:text-[15px]`}
                            >
                              ★
                            </span>
                            <span className="text-[5px] font-500 sm:text-[12px] md:text-[13px]">
                              {stat.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                      {/* Quote Box */}
                      <div className="rounded-md bg-[#0038A0] py-2 px-2 lg:mt-2 lg:px-4 lg:py-3 flex shadow-2xl items-center lg:gap-4 gap-2 w-full h-[30px] lg:w-full lg:h-[100px] md:w-[463px] sm:flex-row sm:items-start">
                        <div className="w-7 h-4 lg:w-12 lg:h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                          <img
                            src={card.quote.avatar}
                            alt="avatar"
                            className="w-full h-full"
                          />
                        </div>
                        <div>
                          <div className="italic text-[3px] leading-snug mb-1 sm:text-[12px] md:text-[13px]">
                            {card.quote.text}
                          </div>
                          <div className="font-bold text-[3px] sm:text-[12px] md:text-[13px]">
                            {card.quote.name}
                            <span className="font-bold text-[3px] sm:text-[12px] md:text-[13px]">
                              , {card.quote.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right image */}
                  <div className="w-[180px] md:w-[500px] flex-shrink-0 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt="project"
                      className="rounded-md w-full object-cover sm:h-[200px] md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
