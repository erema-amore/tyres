import React from 'react'
import './login.css'
import icon1 from "../../assets/registration/google 1 (3).png"
import icon2 from "../../assets/registration/facebook.png"
import icon3 from "../../assets/registration/facebook (1).png"
import icon4 from "../../assets/registration/email.png"
import icon5 from "../../assets/registration/visible.png"

const Login = () => {
  return (
<<<<<<< HEAD
    <div className='header'>
    <div className='container'>
      <div className='box2'>
          <h4>Вход</h4>
          <span>Новый пользаватель?<a href='#'> Создать учетную запись</a></span>
          <div className='buttonBox'>
            <input type='text' placeholder='Введите логин'></input>
                <div className='inputIconY'>
=======
    <div className='main'>
    <div className='block'>
      <div className='box'>
          <h4>Вход</h4>
          <span>Новый пользаватель?<a href='#'> Создать учетную запись</a></span>
          <div className='enter-login'>
            <input type='text' placeholder='Введите логин'></input>
                <div className='input-icon'>
>>>>>>> a234df6f5280a183119c3737dd6aaf77d263d39d
                     <input type='text' placeholder='Введите логин'></input>
                     <img src={icon5} alt="" /> 
                     {/* <i className='fa' aria-hidden="true"></i> */}
                </div>
          </div>
              <div className='open'>
                <button>Войти</button>
                <h5>Войти с помащью</h5>
              </div>
<<<<<<< HEAD
              <footer className='icons-container'>
=======
              <footer className='icons'>
>>>>>>> a234df6f5280a183119c3737dd6aaf77d263d39d
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

export default Login
