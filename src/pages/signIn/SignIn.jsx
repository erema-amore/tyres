import React from 'react'
import './signIn.css'
import iconError from '..//..//assets/registration/hide.png'
import ic from '..//..//assets/registration/google 1 (3).png'
import ic2 from '..//..//assets/registration/facebook.png'
import ic3 from '..//..//assets/registration/facebook (1).png'
import ic4 from '..//..//assets/registration/email.png'

const SignIn = () => {
  return (
<<<<<<< HEAD
    <div className='header3'>
      <div className='container3'>
        <div className='title3'>
          <h3>Вход</h3>
          <span>Новый пользаватель? <a href="#">Создать учетную запись</a> </span>
        </div>
        <div className='input3'>
        <input type='text' placeholder='Введите логин'></input>

        </div>
        <div className='inputError'>
        <input type='passworld' placeholder='Введите пароль'></input>
        <img src={iconError} alt="error" />
        <span>Неверный пароль. Повторите попытку.</span>
        </div>
          <div className='button3'>
=======
    <div className='main'>
      <div className='block'>
        <div className='title'>
          <h3>Вход</h3>
          <span>Новый пользаватель? <a href="#">Создать учетную запись</a> </span>
        </div>
        <div className='input'>
        <input type='text' placeholder='Введите логин'></input>

        </div>
        <div className='input-error'>
        <input type='password' placeholder='Введите пароль'></input>
        <img src={iconError} alt="error" />
        <span>Неверный пароль. Повторите попытку.</span>
        </div>
          <div className='button'>
>>>>>>> a234df6f5280a183119c3737dd6aaf77d263d39d
            <button>Войти</button>
            <h2>Войти с помощью</h2>

          </div>
<<<<<<< HEAD
             <div className='icon3'>
=======
             <div className='icons'>
>>>>>>> a234df6f5280a183119c3737dd6aaf77d263d39d
              <img src={ic} alt="" />
              <img src={ic2} alt="" />
              <img src={ic3} alt="" />
              <img src={ic4} alt="" />
             </div>
             
<<<<<<< HEAD
             <div className='footer'>
               <a className='a1' href="#">Сброс пароля</a>
               <a className='a2' href="#">Войдите с другой учетной записью</a>
=======
             <div className='recovery'>
               <a className='reset-passworld' href="#">Сброс пароля</a>
               <a className='other-login' href="#">Войдите с другой учетной записью</a>
>>>>>>> a234df6f5280a183119c3737dd6aaf77d263d39d
             </div>
        
      </div>
    </div>
  )
}

export default SignIn
