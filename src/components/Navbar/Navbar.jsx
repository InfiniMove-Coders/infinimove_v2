import React, { useState, useEffect } from "react";
import { NavLink, useLocation ,useNavigate } from "react-router-dom";
import routes from "../../pages/Routes/Routes";

const Navbar = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(() => {
    const currentRoute = routes.find((route) => route.path === location.pathname);
    return currentRoute ? currentRoute.name : "Home";
  });

  useEffect(() => {
    const currentRoute = routes.find((route) => route.path === location.pathname);
    if (currentRoute && currentRoute.name !== activeTab) {
      setActiveTab(currentRoute.name);
    }
  }, [location.pathname, activeTab]);

  const navigate=useNavigate();

  const getNavLinkClasses = (isActive, width) =>
    `font-[Plus Jakarta Sans] font-semibold cursor-pointer relative flex items-center justify-center
     ${width ? `w-[${width}px]` : "w-auto"} 
     text-[7px] sm:text-[8px] md:text-[12px] lg:text-[17px]   
     ${isActive ? "text-[#F0F0F0] opacity-100" : "text-white opacity-80"}
     hover:text-white transition-colors`;

  return (
    <nav className="w-[90%] mx-auto mt-[10px] flex justify-center py-1">
      <div className="relative w-[95%] sm:w-[90%] md:w-[90%] rounded-full bg-transparent backdrop-blur-[2px] z-10">
        <div
          className="
            gradient-border relative rounded-full bg-transparent backdrop-blur-md 
            flex items-center justify-between
            h-[22px] sm:h-[28px] md:h-[50px] lg:h-[75px] 
            px-4 sm:px-6 md:px-8 lg:px-10
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2" onClick={()=>navigate("/")}>
            <img
              src="/infinimove_v2/Vector.svg"
              alt="Logo"
              className="w-2 h-2 sm:w-3 sm:h-2.5 md:w-4 md:h-3 lg:w-8 lg:h-6"
            />
            <span className="font-[Urbanist] font-semibold text-[8px] sm:text-[9px] md:text-[11px] lg:text-[17px] text-white">
              InfiniMove
            </span>
          </div>

          {/* Nav Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
            {routes.map(({ name, path, width }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) => getNavLinkClasses(isActive, width)}
                onClick={() => setActiveTab(name)}
              >
                {name}
                {activeTab === name && (
                  <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[4px] sm:w-[6px] md:w-[8px] lg:w-[10px] h-[0.5px] sm:h-[0.5px] md:h-[1px] lg:h-[1.5px] bg-white rounded" />
                )}
              </NavLink>
            ))}

            {/* Contact */}
            <NavLink
              to="/about#contact"
              className={({ isActive }) => getNavLinkClasses(isActive, 50)}
              onClick={() => setActiveTab("Contact")}
            >
              Contact
              {activeTab === "Contact" && (
                <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[4px] sm:w-[6px] md:w-[8px] lg:w-[10px] h-[0.5px] sm:h-[0.5px] md:h-[1px] lg:h-[1.5px] bg-white rounded" />
              )}
            </NavLink>
          </div>
        </div>
      </div>

      {/* Gradient Border */}
      <style>
        {`
          .gradient-border::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            padding: 1px;
            background: linear-gradient(97.64deg, rgb(49,26,26) -7.61%, #0038A0 41.06%, #8083A5 73.51%, #FFFFFF 103.75%, #000814 104.86%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
            pointer-events: none;
            z-index: -1;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
