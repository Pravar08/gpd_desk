import React, {  useEffect, useState } from "react";

import {
  AppBar,
  Drawer,
  ListItem,
  ListItemText,
  Toolbar,
  List,
  Typography,
  IconButton,
  Badge,
  Tooltip,
  styled,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";


// import { NavLink } from "react-router-dom";

import NotificationsIcon from "@mui/icons-material/Notifications";

// import { PRIMARY_COLOR } from "../../../constants";

import { Fab } from "@mui/material";

import {
  ClearAll,
  Dvr,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ListAltSharp,
  ManageAccounts,
  Money,
  PriceCheck,
  Receipt,
  Timeline,
} from "@mui/icons-material";

// import { AuthContext } from "../../contextAPI/ContextAPI";
import {
  Search,
  AddCircle,
  ChargingStationRounded,
  Email,
  Engineering,
  ManageAccountsOutlined,
  ManageHistory,
  ManageSearch,
  ManageSearchRounded,
  ManageSearchSharp,
  ManageSearchTwoTone,
  SearchTwoTone,
  Sell,
  TrackChanges,
  Warehouse,
} from "@mui/icons-material";
import { routes } from "../flow/route";
import { Link, NavLink } from "react-router-dom";
// import NotificationsDrawer from "../notificationsDrawer/notificationsDrawer";

const isMobile = window.innerWidth < 900;

const LogoContainer = styled('div')(({ theme, drawerOpen, isMobile }) => ({
    backgroundColor: drawerOpen ? 'white' : isMobile ? 'unset' : 'white',
    padding: drawerOpen ? '0px' : isMobile ? '0px' : '10px',
    borderRadius: drawerOpen ? (isMobile ? '20px' : '0px') : '0px',
  }));
  
  const Logo = styled('img')(({ theme, drawerOpen, isMobile }) => ({
    width: '100%',
    marginTop: drawerOpen ? (isMobile ? '15px' : '0px') : '0px',
    padding: drawerOpen ? (isMobile ? '0px' : '10px') : '0px',
    height: drawerOpen ? (isMobile ? 'auto' : '60px') : '30px',
  }));
  
  const DrawerContentContainer = styled('div')(({ theme, drawerOpen }) => ({
    height: '86vh',
    background: theme.palette.primary.main,
    transition: 'all 0.2s',
    borderRadius: drawerOpen ? '20px' : '10px',
    overflow: 'auto',
    border: `1px solid ${theme.palette.primary.main}`,
  }));
  
  const DrawerListsContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100% - 85px)',
   alignContent: 'center',
  }));
  
  const DrawerLink = styled(NavLink)(({ theme, isMobile }) => ({
    borderLeft: '1px solid transparent',
    transition: 'all 0.2s',
    '&:hover, &.active': {
      borderLeft: '5px solid white',
      ...(isMobile && {
        // borderRadius: '10px',
        // background: 'white',
      }),
      // 'i, span': {
      //   color: isMobile ? 'black' : 'white',
      // },
    },
  }));
  
  const DrawerItemIcon = styled('i')(() => ({
    color: 'white',
  }));
  
  const DrawerItemText = styled(ListItemText)(() => ({
    marginLeft: 16,
    color: 'white',
  }));
  
  const DrawerAction = styled(ListItem)(({ theme, isMobile }) => ({
    gap: '10px',
    borderLeft: '5px solid transparent',
    transition: 'all 0.2s',
    '&:hover, &.active': {
      borderLeft: '5px solid white',
      ...(isMobile && {
        borderRadius: '10px',
        background: 'white',
      }),
      'i, span': {
        color: isMobile ? 'black' : 'white',
      },
    },
  }));
  

const drawerWidth = 240;

