import React from "react";
import "./ShowsEvents.css";
import Event from "../event/Event.jsx";

function ShowsEvents({ showsEvents, favoriteEvents, userProfile }) {
  return (
    <div className="showsEventsDisplayPage">
      {showsEvents.map((event) => {
        return (
          <Event event={event} key={event.id} favoriteEvents={favoriteEvents} userProfile = {userProfile}/>
        );
      })}
    </div>
  );
}

export default ShowsEvents;
