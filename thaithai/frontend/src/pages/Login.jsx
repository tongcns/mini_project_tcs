import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Axios from "../AxiosInstance";

const styles = {
  backgroundColor: "#E9E9E9",
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const theme = createTheme();

export default function BasicCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
  
    try {
      const response = await Axios.post("http://localhost:3000/auth/login", formData);
      console.log(response.data);
      localStorage.setItem("userId",response.data.userId)
      navigate("/home");
    } catch (error) {
      console.log(error);
      // Handle errors
    }
  };
  
  
  return (
    <div style={styles}>
      <div className="page-container">
        <Card
          sx={{ minWidth: 275 }}
          style={{
            width: "500px",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 5,
                    marginBottom: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h3" class="Logo">
                    Thai ไทย
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox value="remember" color="primary" />
                      }
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2 }}
                      style={{ background: "#39487E" }}
                    >
                      Log In
                    </Button>
                    <Box sx={{ display: "flex", alignItems: "center" , justifyContent: "center" }}>
                      <Typography>
                        Don't have an account?
                      </Typography>
                      <Link to="/Signup">
                        Sign Up
                      </Link>
                    </Box>

                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
