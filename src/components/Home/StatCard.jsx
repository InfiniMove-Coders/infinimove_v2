import React from 'react';

/**
 * StatCard - Individual statistics display component
 * @param {string} value - The statistical value (e.g., "55%", "4X")
 * @param {string} label - Description of the statistic
 */
const StatCard = ({ value, label }) => {
  return (
    <div
      className="
        text-center group
        h-[30px] sm:h-[35px] md:h-[40px] lg:h-auto
        flex flex-col justify-center
      "
    >
      {/* Statistics value */}
      <div
        className="
          text-[8px] sm:text-[9px] md:text-[15px] lg:text-5xl
          font-bold text-white mb-0.5
          font-urbanist group-hover:text-blue-400
          transition-colors duration-300
        "
      >
        {value}
      </div>

      {/* Statistics label */}
      <div
        className="
          text-[5px] sm:text-[6px] md:text-[10px] lg:text-base
          text-gray-300 font-roboto
        "
      >
        {label}
      </div>
    </div>
  );
};

export default StatCard;
