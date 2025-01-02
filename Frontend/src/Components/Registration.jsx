import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Validate if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Prepare data for the API call
    const userData = {
      name,
      email,
      password,
    };

    try {
      await axios.post(
        "https://auth-j3zh.onrender.com/api/auth/register",
        userData
      );
      alert("Registration successful!");
      navigate("/login"); // Redirect to login page on success
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Registration Page</h1>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button type="submit" className="reg-btn">
          Register
        </button>
        <div className="footer">
          <p>Already have an account?</p>
          <span onClick={() => navigate("/login")}>Login</span>
        </div>
      </form>
    </div>
  );
};

export default Registration;
