import React from "react";
import './menuSearch.css'
import magnifyingGlass from '..//..//assets/registration/lupa.png'

function menuSearch () {
    return (
       <div className="main">
        <div className="block">
            <div className="inputIcon">
            <img className="magnifyingGlass" src={magnifyingGlass} alt="" /> 
              <input type='text' className='searchInput'  placeholder='Введите нозвание товари или услуги'></input>
             
            </div>
        <div className="code"></div>
            <div className="box">
            

                
            </div> 
        </div>
       </div>
    )
}

export default menuSearch 