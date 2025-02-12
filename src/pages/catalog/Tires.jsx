import React from "react";
import "./Tires.css";
import tire from '../../assets/homePage/tires/summer-tires.png'
import heart from '../../assets/homePage/popular/heart.png'
import CatalogPages from "./CatalogPages";

const tires = [
  { id: 1, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "summer" },
  { id: 2, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 3, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "summer" },
  { id: 4, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 5, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 6, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 7, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 8, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 9, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 10, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 11, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 12, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
];

const PopularTires = () => {
  return (
    <div className="popular-tires">
      
      <div className="tire-grid">
        {tires.map((tire) => (
          <div className="tire-card" key={tire.id}>
            <div className="image">
              <img src={tire.img} alt={tire.name} />
              <div className={`season-icon ${tire.season}`}></div>
            </div>
            <div className="details">
              <div className="reviews">
                <span className="icon">💬</span> {tire.reviews}
                <span className="rating">⭐ {tire.rating}</span>
              </div>
              <h3 className="tire-name">{tire.name}</h3>
              <p className="status">{tire.inStock ? "В наличии" : "Нет в наличии"}</p>
              <div className="footer">
                <button className="price">{tire.price}</button>
                <button className="favorite"><img src={heart} alt="heart" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CatalogPages/>
    </div>
  );
};

export default PopularTires;
