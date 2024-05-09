import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import { getSearchedEvents } from "../../Services/events.js";

function SearchBar({ show }) {
  const [searchedEvents, setSearchedEvents] = useState([]);
  const [form, setForm] = useState("");

  const handleChange = (event) => {
    setForm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(form);
    handleSearch(form);
  };

  const handleSearch = async (form) => {
    try {
      const fetchSearchedEvents = await getSearchedEvents(form);
      setSearchedEvents(fetchSearchedEvents);
      console.log(searchedEvents);
    } catch (error) {
      console.error("Error searching for events: ", error);
    }
  };

  return (
    <div className="searchBar" id={show}>
      <form onSubmit={handleSearchSubmit} className="searchBarForm">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={handleChange}
          className="searchBarInput"
        ></input>
        <button type="submit" className="searchBarIcon"></button>
      </form>
    </div>
  );
}

export default SearchBar;
