import React from 'react'
import './registration.css'
import icon1 from '..//..//assets/registration/google 1 (3).png'
import icon2 from '..//..//assets/registration/facebook.png'
import icon3 from '..//..//assets/registration/facebook (1).png'
import icon4 from '..//..//assets/registration/email.png'
import icon5 from '..//..//assets/registration/hide.png'


const Registration = () => {
  return (
<<<<<<< HEAD
    <div className='headers'>
      <div className='container'>
=======
    <div className='main'>
      <div className='block'>
>>>>>>> a234df6f5280a183119c3737dd6aaf77d263d39d
        <div className='box'>

        
        <div className='title'>
          <h3>Создать учетную запись</h3>
        </div>
        <div className='icons'>
           <img src={icon1} alt="" />
           <img src={icon2} alt="" />
           <img src={icon3} alt="" />
           <img src={icon4} alt="" />
        </div>
<<<<<<< HEAD
        <div className='subHeadling'>
        <h6>Зарегистрируйтесь с помощью электронной почты <br/><span>У вас уже есть учетная запись? <a href="#">Войти</a></span></h6>
        </div>
          <div className='inputIcon'>
          <input type='text' placeholder='Адрес электронной почты'></input>
          <div className='imputImg'>
               <input type='text' placeholder='Пароль'></input>
               <img className='img1' src={icon5} alt="icon" />

               <input className='icon2' type='text' placeholder='Подтвердите Пароль'></input>
               <img className='img2' src={icon5} alt="icon" />
          </div>
             <div className='buttonCl'>
=======
        <div className='sub-headling'>
        <h6>Зарегистрируйтесь с помощью электронной почты <br/><span>У вас уже есть учетная запись? <a href="#">Войти</a></span></h6>
        </div>
          <div className='input-icon'>
          <input type='text' placeholder='Адрес электронной почты'></input>
          <div className='imput-img'>
               <input type='text' placeholder='Пароль'></input>
               <img className='img1' src={icon5} alt="icon" />

               <input className='text' type='text' placeholder='Подтвердите Пароль'></input>
               <img className='hide' src={icon5} alt="icon" />
          </div>
             <div className='btn'>
>>>>>>> a234df6f5280a183119c3737dd6aaf77d263d39d
                  <button>Зарегистрироваться</button>

             </div>
         </div>
         

      </div>

      </div>
    </div>
  )
}

export default Registration
