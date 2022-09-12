import React from 'react'
// import { FaEye } from 'react-icons/fa'
import {Link} from "react-router-dom"

export default function Register() {
  return (
    <div className='register'>
    <div className='reg-container'>
      <h3 className='fav-heading'>Register</h3>
      <form className='reg-form'>
        <input type="text" placeholder="UserName" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </form>
      <p style={{color: "#888"}}>Have an account already? <Link to="/login" style={{color: "#cc1f56", textDecoration: "none"}}>Login</Link></p>
    </div>
    </div>
  )
}
