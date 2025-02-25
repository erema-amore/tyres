import React from "react";
import "./CardSimilar.css"; 
import tire from '../../assets/cards/tire.png'
import brightness from '../../assets/cards/brightness.png'
import snow from '../../assets/cards/snow.png'
import subtract from '../../assets/cards/subtract.png'
import five_pointed_star from '../../assets/cards/five-pointed-star.png'
import heart from '../../assets/homePage/popular/heart.png'
import Union from '../../assets/cards/Union.png'



const CardSimilar = () => {
  const products = [
    { id: 1, img: tire, icon: brightness, name: "Goodyear Vector 4Seasons", price: 5600, union: Union, rating: five_pointed_star },
    { id: 2, img: tire, icon: snow,  name: "Goodyear Vector 4Seasons", price: 5600, union: Union, rating: five_pointed_star },
    { id: 3, img: tire, icon: subtract,  name: "Goodyear Vector 4Seasons", price: 5600, union: Union, rating: five_pointed_star, },
    { id: 4, img: tire, icon: snow,  name: "Goodyear Vector 4Seasons", price: 5600, union: Union, rating: five_pointed_star, },
  ];

 

  return (
    <div className="container">
      <h2 className="title">Похожие товары</h2>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="icon-wrapper">
              <img src={product.img} alt={product.name} className="product-image" />
              <img src={product.icon} alt="" />
            </div>
            
            <h3 className="product-name">{product.name}</h3>
            <div className="rating">
              <img src={Union} alt="union" />
              <span className="reviews">2</span>
              <img src={product.rating} className="stars"></img>
            </div>
            <div className="product-price">
              <button className="price">{product.price} C</button>
              <button className="favorite"><img src={heart} alt="heart" /></button>
            </div>
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
