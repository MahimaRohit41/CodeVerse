import React from "react";
import Navbar from "../navbar/Navbar.tsx";

function Home() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col align-items-center">
          <img
            className="w-100"
            src="\pexels-divinetechygirl-1181243.jpg"
          ></img>
        </div>
        <div className="col align-items-center">
          <h2>A New Way to Learn</h2>
          <div>
            LeetCode is the best platform to help you enhance your skills,
            expand your knowledge and prepare for technical interviews.
          </div>

          <button className="btn-primary m-20">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
