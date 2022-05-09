import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import Home from './pages/home'

export default props => {
  return (
    <Menu>
      <a className="menu-item" to={Home} >
        Home
      </a>
      <a className="menu-item">
        Salads
      </a>
      <a className="menu-item" >
        Pizzas
      </a>
    </Menu>
  );
};