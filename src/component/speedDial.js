import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Home, Person, DirectionsCar, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes } from "../flow/route";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import { motion } from "framer-motion";
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
      icon={ <motion.div
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "linear-gradient(45deg, #6200ea, #03dac5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "white",
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    }
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
