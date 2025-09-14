import React from "react";

const stats = [
  { headline: "20+ Projects", subtext: "Successfully Delivered" },
  { headline: "10+ Industries", subtext: "Collaborated" },
  { headline: "100+ Hours", subtext: "Saved for Customers" },
  { headline: "100%", subtext: "Happy Customers" },
];

const VisionStats = () => (
  <section className="w-full  h-[200px] lg:h-auto bg-black flex flex-col items-center lg:py-12 px-4">
    {/* Title */}
    <h2
      className="
        font-urbanist font-bold text-[#F0F0F0] text-center
        text-[16px] sm:text-[20px] md:text-[24px] lg:text-[48px]
      "
    >
      OUR VISION
    </h2>

    {/* Subtitle */}
    <p
      className="
        font-urbanist text-[#ABABAB] text-center mt-5 mb-16
        text-[7px] sm:text-[12px] md:text-[16px] lg:text-[24px] max-w-[1400px]
      "
    >
      To empower businesses with state-of-the-art, reliable digital solutions that foster growth,
      optimize efficiency,<br />
      and provide a distinct competitive advantage
    </p>

    {/* Stats Section */}
    <div
      className="
        grid grid-cols-4 gap-2 sm:gap-2 md:gap-4 lg:gap-12 w-full
        max-w-[1600px] mx-auto
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.headline}
          id="StatsCard"
          className="
            flex flex-col items-center justify-center 
            bg-[#060606] rounded-md shadow-[0_0_0_1px_#2359d9]
            transition-all mx-auto

            w-[70px] h-[50px] sm:w-[90px] sm:h-[100px] md:w-[130px] md:h-[120px]
            lg:w-[278px] lg:h-[163px] 
          "
        >
          {/* Icon */}
          <img
            className="
              w-[18px] h-[12px] sm:w-[22px] sm:h-[14px] md:w-[28px] md:h-[16px]
              lg:w-[63px] lg:h-[34px]
            "
            src="/Vector.svg"
            alt=""
          />

          {/* Headline */}
          <div
            className="
              font-urbanist font-bold text-center text-[#F0F0F0]
              text-[9px] sm:text-[12px] md:text-[16px] lg:text-[36px]
              mt-1 
            "
          >
            {stat.headline}
          </div>

          {/* Subtext */}
          <div
            className="
              font-urbanist font-medium text-center text-[#F0F0F0]
              text-[5px] sm:text-[8px] md:text-[10px] lg:text-[16px]
            "
          >
            {stat.subtext}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default VisionStats;
