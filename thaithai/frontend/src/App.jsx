import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <Login /> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Home />
      {/* <Sidebar /> */}
    </BrowserRouter>
  );
}

export default App;
