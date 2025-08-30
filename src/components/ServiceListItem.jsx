import React from 'react';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

/**
 * ServiceListItem - Individual service list item component
 * @param {string} service - Service name
 * @param {boolean} isActive - Whether this item is currently active/selected
 * @param {function} onClick - Click handler function
 */
const ServiceListItem = ({ service, isActive, onClick }) => {
  return (
    <HoverBorderGradient
      as="button"
      containerClassName="w-full rounded-lg"
      onClick={() => onClick(service)}
      className={`w-full text-left py-3 px-4 transition-all duration-300 font-urbanist flex items-center justify-start
        ${isActive 
          ? "dark:bg-black bg-white text-black dark:text-white" 
          : "dark:bg-black/50 bg-white/70 text-gray-300 dark:text-gray-300 hover:text-white"
        }`}
    >
      <span className="text-base lg:text-lg font-medium">
        {service}
      </span>
    </HoverBorderGradient>
  );
};

export default ServiceListItem;
