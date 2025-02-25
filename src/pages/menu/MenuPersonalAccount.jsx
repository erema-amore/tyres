import React from "react";
import './menuPersonalAccount.css'

function MenuPersonalAccount() {
    return (
        <div className="main">
            <div className="block">
                <div className="box">
                    <div className="Entrance">
                        <h3>Вход</h3>
                        <div className="inputBatton">
                        <input type='text' placeholder='Ваш телефон' className="phoneNumber"></input>
                        <button>получить код</button>
                        </div>
                    </div>


                    <div className="registration">
                        <div className="registerForAnAccount">
                            <h2>Регистрация</h2>
                            <div className="inputRigistration">
                            <input type='text' placeholder='Ваш телефон' className="signupField"></input>
                            <button>Получить код</button>
                              <div className="conditions">
                                 <input type="checkbox" class="checkboxInput"></input>
                                 <span className="checkboxText">Я подтверждаю свою дееспособность, даю согласие на получение 
                                 информации о статусе заказов и на обработку <a href="#">персональных данных.</a></span>

                              </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuPersonalAccount