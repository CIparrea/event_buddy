import React from 'react'
import './EventPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import { useNavigate } from "react-router-dom";

function EventPage() {
  const navigate = useNavigate();
    

  return (
    <div className='eventPage'>
      <Navbar show="noshow"/>
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
                navigate("/help");
              }}
              className='ticketsBtn'>BUY TICKETS</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default EventPage