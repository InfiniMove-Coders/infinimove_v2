
import React from 'react';

/**
 * ServiceListItem - Individual service list item component
 * @param {string} service - Service name
 * @param {boolean} isActive - Whether this item is currently active/selected
 * @param {function} onClick - Click handler function
 */
const ServiceListItem = ({ service, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(service)}
      className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 font-urbanist ${
        isActive 
          ? 'bg-blue-600/20 text-white border border-blue-500/30' 
          : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
      }`}
    >
      {service}
    </button>
  );
};

export default ServiceListItem;
