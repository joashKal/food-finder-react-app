import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import {FaBars, FaTimes} from "react-icons/fa"
//import { useState } from 'react'

export default function NavBar() {
       const [clicked, setClicked] = useState(false)
    
  return (
    <div className='nav-bar'>
        <div >
            <h1 className='logo'>foodfinder</h1>
            <div onClick={()=> setClicked(!clicked)}>{clicked ? <FaTimes className='menu'/> : <FaBars className='menu' />}</div>
        </div>
        <div id="nav-links" className={clicked ? "active": "notActive"} >
           
            <ul>
                <li><NavLink to="/">Discover</NavLink></li>
                <li><NavLink to="/favorites">Favorites</NavLink></li>
                <li><NavLink to="/reservations">Reservation</NavLink></li>
                <li><NavLink to="/login">Log in</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="#">Logout</NavLink></li>
            </ul>
        </div>
    </div>
  )
}
