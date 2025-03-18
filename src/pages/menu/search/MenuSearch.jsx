import React from "react";
import './menuSearch.css'
import magnifyingGlass from '..//..//assets/registration/lupa.png'
import xIcon from '..//..//assets/registration/xxxIcon.png'
import vector from '..//..//assets/registration/Vector (1).png'
import heart from '..//..//assets/registration/Icon_lov.png'
import cart from '..//..//assets/registration/Icon.png'




function menuSearch () {
    return (
       <div className="main">
        <div className="block">
            <div className="inputIcon">
              <img className="magnifyingGlass" src={magnifyingGlass} alt="" /> 
              <input type='text' className='searchInput'  placeholder='Введите нозвание товари или услуги'></input>
              <a className="find" href="#">Найти</a>             
            </div>
        <div className="code"></div>
            <div className="box">
               <img className="back" src={xIcon} alt="" />
               <span className="personalAccount">личный кобинет</span>
               <img className="vector" src={vector} alt="" />
               <img className="heartIcon" src={heart} alt="" />
               <img className="cartIcon" src={cart} alt="" />
            </div> 
        </div>
       </div>
    )
}

export default menuSearch 