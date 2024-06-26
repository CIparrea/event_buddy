import { React, useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Event from "../../components/event/Event.jsx";
import { useNavigate } from "react-router-dom";
import Credits from "../../components/credits/Credits.jsx";
import { updateSavedEvents, deleteSavedEvents } from "../../Services/users.js";

function HomePage({
  userProfile,
  setUserProfile,
  events,
  setEvents,
  sportsEvents,
  musicEvents,
  showsEvents,
  spotlightEvents,
  favoriteEvents
}) {

  const [modal, setModal] = useState(true)
  const [isFav, setIsFav] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setModal(false)
    },2000);
    setIsFav(favoriteEvents.includes(spotlightEvents?.id))
  }, [spotlightEvents])

  const navigate = useNavigate();

  function outerButtonClick() {
    navigate(`/events/${spotlightEvents.id}`, { state: spotlightEvents });
  }

  const addFavorite = async () => {
    try {
      await updateSavedEvents(spotlightEvents);
      favoriteEvents.push(spotlightEvents.id);
    } catch (error) {
      console.error("Error updating saved events:", error);
    }
  }; 

  const removeFavorite = async () => {
    try {
      await deleteSavedEvents(spotlightEvents);
      favoriteEvents.splice(favoriteEvents.indexOf(spotlightEvents.id));
    } catch (error) {
      console.error("Error deleting saved event: ", error);
    }
  };

  function spotlightImage() {
    const images = spotlightEvents.images;
    const bestQualityImage = images?.find((obj) => obj.width > "1800");
    const eventImage = bestQualityImage.url;
    return eventImage;
  }

  function isFavorite() {
    return (
      <>
      {userProfile? (
        isFav? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeFavorite(spotlightEvents);
              setIsFav(prev => !prev)
            }}
            className="favoriteEventPageHeartBtn"
          ></button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              addFavorite(spotlightEvents);          
              setIsFav(prev => !prev)
            }}
            className="eventPageHeart"
          ></button>
        )
      ):(
      <button
        onClick={(e) => {
          e.stopPropagation()
          navigate('/profile/')
        }}
        className="eventPageHeart"
      ></button>)}
      </>
    );
  }

  return (
    <div className="homePage">
      {modal && (
        <div className="modal-container">
            <h2 className="loadingText">Loading...</h2>
        </div>
      )}
      <Navbar
        show="show"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
        favoriteEvents={favoriteEvents}
      />
      {spotlightEvents && (
      <a>
        <div
          className="spotlight"
          style={{ backgroundImage: `url('${spotlightImage()}')` }}
          onClick={() => {
            outerButtonClick();
          }}
        >
          <h1 className="spotlightTitle">{spotlightEvents.name}</h1>
          {isFavorite()}
        </div>
      </a>
      )}

      <div className="homeContent">
        <div className="homeComponent">
          <div className="category">
            <div className="categoryIcon" id="musicIcon"></div>
            <h1 className="categoryTitle"> Music</h1>
          </div>
          <div className="homeCategory">
            {musicEvents &&
              musicEvents?.map((event) => {
                return (
                  <Event
                    event={event}
                    key={event.id}
                    favoriteEvents={favoriteEvents}
                    userProfile = {userProfile}
                  />
                );
              })}
          </div>
        </div>
        <div className="homeComponent">
          <div className="category">
            <div className="categoryIcon" id="sportsIcon"></div>
            <h1 className="categoryTitle"> Sports</h1>
          </div>
          <div className="homeCategory">
            {sportsEvents &&
              sportsEvents?.map((event) => {
                return (
                  <Event
                    event={event}
                    key={event.id}
                    favoriteEvents={favoriteEvents}
                    userProfile = {userProfile}
                  />
                );
              })}
          </div>
        </div>

        <div className="homeComponent">
          <div className="category">
            <div className="categoryIcon" id="showsIcon"></div>
            <h1 className="categoryTitle"> Shows</h1>
          </div>
          <div className="homeCategory">
            {showsEvents &&
              showsEvents?.map((event) => {
                return (
                  <Event
                    event={event}
                    key={event.id}
                    favoriteEvents={favoriteEvents}
                    userProfile = {userProfile}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <Credits />
    </div>
  );
}

export default HomePage;
