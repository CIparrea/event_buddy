import React from 'react'
import './AllEvents.css'
import Event from '../event/Event'

function AllEvents({events}) {
  return (
    <div className='allEeventsDisplayPage'>
      {events.map((event)=>{
        return(
          <Event event={event} key={event.id}/>
        )
      })}
    </div>
  )
}

export default AllEvents