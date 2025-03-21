// import React from "react";
// import { AppBar, Box, Toolbar, Typography } from "@mui/material";

// const TopAppBar = () => {
//   return (
//     <AppBar 
//       position="sticky" 
//       color="primary" 
//       sx={{ height: 40,borderRadius:0}} // Set AppBar height
//     >
//       <Toolbar
//         sx={{
//           minHeight: 40, // Reduce Toolbar height
//         //   padding: "0 16px", // Adjust padding if needed
//         display:'flex',justifyContent:'space-between'
//         }}
//       >
//     <Box sx={{justifyContent:'center',marginBottom:'15px'}}>
// Navilink
//     </Box>
    
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default TopAppBar;
import React from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../flow/route";
import NavigationSpeedDial from "./speedDial";

const TopAppBar = () => {
  const location = useLocation();
  
  // Filter routes: Exclude login and current route
  const filteredRoutes = routes.filter(
    (route) => route.title !== "Login" && route.link !== location.pathname
  );

  return (
    <AppBar position="sticky" color="primary" sx={{ height: 45, borderRadius: 0 }}>
      <Toolbar sx={{ minHeight: 40, display: "flex", justifyContent: "space-between" }}>
        {/* Logo or Title */}
        <Box sx={{ marginBottom: "15px", fontWeight: "bold", fontSize: "1.2rem" }}>
          Navilink
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2,marginBottom: "15px" }}>
          {filteredRoutes.map((route) => (
            <Button
              key={route.link}
              component={NavLink}
              to={route.link}
              sx={{
                color: "white",
                textTransform: "none",
                fontSize:'12px',
                "&.active": { fontWeight: "bold", borderBottom: "2px solid white" },
              }}
            >
              {route.title} {/* Assuming each route has a 'name' property */}
            </Button>
          ))}
         <NavigationSpeedDial/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
