// import React, {  useEffect } from "react";
// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Navbar,
//   NavbarBrand,
//   Nav,
// } from "reactstrap";

// // import { NavLink } from "react-router-dom";
// import { Avatar, Fab, Tooltip, styled } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import { AddCircle, ChargingStationRounded, Email, Engineering, Home, ListAltSharp, ManageAccounts, ManageSearch, ManageSearchTwoTone, Search, Sell, TrackChanges, Warehouse } from "@mui/icons-material";

// const StyledNavBar = styled(Navbar)`
//   font-family: "Montserrat";
  
// `;

// const AccountNameContainer = styled('div')`
//   display: flex;
//   // justify-content: space-between;
//   align-items: center;
// `;

// const StyledAvatar = styled(Avatar)`
//   ${(props) =>
//     props.height &&
//     `
//     height: ${props.height}px !important;
//     width: ${props.height}px !important;
//   `}
// `;

// const FabStyle = styled(Fab)`
//   && {
//     z-index: 1};
//   }
// `;

// // role: test && test['quotation generation']?.read?[auth.user.role] : [],

// export const getNavItems = (auth) => {

//   let test = [];
//   test = auth?.permissions?.filter((val) => val.role === auth.user.role)[0]

//   const myItems = [
//     {
//       title: 'User Management',
//       icon: ManageAccounts,
//       link: '/usermanagement',
//     //   role: test && test['usermanagement']?.read ? [auth.user.role] : [],
//     },
//     {
//       title: 'Master Management',
//       icon: Engineering,
//       link: '/mastermanager',
//     //   role: test && test['master management']?.read ? [auth.user.role] : [],
//     },
//     {
//       title: 'Q/So Management',
//       icon: ListAltSharp,
//       link: '/quotation-management',
//     //   role: (test && (test["quotation generate"].read || test["quotation generation"].read || test["so generation"].read || test["tracking"].read)) ? [auth.user.role] : [],
//     },
//     // {
//     //   title: 'Quotation Generation',
//     //   icon: ManageSearchTwoTone,
//     //   link: '/quotationgenerate',
//     //   role: test && test['quotation generate']?.read ? [auth.user.role] : [],
//     // },
//     // {
//     //   title: 'Quotation Approval(s)',
//     //   icon: Search,
//     //   link: '/quotationgeneration',
//     //   role: test && test['quotation generation']?.read ? [auth.user.role] : [],
//     // },
//     // {
//     //   title: 'SO Generation',
//     //   icon: ChargingStationRounded,
//     //   link: '/sogeneration',
//     //   role: test && test['so generation']?.read ? [auth.user.role] : [],
//     // },
//     {
//       title: 'Warehouse Management',
//       icon: Warehouse,
//       link: '/warehousemanagement',
//     //   role: test && test['warehouse management']?.read?[auth.user.role] : [],
//     },{
//       title:"Tracking",
//       icon: Warehouse,
//       link:"/tracking",
//     //   role: test && test['tracking']?.read?[auth.user.role] : [],
  
//   }
//   ];

//   const result = myItems
//   return result;
// }

// const isMobile = window.innerWidth < 900;

// const Dot = styled('span')`
//   position: relative;
//   display: inline-block;
//   margin: 0 8px;
//   color: black;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 50%;
//     left: 7px;
//     transform: translateY(-140%);
//     width: 5px;
//     height: 5px;
//     border-radius: 50%;
//     background-color: #777;
//   }
  
// `;

// const StyledDropdownToggle = styled(DropdownToggle)`
//   && {
//     color: black;
//     text-decoration: none;
//     padding: 5px;
//     transition: all 0.3s ease-in-out;
//     border-radius: 5px;

//     &:hover {
//       background-color: #f5f5f5;
//     }
//   }
// `;



// const StyledNavLink = styled('div')`
//   color: black;
//   text-decoration: none;
//   padding: 5px;
//   transition: all 0.3s ease-in-out;

