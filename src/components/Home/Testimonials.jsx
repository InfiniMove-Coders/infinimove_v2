import React, { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa"; // ⭐ star

const testimonials = [
  {
    name: "Ram Mohan",
    location: "Kadapa , AP",
    rating: 4.5,
    text: "The team did an outstanding job with our college website. It’s intuitive, visually appealing, and has significantly improved our user engagement.",
    img: "/images/TC1.png",
  },
  {
  name: "Unknown",
  location: "Hyderabad,TS",
  rating: 4.6,
  text: "The designs delivered were visually stunning and user-friendly. Navigation feels effortless, and customers appreciate the refreshed look.",
  img: "/images/TC1.png",
},
  {
    name: "Hasini Enterprises",
    location: "Bangalore,KA",
    rating: 4.7,
    text: "The e-commerce website was delivered with exceptional quality and efficiency. It offers a top-notch user experience, leading to increased customer satisfaction.",
    img: "/images/TC1.png",
  },
  {
  name: "Unknown",
  location: "Hyderabad, TS",
  rating: 4.9,
  text: "The AI-powered chatbot completely changed our customer service. Queries are resolved instantly, and users feel supported at all times.",
  img: "/images/TC1.png",
}
];

export const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Duplicate testimonials for infinite flow
  const extendedTestimonials = [...testimonials, ...testimonials];

  const scrollToIndex = (index, smooth = true) => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.children[0].offsetWidth + 32; // card + gap
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  const handleNext = () => {
    let newIndex = current + 1;
    setCurrent(newIndex);
    scrollToIndex(newIndex);

    if (newIndex >= extendedTestimonials.length - testimonials.length) {
      setTimeout(() => {
        setCurrent(0);
        scrollToIndex(0, false);
      }, 500);
    }
  };

  const handlePrev = () => {
    let newIndex = current - 1;
    if (newIndex < 0) {
      newIndex = extendedTestimonials.length - testimonials.length - 1;
      setCurrent(newIndex);
      scrollToIndex(newIndex, false);
    } else {
      setCurrent(newIndex);
      scrollToIndex(newIndex);
    }
  };

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative w-full bg-[#000328] h-[400px] md:h-[550px] lg:h-[600px] flex flex-col items-center justify-center">
      {/* Banner */}
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto px-4">
        <h2
          className="
            font-rubik font-medium text-[#F0F0F0] text-center
            text-[18px] leading-[34px] sm:text-[22px] sm:leading-[32px]
            md:text-[28px] md:leading-[40px]
            lg:text-[35px] lg:leading-[50px] 
            w-full max-w-[422px]
          "
        >
          Trusted by Thousands of Happy Customers
        </h2>
        <p
          className="
            font-plusjakartasans text-center text-white mt-3
            text-[10px] leading-[22px] sm:text-[13px] sm:leading-[20px]
            md:text-[16px] md:leading-[25px]
            lg:text-[18px] lg:leading-[27px] 
            w-full max-w-[529px]
          "
        >
          Here's what Our clients say!
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex flex-row gap-6 md:gap-8 items-start justify-start w-full max-w-[1297px] px-4 md:px-6 lg:px-8 mb-8 overflow-hidden"
      >
        {extendedTestimonials.map((t, i) => (
          <div
            key={i}
            className="
              relative bg-white rounded-[10px] shadow-lg shrink-0 flex flex-col px-4 py-5 mt-6
              w-[180px] h-[140px] sm:w-[240px] sm:h-[190px]
              md:w-[300px] md:h-[210px]
              lg:w-[400px] lg:h-[230px]
            "
          >
            {/* User Avatar */}
            <div className="absolute left-2 top-4 flex items-center sm:left-5 sm:top-5 md:left-6 md:top-6">
              <div className="relative rounded-full w-[20px] h-[20px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-[#0464DA] flex items-center justify-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-[18px] h-[18px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] rounded-full object-cover"
                />
              </div>
            </div>

            {/* Name and Rating */}
            <div className="absolute left-10 sm:left-24 md:left-28 top-5 md:top-7 flex items-center gap-2">
              <span className="font-rubik font-medium text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-black">
                {t.name}
              </span>
              <div className="flex items-center">
                <span className="font-rubik text-[8px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-black">
                  {t.rating}
                </span>
                <FaStar className="text-yellow-400 ml-1 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px]" />
              </div>
            </div>

            {/* Location */}
            <div className="absolute left-10 sm:left-24 md:left-28 top-10 md:top-14 font-rubik text-[8px] sm:text-[13px] md:text-[14px] text-black">
              {t.location}
            </div>

            {/* Testimonial Text */}
            <p
              className="
                absolute left-4 sm:left-5 md:left-6 top-13 md:top-24 
                font-rubik text-black flex items-center
                text-[8px] leading-[18px] sm:text-[13px] sm:leading-[20px]
                md:text-[14px] md:leading-[22px]
                lg:text-[16px] lg:leading-[26px]
                w-[140px] sm:w-[200px] md:w-[260px] lg:w-[320px]
                h-[60px] md:h-[90px] lg:h-[100px]
              "
            >
              {t.text}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex flex-row items-center justify-center gap-3 md:gap-4 mt-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`${
              current % testimonials.length === i
                ? "w-[20px] sm:w-[35px] md:w-[40px] lg:w-[45px] bg-white"
                : "w-[8px] sm:w-[12px] md:w-[13px] lg:w-[15px] bg-[#AAAAAA]"
            } h-[8px] sm:h-[12px] md:h-[13px] lg:h-[15px] rounded-[10px] transition-all`}
          />
        ))}
      </div>

      {/* Arrow Buttons */}
      <div className="flex flex-row items-center justify-center gap-4 md:gap-6 mt-6">
        <button
          onClick={handlePrev}
          className="w-[15px] h-[15px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center"
        >
          {/* Left Arrow */}
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 7.74961H3.925L8.4625 2.29961C8.67467 2.04434 8.77675 1.71524 8.74628 1.38471C8.7158 1.05417 8.55527 0.749285 8.3 0.537112C8.04473 0.324939 7.71563 0.222862 7.3851 0.253336C7.05456 0.283811 6.74967 0.444341 6.5375 0.699612L0.2875 8.19961C0.245451 8.25927 0.207849 8.32194 0.175 8.38711C0.175 8.44961 0.175 8.48711 0.0875002 8.54961C0.0308421 8.69294 0.0011764 8.8455 0 8.99961C0.0011764 9.15372 0.0308421 9.30629 0.0875002 9.44961C0.0875002 9.51211 0.0874998 9.54961 0.175 9.61211C0.207849 9.67729 0.245451 9.73996 0.2875 9.79961L6.5375 17.2996C6.65503 17.4407 6.8022 17.5542 6.96856 17.632C7.13491 17.7097 7.31636 17.7499 7.5 17.7496C7.79207 17.7502 8.07511 17.6485 8.3 17.4621C8.42657 17.3572 8.5312 17.2283 8.60789 17.0829C8.68458 16.9374 8.73183 16.7783 8.74692 16.6146C8.76202 16.4509 8.74466 16.2858 8.69586 16.1288C8.64705 15.9718 8.56775 15.8259 8.4625 15.6996L3.925 10.2496H18.75C19.0815 10.2496 19.3995 10.1179 19.6339 9.8835C19.8683 9.64907 20 9.33113 20 8.99961C20 8.66809 19.8683 8.35015 19.6339 8.11573C19.3995 7.88131 19.0815 7.74961 18.75 7.74961Z"
              fill="white"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="w-[15px] h-[15px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center"
        >
          {/* Right Arrow */}
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 7.74961H16.075L11.5375 2.29961C11.3253 2.04434 11.2232 1.71524 11.2537 1.38471C11.2842 1.05417 11.4447 0.749285 11.7 0.537112C11.9553 0.324939 12.2844 0.222862 12.6149 0.253336C12.9454 0.283811 13.2503 0.444341 13.4625 0.699612L19.7125 8.19961C19.7545 8.25927 19.7922 8.32194 19.825 8.38711C19.825 8.44961 19.825 8.48711 19.9125 8.54961C19.9692 8.69294 19.9988 8.8455 20 8.99961C19.9988 9.15372 19.9692 9.30629 19.9125 9.44961C19.9125 9.51211 19.9125 9.54961 19.825 9.61211C19.7922 9.67729 19.7545 9.73996 19.7125 9.79961L13.4625 17.2996C13.345 17.4407 13.1978 17.5542 13.0314 17.632C12.8651 17.7097 12.6836 17.7499 12.5 17.7496C12.2079 17.7502 11.9249 17.6485 11.7 17.4621C11.5734 17.3572 11.4688 17.2283 11.3921 17.0829C11.3154 16.9374 11.2682 16.7783 11.2531 16.6146C11.238 16.4509 11.2553 16.2858 11.3041 16.1288C11.3529 15.9718 11.4322 15.8259 11.5375 15.6996L16.075 10.2496H1.25C0.91848 10.2496 0.600536 10.1179 0.366116 9.8835C0.131695 9.64907 0 9.33113 0 8.99961C0 8.66809 0.131695 8.35015 0.366116 8.11573C0.600536 7.88131 0.91848 7.74961 1.25 7.74961Z"
              fill="#F0F0F0"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
