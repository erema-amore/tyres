import React from 'react'
import './registration.css'
import icon1 from "../../assets/registration/google 1.png"
import icon2 from "../../assets/registration/facebook.png"
import icon3 from "../../assets/registration/facebook (1).png"
import icon4 from "../../assets/registration/email.png"
import icon5 from "../../assets/registration/visible.png"

const Registration = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='box2'>
            <h4>Вход</h4>
            <span>Новый пользаватель?<a href='#'> Создать учетную запись</a></span>
            <div className='buttonBox'>
              <input type='text' placeholder='Введите логин'></input>
              <input type='text' placeholder='Введите логин' className='icons2'></input> 
            </div>
                <div className='open'>
                  <button>Войти</button>
                  <h5>Войти с помащью</h5>
                </div>
                <footer className='icons-container'>
                    <img src={icon1} alt="" className='icons' />
                    <img src={icon2} alt="" className='icons'/>
                    <img src={icon3} alt="" className='icons'/>
                    <img src={icon4} alt="" className='icons'/>
                  </footer>
        </div>
      </div>
    </div>
  )
}

export default Registration
