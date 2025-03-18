import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Divider,
  MenuItem,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export default function DriverRegistrationModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    dob: "",
    gender: "",
    aadhaar: "",
    pan: "",
    address: "",
    pincode: "",
    contactNumber: "",
    emergencyContact: "",
    email: "",
    bloodGroup: "",
    drivingLicense: "",
    issuingAuthority: "",
    licenseExpiry: "",
    licenseIssueDate: "",
    drivingExperience: "",
    drivingHistory: "",
    qualification: "",
    trainingCertification: "",
    trainingIssueDate: "",
    assignedVehicle: "",
    insuranceNumber: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
    sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 900,
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
            Add Driver
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
 <Box sx={{ p: 2,maxHeight:450,overflowY:'auto'}}>
        {/* Personal Information Section */}
        <Typography
                           fontSize="15px"
                           fontWeight={500}
                           color="primary"
                           mb={1.5}
                           sx={{ textDecoration: "underline" }}
                         >
          Personal Information
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
          <TextField label="Full Name" name="fullName" onChange={handleChange} />
          <TextField label="Father's Name" name="fatherName" onChange={handleChange} />
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
          <TextField label="Gender" name="gender" onChange={handleChange} />
          <TextField label="Aadhaar Number" name="aadhaar" onChange={handleChange} />
          <TextField label="PAN Number" name="pan" onChange={handleChange} />
          <TextField label="Address" name="address" onChange={handleChange} />
          <TextField label="Pincode" name="pincode" onChange={handleChange} />
          <TextField label="Contact Number" name="contactNumber" onChange={handleChange} />
          <TextField label="Emergency Contact" name="emergencyContact" onChange={handleChange} />
          <TextField label="Email" name="email" onChange={handleChange} />
          <TextField
            select
            label="Blood Group"
            name="bloodGroup"
            onChange={handleChange}
          >
            {bloodGroups.map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Licenses and Legal Information */}
        <Typography
                   fontSize="15px"
                   fontWeight={500}
                   color="primary"
                   mb={1.5}
                   sx={{ textDecoration: "underline" }}
                 >
          Licenses and Legal Information
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
          <TextField label="Driving License Number" name="drivingLicense" onChange={handleChange} />
          <TextField label="Issuing Authority" name="issuingAuthority" onChange={handleChange} />
          <TextField
            label="License Expiry Date"
            name="licenseExpiry"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Employment and Training */}
        <Typography
                   fontSize="15px"
                   fontWeight={500}
                   color="primary"
                   mb={1.5}
                   sx={{ textDecoration: "underline" }}
                 >
          Employment and Training
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
          <TextField label="Driving Experience" name="drivingExperience" onChange={handleChange} />
          <TextField label="Driving History" name="drivingHistory" onChange={handleChange} />
          <TextField label="Educational Qualification" name="qualification" onChange={handleChange} />
          <TextField label="Training and Certification" name="trainingCertification" onChange={handleChange} />
          <TextField
            label="Training Issue Date"
            name="trainingIssueDate"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Vehicle and Insurance Information */}
        <Typography
                   fontSize="15px"
                   fontWeight={500}
                   color="primary"
                   mb={1.5}
                   sx={{ textDecoration: "underline" }}
                 >
          Vehicle and Insurance Information
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
          <TextField label="Assigned Vehicle" name="assignedVehicle" onChange={handleChange} />
          <TextField label="Insurance Number" name="insuranceNumber" onChange={handleChange} />
        </Box>

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
