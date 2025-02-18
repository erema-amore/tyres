import React from "react";


export default function PromotionsForm() {
  return (
    <div className="form-container">
      <h1>Акций</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Д</label>
          <input type="text" id="title" placeholder="Введите название" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Введите текст</label>
          <textarea id="description" placeholder="Введите текст"></textarea>
        </div>
        <div className="form-group">
          <label>Фото шины</label>
          <button type="button" className="upload-button">+ Добавить картинку</button>
        </div>
        <div className="form-group">
          <label>Галерея</label>
          <button type="button" className="upload-button">+ Добавить картинки</button>
        </div>
        <div className="form-actions">
          <button type="submit" className="save-button">Сохранить</button>
          <button type="reset" className="reset-button">Сбросить</button>
        </div>
      </form>
    </div>
  );
}
