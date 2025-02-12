import React from "react";
import "./FilterSidebar.css";

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <label>Ширина</label>
        <select>
          <option>Все</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Профиль</label>
        <select>
          <option>Все</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Диаметр</label>
        <select>
          <option>Все</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Цена</label>
        <input type="range" min="1234" max="50234" />
      </div>
      <div className="filter-section">
        <label>Тип шин</label>
        <div>
          <input type="checkbox" id="летние" /> <label htmlFor="летние">Летние</label>
        </div>
        <div>
          <input type="checkbox" id="всесезонные" /> <label htmlFor="всесезонные">Всесезонные</label>
        </div>
        <div>
          <input type="checkbox" id="шипованные" /> <label htmlFor="шипованные">Шипованные</label>
        </div>
      </div>
      <div className="filter-section">
        <label>Сезонность</label>
        <div>
          <input type="checkbox" id="зима" /> <label htmlFor="зима">Зима</label>
        </div>
        <div>
          <input type="checkbox" id="лето" /> <label htmlFor="лето">Лето</label>
        </div>
        <div>
          <input type="checkbox" id="всесезон" /> <label htmlFor="всесезон">Всесезон</label>
        </div>
      </div>
      <div className="filter-section">
        <label>Производитель</label>
        <input type="text" placeholder="Введите название" />
      </div>
      <div className="filter-section">
        <label>Индекс скорости</label>
        <select>
          <option>H (до 210)</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Индекс нагрузки</label>
        <input type="range" min="1234" max="50234" />
      </div>
      <div className="filter-section">
        <label>Топливная экономичность</label>
        <div>
          <input type="checkbox" id="a" /> <label htmlFor="a">A</label>
        </div>
        <div>
          <input type="checkbox" id="b" /> <label htmlFor="b">B</label>
        </div>
      </div>
      <div className="filter-section">
        <label>Сцепление с мокрой поверхностью</label>
        <div>
          <input type="checkbox" id="a2" /> <label htmlFor="a2">A</label>
        </div>
        <div>
          <input type="checkbox" id="b2" /> <label htmlFor="b2">B</label>
        </div>
      </div>
      <div className="filter-section">
        <label>Уровень внешнего шума</label>
        <input type="range" min="1234" max="50234" />
      </div>
      <div className="filter-section">
        <label>
          <input type="checkbox" /> В наличии
        </label>
      </div>
      <div className="filter-section">
        <label>
          <input type="checkbox" /> Комплект
        </label>
      </div>
      <button className="apply-button">Подобрать</button>
      <button className="reset-button">Сбросить</button>
    </div>
  );
};

export default FilterSidebar;
