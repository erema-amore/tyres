import React from "react";
import "./HelpForm.css";

const HelpForm = () => {
  return (
    <div className="help-form">
      <div className="help-content">
        <h2>Поможем сделать правильный выбор</h2>
        <p>
          Оставьте заявку и наши менеджеры подберут для вашего автомобиля
          требуемый товар
        </p>
        <button className="help-button">Оставить заявку</button>
      </div>
    </div>
  );
};

export default HelpForm;
