import React from "react";
import "./MusicEvents.css";
import Event from "../event/Event.jsx";

function MusicEvents({ musicEvents, favoriteEvents }) {
  return (
    <div className="musicEventsDisplayPage">
      {musicEvents.map((event) => {
        return (
          <Event event={event} key={event.id} favoriteEvents={favoriteEvents} />
        );
      })}
    </div>
  );
}

export default MusicEvents;
