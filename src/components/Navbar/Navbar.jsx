import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import routes from '../../pages/Routes/Routes';

const Navbar = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(() => {
    // Set initial active tab based on current path on first render
    const currentRoute = routes.find(route => route.path === location.pathname);
    return currentRoute ? currentRoute.name : 'Home';
  });

  useEffect(() => {
    // Update activeTab whenever URL path changes (including refresh and navigation)
    const currentRoute = routes.find(route => route.path === location.pathname);
    if (currentRoute && currentRoute.name !== activeTab) {
      setActiveTab(currentRoute.name);
    }
  }, [location.pathname, activeTab]);

  const navLinkBaseStyle = {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-3%',
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '24px',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const getNavLinkStyle = (width, isActive = false) => ({
    ...navLinkBaseStyle,
    color: isActive ? '#F0F0F0' : '#FFFFFF',
    width: width ? `${width}px` : 'auto',
    opacity: isActive ? 1 : 0.9,
    position: 'relative',
  });

  return (
    <nav className="w-full px-8 py-5 flex justify-center">
      <div
        className="relative w-[1120px] rounded-full bg-transparent backdrop-blur-[2px]"
        style={{ zIndex: 10 }}
      >
        <style>
          {`
            .gradient-border::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: 9999px;
              padding: 1px;
              background: linear-gradient(97.64deg, rgb(49,26,26) -7.61%, #0038A0 41.06%, #8083A5 73.51%, #FFFFFF 103.75%, #000814 104.86%);
              -webkit-mask:
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
              -webkit-mask-composite: destination-out;
              mask-composite: exclude;
              pointer-events: none;
              z-index: -1;
            }
          `}
        </style>

        <div className="gradient-border relative rounded-full bg-transparent backdrop-blur-md flex items-center h-[78px] px-10">
          {/* Logo */}
          <div className="flex items-center" style={{ width: '262.5px', height: '22.13px', gap: '10px' }}>
            <img src="/Vector.svg" alt="Logo" style={{ width: '41.29px', height: '22.13px' }} />
            <span
              style={{
                width: '96px',
                height: '22px',
                fontFamily: 'Urbanist',
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '100%',
                letterSpacing: '-3%',
                verticalAlign: 'middle',
                color: '#FFFFFF',
              }}
            >
              InfiniMove
            </span>
          </div>

          {/* Nav Menu */}
          <div className="flex items-center space-x-8 ml-auto">
            {routes.map(({ name, path, width }) => (
              <NavLink
                key={name}
                to={path}
                style={({ isActive }) => getNavLinkStyle(width, isActive)}
                className="relative hover:text-white transition-colors"
                onClick={() => setActiveTab(name)}
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                {name}
                {activeTab === name && (
                  <div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: '13px',
                      height: '2px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '1px',
                    }}
                  />
                )}
              </NavLink>
            ))}

            {/* Separate Contact Link */}
            <NavLink
              to="/about#contact"
              style={({ isActive }) => getNavLinkStyle(80, isActive)}
              className="relative hover:text-white transition-colors"
              onClick={() => setActiveTab('Contact')}
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              Contact
              {activeTab === 'Contact' && (
                <div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                  style={{
                    width: '13px',
                    height: '2px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '1px',
                  }}
                />
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
