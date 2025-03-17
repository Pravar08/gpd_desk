import React, { useState } from "react";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import TopAppBar from "../../component/appBar";
import { Add } from "@mui/icons-material";
import UserFormModal from "./userModal";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150, editable: true },
  { field: "age", headerName: "Age", type: "number", width: 110 },
  { field: "email", headerName: "Email", width: 200 },
];

const rows1 = [
  { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 30, email: "jane@example.com" },
];

const rows2 = [
  { id: 3, name: "Alice Brown", age: 28, email: "alice@example.com" },
  { id: 4, name: "Bob Johnson", age: 35, email: "bob@example.com" },
];

export default function DataGridWithTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const [openUser, setopenUser] = useState(false);
  
const onClose=()=>setopenUser(false)
  return (
    <Box sx={{ width: "100%" }}>
      {/* Tabs */}
      <TopAppBar />
     

      <Box sx={{ height: 500, mt: 2,padding:1 }}>
        {/* DataGrid */}
        <DataGrid
          rows={tabIndex === 0 ? rows1 : rows2}
          columns={columns}
          rowHeight={40}
          pageSizeOptions={[5, 10, 20]}
          
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: () => (
            <Box sx={{ display: "flex", justifyContent:'space-between' }}>
              <Tabs value={tabIndex} onChange={(_, newValue) => setTabIndex(newValue)}>
        <Tab label="Active User" sx={{fontSize:'12px'}}/>
        <Tab label="In-Active User" sx={{fontSize:'12px'}} />
      </Tabs>
 <Stack direction={'row'}>
    <div style={{padding:'7px 4px 0px',alignItems:'center'}}>
        <Button startIcon={<Add/>} sx={{fontSize:'12px',lineHeight:1.75}} onClick={()=>setopenUser(true)}>
          Add User
        </Button>
        </div>
              <GridToolbar />
              </Stack>

            </Box>
          )}}
          sx={{
            height:'500px',
            // Set text size
            "& .MuiDataGrid-cell": {
              fontSize: "12px",
              fontWeight:'600'
            },
               // Column headers font size and weight
  "& .MuiDataGrid-columnHeaders": {
    fontSize: "12px",
    fontWeight: "600" // You can add font family if needed
  },
            // Row background and height
            "& .MuiDataGrid-row": {
              // backgroundColor: "rgba(58,78,97,0.10)", // Row background color
              height: "40px", // Row height
            },
            "& .MuiDataGrid-footerContainer": {
              fontSize: "10px",
              // display: 'none', // Adjust pagination font size
            },
            // "& .MuiTablePagination-caption": {
            //   display: 'none', // Hide the "Rows per page" label and number
            // },
            // "& .MuiTablePagination-root": {
            //   fontSize: "10px", // Adjust pagination controls font size
            // },
            // "& .MuiTablePagination-toolbar": {
            //   fontSize: "0px", // Adjust pagination toolbar font size
            // },
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
      </Box>
      {openUser&&<UserFormModal onClose={()=>onClose()} open={openUser}/>}
    </Box>
  );
}
