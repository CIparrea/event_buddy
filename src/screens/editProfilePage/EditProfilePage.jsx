import React from 'react'
import './EditProfilePage.css'
import Navbar from '../../components/navbar/Navbar.jsx'

function EditProfilePage() {
  return (
    <div className='editProfilePage'>
      <Navbar show="noshow"/>
      <div className='editProfileContainer'>
      <h1 className='editProfileTitle'>Edit Profile</h1>
      <form className='editProfileForm'>
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
        <button className='editBtn'>Edit</button>
      </form>
      <form className='editPasswordForm'>
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
        <button className='editBtn'>Update</button>
      </form>
    </div>
    </div>
  )
}

export default EditProfilePage