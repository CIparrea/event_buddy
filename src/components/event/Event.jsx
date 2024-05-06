import React from "react";
import "./Event.css";
import { useNavigate } from "react-router-dom";
import { updateSavedEvents } from "../../Services/users.js";

function Event({ event }) {
  const navigate = useNavigate();

  function outerButtonClick() {
    navigate(`/events/${event.id}`, {state: event});
  }

  function addFavorite(event) {
    event.stopPropagation();
    console.log("add favorite")
    // console.log("Inner button clicked");
    // console.log(event.id)
    // // event.stopPropagation();
    // try {
    //   await updateSavedEvents(event.id);
    // } catch (error) {
    //   console.error("Error updating saved events:", error);
    // }
    // navigate("/favorites");
  }

  function removeFavorite(event) {
    event.stopPropagation();
    console.log("remove favorite")
  
  }

  function image() {
    const images = event.images;
    const bestQualityImage = images?.find(obj=>obj.width > "1800");
    const eventImage = bestQualityImage.url
    return eventImage
  }

  function isFavorite(){
    return(
      <>
      <button
        onClick={(event) => {
          addFavorite(event);
        }}
        className="heart"
      ></button>
      <button
        onClick={(event) => {
          removeFavorite(event);
        }}
        className="favoriteEventBtn"
      ></button>
      </>
    )
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
          <h5 className="eventLocation">At {event._embedded.venues[0].name}, {event._embedded.venues[0].state.name}</h5>
        </div>
        <div className="eventFooter">
          <h5 className="eventPrice">PRICE STARTS ${event.priceRanges? Math.ceil(event.priceRanges[0].min):0} </h5>
          {isFavorite()}
        </div>
      </div>
    </div>
  );
}

export default Event;
