"use client";
import React, { useState } from "react";
import ServiceListItem from "./ServiceListItem";
import ServiceDetailItem from "./ServiceDetailItem";

const ServicesSection = () => {
  const serviceCategories = [
    "Web Development",
    "App Development",
    "UI / UX Design",
    "Software Development",
    "AI Chat Bot Solutions",
  ];

  const serviceDetails = {
    "Web Development": [
      "Custom Website Development",
      "E-commerce Development",
      "CMS Development",
      "Progressive Web Apps (PWAs)",
      "Web Portal Development (B2B, B2C)",
      "Landing Page Design",
      "API Development & Integration",
    ],
    "App Development": [
      "Native iOS Development",
      "Native Android Development",
      "Cross-Platform Development",
      "Mobile App UI/UX Design",
      "App Store Optimization",
      "Mobile Backend Development",
      "App Maintenance & Support",
    ],
    "UI / UX Design": [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Mobile App Design",
      "Web Application Design",
      "Usability Testing",
    ],
    "Software Development": [
      "Custom Software Solutions",
      "Enterprise Software Development",
      "SaaS Development",
      "Database Design & Development",
      "System Integration",
      "Legacy System Modernization",
      "Software Architecture Consulting",
    ],
    "AI Chat Bot Solutions": [
      "Custom Chatbot (Web, Insta, WhatsApp, Messenger)",
      "Lead Generation Bots",
      "Customer Support Bots",
      "E-commerce Assistants",
      "Multilingual Support",
    ],
  };

  const [activeService, setActiveService] = useState("Web Development");

  return (
    <section className="w-full py-5 sm:py-12 md:py-14 lg:py-24 bg-[#000814]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:pl-20">
        {/* Flex row container */}
        <div className="flex flex-row gap-3 sm:gap-5 md:gap-8 lg:gap-20">

          {/* Left side - Service list */}
          <div className="flex flex-col gap-1 ml-8 lg: sm:gap-2 md:gap-3 w-[170px] sm:w-[280px] md:w-[250px] lg:w-[450px]">
            {serviceCategories.map((service, idx) => (
              <ServiceListItem
                key={idx}
                service={service}
                isActive={activeService === service}
                onClick={setActiveService}
              />
            ))}
          </div>

          {/* Right side - Service details with gradient border */}
          <div className="rounded-2xl p-[2px] bg-[linear-gradient(89.71deg,#808080_0%,#809CD0_31.63%,#0038A0_44.79%,#8083A5_57.36%,rgba(191,205,231,0.5)_68.47%,#808080_100%)] flex-1
                          h-[230px] sm:h-[300px] md:h-[375px] lg:h-[430px]">
            <div className="bg-black rounded-2xl p-2 sm:p-3 md:p-5 flex flex-col justify-center h-full">
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 items-center">
                {serviceDetails[activeService]?.map((detail, i) => (
                  <ServiceDetailItem
                    key={i}
                    service={detail}
                    textSize="text-[8px] sm:text-[10px] md:text-sm lg:text-lg"
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
