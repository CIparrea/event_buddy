import React from "react";
import "./Event.css";
import { useNavigate } from "react-router-dom";
import { updateSavedEvents } from "../../Services/users.js";

function Event({ event }) {
  const navigate = useNavigate();

  function outerButtonClick() {
    navigate(`/events/${event.id}`);
  }

  async function innerButtonClick(event) {
    console.log("Inner button clicked");
    event.stopPropagation();
    try {
        console.log(event.id)
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
      <div className="eventPicture"></div>
      <div className="eventInformation">
        <div className="eventDescription">
          <h2 className="eventTitle"> EVENT TITLE</h2>
          <h3 className="eventDate">DATE AND TIME</h3>
          <h5 className="eventLocation">LOCATION</h5>
        </div>
        <div className="eventFooter">
          <h5 className="eventPrice">PRICE STARTS $</h5>
          <button
            onClick={(event) => {
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
