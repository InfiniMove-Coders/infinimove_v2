import React from "react";

const ServiceListItem = ({ service, isActive, onClick }) => {
  return (
    <div
      onClick={() => onClick(service)}
      className={`relative rounded-lg w-full cursor-pointer transition-all duration-300`}
    >
      {isActive ? (
        // Gradient border wrapper
        <div className="rounded-lg p-[2px] bg-[linear-gradient(89.71deg,#808080_0%,#809CD0_31.63%,#0038A0_44.79%,#8083A5_57.36%,rgba(191,205,231,0.5)_68.47%,#808080_100%)]">
          <div className="bg-black rounded-lg py-1 sm:py-1.5 md:py-2 lg:py-2 px-2 sm:px-3 md:px-4 lg:px-6 text-white font-semibold text-[15px] sm:text-[10px] md:text-sm lg:text-[30px] flex items-center">
            {service}
          </div>
        </div>
      ) : (
        // Normal inactive button
        <button className="w-full text-left py-1 px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4 lg:py-2 lg:px-6
                           text-[15px] sm:text-[10px] md:text-sm lg:text-[30px]
                           text-gray-400 font-urbanist hover:text-white transition-colors duration-200 rounded-lg">
          {service}
        </button>
      )}
    </div>
  );
};

export default ServiceListItem;
