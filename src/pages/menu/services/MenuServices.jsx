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
                <div className="box">
                    <div className="tooStr">

                    
                     <div className="leftSide">
                        <div className="tireFitting">
                              <div className="icon">
                                <img src={subtract} alt="" />
                              </div>
                              <div className="infoText">
                                   <h4 className="title">Шиномантаж</h4>
                                   <img className="time" src={time} alt="" />
                                   <span className="operatingMode">Ужыдневно с 9:00 до 21:00, без перерывов</span>
                                 <div className="boxToo">
                                    <img className='ruble' src={valuta} alt="" />
                                    <span className="price">от 500 ₽</span>
                                 </div>
                              </div>
                        </div>
                     </div>
                     <div className="leftSideToo">
                        <div className="tireFitting">
                              <div className="icon">
                                <img src={disk} alt="" />
                              </div>
                              <div className="infoText">
                                   <h4 className="title">Ремонт и правка дисков</h4>
                                   <img className="time" src={time} alt="" />
                                   <span className="operatingMode">Ужыдневно с 9:00 до 21:00, без перерывов</span>
                                 <div className="boxToo">
                                    <img className='ruble' src={valuta} alt="" />
                                    <span className="price">от 500 ₽</span>
                                 </div>
                              </div>
                        </div>
                     </div>
                    </div>
                     
                     
                     <div className="rightSide">
                         <span>Ошиповка зимних шин</span>
                         <span>Сезонное хронение шин</span>
                         <span>Сход развал</span>
                     </div>

                </div>
            </div>
        </div>
    )

}

export default MenuServices 
    
