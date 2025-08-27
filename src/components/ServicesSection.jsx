
import React, { useState } from 'react';
import ServiceListItem from './ServiceListItem';
import ServiceDetailItem from './ServiceDetailItem';

/**
 * ServicesSection - Interactive services showcase section
 * Features plain #000814 background and interactive service selection
 */
const ServicesSection = () => {
  // Available services for the left sidebar
  const serviceCategories = [
    'Web Development',
    'App Development', 
    'UI / UX Design',
    'Software Development',
    'AI Chat Bot Solutions'
  ];

  // Service details mapping
  const serviceDetails = {
    'Web Development': [
      'Custom Website Development',
      'E-commerce Development', 
      'CMS Development',
      'Progressive Web Apps (PWAs)',
      'Web Portal Development (B2B, B2C)',
      'Landing Page Design',
      'API Development & Integration'
    ],
    'App Development': [
      'Native iOS Development',
      'Native Android Development',
      'Cross-Platform Development',
      'Mobile App UI/UX Design',
      'App Store Optimization',
      'Mobile Backend Development',
      'App Maintenance & Support'
    ],
    'UI / UX Design': [
      'User Interface Design',
      'User Experience Research',
      'Wireframing & Prototyping',
      'Design Systems',
      'Mobile App Design',
      'Web Application Design',
      'Usability Testing'
    ],
    'Software Development': [
      'Custom Software Solutions',
      'Enterprise Software Development',
      'SaaS Development',
      'Database Design & Development',
      'System Integration',
      'Legacy System Modernization',
      'Software Architecture Consulting'
    ],
    'AI Chat Bot Solutions': [
      'Conversational AI Development',
      'Customer Service Bots',
      'Voice Assistant Integration',
      'Natural Language Processing',
      'Machine Learning Implementation',
      'AI Model Training',
      'Intelligent Automation'
    ]
  };

  // State for active service category
  const [activeService, setActiveService] = useState('Web Development');

  return (
    <section 
      className="w-full min-h-screen py-16 lg:py-24"
      style={{ backgroundColor: '#000814' }}
    >
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left column - Service categories */}
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 font-urbanist">
              Our Services
            </h3>
            
            {/* Service category list */}
            <div className="space-y-3">
              {serviceCategories.map((service, index) => (
                <ServiceListItem
                  key={index}
                  service={service}
                  isActive={activeService === service}
                  onClick={setActiveService}
                />
              ))}
            </div>
          </div>

          {/* Right column - Service details */}
          <div className="bg-black/30 border border-gray-600/50 rounded-xl p-6 lg:p-8">
            
            {/* Active service title */}
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-6 font-urbanist">
              {activeService}
            </h4>
            
            {/* Service details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceDetails[activeService]?.map((detail, index) => (
                <ServiceDetailItem
                  key={index}
                  service={detail}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
