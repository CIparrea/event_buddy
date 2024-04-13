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
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage userProfile={userProfile} />}/>
        <Route path="/search" element={<SearchPage userProfile={userProfile}/>}/>
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
