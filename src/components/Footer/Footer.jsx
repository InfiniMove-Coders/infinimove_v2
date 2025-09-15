import React from 'react';

const Footer = () => {
  return (
    <footer
      className="w-full lg:h-[450px] text-white pt-10 pb-4 mt-24"
      style={{
        background: 'radial-gradient(51.46% 51.46% at 50% 10.59%, #0038A0 0%, #000814 100%)',
        borderTop: '2px solid',
        borderImageSlice: 1,
        borderImageSource: 'linear-gradient(97.64deg, #FFFFFF -7.61%, #0038A0 41.06%, #8083A5 73.51%, #FFFFFF 103.75%, #000814 104.86%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-row gap-4 px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Left section - logo + company info */}
        <div className="flex-1 min-w-[100px] sm:min-w-[220px] md:min-w-[240px]" style={{ fontFamily: 'Urbanist' }}>
          <div className="flex items-center mb-3">
            <img src="/Vector.svg" alt="InfiniMove Logo" className="w-2 h-2 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:h-10 lg:w-10 mr-2" />
            <span className="font-semibold text-[7px] sm:text-base md:text-[15px] lg:text-[28px]">InfiniMove</span>
          </div>
          <div className="mb-4 text-[4px] sm:text-[8px] md:text-[13px] lg:text-base leading-relaxed max-w-xs sm:max-w-[180px] md:max-w-md">
            Transforming businesses through innovative <br />
            technology solutions. We help companies scale and succeed in the digital age.
          </div>
          <div className="text-[4px] sm:text-[12px] md:text-[13px] lg:text-sm mb-1">contact@infinimove.in</div>
          <div className="text-[4px] sm:text-[12px] md:text-[13px] lg:text-sm">
            +91 83411 87337 &nbsp;|&nbsp; +91 73961 44250
          </div>
        </div>

        {/* Right sections - all 4 links in single row */}
        <div className="flex flex-row flex-1 justify-between">
          {/* Company */}
          <div className="">
            <div className="font-semibold text-[5px] sm:text-sm md:text-[14px] lg:text-base mb-1">Company</div>
            <ul className="space-y-1 text-[4px] sm:text-[11px] md:text-[12px] lg:text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="">
            <div className="font-semibold text-[5px] sm:text-sm md:text-[14px] lg:text-base mb-1">Legal</div>
            <ul className="space-y-1 text-[4px] sm:text-[11px] md:text-[12px] lg:text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="">
            <div className="font-semibold text-[5px] sm:text-sm md:text-[14px] lg:text-base mb-1">Services</div>
            <ul className="space-y-1 text-[4px] sm:text-[11px] md:text-[12px] lg:text-sm">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">App Development</a></li>
              <li><a href="#" className="hover:underline">Consulting</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="">
            <div className="font-semibold text-[5px] sm:text-sm md:text-[14px] lg:text-base mb-1">Socials</div>
            <ul className="space-y-1 text-[4px] sm:text-[11px] md:text-[12px] lg:text-sm">
              <li><a href="https://www.linkedin.com/groups/14501329/" className="hover:underline">LinkedIn</a></li>
              <li><a href="https://x.com/infinimove18076" className="hover:underline">Twitter</a></li>
              <li><a href="https://www.instagram.com/infini.move?utm_source=ig_web_button_share_sheet&igsh=MXNtbHQ0ZzZpNndmbw==" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background text */}
      <div className="pointer-events-none select-none w-full flex justify-center mt-4 relative">
        <span
          className="font-bold text-[80px] sm:text-[90px] md:text-[110px] lg:text-[140px] leading-none text-transparent bg-clip-text opacity-70 tracking-tight relative z-20"
          style={{
            fontFamily: 'Urbanist',
            letterSpacing: '-3%',
            background: 'linear-gradient(180deg, #0085FF 14.68%, #0085FF 26.76%, rgba(0, 80, 153, 0) 82.87%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          InfiniMove
        </span>
      </div>

      <div className="text-center text-blue-500 text-[3px] sm:text-[11px] md:text-sm lg:text-sm font-medium" style={{ fontFamily: 'Urbanist' }}>
        © 2025 InfiniMove. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
