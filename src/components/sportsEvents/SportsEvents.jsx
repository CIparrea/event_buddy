import React from 'react'
import './SportsEvents.css'
import Event from '../event/Event'

function SportsEvents({sportsEvents}) {
  return (
    <div className='sportsEventsDisplayPage'>
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
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  )
}

export default SportsEvents