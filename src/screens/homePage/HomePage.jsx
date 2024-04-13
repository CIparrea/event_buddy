import React, {useEffect} from 'react'
import './HomePage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import Event from '../../components/event/Event.jsx'
import { useNavigate } from "react-router-dom";


function HomePage({ userProfile, events, sportsEvents, musicEvents, showsEvents }) {
  const navigate = useNavigate();


  //Somewhere in here we need to fetch or get a random event for the spotlight section

  
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
      className='spotlight'>
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
  {/* we will need to add the map on musicEvents 
      {musicEvents.map((event)=>{
        <Event event={event} key={event.id}/>
      })}
  */}
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
  {/* we will need to add the map on sportsEvents 
      {sportsEvents.map((event)=>{
        <Event event={event} key={event.id}/>
      })}
  */}
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
  {/* we will need to add the map on showsEvents 
      {showsEvents.map((event)=>{
        <Event event={event} key={event.id}/>
      })}
  */}         
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