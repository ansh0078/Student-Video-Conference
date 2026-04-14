let is_prod = true;

const server = is_prod
  ? "https://student-video-conference.onrender.com"
  : "http://localhost:8000";

export default server;