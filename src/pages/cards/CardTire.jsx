import React, { useState} from "react";
import "./CardTire.css";
import tire from '../../assets/cards/similar-tire.png'
import up from '../../assets/cards/card-tire-up.png'
import down from '../../assets/cards/card-tire-down.png'
import heart from '../../assets/homePage/popular/heart.png'
import Union from '../../assets/cards/Union.png'
import box from '../../assets/cards/box.png'
import payment from '../../assets/cards/payment-$.png'
import summer from '../../assets/cards/summer.png'
import Guarantee from '../../assets/cards/Guarantee.png'
import chat from '../../assets/cards/chat.png'
import five_pointed_star from '../../assets/cards/five-pointed-star.png'
import half_five_pointed_star from '../../assets/cards/half-five-pointed-star.png'

const CardTire = () => {

  const [value, setValue] = useState(2);

  const increment = () => setValue(prev => prev + 1);
  const decrement = () => setValue(prev => (prev > 0 ? prev - 1 : 0));

  const stars = [
    { id: 1, img: five_pointed_star },
    { id: 2, img: five_pointed_star },
    { id: 3, img: five_pointed_star },
    { id: 4, img: five_pointed_star },
    { id: 5, img: half_five_pointed_star },
  ]

  
  return (
    <div className="card-tire">
      <div className="card-tire-header">
        <h1 className="tire-title">Шины летние Cordiant Sport 3 PS2 215/65 R16 102V</h1>
        <div className="tire-meta">
          <img src={summer} alt="summer" />
          <img src={Guarantee} alt="guarantee" />
          <img src={chat} alt="chat"/>
          <span>2</span>
          <div className="grade">
            {stars.map(e => (
            <img src={e.img}/>
          ))}
    
          </div>
          <div className="product-code">
            <p>Код товара: </p>
            <span>170852529</span>
          </div>
          
        </div>
      </div>

      <div className="card-tire-body">
        <div className="tire-image">
          <img
            src={tire}
            alt="Cordiant Sport 3"
          />
        </div>

        <div className="tire-info">
          <h3>Краткое описание</h3>
          <ul>
            <li><strong>Производитель:</strong> Cordiant</li>
            <li><strong>Модель:</strong> Business CA1</li>
            <li><strong>Сезонность:</strong> Всесезонные</li>
            <li><strong>Ширина:</strong> 185</li>
            <li><strong>Профиль:</strong> 75%</li>
            <li><strong>Диаметр:</strong> 16C</li>
            <li><strong>Индекс скорости:</strong> Q (до 160 км/ч)</li>
            <li><strong>Индекс нагрузки:</strong> 104 (до 900 кг)</li>
            <li><strong>Индекс нагрузки для сдвоенных:</strong> 102 (до 850 кг)</li>
          </ul>
          <a href="#" className="more-details">Перейти ко всем характеристикам</a>
        </div>

        <div className="tire-purchase">
          <div className="price">
            <span className="old-price">8 790 С</span>
            <div className="new-price-desc">
            <span className="new-price">4 790 С</span>
            <span className="price-desc">за 1 шт.</span>
            </div>
            <span className="size-tire">4 790 × 4 = 19 160</span>
          </div>

          <div className="midle-block">
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
            <button className="add-to-cart">В корзину</button>
            <button className="favorite"><img src={heart} alt="heart" /></button>
          </div>

          <p className="InStock" >В наличии</p>
    
          <div className="purchase-options">
            <p><img src={Union} alt="union" /> Гарантия: Бессрочная от Cordiant</p>
            <p><img src={box} alt="box" /> Доставка: <a href="#">Показать варианты</a></p>
            <p><img src={payment} alt="payment" /> Оплата: <a href="#">Показать варианты</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTire;
