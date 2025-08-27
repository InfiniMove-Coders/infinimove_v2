
import React from 'react';

/**
 * ServiceDetailItem - Individual service detail display component
 * @param {string} service - Service name to display
 */
const ServiceDetailItem = ({ service }) => {
  return (
    <div className="bg-black/20 border border-gray-600/30 rounded-lg py-3 px-4 text-gray-300 hover:text-white hover:border-gray-500/50 transition-all duration-300 font-roboto">
      {service}
    </div>
  );
};

export default ServiceDetailItem;
