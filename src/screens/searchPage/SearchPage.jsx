import { React, useState, useEffect } from "react";
import "./SearchPage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AllEvents from "../../components/allEvents/AllEvents.jsx";
import MusicEvents from "../../components/musicEvents/MusicEvents.jsx";
import SportsEvents from "../../components/sportsEvents/SportsEvents.jsx";
import ShowsEvents from "../../components/showsEvents/ShowsEvents.jsx";

function SearchPage({
  userProfile,
  setUserProfile,
  events,
  sportsEvents,
  musicEvents,
  showsEvents,
  favoriteEvents,
  spotlightEvents,
}) {

  const [greenAllEvents, setGreenAllEvents] = useState(true);
  const [greenMusic, setGreenMusic] = useState(false);
  const [greenSports, setGreenSports] = useState(false);
  const [greenShows, setGreenShows] = useState(false);
  const allEventsStyle = greenAllEvents ? "filtersBtnActive" : "filtersBtn";
  const musicStyle = greenMusic ? "filtersBtnActive" : "filtersBtn";
  const sportsStyle = greenSports ? "filtersBtnActive" : "filtersBtn";
  const showsStyle = greenShows ? "filtersBtnActive" : "filtersBtn";

  const [modal, setModal] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setModal(false)
      console.log("finished loading")
    },2000);
  }, [spotlightEvents]);  

  return (
    <div className="searchPage">
      {modal && (
        <div className="modal-container">
            <h2 className="loadingText">Loading...</h2>
        </div>
      )}
      <Navbar
        show="show"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <Tabs className="searchScreen">
        <TabList className="filterOptions">
          <Tab>
            <div
              onClick={() => {
                setGreenAllEvents(true);
                setGreenMusic(false);
                setGreenSports(false);
                setGreenShows(false);
              }}
              className={allEventsStyle}
            >
              <div className="filterIcon" id="allEventsIconSearch"></div>
              <p className="filtersTitle">All events</p>
            </div>
          </Tab>
          <Tab>
            <div
              onClick={() => {
                setGreenAllEvents(false);
                setGreenMusic(true);
                setGreenSports(false);
                setGreenShows(false);
              }}
              className={musicStyle}
            >
              <div className="filterIcon" id="musicIconSearch"></div>
              <p className="filtersTitle">Music</p>
            </div>
          </Tab>
          <Tab>
            <div
              onClick={() => {
                setGreenAllEvents(false);
                setGreenMusic(false);
                setGreenSports(true);
                setGreenShows(false);
              }}
              className={sportsStyle}
            >
              <div className="filterIcon" id="sportsIconSearch"></div>
              <p className="filtersTitle">Sports</p>
            </div>
          </Tab>
          <Tab>
            <div
              onClick={() => {
                setGreenAllEvents(false);
                setGreenMusic(false);
                setGreenSports(false);
                setGreenShows(true);
              }}
              className={showsStyle}
            >
              <div className="filterIcon" id="showsIconSearch"></div>
              <p className="filtersTitle">Shows</p>
            </div>
          </Tab>
        </TabList>
        <div className="eventsDisplay">
          <TabPanel>
            <div>
              <AllEvents events={events} favoriteEvents={favoriteEvents} />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <MusicEvents
                musicEvents={musicEvents}
                favoriteEvents={favoriteEvents}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <SportsEvents
                sportsEvents={sportsEvents}
                favoriteEvents={favoriteEvents}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <ShowsEvents
                showsEvents={showsEvents}
                favoriteEvents={favoriteEvents}
              />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default SearchPage;
