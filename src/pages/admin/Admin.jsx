import React from 'react';
import { NavLink } from 'react-router-dom';
import admin from './admin.txt'
import AddNews from './AddNews.jsx';
import AddProduct from './AddProduct.jsx';
import Requests from './Requests.jsx';
import Stocks from './Stocks.jsx';
import classes from './Admin.css'

const Admin = () => {
  return (
    <div>
      <h2 className="txt">АДМИНКА</h2>
      <NavLink className="box" to="/add-product">Добавить товар</NavLink>
      <NavLink className="box" to="/add-news">Добавить новость</NavLink>
      <NavLink className="box" to="/requests">Заявки</NavLink>
      <NavLink className="box" to="/stocks">Акции</NavLink>
    </div>
  );
};

export default Admin;
