import React from "react";

const services = [
  {
    title: "Enterprise Software(ERP)",
    options: "30 options available",
    icon: "/images/ServiceIcon.png",
  },
  {
    title: "SaaS Development",
    options: "30 options available",
    icon: "/images/ServiceIcon.png",
  },
  {
    title: "Desktop App Development",
    options: "30 options available",
    icon: "/images/ServiceIcon.png",
  },
  {
    title: "Custom Software Development",
    options: "30 options available",
    icon: "/images/ServiceIcon.png",
  },
  {
    title: "Legacy System Modernization",
    options: "30 options available",
    icon: "/images/ServiceIcon.png",
  },
];

const ServiceCards4 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        gap: 38,
        width: 1310,
        height: 345,
        margin: "0 auto",
        marginBottom:"70px",
      }}
    >
      {/* Headline and Subtitle */}
      <div>
        <h1
          style={{
            width: 1310,
            height: 52,
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: 40,
            lineHeight: "52px",
            textAlign: "center",
            letterSpacing: "-0.03em",
            color: "#F0F0F0",
            margin: 0,
            alignSelf: "stretch",
            flexGrow: 0,
          }}
        >
          Software Development
        </h1>
        <div
          style={{
            width: 1310,
            height: 20,
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: 20,
            lineHeight: "20px",
            textAlign: "center",
            letterSpacing: "-0.03em",
            color: "#F0F0F0",
            marginTop: 10,
            alignSelf: "stretch",
            flexGrow: 0,
          }}
        >
         Custom software solutions to automate and enhance your business.
        </div>
      </div>

      {/* Cards Row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 34,
          justifyContent: "center",
          width: "100%",
        }}
      >
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              borderRadius: 30,
              padding: 1,
              background:
                "linear-gradient(71.56deg, rgba(255, 255, 255, 0.25) 14.75%, #0038A0 57.63%, #8083A5 118.98%, #FFFFFF 166.97%, rgba(0, 8, 20, 0.61) 168.49%)",
              boxSizing: "border-box",
              flex: "none",
              order: 0,
              flexGrow: 0,
            }}
          >
            <div
              style={{
                width: 234,
                height: 217,
                background: "black",
                borderRadius: 29,
                boxShadow: "0 2px 10px 0 rgba(24,49,167,0.08)",
                padding: "30px 45px",
                gap: 10,
                justifyContent: "center",
                transition: "box-shadow 0.2s",
              }}
            >
              <div
                style={{
                  backgroundColor: "#0464DA",
                  borderRadius: 12,
                  marginLeft: 0,
                  padding: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  flexShrink: 0,
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{ width: 42, height: 42, objectFit: "contain" }}
                />
              </div>
              <div
                style={{
                  color: "#F0F0F0",
                  fontSize: '15px',
                  fontStyle:'bold',
                  fontFamily: "Manrope",
                  fontWeight: 700,
                  marginLeft: 0,
                  marginTop: 20,
                  letterSpacing:'-2%',
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ marginBottom: 15, lineHeight: 1.2 }}>
                  {service.title}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: "#41529e",
                    fontWeight: 500,
                    marginTop: "20px",
                  }}
                >
                  {service.options}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards4;
