import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Home, Person, DirectionsCar, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes } from "../flow/route";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
const actions = [
  { icon: <Home />, name: "Home", route: "/" },
  { icon: <Person />, name: "Profile", route: "/profile" },
  { icon: <DirectionsCar />, name: "Vehicles", route: "/vehicles" },
  { icon: <Settings />, name: "Settings", route: "/settings" },
];

const NavigationSpeedDial = () => {
  const navigate = useNavigate();

  return (
    <SpeedDial
      ariaLabel="Navigation Speed Dial"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      draggable
    >
      {routes.map((action) => (
        <SpeedDialAction
        //   key={action.name}
          icon={ <FileCopyIcon />}
          tooltipTitle={action.title}
          onClick={() => navigate(action.link)}
        //   tooltipOpen
        draggable
        />
      ))}
    </SpeedDial>
  );
};

export default NavigationSpeedDial;
