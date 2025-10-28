import React from "react";

const MetricsSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center mt-10 mb-50">
      <div
        className="
    absolute 
    w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] 
    left-[200px] top-[280px] 
    sm:left-[300px] sm:top-[450px] 
    md:left-[200px] md:top-[480px] 
    lg:left-[800px] lg:top-[500px] 
    bg-[#0464DA] opacity-50 rounded-full 
    blur-[30px] sm:blur-[40px] md:blur-[45px] lg:blur-[50px] 
    shadow-[0px_0px_150px_#0464DA] sm:shadow-[0px_0px_180px_#0464DA] md:shadow-[0px_0px_200px_#0464DA] lg:shadow-[0px_0px_250px_#0464DA]
  "
      ></div>

      <div
        className="
    absolute 
    w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[230px] md:h-[230px] lg:w-[300px] lg:h-[300px] 
    left-[20px] top-[180px] 
    sm:left-[40px] sm:top-[200px] 
    md:left-[50px] md:top-[220px] 
    lg:left-[60px] lg:top-[237px] 
    bg-[#0464DA] opacity-50 rounded-full 
    blur-[20px] sm:blur-[25px] md:blur-[30px] lg:blur-[33px] 
    shadow-[0px_0px_100px_#0464DA] sm:shadow-[0px_0px_130px_#0464DA] md:shadow-[0px_0px_150px_#0464DA] lg:shadow-[0px_0px_166px_#0464DA]
  "
      ></div>

      {/* Section Title */}
      <div className="text-center px-4 sm:px-6 mb-5 lg:mb-15">
        <div className="uppercase font-bold text-[18px] text-[#F0F0F0] mb-1 mt-10 tracking-widest sm:text-[28px] md:text-[32px] lg:text-[42px]">
          Why Choose US
        </div>
        <div className="text-[#ABABAB] text-[10px] font-medium sm:text-[12px] md:text-[14px] lg:text-[16px]">
          The Infinimove Advantage
        </div>
      </div>

      {/* Bento Grid */}
      <div
        className="
          relative 
          grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3
          gap-4 lg:gap-6 md:gap-6
          w-full max-w-[1100px] h-[0px] lg:h-[300px] md:h-[350px]
          px-2 sm:px-6
        "
      >
        {/* Left Column */}
        <div className="relative col-span-1">
          <div className="w-full h-[140px] sm:h-[300px] md:h-[300px] lg:w-[400px] lg:h-[325px] bg-black/10 rounded-[24px] lg:rounded-[40px] shadow-lg overflow-hidden">
            <img
              src="/infinimove_v2/images/metrics1.png"
              alt="Feature"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 sm:absolute sm:top-[320px] md:absolute md:top-[330px] lg:absolute lg:top-[350px] w-full sm:w-[300px] md:w-[250px] lg:w-[400px] h-[60px] sm:h-[140px] md:h-[150px] lg:h-[150px] bg-[#0072FF]/20 rounded-[24px] lg:rounded-[40px] flex items-center sm:px-6">
            <img
              src="/infinimove_v2/images/metrics2.png"
              alt="Feature Icon"
              className="w-[30px] sm:w-[90px] md:w-[90px] lg:w-[120px] h-auto object-contain -rotate-6"
            />
            <p className="text-white font-urbanist text-[6px] sm:text-base md:text-[12px] lg:text-[20px] leading-snug ml-2 sm:ml-6">
              Competitive pricing, delivering maximum value and ROI.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="relative">
          <div className="w-[140px] lg:ml-15 sm:w-[300px] md:w-[340px] lg:w-[400px] h-[60px] sm:h-[140px] md:h-[150px] lg:h-[150px] bg-[#0072FF]/20 rounded-[24px] lg:rounded-[40px] flex items-center px-4 sm:px-6">
            <img
              src="/infinimove_v2/images/metrics4.png"
              alt="Feature"
              className="w-[30px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-auto object-contain"
            />
            <p className="text-white font-urbanist text-[6px] sm:text-base md:text-[12px] lg:text-[20px] ml-4 sm:ml-6">
              Fast, agile delivery without compromising quality.
            </p>
          </div>
          <div className="mt-4 lg:ml-15 sm:absolute sm:top-[170px] md:absolute md:top-[175px] lg:absolute lg:top-[175px] w-full sm:w-[200px] md:w-[250px] lg:w-[250px] h-[140px] sm:h-[260px] md:h-[300px] lg:h-[325px] rounded-[24px] lg:rounded-[40px] shadow-lg overflow-hidden">
            <img
              src="/infinimove_v2/images/metrics3.png"
              alt="Middle Large"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div className=" ml-6 lg:left-30 sm:absolute sm:top-0 sm:right-0 md:absolute md:top-0 md:right-0 lg:absolute lg:top-0 lg:right-0 w-[80px] sm:w-[200px] md:w-[150px] lg:w-[250px] h-[60px] sm:h-[140px] md:h-[150px] lg:h-[150px] bg-[#0072FF]/20 rounded-[24px] lg:rounded-[40px] flex items-center justify-center">
            <img
              src="/infinimove_v2/images/metrics5.png"
              alt="Logo"
              className="w-[60px] sm:w-[180px] md:w-[200px] lg:w-[225px] h-auto object-contain"
            />
          </div>
          <div className=" mt-4 sm:absolute sm:top-[170px] md:absolute md:top-[175px] lg:absolute lg:top-[175px] w-full sm:w-[300px] md:w-[250px] lg:w-[400px] h-[60px] sm:h-[140px] md:h-[150px] lg:h-[150px] bg-[#0072FF]/20 rounded-[24px] lg:rounded-[40px] flex items-center px-2  sm:px-6">
            <img
              src="/infinimove_v2/images/metrics7.png"
              alt="Expertise"
              className="w-[30px] sm:w-[90px] md:w-[80px] lg:w-[117px] h-auto object-contain"
            />
            <p className="text-white font-urbanist text-[4px] sm:text-base md:text-[12px] lg:text-[20px] ml-4 sm:ml-6">
              Extensive industry expertise driving unique, effective solutions.
            </p>
          </div>
          <div className="mt-4 sm:absolute sm:top-[330px] md:absolute md:top-[350px] lg:absolute lg:top-[350px] w-full sm:w-[300px] md:w-[250px] lg:w-[400px] h-[60px] sm:h-[140px] md:h-[150px] lg:h-[150px] bg-[#0072FF]/20 rounded-[24px] lg:rounded-[40px] flex items-center px-2 sm:px-6">
            <img
              src="/infinimove_v2/images/metrics6.png"
              alt="Support"
              className="w-[30px] sm:w-[90px] md:w-[90px] lg:w-[108px] h-auto object-contain"
            />
            <p className="text-white font-urbanist text-[4px] sm:text-base md:text-[12px] lg:text-[20px] ml-4 sm:ml-6">
              Dedicated support ensuring peak performance and success.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
