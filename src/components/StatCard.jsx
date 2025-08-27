
import React from 'react';

/**
 * StatCard - Individual statistics display component
 * @param {string} value - The statistical value (e.g., "55%", "4X")
 * @param {string} label - Description of the statistic
 */
const StatCard = ({ value, label }) => {
  return (
    <div className="text-center group">
      {/* Statistics value */}
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-urbanist group-hover:text-blue-400 transition-colors duration-300">
        {value}
      </div>
      
      {/* Statistics label */}
      <div className="text-gray-300 text-sm md:text-base font-roboto">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
