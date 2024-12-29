import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const TopAppBar = () => {
  return (
    <AppBar 
      position="sticky" 
      color="primary" 
      sx={{ height: 40,borderTopLeftRadius:'0px',borderRadius:'0px' }} // Set AppBar height
    >
      <Toolbar
        sx={{
          minHeight: 40, // Reduce Toolbar height
        //   padding: "0 16px", // Adjust padding if needed
        }}
      >
    <Box sx={{justifyContent:'center',marginBottom:'15px'}}>
Navilink
    </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
