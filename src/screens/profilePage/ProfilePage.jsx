import React from 'react'
import './ProfilePage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className='profilePage'>
    <Navbar show='noshow'/>
    <div className='userContainer'>
      <div className='userPicture'></div>
      <div className='userInfo'>
      <h1 className='userTitle'>USER FIRST, USER LAST</h1>
      <h2 className='userEmail'>USER EMAIL</h2>
      <button 
      onClick={() => {
        navigate("/edit");
      }}
      className='profileBtn'
      >Edit</button>
      <button 
      onClick={() => {
        navigate("/home");
      }}
      className='profileBtn'
      >Delete</button>
      </div>
    </div>
  </div>
  )
}

export default ProfilePage