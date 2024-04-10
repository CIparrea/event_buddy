import React from 'react'
import './HomePage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import Event from '../../components/event/Event.jsx'

function HomePage() {
  return (
    <div className='homePage'>
      <Navbar show="show"/>
      <div className='spotlight'>
        <h1 className='spotlightTitle'>SPOTLIGHT TITLE</h1>
      </div>
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

            more...
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
            more...
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
            more...
            
            </div>  
        </div>


      </div>
  </div>
  )
}

export default HomePage