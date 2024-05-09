import React from "react";
import "./ShowsEvents.css";
import Event from "../event/Event.jsx";

function ShowsEvents({ showsEvents, favoriteEvents }) {
  return (
    <div className="showsEventsDisplayPage">
      {showsEvents.map((event) => {
        return (
          <Event event={event} key={event.id} favoriteEvents={favoriteEvents} />
        );
      })}
    </div>
  );
}

export default ShowsEvents;
