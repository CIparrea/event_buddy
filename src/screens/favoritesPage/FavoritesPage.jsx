import React, { useState, useEffect } from "react";
import "./FavoritesPage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Event from "../../components/event/Event.jsx";
import { getSavedEvents } from "../../Services/users.js";
import { getSavedEvent } from "../../Services/events.js";

function FavoritesPage({ userProfile, setUserProfile, favoriteEvents }) {
  const [savedEvents, setSavedEvents] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchSavedEvents = async () => {
      try {
        let savedEventIds = await getSavedEvents();
        savedEventIds = savedEventIds.filter(Boolean);
        setSavedEvents(savedEventIds);
      } catch (error) {
        console.error("Error fetching saved events:", error);
      }
    };

    fetchSavedEvents();
  }, []);

  useEffect(() => {
    const fetchEventInfo = async () => {
      try {
        const eventPromises = savedEvents.map(async (savedEvent) => {
          try {
            return await getSavedEvent(savedEvent);
          } catch (error) {
            console.error("Error fetching event info for ID", savedEvent, ":", error);
            return null;
          }
        });

        const resolvedEvents = await Promise.all(eventPromises);
        setEvents(resolvedEvents.flat().filter(Boolean));
      } catch (error) {
        console.error("Error fetching event info:", error);
      }
    };

    fetchEventInfo();
  }, [savedEvents]);

  console.log(events);

  return (
    <div className="favoritesPage">
      <Navbar
        show="noshow"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <div className="favoriteEvents">
      {events && events.map((event) => (
          <Event event={event} key={event.id} favoriteEvents={favoriteEvents} userProfile = {userProfile}/>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
