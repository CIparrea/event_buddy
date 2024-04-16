import React from 'react'
import './SportsEvents.css'
import Event from '../event/Event'

function SportsEvents({sportsEvents}) {
  return (
    <div className='sportsEventsDisplayPage'>
      {sportsEvents.map((event)=>{
        return(
        <Event event={event} key={event.id}/>
        )
      })}
    </div>
  )
}

export default SportsEvents