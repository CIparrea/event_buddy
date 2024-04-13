import React from 'react'
import './Credits.css'
import { Link } from 'react-router-dom'; 


function Credits() {
  return (
    <div className='creditsContainer'>
        <p className='creditsTitle'>
            Developed by <br/>
            <Link to={"/login"} className='creditsLinks'>
            Ambre Tate
            </Link>  
            {" & "}
            <Link to={"https://www.cesariparrea.com"} className='creditsLinks'>
            Cesar Iparrea
            </Link>  
        </p>
        <p className='creditsTitle'>
            Powered by{" "}
            <Link to={"https://www.ticketmaster.com"} className='creditsLinks'>
            Ticketmaster
            </Link>  
        </p>
    </div>
  )
}

export default Credits