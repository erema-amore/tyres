import React, { useState, useEffect } from "react";
import "./banner.css";
import frame_1 from '../../../assets/homePage/banner/frame_1.png';
import frame_2 from '../../../assets/homePage/banner/frame_2.png';
import frame_3 from '../../../assets/homePage/banner/frame_3.png';

const images = [frame_1, frame_2, frame_3];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div className="banner-content">
        <h1>Шиномонтаж и доставка бесплатно</h1>
        <button className="banner-button">Подробнее</button>
      </div>
      <div className="banner-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
