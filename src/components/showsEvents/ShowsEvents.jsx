import React from 'react'
import './ShowsEvents.css'
import Event from '../event/Event'

function ShowsEvents({showsEvents}) {
  return (
    <div className='showsEventsDisplayPage'>
      {showsEvents.map((event)=>{
        return(
        <Event event={event} key={event.id}/>
        )
      })}
    </div>
  )
}

export default ShowsEvents