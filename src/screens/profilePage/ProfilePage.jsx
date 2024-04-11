import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import { verifyUser } from "../../Services/users.js";
import "./ProfilePage.css";

function ProfilePage() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = await verifyUser();
      setUserProfile(user);
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="profilePage">
      <Navbar show="noshow" />
      <div className="userContainer">
        <div className="userPicture"></div>
        <div className="userInfo">
          <h1 className="userTitle">
            {userProfile.firstName} {userProfile.lastName}
          </h1>
          <h2 className="userEmail">{userProfile.email}</h2>
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
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
