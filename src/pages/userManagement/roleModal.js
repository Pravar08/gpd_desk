import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Modal,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const permissionsList = [
  "GPS Tracking",
  "Audit Logs",
  "Route Management",
  "Communication",
  "Reports",
  "Security Management",
  "User and Role Management",
  "Customer Management",
  "Environment Management",
  "Driver and Vehicle Management",
];

const RoleManagementModal = ({ open, onClose }) => {
  const [roleData, setRoleData] = useState({
    roleName: "",
    reporting: "",
    hierarchy: "",
    permissions: [],
    assignedUser: "",
    status: "",
  });

  const handleChange = (field, value) => {
    setRoleData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (perm) => {
    setRoleData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(perm)
        ? prev.permissions.filter((p) => p !== perm)
        : [...prev.permissions, perm],
    }));
  };

  return (
    <Modal open={open} onClose={onClose}>
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
        Add Role
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
          Basic Information
        </Typography>
         <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Role Name"
              value={roleData.roleName}
              onChange={(e) => handleChange("roleName", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Reporting"
              value={roleData.reporting}
              onChange={(e) => handleChange("reporting", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Hierarchy"
              value={roleData.hierarchy}
              onChange={(e) => handleChange("hierarchy", e.target.value)}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />

        {/* Permissions Section */}
        <Typography
                  fontSize="15px"
                  fontWeight={500}
                  color="primary"
                  mb={1.5}
                  sx={{ textDecoration: "underline" }}
                >
          Permissions
        </Typography>
         <Grid container spacing={2}>
          {permissionsList.map((perm, index) => (
            <Grid item xs={4} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={roleData.permissions.includes(perm)}
                    onChange={() => handleCheckboxChange(perm)}
                  />
                }
                label={perm}
              />
            </Grid>
          ))}
        </Grid>

        {/* Assignment and Status */}
     
      </Box>

      {/* Actions */}
       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1,padding:1 }}>
                                 <Button onClick={()=>onClose()} sx={{ mr: 1 }}>
                                   Cancel
                                 </Button>
                                 <Button variant="contained"  sx={{padding:1}}>
                                   Submit
                                 </Button>
                               </Box>
      </Box>
    </Modal>
  );
};

export default RoleManagementModal;
