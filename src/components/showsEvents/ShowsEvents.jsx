import React from 'react'
import './ShowsEvents.css'
import Event from '../event/Event'

function ShowsEvents({showsEvents}) {
  return (
    <div className='showsEventsDisplayPage'>
      {/* we will need to add the map on showsEvents 
      {showsEvents.map((event)=>{
        <Event event={event} key={event.id}/>
      })}
  */}   
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  )
}

export default ShowsEvents