import React, { useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { IconButton } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';

function HomeComponent() {

    let naviagte = useNavigate();

    const [ meetingCode, setMeetingCode ] = useState("");
    let handleJoinVideoCall = async () => {
        naviagte(`/${meetingCode}`)
    }
  return (
    <>
        <div className="navBar">

          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Student Video Call</h3>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <RestoreIcon/>
            </IconButton>
          </div>

        </div>
    </>
  );
}

export default withAuth(HomeComponent)
