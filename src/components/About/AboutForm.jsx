import React, { useRef } from "react";
import emailjs from "emailjs-com";

const AboutForm = () => {
  const form = useRef();
  const firstInputRef = useRef(); // ref for focusing first input

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          alert("Failed to send ❌, try again later.");
          console.log(error.text);
        }
      );
  };

  const focusForm = () => {
    firstInputRef.current.focus(); // focus the first input
  };

  return (
    <section className="w-full bg-black h-[70px] md:h-[350px] lg:h-[450px] flex flex-col items-center sm:py-8 md:py-10 px-2 sm:px-4">
      <div className="flex flex-row justify-center items-start w-full gap-2 sm:gap-3 md:gap-4">

        {/* Left: Gradient border wrapper - 60% */}
        <div
          className="flex-[0.6] min-w-[140px] sm:min-w-[220px] md:min-w-[300px] lg:min-w-[704px]
            h-[180px] sm:h-[200px] md:h-[330px] lg:h-[484px]
            rounded-md p-[1px]"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #0038A0 41%, #8083A5 73%, #FFFFFF 100%)",
          }}
        >
          {/* Inner black card */}
          <div className="bg-black rounded-md flex flex-col justify-center h-full p-2 sm:p-3 md:p-4">
            <h2 className="text-white uppercase text-center font-urbanist font-bold
              text-[6px] sm:text-[10px] md:text-[20px] lg:text-[33px] mb-1">
              READY TO BUILD YOUR NEXT SOLUTION
            </h2>
            <p className="text-gray-300 text-center font-urbanist
              text-[4px] sm:text-[8px] md:text-[10px] lg:text-[14.5px]
              max-w-[160px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[609px] mx-auto mb-2">
              Let's schedule a conversation to discuss how we can help you achieve your strategic goals.
            </p>

            {/* Contact Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-1 sm:space-y-2 md:space-y-2 w-full max-w-full"
            >
              <div className="flex gap-1 sm:gap-2">
                <input
                  ref={firstInputRef} // ref to focus
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="flex-1 w-[50%] bg-[#26262b] text-white px-2 py-0 sm:py-1 md:py-1
                    h-[14px] sm:h-[24px] md:h-[28px] lg:h-[35px] rounded text-[6px] sm:text-[8px] md:text-[10px] lg:text-base border-none outline-none"
                  required
                />
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="flex-1 w-[50%] bg-[#26262b] text-white px-2 py-0 sm:py-1 md:py-1
                    h-[14px] sm:h-[24px] md:h-[28px] lg:h-[35px] rounded text-[6px] sm:text-[8px] md:text-[10px] lg:text-base border-none outline-none"
                  required
                />
              </div>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="w-full bg-[#26262b] text-white px-2 py-0 sm:py-1 md:py-1
                  h-[14px] sm:h-[24px] md:h-[28px] lg:h-[35px] rounded text-[6px] sm:text-[8px] md:text-[10px] lg:text-base border-none outline-none"
                required
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="w-full bg-[#26262b] text-white px-2 py-0 sm:py-1 md:py-1
                  h-[14px] sm:h-[24px] md:h-[28px] lg:h-[35px] rounded text-[6px] sm:text-[8px] md:text-[10px] lg:text-base border-none outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full bg-[#26262b] text-white px-2 py-1 sm:py-2 md:py-2
                  rounded text-[6px] sm:text-[8px] md:text-[10px] lg:text-base border-none outline-none
                  min-h-[30px] sm:min-h-[50px] md:min-h-[60px] lg:min-h-[87px] resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white h-[16px] sm:h-[28px] md:h-[30px] lg:h-[35px]
                  rounded flex items-center justify-center gap-1 text-[6px] sm:text-[8px] md:text-[10px] lg:text-base
                  hover:bg-blue-700 transition"
              >
                <span>We are just a message away</span>
                <img
                  src="/images/rocket.svg"
                  alt=""
                  className="h-2 sm:h-3 md:h-4 w-3 sm:w-6 md:w-8 mt-0.5"
                  style={{ mixBlendMode: "lighten" }}
                />
              </button>
            </form>
          </div>
        </div>

        {/* Right: Contact Info Card - 40% */}
        <div className="flex-[0.4] min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[589px]
          h-[180px] sm:h-[200px] md:h-[220px] lg:h-[484px]
          flex flex-col justify-between p-1 sm:p-2 md:p-3 bg-black rounded-[20px]">

          {/* Blue section */}
          <div className="bg-gradient-to-b from-[#0038A0] to-[#0464DA] rounded-md p-1 sm:p-3 md:p-3 text-white shadow mb-2">
            <h2 className="text-[6px] sm:text-[10px] md:text-[14px] lg:text-[28px] font-bold">
              Let’s Start a Conversation
            </h2>
            <p className="mt-1 mb-2 text-[4px] sm:text-[8px] md:text-[10px] lg:text-[16px]">
              We’re here to help you succeed. Reach out to us through any of the channels below, our team will get back to you within 24 hours.
            </p>
            <button
              onClick={focusForm}
              className="bg-black text-white font-semibold px-2 sm:px-3 py-1 sm:py-2 text-[5px] sm:text-[8px] md:text-[10px] rounded-md shadow"
            >
              Schedule A Call Today
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-2 text-black h-full p-1">
            {[
              { title: "Visit Us", text: "Hyderabad\nTelangana", icon: "/images/location_icon.png" },
              { title: "Call Us", text: "+91 83411 87337\n+91 73961 44250", icon: "/images/contact_icon.png" },
              { title: "Email Us", text: "contact@infinimove.in", icon: "/images/email_icon.png" },
              { title: "Business Hours", text: "Mon-Fri: 9AM - 6PM\nSat: 10AM - 4PM", icon: "/images/BusinessHours.png" },
            ].map((info) => (
              <div
                key={info.title}
                className="bg-[#F0F0F0] rounded-md p-2 sm:p-3 md:p-3 lg:p-4 flex flex-col justify-start gap-1 shadow h-full"
              >
                <div className="flex items-center gap-1 sm:gap-1 md:gap-1">
                  <span className="bg-blue-600 rounded-xl p-1 sm:p-1 flex items-center justify-center h-4 w-4 sm:h-4 sm:w-4 md:h-7 md:w-7 lg:h-10 lg:w-10">
                    <img
                      src={info.icon}
                      alt=""
                      className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-4 md:w-4 lg:h-6 lg:w-6 object-contain"
                    />
                  </span>
                  <div className="font-bold text-[4px] sm:text-[5px] md:text-[9px] lg:text-[16px]">
                    {info.title}
                  </div>
                </div>
                <div className="whitespace-pre-line text-[4px] sm:text-[3px] md:text-[8px] lg:text-[12px]">
                  {info.text}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutForm;
