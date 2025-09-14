import React from "react";

const ServiceDetailItem = ({ service, textSize }) => {
  return (
    <div className={`text-gray-300 hover:text-white transition-colors duration-200 ${textSize} font-roboto text-center`}>
      {service}
    </div>
  );
};

export default ServiceDetailItem;
