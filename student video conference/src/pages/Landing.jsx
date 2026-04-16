import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";


export default function LandingPage() {
  const navigate = useNavigate();

  const handleGuestJoin = () => {
    const roomId = Math.random().toString(36).substring(2, 8);
    navigate(`/${roomId}`);
  };

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Student Video Conference</h2>
        </div>
        <div className="navLinks">
          <p onClick={handleGuestJoin} role="button" className="guest-button">
            Join as Guest
          </p>
          <p
            onClick={() => {
              navigate("/auth");
            }}
            className="register-link"
          >
            Register
          </p>
          <div
            role="button"
            className="login-button"
            onClick={() => {
              navigate("/auth");
            }}
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div className="hero-content">
          <h1>
            <span style={{ color: "var(--primary-color)" }}>Connect</span> with your loved Ones
          </h1>
          <p>
            Join seamless video calls, share screens, and collaborate
            effortlessly with our intuitive video conferencing platform.
          </p>
          <div role="button" className="action-btn">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/mobile.png" alt="Mobile App Display" />
        </div>
      </div>
    </div>
  );
}
