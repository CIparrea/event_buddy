import React, { useState, useEffect } from "react";
import "./FavoritesPage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Event from "../../components/event/Event.jsx";
import { getSavedEvents } from "../../Services/users.js";

function FavoritesPage({ userProfile, setUserProfile }) {
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    const fetchSavedEvents = async () => {
      const savedEventsFetched = await getSavedEvents();
      console.log(savedEventsFetched);
      setSavedEvents(savedEventsFetched);
    };

    fetchSavedEvents();
  }, []);

  return (
    <div className="favoritesPage">
      <Navbar
        show="noshow"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      {/* Will need to add an API call to pull saved Events based on ID */}
      {/* <div className="favoriteEvents">
        {savedEvents &&
          savedEvents.map((event) => {
            return <Event event={event} key={event.id} />;
          })}
      </div> */}
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
}

export default FavoritesPage;