const ComponentWrapper = (props) => {

  const [notification, setNotifications] = useState([])


// useEffect(()=>{
//   // fetchNotifications()
//   setTimeout(() => {
    
//   props.props.fetchNotifications()
//   // console.log(props.props.notificationCount + " notifications")
//   }, 1000);
// },[props.props.showNotifications])
  
  // console.log("proppppps", props)

//   const { auth, setAuth } = useContext(AuthContext);
//   let test = [];
//   test = auth?.permissions?.filter((val) => val.role === auth.user.role)[0];

  const initialDrawerState = JSON.parse(localStorage.getItem("isDrawerOpen"));

  // JSON.parse(localStorage.getItem('isDrawerOpen'))

  const [drawerOpen, setDrawerOpen] = useState(
    isMobile ? false : initialDrawerState
  );
  const getNotificationCount = () => {
    // let result = Number(
    //   props.user?.notifications ? props.user.notifications.length : 0
    // );
    // console.log('res',result)

    return notification.length;
  };

  const onClickLogout = async () => {
    // try {
    //   await window.Platform.database.signOut();

    //   auth.onAuthUserChanged && auth.onAuthUserChanged();
    // } catch (error) {
    //   window.NotificationUtils.showError("Something Went Wrong");
    // }
  };

  const getUserName = () => {
    let result = "";

    // if (auth.user) {
    //   result = auth.user.firstName + "(" + auth.user.role + ")" || "";
    // }

    // let length = 25;

    // if (result.length > length && isMobile) {
    //   result = result.slice(0, length - 3) + "...";
    // }

    return result;
  };

  

  //left navigation
  const drawerData = [
    {
      title: "User Management",
      icon: ManageAccounts,
      link: "/usermanagement",
    //   role: test && test["usermanagement"]?.read ? [auth.user.role] : [],
    },
    {
      title: "Master Management",
      icon: Engineering,
      link: "/mastermanager",
    //   role: test && test["master management"]?.read ? [auth.user.role] : [],
    },
    {
      title: 'Q/So Management',
      icon: ListAltSharp,
      link: '/quotation-management',
    //   role: (test && (test["quotation generate"].read || test["quotation generation"].read || test["so generation"].read || test["tracking"].read)) ? [auth.user.role] : [],
    },
    // {
    //   title: "Quotation Generation",
    //   icon: ManageSearchTwoTone,
    //   link: "/quotationgenerate",
    //   role: test && test["quotation generate"]?.read ? [auth.user.role] : [],
    // },
    // {
    //   title: "Quotation Approval(s)",
    //   icon: Search,
    //   link: "/quotationgeneration",
    //   role: test && test["quotation generation"]?.read ? [auth.user.role] : [],
    // },
    // {
    //   title: "SO Generation",
    //   icon: ChargingStationRounded,
    //   link: "/sogeneration",
    //   role: test && test["so generation"]?.read ? [auth.user.role] : [],
    // },
    {
      title: "Warehouse Management",
      icon: Warehouse,
      link: "/warehousemanagement",
    //   role: test && test["warehouse management"]?.read ? [auth.user.role] : [],
    },
    {
      title:"Tracking",
      icon: Timeline,
      link:"/tracking",
    //   role: test && test['tracking']?.read?[auth.user.role] : [],
  
  },
  {
    title: "Custom Clearance",
    icon: ClearAll,
    link: "/customclearance",
    // role: test && test["custom clearance"]?.read ? [auth.user.role] : [],
  },
  {
    title: "Costing",
    icon: Money,
    link: "/costingandbilling",
    // role: test && test["costing"]?.read ? [auth.user.role] : [],
  },{
    title: "Tally",
    icon: Dvr,
    link: "/tallycheck",
    // role: test && test["tally"]?.read ? [auth.user.role] : [],
  },
  {
    title: "Declaration&Payments",
    icon: PriceCheck,
    link: "/declarationandpayment",
    // role: test && test["declaration and payments"]?.read ? [auth.user.role] : [],
  },
  
  
  ];

  const renderDrawerContent = () => {
    const filteredNavItems = routes



    return (
      <DrawerContentContainer drawerOpen={drawerOpen}>
        {/* <NavLink to={"/dashboard "} > */}
      
        {/* </NavLink> */}

        <DrawerListsContainer>
          <List >
          <ListItem style={{  gap: drawerOpen ? "10px" : "10px", // Reduce gap when closed
    justifyContent: drawerOpen ? "center" : "center", // Center when closed
   }}   >
    <IconButton onClick={() => setDrawerOpen((prev) => !prev)} sx={{color:"white",}}>
            <MenuIcon/>
         </IconButton>
    </ListItem>
            {filteredNavItems.map((navItem) => {
              return (
                <DrawerLink
                  isMobile={isMobile}
                  key={navItem.title}
                  to={navItem.link}
                  className={"nav-link"}
                >
                  <ListItem style={{  gap: drawerOpen ? "0px" : "1px", // Reduce gap when closed
    justifyContent: drawerOpen ? "center" : "center", // Center when closed
   }}   >
                    <Tooltip title={navItem.title} placement="left">

                      <DrawerItemIcon
                        className="icon material-icons"
                        as={navItem.icon}
                      ></DrawerItemIcon>
                    </Tooltip>

                    {drawerOpen && <DrawerItemText primary={navItem.title} />}
                  </ListItem>
                </DrawerLink>
              );
            })}
          </List>

          {/* <List style={{ marginBottom: 10, width: "100%" }}>
            <Tooltip title="Log Out" placement="left">
            <DrawerAction
              isMobile={isMobile}
              className="nav-link"
              onClick={onClickLogout}
              style={{ cursor: "pointer" }}
            >
              <DrawerItemIcon className="icon material-icons">
                {"power_settings_new"}
              </DrawerItemIcon>

              {drawerOpen && <DrawerItemText primary={"Logout"} />}
            </DrawerAction>
            </Tooltip>
          </List> */}
        </DrawerListsContainer>
      </DrawerContentContainer>
    );
  };

  useEffect(() => {
    localStorage.setItem("isDrawerOpen", drawerOpen);
  }, [drawerOpen]);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Drawer
        style={{
          width: drawerOpen ? "240px" : "45px",

          transition: "all 0.2s",
        }}
        variant={isMobile ? "temporary" : "permanent"}
        sx={{

          "& .MuiDrawer-paper": {
            padding: "10px",

            border: "none",

            background: isMobile ? 'black' : "none",

            overflow: "visible",

            width: drawerOpen ? "240px" : "45px",
            marginTop:'45px',

            transition: "all 0.2s",
            overflowX:'hidden'
          },
        }}
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
      

        {renderDrawerContent()}
      </Drawer>

      {/* <div style={{ width: "100%" }}>
        
        <AppBar
          position="sticky"
          style={{ boxShadow: !isMobile&&"none", background: "#eeeeee", top: "0", left: "0" }}
        >
          <Toolbar>
            <div
              style={{
                display: "flex",

                justifyContent: "space-between",

                width: "100%",

                alignItems: "center",
                // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              {isMobile && (
                <IconButton onClick={() => setDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
              )}

              <Typography
                style={{ color: "black", textTransform: "initial" }}
                variant="h6"
              >
                {getUserName()}
              </Typography>
            <Tooltip title="Click to see Notification" placement="left">
              <IconButton
               onClick={() => {
                props.props.setShowNotifications(true)
               }}
                >
                <Badge
                  color="primary"
                //   badgeContent={props.props.notificationCount}
                  // badgeContent={notification}
                  
                  max={9}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              </Tooltip>

            </div>
          </Toolbar>
        </AppBar>

        <div>{props.children}</div>
      </div> */}
      
    </div>
  );
};

export default ComponentWrapper;
