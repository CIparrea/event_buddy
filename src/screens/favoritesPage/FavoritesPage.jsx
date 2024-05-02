import React, { useState, useEffect } from "react";
import "./FavoritesPage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Event from "../../components/event/Event.jsx";
import { getSavedEvents } from "../../Services/users.js";
import { getSavedEvent } from "../../Services/events.js";

function FavoritesPage({ userProfile, setUserProfile }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchSavedEvents = async () => {
      try {
        const savedEventIds = await getSavedEvents();
        console.log(savedEventIds);
        const eventsData = await Promise.all(
          savedEventIds.map(async (eventId) => {
            try {
              const eventInfo = await getSavedEvent(eventId);
              return eventInfo;
            } catch (error) {
              console.error("Error fetching event info for ID", eventId, ":", error);
              return null; // Return null for failed requests
            }
          })
        );
        setEvents(eventsData.filter(Boolean)); // Filter out null values
      } catch (error) {
        console.error("Error fetching saved events:", error);
      }
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
      {/* <div className="favoriteEvents">
      {events.map((event) => (
          <Event event={event} key={event.id} />
        ))}
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
