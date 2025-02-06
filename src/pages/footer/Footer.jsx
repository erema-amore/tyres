import React from "react";
import "./footer.css";
import logo from '../../assets/footer/logo-footer.png'
import insta from '../../assets/footer/insta.png'
import vk from '../../assets/footer/vk.png'
import whatsapp from '../../assets/footer/whatsapp.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Товары</h3>
          <ul>
            <li>Автомобильные шины</li>
            <li>Автомобильные диски</li>
            <li>Аксессуары для шин, дисков и шиномонтажа</li>
            <li>Аккумуляторы</li>
            <li>Автомасла</li>
            <li>Автозапчасти</li>
            <li>Автоэлектроника</li>
            <li>Автохимия и автокосметика</li>
            <li>Внешний декор, тюнинг, защита</li>
            <li>Инструменты и техническая помощь</li>
            <li>Компрессоры</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Услуги</h3>
          <ul>
            <li>Шиномонтаж</li>
            <li>Всё для шиномонтажа</li>
            <li>Ремонт и правка дисков</li>
            <li>Ошиповка зимних шин</li>
            <li>Сезонное хранение</li>
            <li>Ремонт шин</li>
            <li>Сход-развал</li>
            <li>Мелкосрочный ремонт</li>
          </ul>
        </div>

        <div className="footer-center">
          <img src={logo} alt="Логотип" className="footer-logo" />
          <p className="footer-phone">9960000000</p>
          <p className="freeCall">Звонок бесплатный</p>
          <button className="callback-btn">Заказать обратный звонок</button>
          <p className="social-title">Мы в социальных сетях</p>
          <div className="social-icons">
            <img src={insta} alt="" className="icon" />
            <img src={vk} alt="" className="icon" />
            <img src={whatsapp} alt="" className="icon" />
          </div>
        </div>

        <div className="footer-column">
          <h3>Компания</h3>
          <ul>
            <li>О компании</li>
            <li>Оплата</li>
            <li>Доставка</li>
            <li>Статьи и новости</li>
            <li>Акции и скидки</li>
            <li>Контакты</li>
            <li>Кредит</li>
            <li>Гарантия</li>
            <li>Подарочные сертификаты</li>
            <li>Оптовым клиентам</li>
            <li>Возврат товара</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Личный кабинет</h3>
          <ul>
            <li>Корзина</li>
            <li>Баллы</li>
            <li>Гараж</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;