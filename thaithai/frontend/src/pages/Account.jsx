import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import HistoryIcon from "@mui/icons-material/History";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../AxiosInstance";

export const Account = () => {
  const [user, setUser] = React.useState({});
     const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handleDelete = async () => {
     await Axios.delete(`http://localhost:3000/user?userId=${userId}`, {
      userId,
    }).then((res) => {
      //  console.log(res.data.data);
      
    });
    navigate("/login")
  }

  const fetch = async () => {
    await Axios.get(`http://localhost:3000/user?userId=${userId}`, {
      userId,
    }).then((res) => {
      console.log(res.data.data);
      setUser(res.data.data);
      //  console.log(res.data.data);
      
    });
  };
  useEffect(() => {
    fetch();
    
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
      }}
    >
      <Navbar />
      <Box
        sx={{
          color: "black",
          fontSize: { xs: "30px", md: "50px" },
          direction: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "30px",
          transition: "font-size 0.3s ease-in-out",
        }}
      >
        <p>Profile</p>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "300px",
            borderRadius: "10px",
            backgroundColor: "#DFBD69",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <AccountCircleIcon
            sx={{ height: "100px", width: "100px", marginTop: "30px" }}
          />
          <Typography style={{ marginTop: "10px" }}>@{user.username}</Typography>
          <Typography style={{ marginTop: "10px" }}>{user.email}
           
          </Typography>

          <Button
            style={{ marginTop: "15px", width: "200px" }}
            variant="contained"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={handleDelete}
          >
            Delete Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
