import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Event from "../../components/event/Event.jsx";
import { useNavigate } from "react-router-dom";
import Credits from "../../components/credits/Credits.jsx";


function HomePage({
  userProfile,
  setUserProfile,
  events,
  setEvents,
  sportsEvents,
  musicEvents,
  showsEvents,
  spotlightEvents
}) {
  const navigate = useNavigate();
  // console.log(spotlightEvents)
  
  function outerButtonClick() {
    navigate(`/events/${spotlightEvents.id}`, {state: spotlightEvents});
  }

  function innerButtonClick(event) {
    event.stopPropagation();
    navigate("/favorites");
  }

  function spotlightImage() {
    const images = spotlightEvents.images;
    const bestQualityImage = images?.find(obj=>obj.width > "1800");
    const eventImage = bestQualityImage.url
    return eventImage
  }
  spotlightImage()

  return (
    <div className="homePage">
      <Navbar
        show="noshow"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <a>
        <div className="spotlight"
          style={{backgroundImage: `url('${spotlightImage()}')`}}
          onClick={() => {
            outerButtonClick();
          }}
        >
          <h1 className="spotlightTitle">{spotlightEvents.name}</h1>
          <button
            onClick={(event) => {
              innerButtonClick(event);
            }}
            className="eventPageHeart"
          ></button>
          <button
            onClick={(event) => {
              innerButtonClick(event);
            }}
            className="favoriteEventPageHeartBtn"
          ></button>
        </div>
      </a>


      <div className="homeContent">
        <div className="homeComponent">
          <div className="category">
            <div className="categoryIcon" id="musicIcon"></div>
            <h1 className="categoryTitle"> Music</h1>
          </div>
          <div className="homeCategory">
            {musicEvents &&
              musicEvents?.map((event) => {
                return <Event event={event} key={event.id} />;
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
                return <Event event={event} key={event.id} />;
              })}
          </div>
        </div>

        <div className="homeComponent">
          <div className="category">
            <div className="categoryIcon" id="showsIcon"></div>
            <h1 className="categoryTitle"> Shows</h1>
          </div>
          <div className="homeCategory">
            {showsEvents && showsEvents?.map((event) => {
              return <Event event={event} key={event.id} />;
            })}
          </div>
        </div>
      </div>
      <Credits />
    </div>
  );
}

export default HomePage;
