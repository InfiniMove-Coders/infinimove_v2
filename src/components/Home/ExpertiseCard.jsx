import React from 'react';

const ExpertiseCard = ({ title, description,}) => {
  return (
    <div className="bg-black border border-[#0038A0] rounded-lg 
                    p-2 sm:p-3 md:p-5
                    hover:bg-black hover:border-gray-500/70 
                    transition-all duration-300 transform hover:scale-105
                    flex flex-col items-center justify-center
                    h-19 sm:h-25 md:h-37 lg:h-52">
      
      {/* Title */}
      <h3 className="text-white font-bold text-[9px] sm:text-[12px] md:text-[13px] lg:text-[33px] px-4 mb-1 sm:mb-1 md:mb-1 font-urbanist text-center">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-300 text-[3.5px] sm:text-[10px] md:text-[8px] lg:text-[13px] leading-relaxed font-roboto text-left self-start mb-2 lg:mb-4">
        {description}
      </p>

      <p className="text-gray-300 text-[3.5px] sm:text-[10px] md:text-[8px] lg:text-[13px] leading-relaxed font-roboto text-left items-left self-start ">
        Learn More
      </p>
    </div>
  );
};

export default ExpertiseCard;
