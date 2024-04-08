import React from 'react'
import './Navbar.css'
import SearchBar from '../serachBar/SearchBar'
import { useNavigate } from "react-router-dom";

function Navbar({show}) {
  const navigate = useNavigate();

  return (
    <div className='navBar'>
        <button 
        onClick={() => {
          navigate("/");
        }}
        className='logoBtn'
        ></button>
        <SearchBar show={show}/>
        <div className='navBarMenu'>
            <div className='computerOptions'>
                <div className='navBarMenuBtn'>Option 1</div>
                <div className='navBarMenuBtn'>Option 2</div>
                <div className='navBarMenuBtn'>Option 3</div>
                <div className='navBarMenuBtn'>Option 4</div>
            </div>
            <button 
            onClick={() => {
            navigate("/help");
            }}
            className='helpBtn'
            ></button>
        </div>
    </div>
  )
}

export default Navbar