import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Account } from "./pages/Account";
import Favorite from "./pages/Favorite";
import Help from "./pages/Help";
import "./App.css";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account/>} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/help" element={<Help/>} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
