import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';

const LoginPage = () => {
  const handleClick=()=>{
    window.location.href="/dashboard"
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',  backgroundImage: `url('/loginLeft.jpg')`, // Path to your public folder image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Left Card: Login */}
        <Grid item xs={12} md={5} sx={{}}>
        <Card
  sx={{
    padding: 3,
    borderRadius: 2,
    boxShadow: 3,
    marginTop:'70px'
  
    // color: '#fff', // Ensure text is readable on the image
    // position: 'relative', // For layering content
  }}
>
  {/* Add an overlay to enhance text visibility */}
  <Box
    sx={{
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
      width: '100%',
      height: '100%',
      alignContent: 'center',
      alignItems: 'center',
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
      zIndex: 1,
    }}
  />
  <CardContent  sx={{padding:'10px'}} >
    <Typography
      variant="h5"
      fontWeight="bold"
      textAlign="center"
      gutterBottom
    >
      Welcome Back! Please Log In
    </Typography>
    <Typography
      variant="body2"
      textAlign="center"
      color="inherit"
      gutterBottom
    >
      Enter your credentials to continue.
    </Typography>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mt: 2,
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        required
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 1 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        required
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 1 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={handleClick}
      >
        Log In
      </Button>
    </Box>
  </CardContent>
</Card>

        </Grid>

        {/* Right Card: Info */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              padding: 0,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                height: 500,
                backgroundImage: `url('https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                color: '#fff',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: 2,
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  Welcome to Navilink
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Discover our advanced solutions:
                  <ul>
                    <li>Real-Time Fleet Tracking</li>
                    <li>Advanced Analytics and Reporting</li>
                    <li>Seamless Integration and Customization</li>
                  </ul>
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
