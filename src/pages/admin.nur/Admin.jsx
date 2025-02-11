import React from 'react'
import classes from './AllClasses.css'
import { NavLink, Link } from "react-router-dom";
 


const Admin = () => {


  return (
    <div>
        <h2 className='txt'>АДМИНКА</h2>
        <link className='box'>Добавить тавар</link>
        <link className='box'>Добавить новасть</link>
        <link className='box'>Заявки</link>
        <link className='box'>Акции</link>
    </div>
  )
}

export default Admin
