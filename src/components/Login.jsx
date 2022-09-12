import React from 'react'
// import { FaEye } from 'react-icons/fa'
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className='reg-container'>
      <h3 className='fav-heading'>Login</h3>
      <form className='reg-form'>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <p style={{color: "#888"}}>Don't have an account? <Link to="/register" style={{color: "#cc1f56", textDecoration: "none"}}>Register</Link></p>
    </div>
  )
}
