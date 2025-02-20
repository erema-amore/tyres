import React, { useState} from "react";
import "./BasketProduct.css";
import tire from '../../assets/basket/tire.png'
import ok from '../../assets/basket/ok.png'
import box from '../../assets/basket/box.png'
import up from '../../assets/cards/card-tire-up.png'
import down from '../../assets/cards/card-tire-down.png'

const product = {
  id: 1, 
  image: tire, 
  name: 'Goodyear Vector 4Seasons SUV Gen-2',
  code: 170852529,
  quantity: 2,
  price: 123000,
  sign: ok,
  delivery: box

}

const BasketProduct = () => {

  const [value, setValue] = useState(2);
  
    const increment = () => setValue(prev => prev + 1);
    const decrement = () => setValue(prev => (prev > 0 ? prev - 1 : 0));
  
  return (
    <div className="basket-product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-code">Код товара: {product.code}</p>
        <p className="availability">
          <img className="availability-img" src={product.sign} alt="" /> 
          <span className="availability-text">В наличии</span>
        </p>
        <div className="delivery">
          <img src={product.delivery} alt="" />
           <p className="delivery-text">Доставим: завтра, бесплатно</p> 
           <a href="#">Условия доставки</a>
        </div>
      </div>
      <div className="product-quantity">
      <div className="number-input">
               <input
                 type="text"
                 value={value}
                 onChange={e => setValue(Math.max(0, Number(e.target.value)))}
               />
                <div className="controls">
                  <button onClick={increment}><img src={up} alt="icon-up" /></button>
                  <button onClick={decrement}><img src={down} alt="icon-down" /></button>
                </div>
             </div>
      </div>
      <div className="product-price">{product.price} ₽</div>
      
    </div>
  );
};

export default BasketProduct;