import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  styled,
  Stack,
  IconButton,
  Tab,
  Tabs,
} from '@mui/material';
import TopAppBar from '../../component/appBar';
import ComponentWrapper from '../../component/drawer';
import TopCards from './topCards';
import AccountCard from '../../component/accountCard';
import { AddCircleOutlineOutlined, FilterAlt, GetApp, Search } from '@mui/icons-material';
import AddCustomerModal from './customerModal';
const DashboardContainer = styled(Box)({
    backgroundColor: "#F1F2F6",
    minHeight: "100vh",
  //   padding: "20px",
  //   marginLeft: "240px", // Adjust this based on your navbar width
  });
  const DashboardContainerOverall = styled(Box)({
    // backgroundColor: "#F1F2F6",
    // minHeight: "100vh",
    padding: "20px",
    // marginLeft: "50px", // Adjust this based on your navbar width
  });

  const ContentWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "10px",
    //  marginLeft: "50px",
      //  backgroundColor: "#F1F2F6",
  });

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
    // marginLeft: "60px",
    // marginTop: "20px",
    // width: "95%",
    padding: 1,
    borderRadius: "8px",
  });
  const StyledTabs = styled(Tabs)(({ theme }) => ({
  //   background:'white',
  // width:'30%',alignContent: 'center',alignItems: 'center',display:'flex',
    // marginLeft: "80px",  // Align tabs to the left
    "& .MuiTabs-indicator": {
      backgroundColor: "#3A4E61", // Active tab underline color
      height: "3px",
    },
  }));
  
  const StyledTab = styled(Tab)(({ theme }) => ({
    textTransform: "none",
    fontWeight: 600,
    fontSize: "14px",
    color: "#6c757d",
    "&.Mui-selected": {
      color: "#3A4E61",
      backgroundColor: "white", // Active tab underline color
  
      // Active tab text color
    },
  }));
  
const CustomerPage = () => {
  const [openModal,setOpenModal] =useState(false)
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
const onClose=()=>setOpenModal(false)
  return (
    <DashboardContainer>
    <TopAppBar />
    {/* <ComponentWrapper /> */}

    
    <DashboardContainerOverall>
    {/* Content */}
    <ContentWrapper>
        <TopCards/>
        <StyledBox>
        <Stack direction={'row'} margin={1} spacing={2} justifyContent={'space-between'}>
        <StyledTabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
    
      >
        <StyledTab label="Active"/>
        <StyledTab label="In-Active" />
      </StyledTabs>
      <Stack direction={'row'}  spacing={2}>

        <Button size="large" variant="contained" startIcon={<FilterAlt/>} sx={{fontSize:'14px'}}>Filter</Button>
        <Button size="large" variant="contained" sx={{fontSize:'14px'}} startIcon={<GetApp/>}>Export</Button>
        <Button size="large" variant="contained" sx={{fontSize:'14px'}} startIcon={<AddCircleOutlineOutlined/>} onClick={()=>setOpenModal(true)}>Add Customer</Button>
</Stack>
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
        
    </ContentWrapper>
    </DashboardContainerOverall>
    {openModal&&<AddCustomerModal onClose={()=>onClose()} open={openModal}/>}
    </DashboardContainer>
  );
};

export default CustomerPage;
