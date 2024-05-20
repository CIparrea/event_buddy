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
import { getSavedEvents, verifyUser } from "./Services/users.js";

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [events, setEvents] = useState([]);
  const [sportsEvents, setSportsEvents] = useState([]);
  const [musicEvents, setMusicEvents] = useState([]);
  const [showsEvents, setShowsEvents] = useState([]);
  const [spotlightEvents, setSpotlightEvents] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = await verifyUser();
      setUserProfile(user);
    };
    fetchUserProfile();

    const fetchData = async () => {
      const sportsEventsfetched = await getSportsEvents();
      const musicEventsfetched = await getMusicEvents();
      const showsEventsfetched = await getShowsEvents();

      console.log("sportsevents", sportsEventsfetched);
      console.log("musicevents", musicEventsfetched);
      console.log("showsevents", showsEventsfetched);

      setSportsEvents(sportsEventsfetched);
      setMusicEvents(musicEventsfetched);
      setShowsEvents(showsEventsfetched);
    };
    fetchData();


    const fetchFavorites = async () => {
      const favoriteEventsfetched = await getSavedEvents();
      console.log("favorite events", favoriteEventsfetched);
      setFavoriteEvents(favoriteEventsfetched);
    };
    fetchFavorites();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = [sportsEvents, musicEvents, showsEvents].flat(Infinity);
      let currentIndex = allEvents.length;

      while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [allEvents[currentIndex], allEvents[randomIndex]] = [
          allEvents[randomIndex],
          allEvents[currentIndex],
        ];
      }

      setEvents(allEvents);
      setSpotlightEvents(allEvents[10]);
    };

    fetchEvents();
  }, [sportsEvents, musicEvents, showsEvents]);


  useEffect(() => {
  }, [favoriteEvents]);

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
              favoriteEvents={favoriteEvents}
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
              favoriteEvents={favoriteEvents}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              favoriteEvents={favoriteEvents}
            />
          }
        />
        <Route
          path="/events/:id"
          element={
            <EventPage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              favoriteEvents={favoriteEvents}
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
