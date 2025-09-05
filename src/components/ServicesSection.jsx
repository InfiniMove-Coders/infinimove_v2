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
    <section className="w-full min-h-screen py-16 lg:py-24 bg-[#000814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left side - Service list */}
          <div className="flex flex-col gap-6">
            {serviceCategories.map((service, idx) => (
              <ServiceListItem
                key={idx}
                service={service}
                isActive={activeService === service}
                onClick={setActiveService}
              />
            ))}
          </div>

          {/* Right side - Fixed height details (no heading) */}
          <div className="bg-black/40 border border-gray-700 rounded-2xl p-8 h-[450px] flex flex-col justify-center">
            <div className="flex flex-col gap-5 items-center">
              {serviceDetails[activeService]?.map((detail, i) => (
                <ServiceDetailItem key={i} service={detail} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
