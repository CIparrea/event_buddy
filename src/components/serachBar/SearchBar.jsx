import React from 'react'
import './SearchBar.css'

function SearchBar({show}) {
  return (
    <div className='searchBar' id={show}>
        <form className='searchBarForm'>
            <input className='searchBarInput' type='search' placeholder='Search...'></input>
            <div className='searchBarIcon'></div>
        </form>
    </div>
  )
}

export default SearchBar