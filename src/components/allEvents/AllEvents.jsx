import React from 'react'
import './AllEvents.css'
import Event from '../event/Event'

function AllEvents({events}) {
  return (
    <div className='allEeventsDisplayPage'>
      {/* we will need to add the map on events 
      {events.map((event)=>{
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

export default AllEvents