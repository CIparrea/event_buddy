import React from 'react'
import './HelpPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'

function HelpPage({userProfile}) {
  return (
    <div className='helpPage'>
    <Navbar show="noshow" userProfile={userProfile}/>
    helpPage
  </div>
  )
}

export default HelpPage