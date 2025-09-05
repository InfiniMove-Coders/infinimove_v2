
import React from 'react';
import ExpertiseCard from './ExpertiseCard';
import StatCard from './StatCard';

/**
 * ExpertiseSection - Main expertise showcase section
 * Features gradient background (#000814 edges to #00317A center)
 */
const ExpertiseSection = () => {
  // Expertise cards data
  const expertiseData = [
    {
      title: "Web Development",
      description: "Building responsive high-performance websites that captivate your audience and deliver results.",
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Crafting seamless mobile experiences that run smoothly across all platforms with your user value.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Building innovative high-performance experiences that craft innovative user interface.",
      icon: "🎨"
    },
    {
      title: "Software Development",
      description: "Building scalable software solutions that innovate and evolve with your business needs.",
      icon: "⚙️"
    }
  ];

  // Statistics data
  const statsData = [
    { value: "55%", label: "Conversion Rate" },
    { value: "4X", label: "ROI for clients" },
    { value: "100+", label: "Customers" },
    { value: "90+", label: "Hours Saved" }
  ];

  return (
    <section className="relative w-full min-h-screen">
      {/* Gradient background - sandwich style with #000814 edges and #00317A center */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #000814 0%, #00317A 25%, #00317A 75%, #000814 100%)'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-urbanist">
            OUR EXPERTISE
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-roboto">
            Discover how we can elevate your business.
          </p>
        </div>

        {/* Expertise cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
