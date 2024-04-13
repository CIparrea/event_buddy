import React from 'react'
import './MusicEvents.css'
import Event from '../event/Event'

function MusicEvents({musicEvents}) {
  return (
    <div className='musicEventsDisplayPage'>
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
      <Event />
    </div>
  )
}

export default MusicEvents