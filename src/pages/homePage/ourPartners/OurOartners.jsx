import React from "react";
import "./ourPartners.css";

const partnerLogos = [
  { id: 1, src: "sitek.png", alt: "Ситек" },
  { id: 2, src: "gurvana.png", alt: "Gurvana" },
  { id: 3, src: "gerat.png", alt: "Gerat" },
  { id: 4, src: "liquimoly.png", alt: "Liqui Moly" },
  { id: 5, src: "arb.png", alt: "ARB" },
  { id: 6, src: "bushranger.png", alt: "Bush Ranger" },
  { id: 7, src: "michelin.png", alt: "Michelin" },
  { id: 8, src: "continental.png", alt: "Continental" },
  { id: 9, src: "goodyear.png", alt: "Goodyear" },
  { id: 10, src: "pirelli.png", alt: "Pirelli" },
  { id: 11, src: "yokohama.png", alt: "Yokohama" },
  // Добавьте остальные логотипы
];

const OurPartners = () => {
  return (
    <div className="our-partners">
      <h2 className="title">Наши партнеры</h2>
      <div className="logo-grid">
        {partnerLogos.map((logo) => (
          <div className="logo-item" key={logo.id}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
