import { Box, Button, Stack, Tab, Tabs, styled } from "@mui/material";
import AccountCard from "../../component/accountCard";
import TopAppBar from "../../component/appBar";
import ComponentWrapper from "../../component/drawer";
import { useState } from "react";
import { AddCircleOutlineOutlined, FilterAlt, GetApp } from "@mui/icons-material";
import VehicleRegistrationModal from "./addVehicleModal";

export const AccountCardContainerr = styled(Box)({
  display: "grid",
  flexWrap: "wrap",
  gap: 1,
  justifyContent: "center",
  marginBottom: 1,
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
});

export const StyledBox = styled(Box)({
  background: "#ffffff",
  marginLeft: "60px",
  marginTop: "20px",
  width: "95%",
  padding: 1,
  borderRadius: "8px",
});

const DashboardContainer = styled(Box)({
  backgroundColor: "#F1F2F6",
  minHeight: "100vh",
});

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: "10px",
//   background:'white',
// width:'30%',alignContent: 'center',alignItems: 'center',display:'flex',
  marginLeft: "80px", // Align tabs to the left
  "& .MuiTabs-indicator": {
    backgroundColor: "#3A4E61", // Active tab underline color
    height: "3px",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: "20px",
  color: "#6c757d",
  "&.Mui-selected": {
    color: "#3A4E61",
    backgroundColor: "white", // Active tab underline color

    // Active tab text color
  },
}));

const VehicleManagement = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
    const [openModal,setOpenModal] =useState(false)
  const onClose=()=>setOpenModal(false)

  return (
    <DashboardContainer>
      <TopAppBar />
      <ComponentWrapper />
      <StyledTabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
    
      >
        <StyledTab label="Driver Management"/>
        <StyledTab label="Vehicle Management" />
      </StyledTabs>
      <StyledBox>
        <Stack direction={'row'} margin={1} spacing={2}>
        <Button size="large" variant="contained" startIcon={<FilterAlt/>} sx={{fontSize:'15px'}}>Filter</Button>
        <Button size="large" variant="contained" sx={{fontSize:'15px'}} startIcon={<GetApp/>}>Export</Button>
        <Button size="large" variant="contained" sx={{fontSize:'15px'}} startIcon={<AddCircleOutlineOutlined/>} onClick={()=>setOpenModal(true)}>Add Vehicle</Button>

        </Stack>
        {/* <AccountCardContainerr> */}
          <AccountCardContainerr>
            <Box>
              <AccountCard />
            </Box>
            <Box>
              <AccountCard />
            </Box>
            <Box>
              <AccountCard />
            </Box>

            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
            <AccountCard />
          </AccountCardContainerr>
        {/* </AccountCardContainerr> */}
      </StyledBox>
      {
        openModal && <VehicleRegistrationModal open={openModal} onClose={()=>onClose()}/>
      }
    </DashboardContainer>
  );
};

export default VehicleManagement;
