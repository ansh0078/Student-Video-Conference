import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../contexts/AuthContext";
import { Snackbar } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3b82f6", // Polite blue
    },
    secondary: {
      main: "#FF9839", // Vibrant orange accent
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default function Authentication() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();

  const [formState, setFormState] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    try {
      if (formState === 0) {
        let result = await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        console.log(result);
        setUsername("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
      }
    } catch (err) {
      console.log(err);
      let message = err.response.data.message;
      setError(message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="container-fluid min-vh-100">
        <CssBaseline />
        <div className="row min-vh-100">
          <div
            className="col-md-7 d-none d-md-block"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop)",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#f8fafc",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center bg-white shadow"
            style={{
              animation: 'slideIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
            }}
          >
            <style>{`
              @keyframes slideIn {
                0% { transform: translateX(100%); opacity: 0; }
                100% { transform: translateX(0); opacity: 1; }
              }
            `}</style>
            <Box

              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>

              <div>
                <Button
                  variant={formState === 0 ? "contained" : ""}
                  onClick={() => {
                    setFormState(0);
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant={formState === 1 ? "contained" : ""}
                  onClick={() => {
                    setFormState(1);
                  }}
                >
                  Sign Up
                </Button>
              </div>

              <Box component="form" noValidate sx={{ mt: 1 }}>
                {formState === 1 ? (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Full Name"
                    name="username"
                    value={name}
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <></>
                )}

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={username}
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                />

                <p style={{ color: "red" }}>{error}</p>

                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleAuth}
                >
                  {formState === 0 ? "Login " : "Register"}
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={4000} message={message} />
    </ThemeProvider>
  )
}
