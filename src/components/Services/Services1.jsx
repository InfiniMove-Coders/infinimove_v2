import React from "react";

const services = [
  {
    title: "Custom Website Development",
    options: "30 options available",
    icon: "/infinimove_v2/images/ServiceIcon.png",
  },
  {
    title: "E-Commerce Development",
    options: "30 options available",
    icon: "/infinimove_v2/images/ServiceIcon.png",
  },
  {
    title: "CMS\nDevelopment", // Forced line break
    options: "30 options available",
    icon: "/infinimove_v2/images/ServiceIcon.png",
  },
  {
    title: "Progressive Web Apps",
    options: "30 options available",
    icon: "/infinimove_v2/images/ServiceIcon.png",
  },
  {
    title: "API\nDevelopment", // Forced line break
    options: "30 options available",
    icon: "/infinimove_v2/images/ServiceIcon.png",
  },
];

const ServiceCards1 = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-[1310px] mx-auto">
      {/* Headline and Subtitle */}
      <div className="text-center">
        <h1 className="font-manrope font-extrabold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-tight tracking-[-0.03em] text-[#F0F0F0]">
          Web Development
        </h1>
        <p className="mt-2 font-manrope font-light text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] leading-snug tracking-[-0.03em] text-[#F0F0F0]">
          Custom websites designed to engage your audience and drive results.
        </p>
      </div>

      {/* Cards Row */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[34px] w-full justify-center">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex-none rounded-[12px] lg:rounded-[30px] p-[1px] bg-gradient-to-tr from-white/25 via-[#0038A0] to-[#8083A5]"
          >
            <div
              className="
                w-[60px] sm:w-[130px] md:w-[140px] lg:w-[234px] 
                h-[60px] sm:h-[140px] md:h-[150px] lg:h-[217px] 
                bg-black rounded-[11px] lg:rounded-[29px] 
                shadow-[0_2px_10px_rgba(24,49,167,0.08)] 
                flex flex-col justify-start
                px-2 sm:px-3 md:px-4 lg:px-[45px] 
                py-2 sm:py-3 md:py-4 lg:py-[30px]
              "
            >
              {/* Icon (kept left aligned) */}
              <div className="bg-[#0464DA] rounded-[6px] sm:rounded-[8px] lg:rounded-[12px] w-[15px] sm:w-[28px] md:w-[36px] lg:w-[42px] h-[15px] sm:h-[28px] md:h-[36px] lg:h-[42px] flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-[70%] h-[70%] object-contain"
                />
              </div>

              {/* Text (left aligned with forced line breaks) */}
              <div className="mt-2 sm:mt-3 lg:mt-5 text-[#F0F0F0] font-manrope font-bold leading-snug text-left">
                <div className="text-[5px] sm:text-[10px] md:text-[13px] lg:text-[15px] leading-tight whitespace-pre-line">
                  {service.title}
                </div>
                <div className="mt-1 sm:mt-2 lg:mt-3 text-[3px] sm:text-[9px] md:text-[11px] lg:text-[12px] font-medium text-[#41529e]">
                  {service.options}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards1;
