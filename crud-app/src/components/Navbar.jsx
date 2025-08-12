import React from 'react';
import { NavLink, /*Link*/ } from 'react-router-dom';
import siyuan from '../assets/siyuan.png';
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  
  return (
    <>
    
      <ul className='navbar_ul'>
        <div className="navbar-logo">
        <NavLink to='/'>
          <img 
            src={siyuan} 
            alt="Employee Management Logo" 
            className="logo-img"
          />
        </NavLink>
      </div>
        <li className='navbar-list-item'>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li className='navbar-list-item'>
            <NavLink to='/about'>About Us</NavLink>
        </li>
        <li className='navbar-list-item'>
            <NavLink to='/contact'>Contact Us</NavLink>
        </li>
        <div className="navbar-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </ul>
    </>
  )
}
