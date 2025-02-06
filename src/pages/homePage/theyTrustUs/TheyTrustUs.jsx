import React from "react";
import "./theyTrustUs.css";

const logos = [
  { id: 1, src: "sitek.png", alt: "Ситек" },
  { id: 2, src: "gurvana.png", alt: "Gurvana" },
  { id: 3, src: "gerat.png", alt: "Gerat" },
  { id: 4, src: "liquimoly.png", alt: "Liqui Moly" },
  { id: 5, src: "arb.png", alt: "ARB" },
  { id: 6, src: "bur.png", alt: "BUR" },
];

const TheyTrustUs = () => {
  return (
    <div className="they-trust-us">
      <h2 className="title">Нам доверяют</h2>
      <div className="logo-grid">
        {logos.map((logo) => (
          <div className="logo-item" key={logo.id}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheyTrustUs;
