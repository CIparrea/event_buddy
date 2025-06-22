import { useEffect, useState } from "react";
import "./Event.css";
import { useNavigate } from "react-router-dom";
import { deleteSavedEvents, updateSavedEvents } from "../../Services/users.js";

function Event({ event, favoriteEvents, userProfile, setFavList }) {
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(favoriteEvents.includes(event.id));
  }, []);

  function outerButtonClick() {
    navigate(`/events/${event.id}`, { state: event });
  }

  const addFavorite = async () => {
    try {
      await updateSavedEvents(event);
      favoriteEvents.push(event.id);
    } catch (error) {
      console.error("Error updating saved events:", error);
    }
  };

  const removeFavorite = async () => {
    try {
      await deleteSavedEvents(event);
      favoriteEvents.splice(favoriteEvents.indexOf(event.id));
      setFavList((prev) => !prev);
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

  function isFavorite(event) {
    return (
      <>
        {userProfile ? (
          isFav ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFavorite(event);
                setIsFav((prev) => !prev);
              }}
              className="favoriteEventBtn"
            ></button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addFavorite(event);
                setIsFav((prev) => !prev);
              }}
              className="heart"
            ></button>
          )
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/profile/");
            }}
            className="heart"
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
          {event._embedded ? (
            <h5 className="eventLocation">
              At {event._embedded.venues[0].name},{" "}
              {event._embedded.venues[0].city.name},{" "}
              {event._embedded.venues[0].state?.name || event._embedded.venues[0].country.name}
            </h5>
          ) : (
            <h5 className="eventLocations">Location TBD</h5>
          )}
        </div>
        <div className="eventFooter">
          <h5 className="eventPrice">
            PRICE STARTS $
            {event.priceRanges ? Math.ceil(event.priceRanges[0].min) : 0}{" "}
          </h5>
          {isFavorite(event)}
        </div>
      </div>
    </div>
  );
}

export default Event;
