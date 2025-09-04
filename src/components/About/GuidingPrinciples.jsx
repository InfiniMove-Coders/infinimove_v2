import React from "react";

const GuidingPrinciples = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      justifyContent: "center",
      background: "black"
    }}
  >
    {/* Heading */}
    <h1
      style={{
        color: "#F0F0F0",
        fontSize: "48px",
        fontWeight: 900,
        margin: 0,
        letterSpacing: "1px"
      }}
    >
      OUR GUIDING PRINCIPLES
    </h1>
    {/* Subtitle */}
    <p
      style={{
        color: "#ABABAB",
        fontSize: "24px",
        marginTop: "18px",
        marginBottom: "40px",
        fontWeight: 700,
        textAlign: "center"
      }}
    >
      Examine our recent projects and the significant impact we've delivered for our clients
    </p>
    {/* Guiding Principles Image */}
    <img
      src="/images/GuidingPrinciple.png"
      alt="Guiding Principles"
      style={{
        width: "470px",
        height: "auto",
        marginTop: "16px"
      }}
    />
  </div>
);

export default GuidingPrinciples;
