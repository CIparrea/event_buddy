import React from 'react'
import './Event.css'
import { useNavigate } from "react-router-dom";

function Event() {
    const navigate = useNavigate();
    
    function outerButtonClick() {
        navigate("/profile");
        console.log("Outer button clicked");
    }
    
    function innerButtonClick(event) {
        console.log("Inner button clicked");
        event.stopPropagation();
        navigate("/favorites");
    }
  

  return (
    <button
    onClick={() => {
        outerButtonClick()
    }}
    className='eventDetailContainer'>
        <div className='eventPicture'></div>
        <div className='eventInformation'>
            <div className='eventDescription'>
                <h2 className='eventTitle'> EVENT TITLE</h2>
                <h3 className='eventDate'>DATE AND TIME</h3>
                <h5 className='eventLocation'>LOCATION</h5>
            </div>
            <div className='eventFooter'>
                <h5 className='eventPrice'>PRICE STARTS $</h5>
                <button 
                onClick={(event) => {
                    innerButtonClick(event)
                }}
                className='heart'></button>
            </div>
        </div>

    </button>
  )
}

export default Event
