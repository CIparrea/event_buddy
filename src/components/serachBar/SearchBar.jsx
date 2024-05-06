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

  console.log(form)

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const searchedEventsFetched = await getSearchedEvents(form);
    console.log(searchedEventsFetched);
    return setSearchedEvents(searchedEventsFetched);
  };

  // useEffect(() => {
  //   const fetchSearchedEvents = async () => {
  //     const searchedEventsFetched = await getSearchedEvents(form);
  //     console.log(searchedEventsFetched);
  //     return setSearchedEvents(searchedEventsFetched);
  //   }
  // })

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
        <div className="searchBarIcon"></div>
      </form>
    </div>
  );
}

export default SearchBar;
