import React from 'react'
import './Footer.css'
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className='footer'>
      <button 
      onClick={() => {
        navigate("/");
      }}
      className='footerBtn' 
      id='homeFooterBtn'
      ></button>
      <button 
      onClick={() => {
        navigate("/search");
      }}
      className='footerBtn' 
      id='searchFooterBtn'
      ></button>
      <button 
      onClick={() => {
        navigate("/favorites");
      }}
      className='footerBtn' 
      id='favoritesFooterBtn'
      ></button>
      <button 
      onClick={() => {
        navigate("/profile");
      }}
      className='footerBtn' 
      id='profileFooterBtn'
      ></button>
    </div>
  )
}

export default Footer