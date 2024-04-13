import React from 'react'
import './HomePage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import Event from '../../components/event/Event.jsx'
import { useNavigate } from "react-router-dom";


function HomePage({ userProfile }) {
  const navigate = useNavigate();
    
  function outerButtonClick() {
      //here needs to render the id of the event
      navigate("/events/1");
  }
  
  function innerButtonClick(event) {
      event.stopPropagation();
      navigate("/favorites");
  }
  return (
    <div className='homePage'>
      <Navbar show="noshow" userProfile={userProfile}/>
      <button 
      onClick={() => {
        outerButtonClick()
      }}
      className='spotlight '>
        <h1 className='spotlightTitle'>SPOTLIGHT TITLE</h1>
        <button 
          onClick={(event) => {
            innerButtonClick(event)
        }}
          className='eventPageHeart'></button>
      </button>
      <div className='homeContent'>
        <div className='homeComponent'>
          <div className='category'>
            <div className='categoryIcon' id='musicIcon'></div>
            <h1 className='categoryTitle' > Music</h1>
          </div>
          <div className='homeCategory'>
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            </div>  
        </div>
        <div className='homeComponent'>
          <div className='category'>
            <div className='categoryIcon' id='sportsIcon'></div>
            <h1 className='categoryTitle'> Sports</h1>
          </div>
          <div className='homeCategory'>
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            </div>  
        </div>

        <div className='homeComponent'>
          <div className='category'>
            <div className='categoryIcon' id='showsIcon'></div>
            <h1 className='categoryTitle'> Shows</h1>
          </div>
          <div className='homeCategory'>       
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />            
            </div>  
        </div>


      </div>
  </div>
  )
}

export default HomePage