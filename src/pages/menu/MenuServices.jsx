import react from "react";
import './menuServices.css'
import subtract from '..//..//assets/registration/Subtract.png'
import time from '..//..//assets/registration/Icon 16_time.png'
import valuta from '..//..//assets/registration/p.png'
import disk from '..//..//assets/registration/disk.png'



function MenuServices() {
    return (
        <div className="main">
            <div className="block">
                <div className="leftSide">
                    <div className="tireFitting">
                        <h4>Шиномантаж</h4>
                        <img className="Kaliso" src={subtract} alt="" />
                        <img className="timeIcon" src={time} alt="" />
                        <span id="operatingMode">Ежыдневно с 9:00 до 21:00, без перерывов</span>
                        <img className="ruble" src={valuta} alt="p" />
                        <span className="price">от 500 ₽</span>

                 <div className="container">
                         <h4>Ремонт и правка дисков</h4>
                         <img className="Kaliso" src={disk} alt="" />
                         <img className="timeIcon" src={time} alt="" />
                         <span id="operatingMode">Ежыдневно с 9:00 до 21:00, без перерывов</span>
                         <img className="ruble" src={valuta} alt="p" />
                         <span className="price">от 500 ₽</span>
                 </div>
                       
                    </div>
                </div>



                <div className="rightSide">
                    <div className="info">
                        <div className="menu">
                            <span>Ошиповка зимних шин</span>
                        </div>
                        <div className="menu">
                            <span>Сезонное хронение шин</span>
                        </div>
                        <div className="menu">
                            <span>Сход развал</span>
                        </div>
                
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default MenuServices 
    
