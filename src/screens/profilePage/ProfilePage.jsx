import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./ProfilePage.css";
import { signOut } from "../../Services/users.js";

function ProfilePage({ userProfile, setUserProfile }) {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut();
    setUserProfile(null);
    navigate("/login");
  };

  return (
    <div className="profilePage">
      <Navbar
        show="noshow"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <div className="userContainer">
        <div className="userPicture"></div>
        <div className="userInfo">
          <h1 className="userTitle">
            {userProfile?.firstName} {userProfile?.lastName}
          </h1>
          <h2 className="userEmail">{userProfile?.email}</h2>
          <button
            onClick={() => {
              navigate("/edit");
            }}
            className="profileBtn"
          >
            Edit
          </button>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="profileBtn"
          >
            Delete
          </button>

          <button
            onClick={() => {
              handleLogOut();
            }}
            className="profileBtn"
            id="logoutProfileBtn"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
