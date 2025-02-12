import React, { useState } from "react";
import "./CardTitle.css";

const tabs = ["Общая информация", "Характеристики", "Гарантия", "Оплата", "Совместимость", "Отзывы (2)"];

const CardTitle = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="card-title">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div className="content">
            <h2>Описание модели Cordiant Business CA1 185/75 R16C 104Q</h2>
            <p>
              Чувствительность к командам водителя, а также устойчивость автомобиля гарантируют установленные под
              специальным уклоном к центру тяжести автомобиля грани средних ребер и элементов грунтозацепов...
            </p>
            <p>Новаторская технология двух слоев каркаса усиливает материал...</p>
            <h3>Характеристики модели</h3>
            <p>
              При создании шины были применены следующие технологии: <br />
              <strong>«3D Mod»</strong> — рисунок протектора создавался при помощи ручного 3D моделирования... <br />
              <strong>«Contact with road»</strong> — широкая площадь контакта шины с поверхностью достигается за счет
              скошенных форм... <br />
              <strong>«Dissymmetric drawing»</strong> — отвод влаги к низу шины...
            </p>
          </div>
        )}
        {activeTab === 1 && <div className="content">Здесь характеристики...</div>}
        {activeTab === 2 && <div className="content">Информация о гарантии...</div>}
        {activeTab === 3 && <div className="content">Информация об оплате...</div>}
        {activeTab === 4 && <div className="content">Данные о совместимости...</div>}
        {activeTab === 5 && <div className="content">Отзывы пользователей...</div>}
      </div>
    </div>
  );
};

export default CardTitle;
