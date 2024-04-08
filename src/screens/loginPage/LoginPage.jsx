import React from 'react'
import './LoginPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className='loginPage'>
    <Navbar show="noshow"/>
    <div className='loginContainer'>
      <h1 className='profileTitle'>Login</h1>
      <form className='loginForm'>
        <label className='formLabel'>e-mail:</label>
        <input
        className='formInput'
        placeholder='Type your email...'
        ></input>
        <label className='formLabel'>Password:</label>
        <input
        className='formInput'
        type='password'
        placeholder='Enter your password...'
        ></input>
        <button className='formBtn'>Login</button>
      </form>
      <p className="registerHere">
          Dont have an account? <Link to={"/signup"}><br/>Register Here</Link>
      </p>
    </div>
  </div>
  )
}

export default LoginPage