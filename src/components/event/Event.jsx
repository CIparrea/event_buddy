import React from "react";
import "./Event.css";
import { useNavigate } from "react-router-dom";
import { updateSavedEvents } from "../../Services/users.js";

function Event({ event }) {
  // const test = document.querySelector("img");
  // console.log(test)
  const navigate = useNavigate();

  function outerButtonClick() {
    navigate(`/events/${event.id}`, {state: event});
  }

  async function innerButtonClick(event) {
    console.log("Inner button clicked");
    console.log(event.id)
    // event.stopPropagation();
    try {
      await updateSavedEvents(event.id);
    } catch (error) {
      console.error("Error updating saved events:", error);
    }
    navigate("/favorites");
  }

  return (
    <button
      onClick={() => {
        outerButtonClick();
      }}
      className="eventDetailContainer"
    >
      <img className="eventPicture" src={event.images[0].url}></img>
      <div className="eventInformation">
        <div className="eventDescription">
          <h2 className="eventTitle">{event.name}</h2>
          <h3 className="eventDate">{event.dates.start.localDate}</h3>
          <h5 className="eventLocation">At {event._embedded.venues[0].name}, {event._embedded.venues[0].state.name}</h5>
        </div>
        <div className="eventFooter">
          <h5 className="eventPrice">PRICE STARTS $ </h5>
          <button
            onClick={() => {
              innerButtonClick(event);
            }}
            className="heart"
          ></button>
        </div>
      </div>
    </button>
  );
}

export default Event;
