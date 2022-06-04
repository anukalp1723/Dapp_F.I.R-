import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/police223.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>  DECENTRALISED F.I.R </h1>
        <br></br>
        <p> PRESS THIS BUTTON FOR FILLING THE FORM </p>
        <Link to="/Contact">
          <button> FIR FORM </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
