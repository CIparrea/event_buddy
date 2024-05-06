import "./App.css";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage/HomePage";
import SearchPage from "./screens/searchPage/SearchPage";
import FavoritesPage from "./screens/favoritesPage/FavoritesPage";
import EventPage from "./screens/eventPage/EventPage";
import LoginPage from "./screens/loginPage/LoginPage";
import ProfilePage from "./screens/profilePage/ProfilePage";
import EditProfilePage from "./screens/editProfilePage/EditProfilePage";
import SignUpPage from "./screens/signUpPage/SignUpPage";
import HelpPage from "./screens/helpPage/HelpPage";
import React, { useState, useEffect } from "react";
import {
  getSportsEvents,
  getMusicEvents,
  getShowsEvents,
} from "./Services/events.js";

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [events, setEvents] = useState([]);
  const [sportsEvents, setSportsEvents] = useState([]);
  const [musicEvents, setMusicEvents] = useState([]);
  const [showsEvents, setShowsEvents] = useState([]);
  const [spotlightEvents, setSpotlightEvents] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState([]);


  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = [sportsEvents, musicEvents, showsEvents].flat(Infinity);
      let currentIndex = allEvents.length;

      while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [allEvents[currentIndex], allEvents[randomIndex]] = [
          allEvents[randomIndex], allEvents[currentIndex]];
      }
      
      setEvents(allEvents) 
      setSpotlightEvents(allEvents[10])
    }; 

    fetchEvents();
  }, [sportsEvents, musicEvents, showsEvents]); 
  
  useEffect(() => {
    const fetchSportsEvents = async () => {
      const sportsEventsfetched = await getSportsEvents();
      console.log("sportsevents",sportsEventsfetched);
      return setSportsEvents(sportsEventsfetched);
    };
    
    const fetchMusicEvents = async () => {
      const musicEventsfetched = await getMusicEvents();
      console.log("musicevents",musicEventsfetched);
     return setMusicEvents(musicEventsfetched);
    };
    
    const fetchShowsEvents = async () => {
      const showsEventsfetched = await getShowsEvents();
      console.log("showsevents",showsEventsfetched);
      return setShowsEvents(showsEventsfetched);
    };
    
    fetchSportsEvents();
    fetchMusicEvents();
    fetchShowsEvents(); 
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              userProfile={userProfile}
              events={events}
              setEvents={setEvents}
              sportsEvents={sportsEvents}
              musicEvents={musicEvents}
              showsEvents={showsEvents}
              setUserProfile={setUserProfile}
              spotlightEvents={spotlightEvents}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              userProfile={userProfile}
              events={events}
              sportsEvents={sportsEvents}
              musicEvents={musicEvents}
              showsEvents={showsEvents}
              setUserProfile={setUserProfile}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
        <Route
          path="/events/:id"
          element={
            <EventPage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <EditProfilePage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUpPage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
        <Route
          path="/help"
          element={
            <HelpPage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
      </Routes>
      <Footer userProfile={userProfile} />
    </div>
  );
}

export default App;
