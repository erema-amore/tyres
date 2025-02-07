import React, { useState } from "react";
import "./tireSelection.css"; 

const TireSelection = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [generation, setGeneration] = useState("");
  const [modification, setModification] = useState("");
  const [bodyType, setBodyType] = useState("");

  const handleSelection = () => {
    alert(`Вы выбрали: ${manufacturer}, ${model}, ${generation}, ${modification}, ${bodyType}`);
  };

  return (
    <div className="container">
      <h2 className="title">
        Подберём шины по марке автомобиля или <a href="#" className="link">параметрам товара</a>
      </h2>
      <div className="grid">
        <select className="select" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}>
          <option value="">Производитель</option>
          <option value="BMW">BMW</option>
          <option value="Toyota">Toyota</option>
        </select>
        <select className="select" value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="">Модель</option>
          <option value="X5">X5</option>
          <option value="Corolla">Corolla</option>
        </select>
        <select className="select" value={generation} onChange={(e) => setGeneration(e.target.value)}>
          <option value="">Поколение</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
        <select className="select" value={modification} onChange={(e) => setModification(e.target.value)}>
          <option value="">Модификация</option>
          <option value="Standard">Standard</option>
          <option value="Sport">Sport</option>
        </select>
        <select className="select" value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
          <option value="">Кузов</option>
          <option value="Sedan">Седан</option>
          <option value="SUV">Внедорожник</option>
        </select>
      </div>
      <button onClick={handleSelection} className="button">
        Подобрать
      </button>
    </div>
  );
};

export default TireSelection;
