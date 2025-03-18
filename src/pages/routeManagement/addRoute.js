import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Divider,
  MenuItem,
  Grid,
  Checkbox,
  FormControlLabel,
  IconButton
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const priorities = ["High", "Medium", "Low"];
const routeTypes = ["Highway", "Urban", "Rural"];
const geofencingTypes = ["Circular", "Polygonal"];
const alertsTriggers = ["Speeding", "Entering Area", "Leaving Area"];

export default function AddRouteModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    routeId: "",
    description: "",
    creationDate: null,
    startLocation: "",
    endLocation: "",
    totalDistance: "",
    estimatedTime: "",
    numberOfStops: "",
    priority: "",
    routeType: "",
    routeMapURL: "",
    fuelConsumption: "",
    estimatedCost: "",
    geofencingId: "",
    geofencingType: "",
    geofencingCreationDate: null,
    alertTrigger: "",
    circularGeofencing: false,
    polygonalGeofencing: false,
    centreCoordinates: "",
    vertexCoordinates: "",
    radius: "",
    assignedDriver: "",
    drivingLicense: "",
    contactNumber: "",
    assignedVehicle: "",
    vehicleNumber: "",
    vehicleOwner: "",
    ownerContact: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = () => {
    console.log("Route Data Submitted:", formData);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          bgcolor: "background.paper",
          boxShadow: 24,
        //   p: 3,
          borderRadius: 2
        }}
      >
        {/* Header */}
         <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                  borderBottom: "1px solid #3A4E61",
                }}
              >
        <Typography variant="h4" fontWeight={600} color="primary">
            Add Route
          </Typography>
          <IconButton onClick={onClose} fontSize="small">
            <CloseIcon fontSize="small"/>
          </IconButton>
        </Box>

   <Box sx={{ p: 2,maxHeight:450,overflowY:'auto'}}>
           {/* Company Details Section */}
           <Typography
             fontSize="15px"
             fontWeight={500}
             color="primary"
             mb={1.5}
             sx={{ textDecoration: "underline" }}
           >
          Route Basic Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Route ID/Name" name="routeId" onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Creation Date"
                value={formData.creationDate}
                onChange={(date) => handleDateChange("creationDate", date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              /> */}
            <TextField fullWidth label="Creation Date" name="creationDate"                InputLabelProps={{ shrink: true }} type="date"  onChange={(date) => handleDateChange("creationDate", date)} />

            {/* </LocalizationProvider> */}
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Description" name="description" multiline rows={2} onChange={handleChange} />
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Route Details */}
        <Typography
             fontSize="15px"
             fontWeight={500}
             color="primary"
             mb={1.5}
             sx={{ textDecoration: "underline" }}
           >
          Route Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField fullWidth label="Start Location" name="startLocation" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="End Location" name="endLocation" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Total Distance (km)" name="totalDistance" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Estimated Time (hr)" name="estimatedTime" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Number of Stops" name="numberOfStops" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField select fullWidth label="Priority" name="priority" onChange={handleChange}>
              {priorities.map((priority) => (
                <MenuItem key={priority} value={priority}>
                  {priority}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField select fullWidth label="Route Type" name="routeType" onChange={handleChange}>
              {routeTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Route Map URL" name="routeMapURL" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Fuel Consumption (L)" name="fuelConsumption" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Estimated Cost" name="estimatedCost" onChange={handleChange} />
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Geofencing Details */}
        <Typography
             fontSize="15px"
             fontWeight={500}
             color="primary"
             mb={1.5}
             sx={{ textDecoration: "underline" }}
           >
          Geofencing Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField fullWidth label="Geofencing ID/Name" name="geofencingId" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField select fullWidth label="Geofencing Type" name="geofencingType" onChange={handleChange}>
              {geofencingTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Creation Date"
                value={formData.geofencingCreationDate}
                onChange={(date) => handleDateChange("geofencingCreationDate", date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              /> */}
            <TextField fullWidth label="Creation Date" name="geofencingCreationDate"               InputLabelProps={{ shrink: true }} type="date"  onChange={(date) => handleDateChange("geofencingCreationDate", date)} />

            {/* </LocalizationProvider> */}
          </Grid>
          <Grid item xs={4}>
            <TextField select fullWidth label="Alerts Trigger" name="alertTrigger" onChange={handleChange}>
              {alertsTriggers.map((alert) => (
                <MenuItem key={alert} value={alert}>
                  {alert}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />

        <Typography
             fontSize="15px"
             fontWeight={500}
             color="primary"
             mb={1.5}
             sx={{ textDecoration: "underline" }}
           >
        Driver & Vehicle Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField fullWidth label="Assigned Driver" name="assignDriver" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
          <TextField fullWidth label="DL No" name="dlNo" onChange={handleChange} />
        
          </Grid>
          <Grid item xs={4}>
          <TextField fullWidth label="Contact No" name="ContactNo" onChange={handleChange} />
        
          </Grid>
          <Grid item xs={4}>
          <TextField fullWidth label="Vehicle Name" name="vehicleName" onChange={handleChange} />
        
          </Grid>
          <Grid item xs={4}>
          <TextField fullWidth label="Vehicle Number" name="vehicleNo" onChange={handleChange} />
        
          </Grid>
          <Grid item xs={4}>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Creation Date"
                value={formData.geofencingCreationDate}
                onChange={(date) => handleDateChange("geofencingCreationDate", date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              /> */}

            {/* </LocalizationProvider> */}
          </Grid>
         
        </Grid>
        {/* Buttons */}
    
      </Box>
       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1,padding:1 }}>
                  <Button onClick={()=>onClose()} sx={{ mr: 1 }}>
                    Cancel
                  </Button>
                  <Button variant="contained" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Box>
      </Box>
    </Modal>
  );
}
