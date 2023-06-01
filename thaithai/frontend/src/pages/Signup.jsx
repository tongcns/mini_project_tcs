import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Axios from "../AxiosInstance"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignInSide() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
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

    // Check if any field is empty
    const fieldErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        fieldErrors[key] = true;
      }
    });

    // Update errors object
    setErrors(fieldErrors);

    // Submit form if no errors
    if (Object.keys(fieldErrors).length > 0) {
      // There are empty fields, handle the error
      console.log("Please fill in all fields");
      return;
    }
  
    // No empty fields, continue with the axios post request
    try {
      const response = await Axios.post("/auth/register", formData);
      console.log(response.data); // Handle the response data
      navigate("/login");

    } catch (error) {
      console.log("Error occurred during registration:", error);
    }
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://storage.amari.com/main-banner/main_krabi.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Typography variant="h8">First Name</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                autoFocus
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName} // Add error prop
                helperText={errors.firstName && "Please enter your first name"} // Optional helper text
              />

              <Typography variant="h8">Last Name</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Last Name"
                type="text"
                id="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName} // Add error prop
                helperText={errors.lastName && "Please enter your last name"} // Optional helper text
              />

              <Typography variant="h8">Username</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="username"
                label="Username"
                type="text"
                id="username"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
                error={errors.username} // Add error prop
                helperText={errors.username && "Please enter a username"} // Optional helper text
              />

              <Typography variant="h8">Email</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email} // Add error prop
                helperText={
                  errors.email && "Please enter a valid email address"
                } // Optional helper text
              />

              <Typography variant="h8">Password</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password} // Add error prop
                helperText={errors.password && "Please enter a password"} // Optional helper text
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
              <Box sx={{ display: "flex", alignItems: "center" , justifyContent: "center" }}>
                      <Typography>
                        Already have an account?   
                      </Typography>
                      <Link to="/">
                        Log in
                      </Link>
                    </Box>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
