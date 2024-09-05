import React from 'react'
import './HelpPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import { useNavigate } from "react-router-dom";

function HelpPage({userProfile, setUserProfile}) {
  const navigate = useNavigate();
  return (
    <div className='helpPage'>
    <Navbar show="noshow" userProfile={userProfile} setUserProfile={setUserProfile}/>
      <div className='profile'>
      <a href="https://github.com/ambretate" target="_blank" className='linkPortfoliosHelp'>
        <div className='imageProfileAmbre'></div> 
        <h1>Ambre Tate</h1>
      </a>
        <div className='logosProfiles'>
          <a href="https://github.com/ambretate" target="_blank">
            <div className='socialLogoHelp' id="github"></div> 
          </a>
          <a href="https://www.linkedin.com/in/ambretate/" target="_blank">
            <div className='socialLogoHelp' id="linkedIn"></div> 
          </a>
          <a href="mailto:ambretate@gmail.com ">
            <div className='socialLogoHelp' id="gmail"></div> 
          </a>
        </div>
      </div>

      <div className='logoHelpPageCenter'>
        <h2>DEVELOPERS</h2>
        <button 
          onClick={() => {
            navigate("/");
          }}
          className='logoBtnHelp'
          ></button>
        </div>

      <div className='profile'>
        <a href="https://cesariparrea.com" target="_blank" className='linkPortfoliosHelp'>
          <div className='imageProfileCesar'></div> 
        <h1>Cesar Iparrea</h1>
        </a>
        <div className='logosProfiles'>
        <a href="https://github.com/CIparrea" target="_blank">
          <div className='socialLogoHelp' id="github"></div> 
        </a>
        <a href="https://www.linkedin.com/in/cesariparrea/" target="_blank">
          <div className='socialLogoHelp' id="linkedIn"></div> 
        </a>
        <a href="mailto:iparreacesar@gmail.com">
          <div className='socialLogoHelp' id="gmail"></div> 
        </a>
        </div>
      
      </div>
  </div>
  )
}

export default HelpPage