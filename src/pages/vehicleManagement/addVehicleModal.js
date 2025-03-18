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
  IconButton,
  Select,
  FormControl,
  InputLabel,
  OutlinedInput,
  Chip
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissionTypes = ["Manual", "Automatic"];
const companyTypes = ["IT", "Manufacturing", "Transportation"];
const sensorOptions = ["AC", "Power", "ACC", "Charging"];

export default function VehicleRegistrationModal({ onClose, open }) {
  const [formData, setFormData] = useState({
    vehicleID: "",
    licensePlate: "",
    vin: "",
    imei: "",
    companyName: "",
    deviceType: "",
    make: "",
    model: "",
    year: "",
    color: "",
    vehicleType: "",
    seatingCapacity: "",
    engineCapacity: "",
    fuelType: "",
    transmission: "",
    bodyType: "",
    powerOutput: "",
    odometer: "",
    lastServiceDate: null,
    nextServiceDue: null,
    registrationDate: null,
    insuranceExpiry: null,
    roadTaxExpiry: null,
    ownerName: "",
    ownerContact: "",
    ownerAddress: "",
    pincode: "",
    aadhaar: "",
    drivingLicense: "",
    simNumber: "",
    sensorsTaken: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      sensorsTaken: event.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Vehicle Data Submitted:", formData);
  };

  return (
    <Modal open={open} onClose={()=>onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
        //   p: 3,
        }}
      >
        {/* Header */}
        <Box   sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            borderBottom: "1px solid #3A4E61",
          }}>
          <Typography variant="h4" fontWeight={600} color="primary">
            Register New Vehicle
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

       <Box sx={{ p: 2,maxHeight:450,overflowY:'auto'}}>
          {/* Identification */}
          <Typography
                   fontSize="15px"
                   fontWeight={500}
                   color="primary"
                   mb={1.5}
                   sx={{ textDecoration: "underline" }}
                 >
            Identification
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}><TextField fullWidth label="Vehicle ID" name="vehicleID" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="License Plate" name="licensePlate" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="VIN (Chassis No.)" name="vin" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="IMEI Number" name="imei" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Company Name" name="companyName" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Device Type" name="deviceType" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="SIM Number" name="simNumber" onChange={handleChange} /></Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Sensors Taken</InputLabel>
                <Select multiple value={formData.sensorsTaken} onChange={handleMultiSelectChange} input={<OutlinedInput label="Sensors Taken" />}>
                  {sensorOptions.map((sensor) => (
                    <MenuItem key={sensor} value={sensor}>
                      <Chip label={sensor} sx={{padding:0,fontSize:'12px',height:'24px'}}/>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          {/* Basic Information */}
          <Typography
            fontSize="15px"
            fontWeight={500}
            color="primary"
            mb={1.5}
            sx={{ textDecoration: "underline" }}
          >
            Basic Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}><TextField fullWidth label="Make" name="make" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Model" name="model" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Year of Manufacture" name="year" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Colour" name="color" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Vehicle Type" name="vehicleType" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Seating Capacity" name="seatingCapacity" onChange={handleChange} /></Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          {/* Specifications */}
          <Typography
            fontSize="15px"
            fontWeight={500}
            color="primary"
            mb={1.5}
            sx={{ textDecoration: "underline" }}
          >
            Specifications
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}><TextField fullWidth label="Engine Capacity" name="engineCapacity" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField select fullWidth label="Fuel Type" name="fuelType" onChange={handleChange}>
              {fuelTypes.map((type) => <MenuItem key={type} value={type}>{type}</MenuItem>)}
            </TextField></Grid>
            <Grid item xs={4}><TextField select fullWidth label="Transmission Type" name="transmission" onChange={handleChange}>
              {transmissionTypes.map((type) => <MenuItem key={type} value={type}>{type}</MenuItem>)}
            </TextField></Grid>
            <Grid item xs={4}><TextField select fullWidth label="Body Type" name="bodyType" onChange={handleChange}>
              {transmissionTypes.map((type) => <MenuItem key={type} value={type}>{type}</MenuItem>)}
            </TextField></Grid>
            <Grid item xs={4}><TextField fullWidth label="Power Output" name="powerOutput" onChange={handleChange} /></Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          {/* Device Details */}
          <Typography
            fontSize="15px"
            fontWeight={500}
            color="primary"
            mb={1.5}
            sx={{ textDecoration: "underline" }}
          >
            Mileage And Maintanence
          </Typography>
          <Grid container spacing={2}>

            <Grid item xs={4}><TextField fullWidth label="Last Service Date" name="lastServiceDate" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Next Service Date" name="nextServiceDate" onChange={handleChange} /></Grid>
            <Grid item xs={4}><TextField fullWidth label="Odometer Meter Reading" name="vehicleType" onChange={handleChange} /></Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />

{/* Device Details */}
   <Typography
            fontSize="15px"
            fontWeight={500}
            color="primary"
            mb={1.5}
            sx={{ textDecoration: "underline" }}
          >
  Administrive
</Typography>
          <Grid container spacing={2}>
          <Grid item xs={4}><TextField fullWidth label="Registration Date" name="registrationDate" onChange={handleChange} /></Grid>

<Grid item xs={4}><TextField fullWidth label="Insurance Expiry Date" name="insuranceExpiryDate" onChange={handleChange} /></Grid>
<Grid item xs={4}><TextField fullWidth label="Road To Expiry Date" name="roadToExpiryDate" onChange={handleChange} /></Grid>
<Grid item xs={4}><TextField fullWidth label="Owner Name" name="ownerName" onChange={handleChange} /></Grid>
<Grid item xs={4}><TextField fullWidth label="Owner Contact No" name="ownerContact" onChange={handleChange} /></Grid>
<Grid item xs={4}><TextField fullWidth label="Owner Address" name="ownerAddress" onChange={handleChange} /></Grid>
<Grid item xs={4}><TextField fullWidth label="Owner Aadhar" name="ownerAadhar" onChange={handleChange} /></Grid>
<Grid item xs={4}><TextField fullWidth label="Owner DL" name="ownerDL" onChange={handleChange} /></Grid>

</Grid>
          {/* Buttons */}
         
        </Box>
           <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1,padding:1 }}>
                    <Button onClick={()=>onClose()} sx={{ mr: 1 }}>
                      Cancel
                    </Button>
                    <Button variant="contained" onClick={handleSubmit} sx={{padding:1}}>
                      Submit
                    </Button>
                  </Box>
      </Box>
    </Modal>
  );
}
