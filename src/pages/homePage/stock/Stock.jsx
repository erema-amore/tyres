import React from "react";
import "./stock.css";
import brake from '../../../assets/homePage/stock/brake-pads.png'

const promotions = [
  {
    id: 1,
    title: "Тормозные колодки со скидкой 10%",
    categories: ["Диски", "Шины"],
    expirationDate: "30.09.2021",
    img: brake
  },
  {
    id: 2,
    title: "Тормозные колодки со скидкой 10%",
    categories: ["Диски", "Шины"],
    expirationDate: "30.09.2021",
    img: brake
  },
  {
    id: 3,
    title: "Тормозные колодки со скидкой 10%",
    categories: ["Диски", "Шины"],
    expirationDate: "30.09.2021",
    img: brake
  },
];

const Stock = () => {
  return (
    <div className="stock">
      <h2 className="title">Акции</h2>
      <div className="promotion-grid">
        {promotions.map((promo) => (
          <div className="promotion-card" key={promo.id}>
            <div className="image">
              <img src={promo.img} alt={promo.title} />
            </div>
            <h3 className="promo-title">{promo.title}</h3>
            <div className="categories">
              {promo.categories.map((category, index) => (
                <span className="category" key={index}>
                  {category}
                </span>
              ))}
            </div>
            <p className="expiration">
              <span className="icon">🕒</span> Действует до: <strong>{promo.expirationDate}</strong>
            </p>
          </div>
        ))}
      </div>
      <button className="view-all">Посмотреть все шины</button>
    </div>
  );
};

export default Stock;
