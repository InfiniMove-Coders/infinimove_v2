import React from 'react';

const ProductBadge = () => {
  return (
    <div className="flex justify-center">
      <div
        className="
          inline-flex items-center border border-gray-400 rounded-[36px]
          w-[400px] h-[33px] px-[14px] py-[5px]
          max-md:w-[300px] max-md:h-[26px] max-md:px-3 max-md:py-1
          max-sm:w-[220px] max-sm:h-[22px] max-sm:px-2 max-sm:py-0.5
        "
      >
        <div
          className="
            flex items-center justify-center gap-1
            w-full h-[17px]
            max-md:w-[280px] max-md:h-[14px]
            max-sm:w-[200px] max-sm:h-[12px]
          "
        >
          <span
            className="
              font-urbanist font-light text-[14px] text-gray-300 capitalize
              max-md:text-[10px] max-sm:text-[8px]
            "
          >
            delivering End To End .
          </span>
          <span
            className="
              font-urbanist font-bold text-[14px] text-white capitalize
              max-md:text-[10px] max-sm:text-[8px]
            "
          >
            B2B | B2C | SAAS | SPA
          </span>
          <span
            className="
              font-urbanist font-light text-[14px] text-gray-300 capitalize
              max-md:text-[10px] max-sm:text-[8px]
            "
          >
            Prods
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBadge;
