import React, { useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Event from "../../components/event/Event.jsx";
import { useNavigate } from "react-router-dom";
import Credits from "../../components/credits/Credits.jsx";

function HomePage({
  userProfile,
  setUserProfile,
  events,
  sportsEvents,
  musicEvents,
  showsEvents,
}) {
  const navigate = useNavigate();

  //Somewhere in here we need to fetch or get a random event for the spotlight section

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
