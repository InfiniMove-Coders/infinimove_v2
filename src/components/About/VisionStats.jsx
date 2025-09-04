import React from 'react';
const stats = [
    {
        headline: '20+ Projects',
        subtext: 'Successfully Delivered'
    },
    {
        headline: '10+ Industries',
        subtext: 'Collaborated'
    },
    {
        headline: '100+ Hours',
        subtext: 'Saved for Customers'
    },
    {
        headline: '100%',
        subtext: 'Happy Customers'
    }
];

const VisionStats = () => (
    <section className="w-full bg-black flex flex-col items-center py-12">
        <h2
            style={{
                textAlign: 'center',
                fontFamily: 'Urbanist',
                fontSize: '48px',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-2%',
                color: '#F0F0F0',
            }}
        >
            OUR VISION
        </h2>
        <p
            style={{
                maxWidth: 1400,
                textAlign: 'center',
                margin: '18px auto 64px auto',
                fontFamily: 'Urbanist',
                fontSize: '24px',
                fontWeight: 700,
                color: '#A5A5A5'
            }}
        >
            To empower businesses with state-of-the-art, reliable digital solutions that foster growth, optimize efficiency,<br />
            and provide a distinct competitive advantage
        </p>
        <div
            className="flex flex-wrap justify-center items-center gap-12 w-full"
            style={{ maxWidth: 1600, margin: '0 auto', marginTop: '24px' }}
        >
            {stats.map((stat, idx) => (
                <div
                    key={stat.headline}
                    id="StatsCard"
                    className="flex flex-col items-center justify-center "
                    style={{
                        background: '#060606',
                        borderRadius: '20px',
                        padding: '20px 30px 20px 30px',
                        boxShadow: '0 0 0 2px #2359d9',
                        width: '278px',
                        height: '163px'
                    }}
                >
                    <img
                        style={{
                            width: '63px',
                            height: '34px'
                        }}
                        src="/Vector.svg" alt="" />
                    <div
                        style={{
                            fontFamily: 'Urbanist',
                            fontWeight: 800,
                            fontSize: '36px',
                            color: '#F0F0F0',
                            margin: '10px 0 10px 0',
                            textAlign: 'center',
                        }}
                    >
                        {stat.headline}
                    </div>
                    <div
                        style={{
                            fontFamily: 'Urbanist',
                            fontWeight: 500,
                            fontSize: '16px',
                            color: '#F0F0F0',
                            textAlign: 'center'
                        }}
                    >
                        {stat.subtext}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default VisionStats