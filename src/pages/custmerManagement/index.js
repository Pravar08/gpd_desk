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
    marginLeft: "50px", // Adjust this based on your navbar width
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
const CustomerPage = () => {
  const [openModal,setOpenModal] =useState(false)
const onClose=()=>setOpenModal(false)
  return (
    <DashboardContainer>
    <TopAppBar />
    <ComponentWrapper />

    
    <DashboardContainerOverall>
    {/* Content */}
    <ContentWrapper>
        <TopCards/>
        <StyledBox>
        <Stack direction={'row'} margin={1} spacing={2}>
            <TextField label="Search" size='small' InputProps={{endAdornment:<IconButton><Search/></IconButton>}} />
        <Button size="large" variant="contained" startIcon={<FilterAlt/>} sx={{fontSize:'14px'}}>Filter</Button>
        <Button size="large" variant="contained" sx={{fontSize:'14px'}} startIcon={<GetApp/>}>Export</Button>
        <Button size="large" variant="contained" sx={{fontSize:'14px'}} startIcon={<AddCircleOutlineOutlined/>} onClick={()=>setOpenModal(true)}>Add Customer</Button>

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
