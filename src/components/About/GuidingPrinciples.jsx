import React from "react";

const GuidingPrinciples = () => (
  <div
    className="flex flex-col items-center justify-center lg:h-[500px] bg-black px-4"
  >
    {/* Heading */}
    <h1
      className="
        font-urbanist font-bold text-[#F0F0F0] text-center
        text-[16px] sm:text-[24px] md:text-[32px] lg:text-[48px]
      "
    >
      OUR GUIDING PRINCIPLES
    </h1>

    {/* Subtitle */}
    <p
      className="
        font-urbanist font-bold text-center text-[#ABABAB] mt-4 mb-10
        text-[6px] sm:text-[12px] md:text-[16px] lg:text-[24px]
      "
    >
      Examine our recent projects and the significant impact we've delivered for our clients
    </p>

    {/* Guiding Principles Image */}
    <img
      src="/images/GuidingPrinciple.png"
      alt="Guiding Principles"
      className="
        mt-4
        w-[120px] sm:w-[200px] md:w-[300px] lg:w-[470px]
        h-auto
      "
    />
  </div>
);

export default GuidingPrinciples;
