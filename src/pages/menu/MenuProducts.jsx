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
          <div className='car'>

            <div className='carTires'>
                <h3 className='title'>Автомабильные шины</h3>
                <span className='info'>Летьние Зимние Шипованые Фрикционые Б/У</span>
                <span className='dimensions'>R13 R14 R15 R16 R17 R18 R19 R20 </span>
                <img className='carIcon'  src={cars} alt="" />
            </div>

            <div className='cargoTruck'>
                <h3 className='truckTires'>Грузовые шины</h3>
                <span className='info'>Ведущие Униваирсальные Рулевые Прицеа Рулевые + Прицеп</span>
                <span className='dimensions'>R22,5 R24 R21 R20 R19,5</span>
                <img className='truck'  src={truck} alt="" />
            </div>

            <div className='tractor'>
                <h3 className='agriculturalTires'>Сельскохозяйственные шины</h3>
                <span className='info'>Комбинированные Ведущие Рулевые</span><br />
                <span className='dimensions'>R34 R38 R32 R28 R22,5</span>
                <img className='tractorIcon'  src={tracto} alt="" />
            </div>

            <div className='excavator'>
                <h3 className='agriculturalTires'>Дорожно-строительные шины</h3>
                <span className='info'>Комбинированные Ведущие Рулевые</span><br />
                <span className='dimensions'>R34 R38 R32 R28 R22,5</span>
                <img className='exovatorIcon'  src={exovator} alt="" />
            </div>

            </div>

            <div className='carAccessories'>
              <div className='container'>
                  <div className='box'>
                    <span>Aксесуары для шин, дисков и шиномантажа</span>
                  </div>
                  <div className='box'>
                    <span>Aккумуляторы</span>
                  </div>
                  <div className='box'>
                    <span>Aвтомасла</span>
                  </div>
                  <div className='box'>
                    <span>Aвтоэлектроника</span>
                  </div>
                  <div className='box'>
                    <span>Aвтохимия и автокосметика</span>
                  </div>
                  <div className='box'>
                    <span>Внешний декор, тюнинг, защита</span>
                  </div>
                  <div className='box'>
                    <span>Инструменты и техническая помощь</span>
                  </div>
                  <div className='box'>
                    <span>Компрессоры</span>
                  </div>
              </div>
            </div>


            
        </div>
    </div>
  );
}


export default MyComponent;