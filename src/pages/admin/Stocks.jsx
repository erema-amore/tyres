import React from "react";
import './Stocks.css'
import SaveButtun from "../../components/admin/SaveButtun";
import GalleryImg from '../../components/admin/GalleryImg'


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
            <GalleryImg/>
          </div>
        </div>
        <div className="stats"><SaveButtun/></div>
      </form>
    </div>
  );
}
