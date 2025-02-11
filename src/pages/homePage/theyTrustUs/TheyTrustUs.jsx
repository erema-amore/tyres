import React, { useState, useEffect } from "react";
import "./theyTrustUs.css";
import arb from "../../../assets/homePage/TheyTrustUs/arb.png";
import barum from "../../../assets/homePage/TheyTrustUs/barum.png";
import bf_goodrich from "../../../assets/homePage/TheyTrustUs/bf-goodrich.png";
import bridgestone from "../../../assets/homePage/TheyTrustUs/bridgestone.png";
import buch_ranger from "../../../assets/homePage/TheyTrustUs/buch-ranger.png";
import citek from "../../../assets/homePage/TheyTrustUs/citek.png";
import continental from "../../../assets/homePage/TheyTrustUs/continental.png";
import delta from "../../../assets/homePage/TheyTrustUs/delta.png";
import dunlop from "../../../assets/homePage/TheyTrustUs/dunlop.png";
import general_tire from "../../../assets/homePage/TheyTrustUs/general-tire.png";
import gerat from "../../../assets/homePage/TheyTrustUs/gerat.png";
import gislaved from "../../../assets/homePage/TheyTrustUs/gislaved.png";
import liqui_moly from "../../../assets/homePage/TheyTrustUs/liqui-moly.png";
import michelin from "../../../assets/homePage/TheyTrustUs/michelin.png";
import nitto from "../../../assets/homePage/TheyTrustUs/nitto.png";
import nokian_tyres from "../../../assets/homePage/TheyTrustUs/nokian_tyres.png";
import pirelli from "../../../assets/homePage/TheyTrustUs/pirelli.png";
import roadGruza from "../../../assets/homePage/TheyTrustUs/roadGruza.png";
import tigar from "../../../assets/homePage/TheyTrustUs/tigar.png";
import toyotires from "../../../assets/homePage/TheyTrustUs/toyotires.png";
import triangle from "../../../assets/homePage/TheyTrustUs/triangle.png";
import turvana from "../../../assets/homePage/TheyTrustUs/turvana.png";
import uniroyal from "../../../assets/homePage/TheyTrustUs/uniroyal.png";
import yokohama from "../../../assets/homePage/TheyTrustUs/yokohama.png";

const logos = [
  { id: 1, src: arb, alt: "ARB" },
  { id: 2, src: barum, alt: "Barum" },
  { id: 3, src: bf_goodrich, alt: "BF Goodrich" },
  { id: 4, src: bridgestone, alt: "Bridgestone" },
  { id: 5, src: buch_ranger, alt: "Buch Ranger" },
  { id: 6, src: citek, alt: "Citek" },
  { id: 7, src: continental, alt: "Continental" },
  { id: 8, src: delta, alt: "Delta" },
  { id: 9, src: dunlop, alt: "Dunlop" },
  { id: 10, src: general_tire, alt: "General Tire" },
  { id: 11, src: gerat, alt: "Gerat" },
  { id: 12, src: gislaved, alt: "Gislaved" },
  { id: 13, src: liqui_moly, alt: "Liqui Moly" },
  { id: 14, src: michelin, alt: "Michelin" },
  { id: 15, src: nitto, alt: "Nitto" },
  { id: 16, src: nokian_tyres, alt: "Nokian Tyres" },
  { id: 17, src: pirelli, alt: "Pirelli" },
  { id: 18, src: roadGruza, alt: "Road Gruza" },
  { id: 19, src: tigar, alt: "Tigar" },
  { id: 20, src: toyotires, alt: "Toyo Tires" },
  { id: 21, src: triangle, alt: "Triangle" },
  { id: 22, src: turvana, alt: "Turvana" },
  { id: 23, src: uniroyal, alt: "Uniroyal" },
  { id: 24, src: yokohama, alt: "Yokohama" },
];

const TheyTrustUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="they-trust-us">
      <h2 className="title">Нам доверяют</h2>
      
      
      <div className="logo-container">
        <img src={logos[currentIndex].src} alt={logos[currentIndex].alt} className="active-logo" />
      </div>

      
      <div className="logo-grid">
        {logos.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TheyTrustUs;
