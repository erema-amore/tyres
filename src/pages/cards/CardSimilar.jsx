import React from "react";
import { Sun, Snowflake } from "lucide-react"; // Иконки для обозначения сезона
import "./CardSimilar.css"; // Подключаем стили из отдельного CSS-файла
import tire from '../../assets/cards/tire.png'

const CardSimilar = () => {
  const products = [
    { id: 1, name: "Goodyear Vector 4Seasons", price: 5600, season: "summer" },
    { id: 2, name: "Goodyear Vector 4Seasons", price: 5600, season: "winter" },
    { id: 3, name: "Goodyear Vector 4Seasons", price: 5600, season: "all-season" },
    { id: 4, name: "Goodyear Vector 4Seasons", price: 5600, season: "winter" },
  ];

  const getSeasonIcon = (season) => {
    switch (season) {
      case "summer":
        return <Sun className="icon icon-summer" />;
      case "winter":
        return <Snowflake className="icon icon-winter" />;
      default:
        return <Sun className="icon icon-default" />; // Значок по умолчанию
    }
  };

  return (
    <div className="container">
      <h2 className="title">Похожие товары</h2>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="icon-wrapper">{getSeasonIcon(product.season)}</div>
            <img src={tire} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <div className="rating">
              <span className="stars">★ ★ ★ ★ ☆</span>
              <span className="reviews">(2)</span>
            </div>
            <div className="price">{product.price} C</div>
            <button className="add-to-cart">В корзину</button>
          </div>
        ))}
      </div>
      <div className="view-all">
        <button className="view-all-btn">Посмотреть все шины</button>
      </div>
    </div>
  );
};

export default CardSimilar;
