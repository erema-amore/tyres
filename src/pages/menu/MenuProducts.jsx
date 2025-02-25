import React from 'react';
import './menuProducts.css'
import cars from '..//..//assets/registration/cars1.png'
import truck from '..//..//assets/registration/Vector (2).png'
import tracto from '..//..//assets/registration/Icon (1).png'
import exovator from '..//..//assets/registration/exovator.png'


function MyComponent() {
  return (
    <div className='main'>
        <div className='block'>
           <div className='box'>
            <div className='leftSide'>
              <div className='iconText'>
              <div className='carIcon'>
                   <img src={cars} alt="" />
              </div> 
                <div className='text'>
                   <h2 className='title'>Автомабильные шины</h2>
                   <span className='typesOfTires'>Летние Зимние Шинованые Фрикционые Б/У</span>
                   <span className='dimensions'>R13 R14 R15 R16 R17 R18 R19 R20</span>
                </div>
              </div>

              <div className='iconTextToo'>
                 <div className='truckIcon'>
                     <img src={truck} alt="" />
                 </div>
                 <div className='text'>
                        <h1 className='titleText'>Грузовые шины</h1>
                        <span className='types'>Ведущие Универсальные Рулевые Прицеп Рулевые + прицеа</span>
                        <span className='size'>R22,5 R24 R21 R20 R19,5</span>
                 </div>
              </div>

              <div className='iconTextTool'>
                 <div className='trackorIcon'>
                     <img src={tracto} alt="" />
                 </div>
                 <div className='text'>
                        <h1 className='titleText'>Сельскохозяйственные шины</h1>
                        <span className='types'>Комбинируанные Ведущие Рулевые</span>
                        <span className='size'>R34 R38 R32 R28 R22,5</span>
                 </div>
              </div>

              <div className='iconTextTool'>
                 <div className='trackorIcon'>
                     <img src={exovator} alt="" />
                 </div>
                 <div className='text'>
                        <h1 className='titleText'>Дорожно-строительные шины</h1>
                        <span className='types'>Комбинируанные Ведущие Рулевые</span>
                        <span className='size'>R34 R38 R32 R28 R22,5</span>
                 </div>
              </div>
            </div>
     

            <div className='rightSide'>
              <span>Аксессуары для шин, дисков и шиномантажа</span>
              <span>Акомуляторы</span>
              <span>Автомасла</span>
              <span>Автоэлектроника</span>
              <span>Автохимия и автокосметика</span>
              <span>Внешний декор,тюнинг, зашита</span>
              <span>Инструменты и техническоя помащь</span>
              <span>Компрессоры</span>
            </div>
           </div>
        </div>
    </div>
  );
}


export default MyComponent;