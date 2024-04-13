import React, { useEffect, useState } from 'react'
import './EditProfilePage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import { useNavigate } from "react-router-dom";
import { updateUser } from '../../Services/users.js';


function EditProfilePage({userProfile, setUserProfile}) {
  const navigate = useNavigate();

//___________________________________________________________________________
  //lines 13-40 are just handeling the edit for first and last name
  const [form, setForm] = useState({
    firstName: `${userProfile.firstName}`,
    lastName: `${userProfile.lastName}`,
    email: `${userProfile.email}`,
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>{
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })};

  const handleEditProfileForm = async(event) =>{
    console.log(userProfile)
    event.preventDefault();
    console.log("edit profile button clicked");
    console.log("this is the new profile information", form)
    //here we need to call the function to the backend to edit the profile in the db
    //somehow this is not sending the information right to the server
    // await updateUser(form)

    //here we need to set the userProfile in the FE to the new data
    //this works internally but once you log out and come back it's gone
    //just because it was never sent to the database
    setUserProfile(form);

    navigate('/profile');
  }
//___________________________________________________________________________


//___________________________________________________________________________
  //this if the function that will be called when the form update password is submitted
  const handleUpdatePasswordForm = async(event) =>{
    event.preventDefault();
    console.log("edit password button clicked")
    navigate('/profile');
  }


//___________________________________________________________________________


  return (
    <div className='editProfilePage'>
      <Navbar show="noshow" userProfile={userProfile}/>
      <div className='editProfileContainer'>
        <h1 className='editProfileTitle'>Edit Profile</h1>
        <form 
        onSubmit={handleEditProfileForm}
        className='editProfileForm'>
          <label className='formLabel'>First Name:</label>
          <input
          className='formInput'
          name="firstName"
          placeholder={userProfile.firstName}
          onChange={handleChange}
          ></input>
          <label className='formLabel'>Last Name:</label>
          <input
          className='formInput'
          name="lastName"
          placeholder={userProfile.lastName}
          onChange={handleChange}
          ></input>
          <button 
          type='submit'
          className='editBtn'>Edit</button>
        </form>

        <form 
        onSubmit={handleUpdatePasswordForm}
        className='editPasswordForm'>
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
          <button 
          type='submit' 
          className='editBtn'>Update</button>
        </form>
    </div>
    </div>
  )
}

export default EditProfilePage