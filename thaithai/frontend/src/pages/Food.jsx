import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewCard2 from "../components/NewCard2"
import { Typography } from "antd";


export default function Home() {
  return (
    <Box>
      <Navbar />

      <header style={{ marginTop: "60px" }}>
        <img style={{ width: "100%" }}
          src={
            "https://www.roilaan.com/wp-content/uploads/2022/03/Banner-Destop-Otop-1400x431.jpg"
          }
          alt="Header Image"
        />
      </header>

      <Typography style={{ marginLeft: "40px", marginTop: "20px", fontWeight: "700", fontSize: "30px", marginBottom: "-15px"}}>
        WHAT'S HOT
      </Typography>
      <NewCard2 />
      <Typography style={{ marginLeft: "40px", marginTop: "21px", fontWeight: "700", fontSize: "30px", marginBottom: "-15px"}}>
        NEW ARRIVALS
      </Typography>
      <NewCard2 />
      <Typography style={{ marginLeft: "40px", marginTop: "20px", fontWeight: "700", fontSize: "30px", marginBottom: "-15px"}}>
        RECOMMENDED
      </Typography>
      <NewCard2 />
      
      <Footer />
    </Box>
  );
}
