import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

import { IconButton } from "@mui/material";
export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch {
        // IMPLEMENT SNACKBAR
      }
    };

    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="container py-4 vh-100 bg-light">
      <div className="d-flex align-items-center mb-4">
        <IconButton
          onClick={() => {
            routeTo("/home");
          }}
          className="bg-white shadow-sm"
        >
          <HomeIcon />
        </IconButton>
        <h2 className="ms-3 mb-0 fw-bold">Meeting History</h2>
      </div>

      <div className="row g-4">
        {meetings.length !== 0 ? (
          meetings.map((e, i) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <Card variant="outlined" className="shadow-sm border-0 h-100 rounded-3">
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      color="primary"
                      gutterBottom
                    >
                      Code: {e.meetingCode}
                    </Typography>
  
                    <Typography sx={{ mb: 1 }} color="text.secondary">
                      <span className="fw-medium text-dark">Date:</span> {formatDate(e.date)}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })
        ) : (
          <div className="col-12 text-center mt-5">
            <h5 className="text-muted">No meeting history found</h5>
          </div>
        )}
      </div>
    </div>
  );
}
