import React from "react";
import "./popularTires.css";
import tire from '../../../assets/homePage/tires/summer-tires.png'

const tires = [
  { id: 1, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "summer" },
  { id: 2, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
  { id: 3, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "summer" },
  { id: 4, name: "Goodyear Vector 4Seasons", price: "5 600 С", img: tire, inStock: true, reviews: 2, rating: 4.5, season: "winter" },
];

const PopularTires = () => {
  return (
    <div className="popular-tires">
      <h2 className="title">Популярные шины</h2>
      <div className="tabs">
        <span className="tab active">Автомобильные</span>
        <span className="tab">Грузовые</span>
        <span className="tab">Дорожно-строительные</span>
        <span className="tab">Сельскохозяйственные</span>
      </div>
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
                <button className="favorite">❤️</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all">Посмотреть все шины</button>
    </div>
  );
};

export default PopularTires;
