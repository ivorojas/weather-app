import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from "react-router-dom"
import clima from '../img/clima-icon.png'

function Nav({onSearch}) {
  return (
    <nav className="navbar_container">
  
    <div className="titulo_pagina">
    <Link to='/'>
      <div className='logo' >
      <img id="logoHenry" src={clima} width="30" height="30" alt="" className='logo_image' />
      <h4> Weather App - Ivo Rojas</h4>
      </div>
      </Link>
    
    </div>


    
    <div className='searchbar' >
    <SearchBar
      onSearch={onSearch}
    />
    </div> 
 
    </nav>
  );
};

export default Nav;
