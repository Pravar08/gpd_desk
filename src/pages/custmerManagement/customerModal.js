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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const companyTypes = ["IT", "Manufacturing", "Transportation", "Retail", "Finance"];
const roles = ["Supervisor", "Manager", "Owner", "Director", "Executive"];

export default function AddCustomerModal({ onClose, open }) {
  const [formData, setFormData] = useState({
    companyName: "",
    companyType: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    officialContact: "",
    contactName: "",
    role: "",
    mobile: "",
    email: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      username: name === "email" ? value : prev.username, // Auto-fill username with email
    }));
  };

  const handleSubmit = () => {
    console.log("Customer Data Submitted:", formData);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          
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
            Create New User
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ p: 2,maxHeight:420,overflowY:'auto'}}>
          {/* Company Details Section */}
          <Typography
            fontSize="15px"
            fontWeight={500}
            color="primary"
            mb={1.5}
            sx={{ textDecoration: "underline" }}
          >
            Company Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Company Type"
                name="companyType"
                variant="outlined"
                onChange={handleChange}
              >
                {companyTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="City"
                name="city"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="State"
                name="state"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Zip Code"
                name="zipCode"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Official Contact Number"
                name="officialContact"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 2, color: "#3A4E61" }} />

          {/* Contact Person Details Section */}
          <Typography
            fontSize="15px"
            fontWeight={500}
            color="primary"
            mb={1.5}
            sx={{ textDecoration: "underline" }}
          >
            Contact Person Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="contactName"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Role"
                name="role"
                variant="outlined"
                onChange={handleChange}
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                variant="outlined"
                value={formData.email}
                disabled
              />
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
