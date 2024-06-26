import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import { getSearchedEvents } from "../../Services/events.js";
import Event from "../event/Event.jsx";

function SearchBar({ show, favoriteEvents, userProfile }) {
  const [searchedEvents, setSearchedEvents] = useState([]);
  const [form, setForm] = useState("");
  const [searchModal, setSearchModal] = useState(false);

  const handleChange = (event) => {
    setForm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearch(form);
  };

  const handleSearch = async (form) => {
    try {
      const fetchSearchedEvents = await getSearchedEvents(form);
      setSearchedEvents(fetchSearchedEvents);
    } catch (error) {
      console.error("Error searching for events: ", error);
    }
  };

  useEffect(() => {
    if (searchedEvents.length > 0) {
      setSearchModal(true);
    } else {
      setSearchModal(false);
    }
  }, [searchedEvents]);

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

      {searchModal && (
        <div
          className="searchModal-container"
          onClick={() => setSearchModal(false)}
        >
          <div className="searchModal-content">
            {/* <div className="close-add">
            <button className="close" onClick={()=> setSearchModal(false)}>x</button>
          </div> */}
            <div
              className="searchDisplay"
              onClick={(event) => event.stopPropagation()}
            >
              <h2 className="searchTitle">Events matching "{form}"</h2>
              <div className="searchedEvents">
                {searchedEvents &&
                  searchedEvents?.map((event) => {
                    return (event.url ?
                      (<Event
                        event={event}
                        key={event.id}
                        favoriteEvents={favoriteEvents}
                        userProfile={userProfile}
                      />) : (null)
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
