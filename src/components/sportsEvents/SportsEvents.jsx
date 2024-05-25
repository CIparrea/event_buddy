import React from "react";
import "./SportsEvents.css";
import Event from "../event/Event.jsx";

function SportsEvents({ sportsEvents, favoriteEvents, userProfile }) {
  return (
    <div className="sportsEventsDisplayPage">
      {sportsEvents.map((event) => {
        return (
          <Event event={event} key={event.id} favoriteEvents={favoriteEvents} userProfile = {userProfile}/>
        );
      })}
    </div>
  );
}

export default SportsEvents;
