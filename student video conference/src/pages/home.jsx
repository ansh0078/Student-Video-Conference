import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  let naviagte = useNavigate();

  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);

  let handleJoinVideoCall = async () => {
    console.log(meetingCode);
    await addToUserHistory(meetingCode);
    naviagte(`/${meetingCode}`);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column bg-light">
      {/* Navbar segment */}
      <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom shadow-sm bg-white">
        <h2 className="m-0 fs-4 text-primary fw-bold">Student Video Call</h2>

        <div className="d-flex align-items-center gap-3">
          <IconButton onClick={() => naviagte("/history")} className="d-flex align-items-center gap-1 rounded bg-light border">
            <RestoreIcon />
            <span className="fs-6 m-0 d-none d-sm-block px-2 text-dark">History</span>
          </IconButton>

          <Button onClick={() => {
              localStorage.removeItem("token");
              naviagte("/");
            }} 
            variant="outlined" color="error">
            Logout
          </Button>
        </div>
      </div>
      
      {/* Main panel */}
      <div className="row flex-grow-1 align-items-center px-3 px-md-5">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center mt-5 mt-md-0 order-2 order-md-1">
          <div className="text-center text-md-start">
            <h2 className="mb-4 fw-bold text-dark" style={{ lineHeight: "1.4" }}>
              Providing Quality Video Call Just Like Quality Education
            </h2>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start align-items-center mt-4">
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
                fullWidth
                sx={{ maxWidth: { xs: '100%', sm: '300px' } }}
              />
              <Button onClick={handleJoinVideoCall} variant="contained" color="primary" size="large" className="px-4 py-3 shadow-sm rounded-3">
                Join Meeting
              </Button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2 mt-4 mt-md-0 h-100">
          <img src="meeting.png" alt="meeting" className="img-fluid rounded-4 shadow-lg" style={{ maxHeight: "60vh", objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);