//   ${(props) =>
//     props.active &&
//     `
//       font-weight: bold;
//     `}

//   &:hover {
//     background-color: #f5f5f5;
//     border-radius: 5px;
//   }
// `;

// const Header = (props) => {
  
// //   const { auth, setAuth } = useContext(AuthContext);
// //   let test = [];
// //   test = auth?.permissions?.filter((val) => val.role === auth.user.role)[0]



// //   const location = use

// //   useEffect(() => {
// //     // console.log("checkinggg", props);
// //   }, [location])
//   // test && test['warehouse management']?.read?[auth.user.role] : []

//   const navItems = getNavItems()

//   const onClickLogout = async () => {
//     // try {
//     //   await window.Platform.database.signOut();
//     //   props.onAuthUserChanged && props.onAuthUserChanged();
//     // } catch (error) {
//     //   window.NotificationUtils.showError("Something Went Wrong");
//     // }
//   }

//   const onClickForgotPassword = async () => {
//     // try {
//     //   if (!props?.user?.email || !isEmail(props?.user?.email)) {
//     //     window.NotificationUtils.showError("Please enter a valid email address");
//     //     return;
//     //   }
//     //   let response = await window.requestPasswordReset(props?.user?.email);
//     //   window.NotificationUtils.showSuccess("Password reset email sent successfully");
//     // } catch (error) {
//     //   window.NotificationUtils.showError("Something went wrong");
//     // }
//   };


//   const getUserName = () => {
//     // let name = `${props?.user?.firstName}
   
//     // `;
//     // let length = 25;
//     // if (name.length > length) {
//     //   name = name.substring(0, length - 3) + "...";
//     // }
//     // return name;
//   }

//   return (
//     <StyledNavBar color="white" expand="lg">
//       <NavbarBrand href="/dashboard" className="mr-auto nav-item">
//         <Tooltip title="Home">

//           <FabStyle color="primary" aria-label="add" size="small">
//             <Home />
//           </FabStyle>
//         </Tooltip>
//       </NavbarBrand>
//       <Nav className="ml-auto" navbar >
//         {navItems.map((navItem) => {

//           return (
//             <li className="nav-item" key={navItem.link}>
//               <StyledNavLink
//                 to={navItem.link}

//                 // className={`nav-link${location?.pathname.includes(navItem.link)
//                 //   ? " active"
//                 //   : ""
//                 //   }`}
//               >
//                 {navItem.title}
//               </StyledNavLink>
//               <Dot />
//             </li>
//           );
//         })}

//         <UncontrolledDropdown nav inNavbar>
//           <StyledDropdownToggle nav caret >
//             My Account
//           </StyledDropdownToggle>
//           <DropdownMenu right>
//             <DropdownItem style={{ padding: "10px 12px", fontWeight: "600", color: "black" }}>
//               <AccountNameContainer>
//                 <StyledAvatar height={30} src={props.user?.profilePicURL || ""} />{" "}
//                 <div style={{ marginLeft: "10px" }}>
//                   {getUserName()}
//                 </div>
//               </AccountNameContainer>
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem
//               style={{ fontWeight: "600", color: "black" }}
//               onClick={() => props.setShowNotifications(true)}
//             >
//               Notifications{" "}
//               {/* {props.user.notifications && props.user.notifications.length
//                 ? `(${props.user.notifications.length})`
//                 : ""} */}
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem
//               style={{ fontWeight: "600", color: "black" }}
//               onClick={onClickForgotPassword}
//             >
//               Change Password
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem
//               style={{ fontWeight: "600", color: "black" }}
//               onClick={onClickLogout}
//             >
//               Logout
//             </DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//         <AccountNameContainer style={{
//           fontSize: "0.8em",
//           marginLeft: "0.5em",
//           color: "gray"
//         }}> v1.0</AccountNameContainer>

//       </Nav>
//     </StyledNavBar>
//   );
// };

// export default Header;
