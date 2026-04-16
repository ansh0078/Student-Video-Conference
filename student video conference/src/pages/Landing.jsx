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
    <div className="container-fluid min-vh-100 d-flex flex-column" style={{ background: "radial-gradient(circle at top left, #e683e2, #f8fafc)" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand border-bottom px-3 px-md-5 py-3" style={{ backdropFilter: "blur(10px)", borderColor: "rgba(255,255,255,0.05)!important" }}>
        <a className="navbar-brand fw-bold fs-4 text-primary" href="#">Student Video Conference</a>
        <div className="ms-auto d-flex align-items-center gap-3 gap-md-4 fw-medium">
          <span onClick={handleGuestJoin} role="button" className="text-secondary d-none d-md-block" style={{ cursor: "pointer", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "#3b82f6"} onMouseOut={e => e.target.style.color = ""}>
            Join as Guest
          </span>
          <span onClick={() => navigate("/auth")} role="button" className="text-secondary d-none d-md-block" style={{ cursor: "pointer", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "#3b82f6"} onMouseOut={e => e.target.style.color = ""}>
            Register
          </span>
          <button className="btn btn-outline-primary px-3 px-md-4 py-2 rounded-3 shadow-sm" onClick={() => navigate("/auth")}>Login</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="row flex-grow-1 align-items-center px-3 px-md-5 py-5 py-md-0">
        <div className="col-12 col-md-6 mb-5 mb-md-0 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
          <h1 className="fw-bold mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-1px" }}>
            <span className="text-primary">Connect</span> with your loved Ones
          </h1>
          <p className="text-secondary mb-5 fs-5" style={{ maxWidth: "600px", lineHeight: "1.6" }}>
            Join seamless video calls, share screens, and collaborate
            effortlessly with our intuitive video conferencing platform.
          </p>
          <button className="btn text-white px-5 py-3 rounded-pill fw-bold fs-5 shadow-lg"
            style={{ background: "linear-gradient(135deg, #3b82f6, #ea580c)", transition: "transform 0.3s" }}
            onMouseOver={e => e.target.style.transform = "scale(1.05)"}
            onMouseOut={e => e.target.style.transform = "scale(1)"}
            onClick={() => navigate("/auth")}>
            Get Started
          </button>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center h-100 align-items-center hero-image">
          <img src="/mobile.png" alt="Mobile App Display" className="img-fluid" style={{ maxHeight: "70vh", filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4))", animation: "float 6s ease-in-out infinite" }} />
        </div>
      </div>
    </div>
  );
}
