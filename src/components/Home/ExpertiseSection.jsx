import React from 'react';
import ExpertiseCard from './ExpertiseCard';
import StatCard from './StatCard';

const ExpertiseSection = () => {
  const expertiseData = [
    {
      title: "Web Development",
      description: "Building responsive, high-performance websites that captivate your audience.",
    },
    {
      title: "Mobile App Development",
      description: "Crafting seamless native and cross-platform apps your users will value.",
    },
    {
      title: "UI/UX Design",
      description: "Building responsive, high-performance websites that captivate your audience.",
    },
    {
      title: "Software Development",
      description: "Building scalable software solutions tailored to your specific needs.",
    }
  ];

  const statsData = [
    { value: "55%", label: "Conversion Rate" },
    { value: "4X", label: "ROI for clients" },
    { value: "100+", label: "Customers" },
    { value: "90+", label: "Hours Saved" }
  ];

  return (
    <section className="relative w-full">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #000814 43.31%, rgba(0, 49, 122, 0) 100%)',
          borderWidth: '2px 0 2px 0', 
          borderStyle: 'solid',
          borderImageSource: 'linear-gradient(89.71deg, rgba(255, 255, 255, 0) 18.48%, #809CD0 31.63%, #0038A0 44.79%, #8083A5 57.36%, rgba(191, 205, 231, 0.5) 68.47%, rgba(255, 255, 255, 0) 79.28%)',
          borderImageSlice: 1 
        }}

      />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-5 sm:py-12 md:py-16 lg:py-24">

        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-urbanist">
            OUR EXPERTISE
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl max-w-xl sm:max-w-2xl mx-auto font-roboto">
            Discover how we can elevate your business.
          </p>
        </div>

        {/* Expertise cards grid */}
        <div
          className="
            grid grid-cols-4
            gap-2 sm:gap-3 md:gap-4 lg:gap-8
            mb-8 sm:mb-10 md:mb-12 lg:mb-20
          "
        >
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Statistics section */}
        <div
          className="
            grid grid-cols-4
            gap-2 sm:gap-3 md:gap-4 lg:gap-12 px-15 lg:px-30
          "
        >
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
