import React from 'react';

const Footer = () => {
  return (
    <footer
      className="w-full text-white pt-10 pb-4 mt-24"
      style={{
        background: 'radial-gradient(51.46% 51.46% at 50% 10.59%, #0038A0 0%, #000814 100%)',
        minHeight: '450px',
        borderTop: '2px solid', // top border width and style
        borderImageSlice: 1,
        borderImageSource: 'linear-gradient(97.64deg, #FFFFFF -7.61%, #0038A0 41.06%, #8083A5 73.51%, #FFFFFF 103.75%, #000814 104.86%)',
      }}
    >
      {/* Footer content remains unchanged */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 px-6 pl-25">
        <div className="flex-1 min-w-[340px]" style={{fontFamily:'urbanist'}}>
          <div className="flex items-center mb-4">
            <img src="/Vector.svg" alt="InfiniMove Logo" className="w-10 h-10 mr-2" />
            <span className="font-semibold text-2xl" >InfiniMove</span>
          </div>
          <div className="mb-6 text-base font-weight-400 font-[16px] max-w-md leading-relaxed">
            Transforming businesses through innovative <br />
            technology solutions.
            We help companies scale and succeed in the digital age.
          </div>
          <div className="text-base font-weight-400 font-[16px] mb-2">contact@infinimove.in</div>
          <div className="text-base font-weight-400 font-[16px]">
            +91 83411 87337 &nbsp;|&nbsp; +91 73961 44250
          </div>
        </div>
        <div className="flex-[2_2_0%] grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 items-start" style={{fontFamily:'Plus Jakarta Sans'}}>
          <div>
            <div className="font-semibold text-xl mb-3">Company</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-xl mb-3">Legal</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-xl mb-3">Services</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">App Development</a></li>
              <li><a href="#" className="hover:underline">Consulting</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-xl mb-3">Socials</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pointer-events-none select-none w-full flex justify-center mt-4 relative">
        <span
          className="font-bold text-[140px] md:text-[200px] leading-none text-transparent bg-clip-text opacity-70 tracking-tight relative z-20"
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

      <div className="text-center text-blue-500 text-sm font-medium" style={{fontFamily:'urbanist'}}>
        © 2025 Infinimove. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
