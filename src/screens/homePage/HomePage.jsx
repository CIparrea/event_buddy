import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Event from "../../components/event/Event.jsx";
import { useNavigate } from "react-router-dom";
import Credits from "../../components/credits/Credits.jsx";
import { getSpotlight } from "../../Services/events.js";

function HomePage({
  userProfile,
  setUserProfile,
  events,
  setEvents,
  sportsEvents,
  musicEvents,
  showsEvents,
}) {
  const navigate = useNavigate();
  const [spotlightEvents, setSpotlightEvents] = useState([]);

  useEffect(() => {
    
    const fetchSpotlightEvents = async () => {
      const spotlightEventsfetched = await getSpotlight();
      setSpotlightEvents(spotlightEventsfetched);
      console.log("spotlight",spotlightEvents)
    };

    fetchSpotlightEvents();
  }, []);
  
  function outerButtonClick() {
    //here needs to render the id of the event
    navigate(`/events/2`);
  }

  function innerButtonClick(event) {
    event.stopPropagation();
    navigate("/favorites");
  }
  return (
    <div className="homePage">
      <Navbar
        show="noshow"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <button
        onClick={() => {
          outerButtonClick();
        }}
        className="spotlight"
      >
        <h1 className="spotlightTitle">SPOTLIGHT TITLE</h1>
        <button
          onClick={(event) => {
            innerButtonClick(event);
          }}
          className="eventPageHeart"
        ></button>
      </button>
      <div className="homeContent">
        <div className="homeComponent">
          <div className="category">
            <div className="categoryIcon" id="musicIcon"></div>
            <h1 className="categoryTitle"> Music</h1>
          </div>
          <div className="homeCategory">
            {musicEvents &&
              musicEvents.map((event) => {
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
              sportsEvents.map((event) => {
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
            {showsEvents && showsEvents.map((event) => {
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
