import React from 'react';
import './menuMain.css'
import vector from '..//..//assets/registration/Vector.png'
import downArrow from '..//..//assets/registration/Vector (1).png'
import titleIcon from '..//..//assets/registration/titleIcon.png'
import iconMenu from '..//..//assets/registration/Icon_menu_.png'
import iconLov from '..//..//assets/registration/Icon_lov.png'
import icon from '..//..//assets/registration/Icon.png'

const MenuMain = () => {
  return(
    <div className='main'>
      <div className='block'>
        <div className='box'>
          <div className='leftSide'>
            <a className='goods' href="#">Товары</a>
            <img className='vector' src={vector} alt="" />

            <a className='services' href="#">Услуги</a>
            <img className='downArrow' src={downArrow} alt="" />

            <img className='arrow' src={downArrow} alt="" />

          </div>
          <img className='titleIcon' src={titleIcon} alt="" />
          
          <div className='rightSide'>
            <img className='magnifyingGlass' src={iconMenu} alt="" />
            <a className='personalAccount' href="#">Личный кобинет</a>
            <img className='arrowToo' src={downArrow} alt="" />
            <img className='iconLov' src={iconLov} alt="" />
            <img className='cart' src={icon} alt="" />
             
          </div>
        </div>
      </div>
    </div>
  )
};

export default MenuMain;

