import React from 'react'
import './HelpPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'

function HelpPage({userProfile, setUserProfile}) {
  return (
    <div className='helpPage'>
    <Navbar show="noshow" userProfile={userProfile} setUserProfile={setUserProfile}/>
    helpPage
    <div className='ambreSide'>Ambre Tate</div>
    <div className='cesarSide'>Cesar Iparrea</div>
  </div>
  )
}

export default HelpPage