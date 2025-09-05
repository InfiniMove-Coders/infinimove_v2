import React from "react";

const InfiniMoveFooter = () => {
  return (
    <footer
      className="text-white py-4 px-8"
      style={{
        background:
          "radial-gradient(51.46% 51.46% at 50% 10.59%, #0038A0 0%, #000814 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-full transform rotate-45"></div>
              </div>
              <span className="text-xl font-semibold">InfiniMove</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Transforming businesses through innovative technology solutions.
              We help companies scale and succeed in the digital age.
            </p>
            <div className="space-y-1">
              <p className="text-gray-300 text-sm">contact@infinimove.in</p>
              <p className="text-gray-300 text-sm">
                +91 83411 87337 | +91 73961 44250
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Socials</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Company Name */}
        <div className="text-center mb-8 flex items-center justify-center h-[30vh]">
          <h1
            className="font-bold leading-none"
            style={{
              fontSize: "clamp(3rem, 15vw, 20rem)", // Responsive but will scale with width
              width: "80vw", // Occupies 75% of viewport width
              height: "30vh", // Occupies 30% of viewport height
              background:
                "linear-gradient(180deg, #FFFFFF 10.68%, #0085FF 26.76%, rgba(0, 80, 153, 0) 90.87%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0px 2px 6px rgba(0,0,0,0.25)", // reduced shadow strength
            }}
          >
            InfiniMove
          </h1>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-xs">
            © 2025 Infinimove. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default InfiniMoveFooter;
