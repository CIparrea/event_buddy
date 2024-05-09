import React from "react";
import "./Event.css";
import { useNavigate } from "react-router-dom";
import { deleteSavedEvents, updateSavedEvents } from "../../Services/users.js";

function Event({ event, favoriteEvents }) {
  const navigate = useNavigate();

  function outerButtonClick() {
    navigate(`/events/${event.id}`, { state: event });
  }

  const addFavorite = async () => {
    // event.stopPropagation();
    try {
      await updateSavedEvents(event);
      favoriteEvents.push(event.id);
    } catch (error) {
      console.error("Error updating saved events:", error);
    }
  };

  const removeFavorite = async () => {
    // event.stopPropagation();
    try {
      await deleteSavedEvents(event);
      favoriteEvents.splice(favoriteEvents.indexOf(event.id));
    } catch (error) {
      console.error("Error deleting saved event: ", error);
    }
  };

  function image() {
    const images = event.images;
    const bestQualityImage = images?.find((obj) => obj.width > "1800");
    const eventImage = bestQualityImage.url;
    return eventImage;
  }

  function isFavorite() {
    return (
      <>
        {favoriteEvents.includes(event.id) ? (
          <button
            onClick={() => {
              removeFavorite(event);
            }}
            className="favoriteEventPageHeartBtn"
          ></button>
        ) : (
          <button
            onClick={() => {
              addFavorite(event);
            }}
            className="eventPageHeart"
          ></button>
        )}
      </>
    );
  }

  return (
    <div
      onClick={() => {
        outerButtonClick();
      }}
      className="eventDetailContainer"
    >
      <img className="eventPicture" src={image()}></img>
      <div className="eventInformation">
        <div className="eventDescription">
          <h2 className="eventTitle">{event.name}</h2>
          <h3 className="eventDate">{event.dates.start.localDate}</h3>
          <h5 className="eventLocation">
            At {event._embedded.venues[0].name},{" "}
            {event._embedded.venues[0].state.name}
          </h5>
        </div>
        <div className="eventFooter">
          <h5 className="eventPrice">
            PRICE STARTS $
            {event.priceRanges ? Math.ceil(event.priceRanges[0].min) : 0}{" "}
          </h5>
          {isFavorite()}
        </div>
      </div>
    </div>
  );
}

export default Event;
