
import React from 'react';

/**
 * ExpertiseCard - Individual service card component
 * @param {string} title - Card title
 * @param {string} description - Card description text
 * @param {string} icon - Icon or symbol for the card
 */
const ExpertiseCard = ({ title, description, icon }) => {
  return (
    <div className="bg-black/30 border border-gray-600/50 rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:border-gray-500/70 group">
      {/* Icon container */}
      <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Card title */}
      <h3 className="text-white font-bold text-lg md:text-xl mb-3 font-urbanist">
        {title}
      </h3>
      
      {/* Card description */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed font-roboto">
        {description}
      </p>
    </div>
  );
};

export default ExpertiseCard;
