import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import { signIn, verifyUser} from "../../Services/users.js";
import "./LoginPage.css";

function LoginPage({userProfile, setUserProfile}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onLogIn = async (event) => {
    event.preventDefault();
    await signIn(form);
    navigate("/");

    const fetchUserProfile = async () => {
      const user = await verifyUser();
      setUserProfile(user);
    };

    fetchUserProfile();
  };

  return (
    <div className="loginPage">
      <Navbar show="noshow" userProfile={userProfile}/>
      <div className="loginContainer">
        <h1 className="profileTitle">Login</h1>
        <form onSubmit={onLogIn} className="loginForm">
          <label className="formLabel">e-mail:</label>
          <input
            type="email"
            name="email"
            className="formInput"
            placeholder="Type your email..."
            onChange={handleChange}
            required
          ></input>
          <label className="formLabel">Password:</label>
          <input
            className="formInput"
            type="password"
            name="password"
            placeholder="Enter your password..."
            onChange={handleChange}
            required
          ></input>
          <button className="formBtn">Login</button>
        </form>
        <p className="registerHere">
          Dont have an account?{" "}
          <Link to={"/signup"}>
            <br />
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
