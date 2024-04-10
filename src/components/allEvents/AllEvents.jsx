import React from 'react'
import './AllEvents.css'
import Event from '../event/Event'

function AllEvents() {
  return (
    <div className='allEeventsDisplayPage'>
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  )
}

export default AllEvents