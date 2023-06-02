import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewCard4 from "../components/NewCard4";
import { Typography } from "antd";


export default function Home() {
  return (
    <Box>
      <Navbar />

      <header style={{ marginTop: "60px" }}>
        <img style={{ width: "100%" }}
          src={
            "https://www.otoptoday.com/images/show03.jpg"
          }
          alt="Header Image"
        />
      </header>

      <Typography style={{ marginLeft: "40px", marginTop: "20px", fontWeight: "700", fontSize: "30px", marginBottom: "-15px"}}>
        WHAT'S HOT
      </Typography>
      <NewCard4 />
      <Typography style={{ marginLeft: "40px", marginTop: "21px", fontWeight: "700", fontSize: "30px", marginBottom: "-15px"}}>
        NEW ARRIVALS
      </Typography>
      <NewCard4 />
      <Typography style={{ marginLeft: "40px", marginTop: "20px", fontWeight: "700", fontSize: "30px", marginBottom: "-15px"}}>
        RECOMMENDED
      </Typography>
      <NewCard4 />
      
      <Footer />
    </Box>
  );
}
