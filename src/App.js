import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import ProfileComponent from "./components/profileElement/ProfileComponent";
// import { Outlet } from "@mui/icons-material";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="profile/*" element={<ProfileComponent/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
