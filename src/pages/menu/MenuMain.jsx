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
      <div className='leftSide'>
        
        <div className='goodsServices'>
          <a href="#">товар <img src={vector} alt="" /></a>
          <span>Услуги <img src={downArrow} alt="" /></span>
          {/* <img className='down' src={downArrow} alt="" /> */}


        </div>
        <div className='mainIcon'>
             <img src={titleIcon} alt="" />
        </div>
        <div className='rightSide'>
          <img className='menu' src={iconMenu} alt="" />
          <span className='personalAccount'>личный кобинет <img src={downArrow} alt="" /></span>
          <img className='heart' src={iconLov} alt="" />
          <img className='groceryСart' src={icon} alt="" />

        </div>
       
            

      </div>

    </div>
  )
};

export default MenuMain;