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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<HomePage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/favorites" element={<FavoritesPage />}/> 
        <Route path="/events/:id" element={<EventPage />}/> 
        <Route path="/login" element={<LoginPage />}/> 
        <Route path="/profile" element={<ProfilePage />}/> 
        <Route path="/edit" element={<EditProfilePage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/help" element={<HelpPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
