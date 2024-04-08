import React from 'react'
import './SignUpPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'

function SignUpPage() {
  return (
    <div className='signUpPage'>
    <Navbar show="noshow"/>
    <div className='signUpContainer'>
      <h1 className='profileTitle'>Sign Up</h1>
      <form className='signUpForm'>
        <label className='formLabel'>First Name:</label>
        <input
        className='formInput'
        placeholder='Type your first name...'
        ></input>
        <label className='formLabel'>Last Name:</label>
        <input
        className='formInput'
        placeholder='Type your last name...'
        ></input>
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
        <label className='formLabel'>Confirm your password:</label>
        <input
        className='formInput'
        type='password'
        placeholder='Confirm password...'
        ></input>
        <button className='formBtn'>Join Us!</button>
      </form>
    </div>
  </div>
  )
}

export default SignUpPage