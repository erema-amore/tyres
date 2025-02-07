import React from "react";
import "./header.css";
import logo from '../../assets/header/logo.png'
import magnifying from '../../assets/header/magnifying.png'
import heart from '../../assets/header/heart.png'
import basket from '../../assets/header/basket.png'


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item dropdown">Товары</li>
          <li className="nav-item dropdown">Услуги</li>
          <li className="nav-item dropdown">Компания</li>
        </ul>
        <div className="logo">
          <img src={logo} alt="Логотип" />
        </div>
        <div className="nav-right">
          <div className="search">
            <img src={magnifying} alt="magniflying" className="icon" />
            <input type="text" placeholder="Поиск" className="search-input" />
          </div>
          <span className="nav-item">Личный кабинет</span>
          <img src={heart} alt="heart" className="icon" />
          <img src={basket} alt="" className="icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;