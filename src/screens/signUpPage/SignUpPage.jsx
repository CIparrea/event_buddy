import { useState } from "react";
import { Link } from 'react-router-dom'; 
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import { signUp } from "../../Services/users.js";
import "./SignUpPage.css";

function SignUpPage({userProfile, setUserProfile}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    try {
      const user = await signUp(form);
      setUserProfile(user)
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign up details invalid",
      });
    }
  };

  return (
    <div className="signUpPage">
      <Navbar show="noshow" userProfile={userProfile} setUserProfile={setUserProfile}/>
      <div className="signUpContainer">
        <h1 className="profileTitle">Sign Up</h1>
        <form onSubmit={onSignUp} className="signUpForm">
          <label className="formLabel">First Name:</label>
          <input
            className="formInput"
            type="text"
            name="firstName"
            placeholder="Type your first name..."
            onChange={handleChange}
            required
          ></input>
          <label className="formLabel">Last Name:</label>
          <input
            className="formInput"
            type="text"
            name="lastName"
            placeholder="Type your last name..."
            onChange={handleChange}
            required
          ></input>
          <label className="formLabel">e-mail:</label>
          <input
            className="formInput"
            type="email"
            name="email"
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
          <label className="formLabel">Confirm your password:</label>
          <input
            className="formInput"
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm password..."
            onChange={handleChange}
            required
          ></input>
          <button type="submit" className="formBtn">
            Join Us!
          </button>
        </form>
        <p className="registerHere">
          Are you our buddy already? {" "}
          <Link to={"/login"}>
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
