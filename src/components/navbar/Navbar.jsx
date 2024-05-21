import React from 'react'
import './Navbar.css'
import SearchBar from '../serachBar/SearchBar'
import { useNavigate } from "react-router-dom";
import { signOut } from '../../Services/users.js';


function Navbar({show, userProfile, setUserProfile, favoriteEvents, }) {
  const navigate = useNavigate();

  const handleLogOut = async () =>{
    await signOut()
    setUserProfile(null)
    navigate("/login");
  }

  const navBarBtn = () => {
    if(userProfile){
      return(
        <>
        <button 
        onClick={() => {
          navigate("/profile");
        }}
        className='navBarMenuBtn'>Welcome {userProfile.firstName}</button>
        <button 
        onClick={() => {
          navigate("/favorites");
        }}
        className='navBarMenuBtn'>Favorites</button>
        <button 
        onClick={handleLogOut}
        className='navBarMenuBtn'>Log Out</button>
        </>
      )
    }else{
      return(
        <>
        <button 
        onClick={() => {
          navigate("/login");
        }}
        className='navBarMenuBtn'>Login</button>
        <button 
        onClick={() => {
          navigate("/signup");
        }}
        className='navBarMenuBtn'>Sign Up</button>
        </>
      )
    }
  }

  return (
    <div className='navBar'>
        <div className='navBarPermanentOptions'>
        <button 
        onClick={() => {
          navigate("/");
        }}
        className='logoBtn'
        ></button>

        <button 
        onClick={() => {
          navigate("/search");
        }}
        className='navBarMenuBtn'
        >All Events</button>
        </div>

        <SearchBar show={show} favoriteEvents={favoriteEvents}/>
        <div className='navBarMenu'>
            <div className='computerOptions'>
              {navBarBtn()}
            </div>
            <button 
            onClick={() => {
            navigate("/help");
            }}
            className='helpBtn'
            ></button>
        </div>
    </div>
  )
}

export default Navbar