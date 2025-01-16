import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, AppBar, Tabs, Tab, Toolbar, Typography, Paper, Stack, Card, Divider, Fade } from "@mui/material";
import { DataGrid, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import TopAppBar from "../../component/appBar";
import ComponentWrapper from "../../component/drawer";
// import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SummarizeIcon from "@mui/icons-material/Summarize";
import GarageIcon from '@mui/icons-material/Garage';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import DirectionsIcon from '@mui/icons-material/Directions';
import TimelineIcon from '@mui/icons-material/Timeline';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import { CloudSync, Emergency, GpsFixed, Hvac, PowerSettingsNew, Sos } from "@mui/icons-material";
// Styled Components
const DashboardContainer = styled(Box)({
  backgroundColor: "#F1F2F6",
  minHeight: "100vh",
//   padding: "20px",
//   marginLeft: "240px", // Adjust this based on your navbar width
});



const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
}));

const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: "10px",
  //  marginLeft: "50px",
    //  backgroundColor: "#F1F2F6",
});

const TableContainer = styled(Box)(({ theme }) => ({
  flex: "0 0 35%", // Takes 35% of the width
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  overflow: "hidden",
}));
const DashboardContainerOverall = styled(Box)({
  // backgroundColor: "#F1F2F6",
  // minHeight: "100vh",
  padding: "20px",
  marginLeft: "50px", // Adjust this based on your navbar width
});


const MapContainer = styled(Box)({
  flex: "0 0 65%", // Takes 65% of the width
  position: "relative",
  backgroundImage: "url('https://via.placeholder.com/525x720')", // Replace with real map
  backgroundSize: "cover",
  backgroundPosition: "center",
});
const StyledTabs = styled(Tabs)({
  borderBottom: "1px solid #e0e0e0",
  marginBottom: "8px",
});

const StyledTab = styled(Tab)(({ theme }) => ({
  minWidth: "0", // Makes sure the tab only takes the size of its content
  margin: "0 8px",
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
}));

const VerticalLine = styled("div")({
  width: "2px", // Thickness of the line
  height: "100%", // Line height
  backgroundColor: "#ccc", // Line color
  alignSelf: "stretch", // Ensures the line stretches vertically
});
// Mock Data for the Table
const rows = [
  { id: 1, vehicleName: "Truck A", vehicleNumber: "ABC-123", status: "Running" },
  { id: 2, vehicleName: "Truck B", vehicleNumber: "XYZ-456", status: "Idle" },
  { id: 3, vehicleName: "Truck C", vehicleNumber: "LMN-789", status: "Stopped" },
  { id: 4, vehicleName: "Truck D", vehicleNumber: "PQR-101", status: "Inactive" },
  { id: 5, vehicleName: "Truck E", vehicleNumber: "UVW-202", status: "Running" },
];

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "vehicleName", headerName: "Vehicle Name", minWidth: 100 },
  { field: "vehicleNumber", headerName: "Vehicle Number", minWidth: 100 },
  // { field: "status", headerName: "Status", width: 150 },
];

const DashboardModuleWithTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [selectedRowId, setSelectedRowId] = React.useState(null); // State for selected row ID
  const handleRowClick = (params) => {
    // Set the clicked row data to state
    setSelectedRow(params.row);
    setSelectedRowId(params.row.id); // Store the selected row ID for highlighting
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        {/* <GridToolbarColumnsButton /> */}
        <GridToolbarFilterButton />
        <GridToolbarExport
          csvOptions={{
            fileName: "bulk-recieve",
          }}
        />
      </GridToolbarContainer>
    );
  }
  return (
    <DashboardContainer>
      <TopAppBar />
      <ComponentWrapper />

      
      <DashboardContainerOverall>
      {/* Content */}
      <ContentWrapper>
        {/* Table */}
        {/* <Stack direction={'column'} spacing={1}   height={'600px'} sx={{background:'#fff',borderRadius:'8px',padding:'8px',width:"250px"}}> */}
       <Card elevation={1} style={{width:'300px'}}>
          {/* <Typography sx={{fontSize:'14px'}} >
            Vehicle Fleet Status
          </Typography>
          </div> */}
              <StyledTabs
            value={activeTab}
            onChange={handleTabChange}
            centered
          >
            <StyledTab icon={<PersonIcon />} aria-label="Driver" />
            <StyledTab icon={<GarageIcon />} aria-label="Vehicle" />
            <StyledTab icon={<LocationOnIcon />} aria-label="Location" />
          </StyledTabs>
          <DataGrid
            rows={rows}
            columns={columns}
            onRowClick={handleRowClick} // Add the onRowClick handler
            disableSelectionOnClick
            selectionModel={selectedRowId ? [selectedRowId] : []}
            // pageSize={5}
            rowsPerPageOptions={[0]}
            autoPageSize
            // checkboxSelection
            // onRowClick={handleRowClick}  // Add the onRowClick handler
            // disableSelectionOnClick
            // selectionModel={selectedRowId ? [selectedRowId] : []} // Highlight selected row
            checkboxSelection={false} 
            // disableSelectionOnClick
            slots={{
             toolbar:CustomToolbar // Add the custom toolbar
            }}
        
            // style={{ S}}
            sx={{
              height:'500px',
              // Set text size
              "& .MuiDataGrid-cell": {
                fontSize: "10px",
                fontWeight:'600'
              },
                 // Column headers font size and weight
    "& .MuiDataGrid-columnHeaders": {
      fontSize: "11px",
      fontWeight: "600",  // Ensure the font weight applies here
      fontFamily: 'Arial, sans-serif', // You can add font family if needed
    },
              // Row background and height
              "& .MuiDataGrid-row": {
                // backgroundColor: "rgba(58,78,97,0.10)", // Row background color
                height: "40px", // Row height
              },
              "& .MuiDataGrid-footerContainer": {
                fontSize: "0px",
                // display: 'none', // Adjust pagination font size
              },
              "& .MuiTablePagination-caption": {
                display: 'none', // Hide the "Rows per page" label and number
              },
              "& .MuiTablePagination-root": {
                fontSize: "10px", // Adjust pagination controls font size
              },
              "& .MuiTablePagination-toolbar": {
                fontSize: "0px", // Adjust pagination toolbar font size
              },
              // "& .MuiTablePagination-caption": {
              //   fontSize: "10px", // Adjust caption font size (Rows per page)
              // },
              // "& .MuiTablePagination-selectLabel": {
              //   fontSize: "10px", // Adjust the label font size for "Rows per page"
              // },
              "& .MuiTablePagination-selectIcon": {
                fontSize: "4px", // Adjust the font size for the dropdown icon
              },
              "& .MuiTablePagination-actions": {
                fontSize: "1px", // Adjust font size for pagination buttons
              },
              // "& .MuiDataGrid-row:nth-of-type(odd)": {
              //   backgroundColor: "rgba(58,78,97,0.15)", // Alternate row color
              // },
              // "& .MuiDataGrid-footerContainer": {
              //   backgroundColor: "rgba(58,78,97,0.10)", // Footer background color
              // },
            }}
          />
        {/* </Stack>
         */}
 
 </Card>

        {/* Map */}
        <Stack direction={"column"}>
        {!selectedRowId&&  
           <Fade in={!selectedRowId} timeout={300}>
        <Card elevation={1} sx={{width:"100%",marginLeft:'10px',height:'95px'}}  >
          <Stack direction={'row'} padding={1} spacing={3}  alignItems="start" divider={<Divider style={{background:"#3A4E61"}} orientation="vertical" flexItem />}>
     
        {/* <Stack direction={"column"}> */}
          <Stack direction={"column"}>
            <div>
            <DirectionsCarIcon fontSize="medium" color="success" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Running Vehicles
        </Typography>

            </div>
            <div>
            <Typography fontSize={'12px'} fontWeight={550}>
         12
        </Typography>
        
            </div>
      <VerticalLine/>
          </Stack>
      {/* <HorizontalRule></HorizontalRule> */}
        {/* </Stack> */}
        <Stack direction={"column"} >
            <div>
            <PauseCircleOutlineIcon fontSize="medium" color="warning" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Idle Vehicles
        </Typography>

            </div>
            <div>
            <Typography fontSize={'12px'} fontWeight={550}>
         12
        </Typography>
        
            </div>
          </Stack>
          <Stack direction={"column"}>
            <div>
            <StopCircleOutlinedIcon fontSize="medium" color="error" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Stopped Vehicles
        </Typography>

            </div>
            <div>
            <Typography fontSize={'12px'} fontWeight={550}>
         12
        </Typography>
        
            </div>
          </Stack>

          <Stack direction={"column"}>
            <div>
            <HighlightOffOutlinedIcon fontSize="medium" color="disabled" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Inactive Vehicles
        </Typography>

            </div>
            <div>
            <Typography fontSize={'12px'} fontWeight={550}>
         12
        </Typography>
        
            </div>
          </Stack>

          <Stack direction={"column"}>
            <div>
            <ErrorOutlineIcon fontSize="medium" color="secondary" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Data Issue
        </Typography>

            </div>
            <div>
            <Typography fontSize={'12px'} fontWeight={550}>
         12
        </Typography>
        
            </div>
          </Stack>
          <Stack direction={"column"}>
            <div>
            <SummarizeIcon fontSize="medium" color="primary" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Total Vehicles
        </Typography>

            </div>
            <div>
            <Typography fontSize={'12px'} fontWeight={550}>
         12
        </Typography>
        
            </div>
          </Stack>
      
          </Stack>
          </Card>
          </Fade>
}
{selectedRowId&&
           <Fade in={selectedRowId} timeout={300}>

          <Card elevation={1} sx={{width:"100%",marginLeft:'10px',height:'85px'}}  >
          <Stack direction={'row'} padding={1} spacing={3} alignItems="center" divider={<Divider orientation="vertical" style={{background:"#3A4E61"}}  flexItem />}>
         
        {/* <Stack direction={"column"}> */}
          <Stack direction={"column"}>
            <div>
            <CloudSync fontSize="medium" color="success" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Last Sync
        </Typography>

            </div>
            <div>
            <Typography fontSize={'12px'} fontWeight={550}>
         23-12-2024 | 11:20 AM
        </Typography>
        
            </div>
      <VerticalLine/>
          </Stack>
      {/* <HorizontalRule></HorizontalRule> */}
        {/* </Stack> */}
        <Stack direction={"column"}>
            <div>
            <Hvac fontSize="large" color="success" />
            <Typography fontSize={'14px'} fontWeight={600}>
        AC
        </Typography>

            </div>
          
          </Stack>
          <Stack direction={"column"}>
            <div>
            <GpsFixed fontSize="large" color="success" />
            <Typography fontSize={'14px'} fontWeight={600} align="center">
         GPS
        </Typography>

            </div>
           
          </Stack>

          <Stack direction={"column"}>
            <div>
            <PowerSettingsNew fontSize="large" color="error" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Power
        </Typography>

            </div>
 
          </Stack>

          <Stack direction={"column"}>
            <div>
         <Emergency fontSize="large" color="warning"/>

            <Typography fontSize={'14px'} fontWeight={600} align="center">
         SOS
        </Typography>

            </div>
            {/* <div>
            <Typography fontSize={'12px'} fontWeight={550}>
         12
        </Typography>
        
            </div> */}
          </Stack>
          <Stack direction={"column"}>
            <div>
            <SettingsRemoteIcon fontSize="large" color="error" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Immobilize
        </Typography>

            </div>
           
          </Stack>
          <Stack direction={"column"}>
            <div>
            <TimelineIcon fontSize="large" color="success" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Timeline
        </Typography>

            </div>
          
          </Stack>
          <Stack direction={"column"}>
            <div>
            <HealthAndSafetyIcon fontSize="large" color="success" />
            <Typography fontSize={'14px'} fontWeight={600}>
         Health
        </Typography>

            </div>
          
          </Stack>
          </Stack>
          </Card>
          </Fade>

}





        <Card elevation={1} sx={{minWidth:"100%",height:'85%',marginTop:'10px',marginLeft:'10px',backgroundImage: `url('/mapImg.jpg')`,   backgroundSize: 'cover',
        backgroundPosition: 'center'}}  >
          </Card>
          </Stack>
          {selectedRowId?
            <Fade in={selectedRowId} timeout={300}>
          <Card elevation={1} sx={{width:selectedRowId?"220px":'0px',height:'85%',marginLeft:'10px'}}  >
          <Stack direction={'column'} padding={1} spacing={2}  divider={<Divider orientation="horizontal" style={{background:"#3A4E61"}} flexItem />}>
         
         {/* <Stack direction={"column"}> */}
           <Stack direction={"column"}>
           <div>
             <AirportShuttleIcon fontSize="large" color="success" />
             <Typography fontSize={'14px'} fontWeight={600}>
          Vehicle Details
         </Typography>
 
             </div>
             <div>
             {/* <DirectionsCarIcon fontSize="medium" color="success" /> */}
             <Typography fontSize={'12px'} fontWeight={600}>
         Vehicle Name : Jeep Compass
         </Typography>
 
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
             Vehicle Number : UP65BV1082
         </Typography>
         
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
             Driver Name : Saurabh
         </Typography>
         
             </div>     <div>
             <Typography fontSize={'12px'} fontWeight={600}>
             Contact No : 999999999
         </Typography>
         
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
            Last Trip (Kms) : 999999999
         </Typography>
         
             </div>
           </Stack>
       {/* <HorizontalRule></HorizontalRule> */}
         {/* </Stack> */}
         <Stack direction={"column"}>
             <div>
             <LocalActivityIcon fontSize="large" color="warning" />
             <Typography fontSize={'14px'} fontWeight={600}>
          Activities
         </Typography>
 
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
          Running Time : 00:12:50
         </Typography>
         
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
          Idle Time : 00:12:50
         </Typography>
         
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
          Stop Time : 00:12:50
         </Typography>
         
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
          Inactive Time : 00:12:50
         </Typography>
         
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
          Work Time : 00:12:50
         </Typography>
         
             </div>
           </Stack>
           <Stack direction={"column"}>
             <div>
             <DirectionsIcon fontSize="large" color="error" />
             <Typography fontSize={'14px'} fontWeight={600}>
          Key Locations
         </Typography>
 
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
          Start Time : 00:12:50
         </Typography>
         
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
          Start Location : Akash Builder colony Lahartara varanasi
         </Typography>
       
         
             </div>
             <div>
             <Typography fontSize={'12px'} fontWeight={600}>
          Last Stop Time : 00:12:50
         </Typography>
         
             </div>
             <div>

             <Typography fontSize={'12px'} fontWeight={600}>
          Last Stop Location : Akash Builder colony Lahartara varanasi uttar pradehs 221002
         </Typography>
         
             </div>
           </Stack>
 
          
           </Stack>
          </Card></Fade>:<div ></div>
}
      </ContentWrapper>
      </DashboardContainerOverall>
    </DashboardContainer>
  );
};

export default DashboardModuleWithTable;
