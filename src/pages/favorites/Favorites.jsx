import React from "react";
import './favorites.css'
import card1 from '../../assets/favorites/shina.png'
import icon2 from '../../assets/favorites/snow.png'
import icon1 from '../../assets/favorites/sun.png'
import icon3 from '../../assets/favorites/sun & snow.png'
import stars from '../../assets/favorites/stars.png'
import evaluate from '..//../assets/favorites/evaluate.png'
import like from '..//../assets/favorites/like.png'
import union from '..//../assets/favorites/heart.png'
const Favorite = () => {
    return(
        <div className="container">
                <h2 className="izb">Избранное</h2>
                <p className="tovarov">Товаров:3 492</p>
            <div className="cards">
                    <img className="card1" src={card1} alt="" /> 
                    <img className="icon1" src={icon1} alt="" /> 
                    <img className="stars" src={stars} alt="" />
                    <h2>Goodyear Vector 4Seasons</h2>
                    <p>В наличии</p>
                    <button>5 600 С</button>
                    <img className="evaluate" src={evaluate} alt="" />
                    <img className="like" src={like} alt="" />
            </div>
            <div className="cards2">
                    <img className="card1" src={card1} alt="" /> 
                    <img className="icon2" src={icon2} alt="" /> 
                    <img className="stars" src={stars} alt="" />
                    <h2>Goodyear Vector 4Seasons</h2>
                    <p>В наличии</p>
                    <button>5 600 С</button>
                    <img className="evaluate" src={evaluate} alt="" />
                    <img className="like" src={like} alt="" />
            </div>
            <div className="cards3">
                    <img className="card1" src={card1} alt="" /> 
                    <img className="icon3" src={icon3} alt="" /> 
                    <img className="stars" src={stars} alt="" />
                    <h2>Goodyear Vector 4Seasons</h2>
                    <p>В наличии</p>
                    <button>5 600 С</button>
                    <img className="union" src={union} alt="" />
            </div>
        </div>
    )
}

export default Favorite