import React from "react";
import "./EventPage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateSavedEvents, deleteSavedEvents } from "../../Services/users.js";

function EventPage({ userProfile, setUserProfile, favoriteEvents }) {
  const location = useLocation();
  const event = location.state;
  const navigate = useNavigate();

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
        {userProfile? (
          favoriteEvents.includes(event.id) ? (
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
          )
        ):(
          <button
            onClick={() => {
             navigate(`/profile/`)
            }}
            className="eventPageHeart"
          ></button>
        )}
      </>
    );
  }

  return (
    <div className="eventPage">
      <Navbar
        show="noshow"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <div className="eventDetailPageContainer">
        <div
          className="eventPagePicture"
          style={{ backgroundImage: `url('${image()}')` }}
        >
          {isFavorite()}
        </div>
        <div className="eventPageInformation">
          <div className="eventPageDescription">
            <h1 className="eventPageTitle">{event.name}</h1>
            <h2 className="eventPageDate">{event.dates.start.localDate}</h2>
            <h3 className="eventPageLocation">
              At {event._embedded.venues[0].name},{" "}
              {event._embedded.venues[0].state.name}
            </h3>
            <h3 className="eventPagePrice">
              Tickets start at $
              {event.priceRanges ? Math.ceil(event.priceRanges[0].min) : 0}
            </h3>
          </div>
          <div className="eventPageFooter">
            <a href={event.url} target="_blank">
              <button className="ticketsBtn">BUY TICKETS</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
