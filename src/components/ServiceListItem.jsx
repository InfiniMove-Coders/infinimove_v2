import React from "react";

/**
 * ServiceListItem - Left side category list
 */
const ServiceListItem = ({ service, isActive, onClick }) => {
  if (isActive) {
    // Active service → Glowing button
    return (
      <button
        onClick={() => onClick(service)}
        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base lg:text-xl font-semibold leading-6 text-white inline-block w-full text-left"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
          <span>{service}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    );
  }

  // Inactive services → Plain text
  return (
    <button
      onClick={() => onClick(service)}
      className="w-full text-left py-3 px-6 text-lg lg:text-xl font-urbanist text-gray-400 hover:text-white transition-colors duration-200"
    >
      {service}
    </button>
  );
};

export default ServiceListItem;
