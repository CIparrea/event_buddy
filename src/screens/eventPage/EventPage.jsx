import React, { useState, useEffect }from 'react'
import './EventPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function EventPage({userProfile, setUserProfile}) {
  const navigate = useNavigate();
  const { id } = useParams()

  //here we will need a useEffect so we can fetch the event that was clicked on

  return (
    <div className='eventPage'>
      <Navbar show="noshow" userProfile={userProfile} setUserProfile={setUserProfile}/>
      <div className='eventDetailPageContainer'>
        <div className='eventPagePicture'>
          <button 
          onClick={(event) => {
            navigate("/favorites");
          }}
          className='eventPageHeart'></button>
        </div>
        <div className='eventPageInformation'>
            <div className='eventPageDescription'>
                <h1 className='eventPageTitle'> EVENT TITLE</h1>
                <h2 className='eventPageDate'>DATE AND TIME</h2>
                <h3 className='eventPageLocation'>LOCATION</h3>
                <h3 className='eventPagePrice'>PRICE STARTS $</h3>
            </div>
            <div className='eventPageFooter'>
              <button 
              onClick={(event) => {
                navigate("/");
              }}
              className='ticketsBtn'>BUY TICKETS</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default EventPage