import './App.css';
import Footer from './components/footer/Footer';
import { Routes, Route } from "react-router-dom";
import HomePage from './screens/homePage/HomePage'
import SearchPage from './screens/searchPage/SearchPage'
import FavoritesPage from './screens/favoritesPage/FavoritesPage'
import EventPage from './screens/eventPage/EventPage'
import LoginPage from './screens/loginPage/LoginPage'
import ProfilePage from './screens/profilePage/ProfilePage'
import EditProfilePage from './screens/editProfilePage/EditProfilePage'
import SignUpPage from './screens/signUpPage/SignUpPage'
import HelpPage from './screens/helpPage/HelpPage'
import React, { useState, useEffect } from "react";

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [events, setEvents] = useState({})
  const [sportsEvents, setSportsEvents] = useState({})
  const [musicEvents, setMusicEvents] = useState({})
  const [showsEvents, setShowsEvents] = useState({})
  

  useEffect(() => {
    console.log("we're useEffect from home page")
    const fetchEvents = async () =>{
      console.log("we're fetching the events")
      //here we will need to call the function from the services to pull data from db
      // const eventsfetched = await getEvents()
      // setEvents( eventsfetched )
    }

    const fetchSportsEvents = async () =>{
      console.log("we're fetching the sports events")
      //here we will need to call the function from the services to pull data from db
      // const sportsEventsfetched = await getSportsEvents()
      // setSportsEvents( sportsEventsfetched )
    }

    const fetchMusicEvents = async () =>{
      console.log("we're fetching the music events")
      //here we will need to call the function from the services to pull data from db
      // const musicEventsfetched = await getMusicEvents()
      // setMusicEvents( musicEventsfetched )
    }

    const fetchShowsEvents = async () =>{
      console.log("we're fetching the shows events")
      //here we will need to call the function from the services to pull data from db
      // const showsEventsfetched = await getShowsEvents()
      // setShowsEvents( showsEventsfetched )
    }

    fetchEvents()
    fetchSportsEvents()
    fetchMusicEvents()
    fetchShowsEvents()
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage 
        userProfile={userProfile} 
        events={events} 
        sportsEvents={sportsEvents} 
        musicEvents={musicEvents} 
        showsEvents={showsEvents} 
        />}/>
        <Route path="/search" element={<SearchPage 
        userProfile={userProfile}
        events={events} 
        sportsEvents={sportsEvents} 
        musicEvents={musicEvents} 
        showsEvents={showsEvents} 
        />}/>
        <Route path="/favorites" element={<FavoritesPage userProfile={userProfile}/>}/> 
        <Route path="/events/:id" element={<EventPage userProfile={userProfile}/>}/> 
        <Route path="/login" element={<LoginPage userProfile={userProfile} setUserProfile={setUserProfile}/>}/> 
        <Route path="/profile" element={<ProfilePage userProfile={userProfile}/>}/> 
        <Route path="/edit" element={<EditProfilePage userProfile={userProfile} setUserProfile={setUserProfile}/>}/>
        <Route path="/signup" element={<SignUpPage userProfile={userProfile}/>}/>
        <Route path="/help" element={<HelpPage userProfile={userProfile}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
