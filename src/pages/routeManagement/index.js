import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, AppBar, Tabs, Tab, Toolbar, Typography, Paper, Stack, Card, Divider, Fade, ToggleButton, LinearProgress, Button } from "@mui/material";
import { DataGrid, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid";
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
import { Add, CheckCircleOutline, CloudSync, Emergency, GpsFixed, Hvac, PowerSettingsNew, Sos } from "@mui/icons-material";
import AddRouteModal from "./addRoute";
import MultipleMarkersMap from "../../component/map/muntipleMarker";
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
  // marginLeft: "50px", // Adjust this based on your navbar width
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
  { id: 1, vehicleName: "Truck A", vehicleNumber: "ABC-123", status: 100 },
  { id: 2, vehicleName: "Truck B", vehicleNumber: "XYZ-456", status: 80 },
  { id: 3, vehicleName: "Truck C", vehicleNumber: "LMN-789", status:70 },
  { id: 4, vehicleName: "Truck D", vehicleNumber: "PQR-101", status: 60 },
  { id: 5, vehicleName: "Truck E", vehicleNumber: "UVW-202", status: 20 },
];

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "vehicleName", headerName: "Vehicle Name", minWidth: 100 },
  { field: "vehicleNumber", headerName: "Vehicle Number", minWidth: 100 },
  {field: "status", headerName: "Status", minWidth:120,      renderCell: (params) => {
  
    return (
    //   <Tooltip title={name}>
    <div style={{marginTop:25,alignContent:"center"}}>
          <LinearProgress variant="determinate" value={params.row.status}/>
          </div>
    //   </Tooltip>
    );
  },}
  // { field: "status", headerName: "Status", width: 150 },
];

const RouteManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [selectedRowId, setSelectedRowId] = React.useState(null); // State for selected row ID\
    const [openUser, setopenUser] = useState(false);
    const onClose=()=>setopenUser(false)
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
      {/* <ComponentWrapper /> */}

      
      <DashboardContainerOverall>
      {/* Content */}
      <ContentWrapper>
        {/* Table */}
        {/* <Stack direction={'column'} spacing={1}   height={'600px'} sx={{background:'#fff',borderRadius:'8px',padding:'8px',width:"250px"}}> */}
       <Card elevation={1} style={{width:'500px'}}>
          {/* <Typography sx={{fontSize:'14px'}} >
            Vehicle Fleet Status
          </Typography>
          </div> */}
           {/* <Stack alignContent={"center"}>
           <ToggleButton
           
  value="check"
//   selected={selected}
//   onChange={() => setSelected((prevSelected) => !prevSelected)}
>
  <CheckCircleOutline />
</ToggleButton>
<ToggleButton
           
           value="check"
         //   selected={selected}
         //   onChange={() => setSelected((prevSelected) => !prevSelected)}
         >
           <CheckCircleOutline />
         </ToggleButton>
</Stack> */}
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
            slots={{ toolbar: () => (
              <Box sx={{ display: "flex", justifyContent:'space-between' }}>
                {/* <Tabs value={tabIndex} onChange={(_, newValue) => setTabIndex(newValue)}>
          <Tab label="Active User" sx={{fontSize:'12px'}}/>
          <Tab label="In-Active User" sx={{fontSize:'12px'}} />
        </Tabs> */}
   <Stack direction={'row'}>
      <div style={{padding:'2px 2px 0px',alignItems:'center'}}>
          <Button startIcon={<Add/>} sx={{fontSize:'0.8125rem',lineHeight:1.75}} onClick={()=>setopenUser(true)}>
            Add Route
          </Button>
          </div>
          {/* <GridToolbarQuickFilter> */}
          <GridToolbarFilterButton  />

                <GridToolbarExport />
                </Stack>
  
              </Box>
            )}}
        
            // style={{ S}}
            sx={{
              height:'600px',
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
        {/* <Stack width={"90%"}> */}


           <Fade in timeout={300}>







        <Card elevation={1} sx={{width:"100%"
        
        }}  >
        <MultipleMarkersMap/>
          </Card>
          </Fade>
          {/* </Stack> */}
    </ContentWrapper>
      </DashboardContainerOverall>
      {openUser&&
      <AddRouteModal onClose={()=>onClose()} open={openUser}/>}
    </DashboardContainer>
  );
};

export default RouteManagement;
