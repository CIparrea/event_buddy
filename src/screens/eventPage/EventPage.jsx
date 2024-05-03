import React, { useState, useEffect } from "react";
import "./EventPage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { updateSavedEvents } from "../../Services/users.js";

function EventPage({ userProfile, setUserProfile }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const event = location.state;

  async function innerButtonClick(event) {
    console.log("Inner button clicked");
    console.log(event.id);
    // event.stopPropagation();
    try {
      await updateSavedEvents(event.id);
    } catch (error) {
      console.error("Error updating saved events:", error);
    }
    navigate("/favorites");
  }


  function image() {
    const images = event.images;
    const bestQualityImage = images?.find(obj=>obj.width > "1800");
    const eventImage = bestQualityImage.url
    return eventImage
  }

  return (
    <div className="eventPage">
      <Navbar
        show="noshow"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <div className="eventDetailPageContainer">
        <div className="eventPagePicture" style={{backgroundImage: `url('${image()}')`}}>
        <button
              onClick={() => {
                innerButtonClick(event);
              }}
              className="eventPageHeart"
            ></button>

        </div>
        <div className="eventPageInformation">
        
          <div className="eventPageDescription">
            <h1 className="eventPageTitle">{event.name}</h1>
            <h2 className="eventPageDate">{event.dates.start.localDate}</h2>
            <h3 className="eventPageLocation">
              At {event._embedded.venues[0].name},{" "}
              {event._embedded.venues[0].state.name}
            </h3>
            <h3 className="eventPagePrice">Tickets start at ${event.priceRanges? Math.ceil(event.priceRanges[0].min):0}</h3>
          </div>
          <div className="eventPageFooter">
            <a href={event.url} target="_blank">
            <button
              className="ticketsBtn"
            >
              BUY TICKETS
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
