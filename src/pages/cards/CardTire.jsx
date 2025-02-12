import React, { useState} from "react";
import "./CardTire.css";
import tire from '../../assets/cards/similar-tire.png'
import up from '../../assets/cards/card-tire-up.png'
import down from '../../assets/cards/card-tire-down.png'

const CardTire = () => {

  const [value, setValue] = useState(2);

  const increment = () => setValue(prev => prev + 1);
  const decrement = () => setValue(prev => (prev > 0 ? prev - 1 : 0));

  
  return (
    <div className="card-tire">
      <div className="card-tire-header">
        <h1 className="tire-title">Шины летние Cordiant Sport 3 PS2 215/65 R16 102V</h1>
        <div className="tire-meta">
          <span>🌞</span>
          <span>2 отзыва</span>
          <span>Код товара: 170852529</span>
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
            <span className="new-price">4 790 С</span>
            <span className="price-desc">за 1 шт.</span>
            <span className="size-tire">4 790 × 4 = 19 160</span>
          </div>
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
          <div className="purchase-options">
            <p>✔ Гарантия: Бессрочная от Cordiant</p>
            <p>🚚 Доставка: <a href="#">Показать варианты</a></p>
            <p>💳 Оплата: <a href="#">Показать варианты</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTire;
