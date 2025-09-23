import React from 'react';

const projectCards = [
    {
        title: "DhyanU - Personalized Meditation Journeys",
        description: "DhyanU leverages AI-driven decision engines to deliver adaptive, personalized meditation experiences, enhancing mental well-being while tapping into a growing global and Indian market.",
        stats: [
            { text: "₹2,500 crore global meditation market", color: "text-yellow-400" },
            { text: "₹9,500 crore Indian recommendation market", color: "text-yellow-400" },
            { text: "AI-powered decision engine for personalization", color: "text-yellow-400" }
        ],
        quote: {
            text: "“DhyanU uses AI-powered decision engines to create personalized meditation journeys, transforming the way people approach mindfulness.”",
            name: "DhyanU Team",
            title: "AI Meditation Innovators",
        },
        image: "/images/DhanU.svg",
        dark: true,
    },
    {
        title: "AI Chatbot for Customer Experience",
        description: "Implemented conversational AI that reduced response time by 80% and increased customer satisfaction to 95%.",
        stats: [
            { text: "80% faster response time", color: "text-yellow-400" },
            { text: "95% customer satisfaction", color: "text-yellow-400" },
            { text: "60% cost reduction", color: "text-yellow-400" }
        ],
        quote: {
            text: "“The AI chatbot handles 90% of our customer queries automatically. Our team can now focus on complex issues.”",
            name: "Infinimove Team",
            title: "Customer Success Director",
            avatar: "/images/Testimony.png"
        },
        image: "/images/AIChatbot.svg",
        dark: false
    },
    {
        title: "E-Commerce Enterprise Website",
        description: "We delivered a scalable, high-performance e-commerce platform with exceptional user experience, boosting customer satisfaction and sales growth.",
        stats: [
            { text: "40% increase in customer satisfaction", color: "text-yellow-400" },
            { text: "30% higher conversion rate", color: "text-yellow-400" },
            { text: "99.9% uptime & seamless performance", color: "text-yellow-400" }
        ],
        quote: {
            text: "“The team delivered our enterprise e-commerce website with exceptional quality and efficiency. The user experience is top-notch, and we’ve seen a major boost in engagement and sales.”",
            name: "E-Commerce Director",
            title: "Retail Enterprise",
            avatar: "/images/Testimony.png"
        },
        image: "/images/ecommerceweb.svg", // we’ll generate this SVG
        dark: true
    },
];

const cardBg = [
    "bg-[#00064B]",
    "bg-[#0038A0]",
    "bg-[#000814]",
    "bg-[#00064B]"
];

const cardText = [
    "text-white",
    "text-white",
    "text-white",
    "text-white"
];

export default function FeaturedProjects() {
    return (
        <section className="w-full h-[800px] md:h-auto lg:h-auto bg-black flex flex-col items-center text-urbanist">
            {/* Header */}
            <div className="text-center px-4 sm:px-6">
                <div className="uppercase font-extrabold text-[18px] text-[#F0F0F0] tracking-widest sm:text-[36px] md:text-[42px] lg:text-[45px]">
                    Featured Projects
                </div>
                <div className="text-[#ABABAB] text-[8px] font-medium sm:text-[14px] md:text-[16px] lg:text-[18px]">
                    Discover how we can elevate your business.
                </div>
            </div>

            {/* Card List */}
            <div className="flex flex-col gap-10 lg:w-full w-[460px] md:w-[750px] max-w-[1150px] p-[60px] sm:p-4 md:p-8">
                {projectCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl p-[2px] shadow-lg"
                        style={{
                            background: 'linear-gradient(0deg, #FFFFFF 0%, #0038A0 41%, #8083A5 73%, #FFFFFF 100%)',
                            boxSizing: 'border-box',
                            minWidth: 0,
                        }}
                    >
                        <div className={`rounded-2xl flex flex-row md:flex-row items-stretch w-full h-full ${cardBg[idx]} ${cardText[idx]} p-4 md:p-6`}>
                            {/* Left text/blurb */}
                            <div className="flex-1 flex flex-col justify-between lg:p-3 pr-2 md:pr-6 py-1">
                                <div>
                                    <h3 className="text-[7px] font-bold mb-1 sm:text-[20px] md:text-[14px] lg:text-[24px]">
                                        {card.title}
                                    </h3>
                                    <div className="opacity-90 mb-2 text-[5px] font-400 leading-snug sm:text-[12px] md:text-[10px] lg:text-[16px]">
                                        {card.description}
                                    </div>
                                    <ul className="mb-4 space-y-1">
                                        {card.stats.map((stat, i) => (
                                            <li key={i} className="flex items-center">
                                                <span className={`${stat.color} text-[5px] font-bold sm:text-base md:text-[10px] lg:text-[12px]`}>★</span>
                                                <span className="text-[5px] font-500 sm:text-[12px] md:text-[10px] lg:text-[12px]">{stat.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Quote Box */}
                                    <div className="rounded-md bg-[#0038A0] py-2 px-2 lg:mt-2 lg:px-4 lg:py-3 flex shadow-2xl items-center lg:gap-4 gap-2 w-full h-[30px] lg:w-full lg:h-[100px] md:h-[80px] md:w-[250px] sm:flex-row sm:items-start">
                                        <div>
                                            <div className="italic text-[3px] leading-snug mb-1 sm:text-[10px] md:text-[10px] lg:text-[15px]">{card.quote.text}</div>
                                            <div className="font-bold text-[3px] sm:text-[12px] md:text-[10px] lg:text-[11px]">
                                                {card.quote.name}
                                                <span className="font-bold text-[3px] sm:text-[12px] md:text-[9px] lg:text-[11px]">, {card.quote.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right image */}
                            <div className="w-[180px] md:w-[350px] lg:w-[400px] flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={card.image}
                                    alt="project"
                                    className="rounded-md  sm:w-[350px] md:w-[350px] lg:w-[450px] lg:h-[300px] object-cover sm:h-[200px] md:h-[260px]"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
