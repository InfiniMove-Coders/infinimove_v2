import React, { useState } from 'react';
import ExpertiseCard from './ExpertiseCard';
import StatCard from './StatCard';

const ExpertiseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const expertiseData = [
    {
      title: "Web Development",
      description: "Building responsive, high-performance websites that captivate your audience.",
      icons: {
        left: ["/infinimove_v2/icons/web-left1.svg", "icons/web-left2.svg", "icons/web-left3.svg"],
        right: ["icons/web-right1.svg", "icons/web-right2.svg", "icons/web-right3.svg"],
      },
    },
    {
      title: "Mobile App Development",
      description: "Crafting seamless native and cross-platform apps your users will value.",
      icons: {
        left: ["icons/mobile-left1.svg", "icons/mobile-left2.svg", "icons/mobile-left3.svg"],
        right: ["icons/mobile-right1.svg", "icons/mobile-right2.svg", "icons/mobile-right3.svg"],
      },
    },
    {
      title: "UI/UX \nDesign",
      description: "Building responsive, high-performance websites that captivate your audience.",
      icons: {
        left: ["icons/ui-left1.svg", "icons/ui-left2.svg", "icons/ui-left3.svg"],
        right: ["icons/ui-right1.svg", "icons/ui-right2.svg", "icons/ui-right3.svg"],
      },
    },
    {
      title: "Software Development",
      description: "Building scalable software solutions tailored to your specific needs.",
      icons: {
        left: ["icons/soft-left1.svg", "icons/soft-left2.svg", "icons/soft-left3.svg"],
        right: ["icons/soft-right1.svg", "icons/soft-right2.svg", "icons/soft-right3.svg"],
      },
    }
  ];

  const statsData = [
    { value: "55%", label: "Conversion Rate" },
    { value: "4X", label: "ROI for clients" },
    { value: "100+", label: "Customers" },
    { value: "90+", label: "Hours Saved" }
  ];

  // how far each icon moves per step (px)
  const STEP = 60;

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

        {/* Section header (kept exactly as you asked) */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 relative">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-urbanist">
            OUR EXPERTISE
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl max-w-xl sm:max-w-2xl mx-auto font-roboto">
            Discover how we can elevate your business.
          </p>

          {/* === ICONS OVERLAY (always rendered so animations work) === */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
            aria-hidden
          >
            {/* iterate through all expertise sets — only the hovered set will move/fade in */}
            {expertiseData.map((item, idx) => {
              const isActive = hoveredIndex === idx;

              return (
                <React.Fragment key={idx}>
                  {/* left icons */}
                  {item.icons.left.map((icon, i) => {
                    let offsetX = 0;
                    let offsetY = 0;

                    if (i === 0) { // straight left
                      offsetX = -STEP *1.8;
                      offsetY = 0;
                    } else if (i === 1) { // top-left
                      offsetX = -STEP;
                      offsetY = -STEP / 1.5;
                    } else if (i === 2) { // bottom-left
                      offsetX = -STEP;
                      offsetY = STEP / 1.5;
                    }

                    const transform = isActive
                      ? `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`
                      : `translate(-50%, -50%) translate(0px, 0px)`;

                    return (
                      <img
                        key={`l-${idx}-${i}`}
                        src={icon}
                        alt=""
                        className=" h-5 w-5 lg:w-10 lg:h-10 sm:h-5 md:h-6 md:w-6 absolute"
                        style={{
                          left: '30%',
                          top: '50%',
                          transform,
                          opacity: isActive ? 1 : 0,
                          transition: 'transform 3000ms cubic-bezier(.2,.9,.2,1), opacity 360ms ease',
                          transitionDelay: `${i * 80}ms`,
                          pointerEvents: 'none',
                          zIndex: 40
                        }}
                      />
                    );
                  })}

                  {/* right icons */}
                  {item.icons.right.map((icon, i) => {
                    let offsetX = 0;
                    let offsetY = 0;

                    if (i === 0) { // straight right
                      offsetX = STEP*1.8;
                      offsetY = 0;
                    } else if (i === 1) { // top-right
                      offsetX = STEP;
                      offsetY = -STEP / 1.5;
                    } else if (i === 2) { // bottom-right
                      offsetX = STEP;
                      offsetY = STEP / 1.5;
                    }

                    const transform = isActive
                      ? `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`
                      : `translate(-50%, -50%) translate(0px, 0px)`;

                    return (
                      <img
                        key={`r-${idx}-${i}`}
                        src={icon}
                        alt=""
                        className="h-5 w-5 lg:w-10 lg:h-10 sm:h-5 md:h-6 md:w-6 absolute"
                        style={{
                          left: '70%',
                          top: '50%',
                          transform,
                          opacity: isActive ? 1 : 0,
                          transition: 'transform 3000ms cubic-bezier(.2,.9,.2,1), opacity 360ms ease',
                          transitionDelay: `${i * 80}ms`,
                          pointerEvents: 'none',
                          zIndex: 40
                        }}
                      />
                    );
                  })}

                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Expertise cards grid */}
        <div
          className="
            grid grid-cols-4
            gap-2 sm:gap-3 md:gap-4 lg:gap-8
            mb-8 sm:mb-10 md:mb-17 lg:mb-20
          "
        >
          {expertiseData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ExpertiseCard title={item.title} description={item.description} />
            </div>
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
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
