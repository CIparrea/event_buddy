import React from "react";
import "./SportsEvents.css";
import Event from "../event/Event.jsx";

function SportsEvents({ sportsEvents, favoriteEvents }) {
  return (
    <div className="sportsEventsDisplayPage">
      {sportsEvents.map((event) => {
        return (
          <Event event={event} key={event.id} favoriteEvents={favoriteEvents} />
        );
      })}
    </div>
  );
}

export default SportsEvents;
