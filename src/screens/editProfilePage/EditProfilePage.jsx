import React, { useState } from "react";
import "./EditProfilePage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../Services/users.js";

function EditProfilePage({ userProfile, setUserProfile }) {
  const navigate = useNavigate();

  //___________________________________________________________________________
  //lines 12-21 will set the edit profile form for all fields
  const [form, setForm] = useState({
    firstName: `${userProfile.firstName}`,
    lastName: `${userProfile.lastName}`,
    email: `${userProfile.email}`,
    oldPassword: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  //___________________________________________________________________________
  //lines 26-41 handle editing the user's first and last name
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditProfileForm = async (event) => {
    event.preventDefault();

    await updateUser({ firstName: form.firstName, lastName: form.lastName });

    setUserProfile(form);

    navigate("/profile");
  };

  //___________________________________________________________________________
  //lines 46-69 handle editing the user's password

  const handlePasswordChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdatePasswordForm = async (event) => {
    event.preventDefault();

    if (form.password === form.passwordConfirmation) {
      await updateUser({
        oldPassword: form.oldPassword,
        password: form.password,
        passwordConfirmation: form.passwordConfirmation,
      });

      setUserProfile(form);

      navigate("/profile");
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="editProfilePage">
      <Navbar
        show="noshow"
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <div className="editProfileContainer">
        <h1 className="editProfileTitle">Edit Profile</h1>
        <form onSubmit={handleEditProfileForm} className="editProfileForm">
          <label className="formLabel">First Name:</label>
          <input
            className="formInput"
            type="text"
            name="firstName"
            placeholder={userProfile.firstName}
            value={form.firstName}
            onChange={handleChange}
          ></input>
          <label className="formLabel">Last Name:</label>
          <input
            className="formInput"
            type="text"
            name="lastName"
            placeholder={userProfile.lastName}
            value={form.lastName}
            onChange={handleChange}
          ></input>
          <button type="submit" className="editBtn">
            Edit
          </button>
        </form>

        <form onSubmit={handleUpdatePasswordForm} className="editPasswordForm">
          <label className="formLabel">Current password:</label>
          <input
            className="formInput"
            type="password"
            placeholder="Enter your current password..."
            id="oldPassword"
            name="oldPassword"
            value={form.oldPassword}
            onChange={handlePasswordChange}
          ></input>
          <label className="formLabel">New password:</label>
          <input
            className="formInput"
            type="password"
            placeholder="Enter your new password..."
            id="password"
            name="password"
            value={form.password}
            onChange={handlePasswordChange}
          ></input>
          <label className="formLabel">Confirm your new password:</label>
          <input
            className="formInput"
            type="password"
            id="confirmedPassword"
            placeholder="Confirm new password..."
            name="passwordConfirmation"
            value={form.passwordConfirmation}
            onChange={handlePasswordChange}
          ></input>
          <button type="submit" className="editBtn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;