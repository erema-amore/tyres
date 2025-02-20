import React from "react";
import './Stocks.css'


export default function PromotionsForm() {
  return (
    <div>
      <h1 className="title">Акций</h1>
      <form>
        
        <div className="creat">
          <div className="boxone">
            <div className="tetx">
              <div>  <label htmlFor="title">Домен</label> </div>
              <div>  <input type="text" id="title" placeholder="Введите название" /> </div>
            </div>
            <div className="description">
              <div><label htmlFor="description">Введите текст</label> </div>
              <div><textarea id="description" placeholder="Введите текст"></textarea> </div>
            </div>
          </div>
          <div className="boxtwo">
            <div className="img">
            <div>  <label>Фото шины</label> </div>
            <div>  <label htmlFor="upload" className="upload-btn">+ добавить картинку</label>
            <input type="file" id="upload" hidden /> </div>
            </div>
            <div className="gallery">
                <div><label>Галерея</label> </div>
                <div> <label htmlFor="upload" className="upload-btn">+ добавить картинку</label>
                <input type="file" id="upload" hidden /> </div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="save">
          <button type="submit">Сохранить</button>
          </div>
          <div className="reset">
          <button type="reset">Сбросить</button>
          </div>
        </div>
      </form>
    </div>
  );
}
