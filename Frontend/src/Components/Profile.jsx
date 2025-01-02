import React from "react";
import "./Profile.css";
import Aditya from "../assets/Dev_Aditya.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <img src={Aditya} alt="Profile-img" className="profile-image" />
      </div>
      <div className="bio">
        <p className="bio-intro">Hi I'm Aditya Singh👋🏻</p>
        <h1 className="bio-title">Frontend Web Developer Based in Mumbai</h1>
        <p className="bio-description">
          I'm passionate about creating visually appealing and highly functional
          web applications. My goal is to blend design with clean code to
          deliver seamless user experiences.
        </p>
      </div>
      <div className="btn-container">
        <button className="btn contact-btn">Contact me</button>
        <button className="btn resume-btn">My Resume</button>
      </div>
    </div>
  );
};

export default Profile;
