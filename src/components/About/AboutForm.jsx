import React from 'react';

const AboutForm = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div
                className="flex flex-col md:flex-row w-full rounded-[20px] bg-[black] shadow-lg overflow-hidden"
                style={{
                    width: '100%',
                    maxWidth: 1394,
                }}
            >
                {/* Left */}
                <div
                    className="rounded-[20px] overflow-hidden h-[484px] flex-1 flex flex-col justify-center p-8"
                    style={{
                        padding: '0.81px',
                        background:
                            'linear-gradient(0deg, #FFFFFF 0%, #0038A0 41%, #8083A5 73%, #FFFFFF 100%)',
                        boxSizing: 'border-box',
                        minWidth: 704,
                    }}
                >
                    <div className="bg-black rounded-[19.19px] flex flex-col justify-start h-full p-0">
                        <h2
                            className="text-white uppercase mb-2 mt-4 px-6"
                            style={{
                                fontFamily: "Urbanist, sans-serif",
                                fontWeight: 900,
                                fontSize: '35px',
                                textAlign: 'center',
                                lineHeight: '150%',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            READY TO BUILD YOUR NEXT SOLUTION
                        </h2>

                        <p
                            className="text-gray-300 mb-6 text-base px-6 mx-auto"
                            style={{
                                fontFamily: "'Urbanist', sans-serif",
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '150%',
                                letterSpacing: '-0.02em',
                                textAlign: 'center',
                                maxWidth: '609px',
                            }}
                        >
                            Let's schedule a conversation to discuss how we can help you achieve your strategic goals.
                        </p>
                        <form className="space-y-4 px-4 w-full mx-auto">
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="flex-1 bg-[#26262b] text-white px-5 h-[35px] w-[346px] rounded text-base border-none outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="flex-1 bg-[#26262b] text-white px-5 h-[35px] w-[346px] rounded text-base border-none outline-none"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-[#26262b] text-white px-5 h-[35px] rounded text-base border-none outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-[#26262b] text-white px-5 h-[35px] rounded text-base border-none outline-none"
                            />
                            <textarea
                                placeholder="Message"
                                className="w-full bg-[#26262b] text-white px-5 rounded text-base border-none outline-none min-h-[56px] max-h-[120px] resize-none py-3"
                                style={{ height: '56px' }}
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white text-base h-[35px] rounded hover:bg-blue-700 transition"
                                style={{ fontFamily: 'Urbanist' }}
                            >
                                We are just a message away <span role="img" aria-label="rocket">🚀</span>
                            </button>
                        </form>

                    </div>
                </div>

                {/* Right: Contact Info */}
                <div
                    className="flex flex-col p-5 pt-0 bg-black rounded-r-[20px] h-[484px] justify-between"
                    style={{ width: 589, height:484 }}
                >
                    {/* Blue section */}
                    <div className="bg-gradient-to-b from-[#0038A0] to-[#0464DA] rounded-xl p-6 mb-4 text-white shadow mb-10">
                        <h2 className="text-[28px] font-bold" >Let’s Start a Conversation</h2>
                        <p className="mt-2 mb-4 text-base">
                            We’re here to help you succeed. Reach out to us through any of the channels below, our team will get back to you within 24 hours.
                        </p>
                        <button className="bg-black text-white font-semibold px-4 py-2 border rounded-[18px] shadow">
                            Schedule A Call Today
                        </button>
                    </div>
                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-4 p-5 text-black ">
                        <div className="bg-[#F0F0F0] rounded-xl p-4 shadow flex items-center gap-2">
                            <span className="bg-blue-600 rounded-full p-2 text-white h-[40px] w-[40px]"><img src="/images/location_icon.png" alt="" /></span>
                            <div>
                                <div className="font-bold mb-2">Visit Us</div>
                                <div className="text-[12px]">Khammam<br />Andhra Pradesh</div>
                            </div>
                        </div>
                        <div className="bg-[#F0F0F0] rounded-xl p-4 shadow flex items-center gap-2">
                            <span className="bg-blue-600 rounded-full p-2 text-white h-[40px] w-[40px]"><img src="/images/contact_icon.png" alt="" /></span>
                            <div>
                                <div className="font-bold mb-2">Call Us</div>
                                <div className="text-[12px]">+91 83411 87337<br />+91 73961 44250</div>
                            </div>
                        </div>
                        <div className="bg-[#F0F0F0] rounded-xl p-4 shadow flex items-center gap-2">
                            <span className="bg-blue-600 rounded-full p-2 text-white h-[40px] w-[40px]"><img src="/images/email_icon.png" alt="" /></span>
                            <div>
                                <div className="font-bold mb-2">Email Us</div>
                                <div className="text-[12px]">contact@infinimove.in</div>
                            </div>
                        </div>
                        <div className="bg-[#F0F0F0] rounded-xl p-4 shadow flex items-center gap-2">
                            <span className="bg-blue-600 rounded-full p-2 text-white h-[40px] w-[40px] "><img src="/images/business_icon.png" alt="" /></span>
                            <div>
                                <div className="font-bold mb-2">Business Hours</div>
                                <div className="text-[12px]">
                                    Monday-Friday : 9AM - 6PM<br />
                                    Saturday : 10 AM - 4 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutForm;
