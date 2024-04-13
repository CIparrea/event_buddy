import React from 'react'
import './SearchBar.css'
import { useNavigate } from "react-router-dom";


function SearchBar({show}) {
  const navigate = useNavigate();

  const handleChange = (event) =>{
    event.preventDefault()
  };

  const handleSearchSubmit = async (event) =>{
      navigate("/search");
  }
  
  return (
    <div className='searchBar' id={show}>
        <form 
        onSubmit={handleSearchSubmit}
        className='searchBarForm'>
            <input 
            onChange={handleChange}
            className='searchBarInput' type='search' placeholder="Search..." ></input>
            <div className='searchBarIcon'></div>
        </form>
    </div>
  )
}

export default SearchBar