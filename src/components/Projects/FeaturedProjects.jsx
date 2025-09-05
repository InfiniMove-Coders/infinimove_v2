
import React from 'react';

const projectCards = [
    {
        stats: [
            { text: "80% faster response time", color: "text-yellow-400" },
            { text: "95% customer satisfaction", color: "text-yellow-400" },
            { text: "60% cost reduction", color: "text-yellow-400" }
        ],
        quote: {
            text: "“The AI chatbot handles 90% of our customer queries automatically. Our team can now focus on complex issues.”",
            name: "Jennifer Martinez",
            title: "Customer Success Director",
            avatar: "/images/Testimony.png"
        },
        image: "/images/FP1.png",
        dark: true,
    },
    {
        stats: [
            { text: "80% faster response time", color: "text-yellow-400" },
            { text: "95% customer satisfaction", color: "text-yellow-400" },
            { text: "60% cost reduction", color: "text-yellow-400" }
        ],
        quote: {
            text: "“The AI chatbot handles 90% of our customer queries automatically. Our team can now focus on complex issues.”",
            name: "Jennifer Martinez",
            title: "Customer Success Director",
            avatar: "/images/Testimony.png"
        },
        image: "/images/FP1.png",
        dark: false,
    },
    {
        stats: [
            { text: "80% faster response time", color: "text-yellow-400" },
            { text: "95% customer satisfaction", color: "text-yellow-400" },
            { text: "60% cost reduction", color: "text-yellow-400" }
        ],
        quote: {
            text: "“The AI chatbot handles 90% of our customer queries automatically. Our team can now focus on complex issues.”",
            name: "Jennifer Martinez",
            title: "Customer Success Director",
            avatar: "/images/Testimony.png"
        },
        image: "/images/FP1.png",
        dark: true,
    },
    {
        stats: [
            { text: "80% faster response time", color: "text-yellow-400" },
            { text: "95% customer satisfaction", color: "text-yellow-400" },
            { text: "60% cost reduction", color: "text-yellow-400" }
        ],
        quote: {
            text: "“The AI chatbot handles 90% of our customer queries automatically. Our team can now focus on complex issues.”",
            name: "Jennifer Martinez",
            title: "Customer Success Director",
            avatar: "/images/Testimony.png"
        },
        image: "/images/FP1.png",
        dark: false,
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
        <section className="w-full py-14 bg-black border flex flex-col items-center" style={{fontFamily:'urbanist'}}>
            {/* Header */}
            <div className=" text-center">
                <div className="uppercase font-extrabold text-[48px] text-[#F0F0F0] mb-1 tracking-widest" style={{ letterSpacing: '0.04em',}}>
                    Featured Projects
                </div>
                <div className="text-[#ABABAB] text-[18px] font-medium" >
                    Discover how we can elevate your business.
                </div>
            </div>

            {/* Card List */}
            <div className="flex flex-col gap-10 w-full max-w-[1150px] p-[60px]">
                {projectCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl p-[2px] shadow-lg"
                        style={{
                            padding: '0.81px',
                            background:
                                'linear-gradient(0deg, #FFFFFF 0%, #0038A0 41%, #8083A5 73%, #FFFFFF 100%)',
                            boxSizing: 'border-box',
                            minWidth: 704,
                        }}
                    >
                        <div className={`rounded-2xl px-6 py-7 flex flex-col md:flex-row items-stretch w-full h-full ${cardBg[idx]} ${cardText[idx]}`}>
                            {/* Left text/blurb */}
                            <div className="flex-1 flex flex-col justify-between pr-6 py-1">
                                <div>
                                    <h3 className="text-[28px] font-bold mb-2">
                                        AI-Powered Customer Service Revolution
                                    </h3>
                                    <div className="opacity-90 mb-4 text-[14px] font-400 leading-snug">
                                        Implemented conversational AI that reduced response time by 80% and increased customer satisfaction to 95%.
                                    </div>
                                    <ul className="mb-4 space-y-1">
                                        {card.stats.map((stat, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className={`${stat.color} text-lg font-bold`}>★</span>
                                                <span className="text-[14px] font-500">{stat.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Quote Box */}
                                    <div className="rounded-xl bg-[#0038A0] mt-2 px-4 py-3 flex shadow-2xl items-center gap-3 w-[463px]">
                                        <div className="w-18 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                            <img src={card.quote.avatar} alt="avatar" className="w-full h-full" />
                                        </div>
                                        <div>
                                            <div className="italic text-[14px] leading-snug mb-1">{card.quote.text}</div>
                                            <div className="font-bold text-[14px]">
                                                {card.quote.name}
                                                <span className="font-bold text-[14px]">, {card.quote.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right image */}
                            <div className="w-[500px] mt-2 pr-[18px] flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={card.image}
                                    alt="project"
                                    className="rounded-xl w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
