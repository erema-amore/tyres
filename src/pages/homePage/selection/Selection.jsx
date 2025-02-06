import React, { useState } from "react";
import './selection.css'

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
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Подберём шины по марке автомобиля или <a href="#" className="text-blue-600 hover:underline">параметрам товара</a>
      </h2>
      <div className="grid grid-cols-5 gap-4">
        <select className="p-2 border rounded" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}>
          <option value="">Производитель</option>
          <option value="BMW">BMW</option>
          <option value="Toyota">Toyota</option>
        </select>
        <select className="p-2 border rounded" value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="">Модель</option>
          <option value="X5">X5</option>
          <option value="Corolla">Corolla</option>
        </select>
        <select className="p-2 border rounded" value={generation} onChange={(e) => setGeneration(e.target.value)}>
          <option value="">Поколение</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
        <select className="p-2 border rounded" value={modification} onChange={(e) => setModification(e.target.value)}>
          <option value="">Модификация</option>
          <option value="Standard">Standard</option>
          <option value="Sport">Sport</option>
        </select>
        <select className="p-2 border rounded" value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
          <option value="">Кузов</option>
          <option value="Sedan">Седан</option>
          <option value="SUV">Внедорожник</option>
        </select>
      </div>
      <button
        onClick={handleSelection}
        className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
      >
        Подобрать
      </button>
    </div>
  );
};

export default TireSelection;
