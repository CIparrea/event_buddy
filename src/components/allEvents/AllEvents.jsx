import React from "react";
import "./AllEvents.css";
import Event from "../event/Event.jsx";

function AllEvents({ events, favoriteEvents, userProfile }) {
  return (
    <div className="allEventsDisplayPage">
      {events.map((event) => {
        return (
          <Event event={event} key={event.id} favoriteEvents={favoriteEvents} userProfile = {userProfile}/>
        );
      })}
    </div>
  );
}

export default AllEvents;
