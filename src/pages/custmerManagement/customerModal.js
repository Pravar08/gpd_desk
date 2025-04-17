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
  Chip,
  Stack,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { addCustomer } from "../../api/api";

const companyTypes = ["IT", "Manufacturing", "Transportation", "Retail", "Finance"];
const roles = ["Supervisor", "Manager", "Owner", "Director", "Executive"];
const sensorOptions = ["Ignition On", "gnition Off", "Power Cut", "Restore", "Overspeed"];

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
    sensorsTaken: [],
    status: 1,
    password:'123123123'
  });
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (!value || (typeof value === 'string' && !value.trim())) {
      error = "This field is required";
    }
    if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Enter a valid email";
    }
    if (name === "mobile" && value) {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(value)) error = "Enter a 10-digit mobile number";
    }
    setValidationErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
    return error === "";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      event.preventDefault();
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (chipToDelete) => {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleMultiSelectChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      sensorsTaken: event.target.value,
    }));
  };

  const handleSubmit = async() => {
    const requiredFields = [
      "companyName",
      "companyType",
      "address",
      "city",
      "state",
      "country",
      "zipCode",
      "officialContact",
      "contactName",
      "role",
      "mobile",
      "email",
      "username",
    ];
    let isValid = true;
    requiredFields.forEach((field) => {
      const valid = validateField(field, formData[field]);
      if (!valid) isValid = false;
    });
    if (!isValid) {
      alert("Please fix the errors before submitting.");
      return;
    }
    console.log("Customer Data Submitted:", { ...formData, branches: chips });
    const response=await addCustomer({ ...formData, branches: chips })
    onClose();
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
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1, borderBottom: "1px solid #3A4E61" }}>
          <Typography variant="h4" fontWeight={600} color="primary">Create New Customer</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        <Box sx={{ p: 2, maxHeight: 420, overflowY: "auto" }}>
          <Typography fontSize="15px" fontWeight={500} color="primary" mb={1.5} sx={{ textDecoration: "underline" }}>
            Company Details
          </Typography>
          <Grid container spacing={2}>
            {[
              { label: "Company Name", name: "companyName" },
              { label: "Address", name: "address" },
              { label: "City", name: "city" },
              { label: "State", name: "state" },
              { label: "Country", name: "country" },
              { label: "Zip Code", name: "zipCode" },
              { label: "Official Contact Number", name: "officialContact" },
            ].map((field) => (
              <Grid item xs={12} sm={field.name === "zipCode" || field.name === "officialContact" ? 6 : 12} key={field.name}>
                <TextField
                  fullWidth
                  required
                  label={field.label}
                  name={field.name}
                  variant="outlined"
                  onChange={handleChange}
                  error={!!validationErrors[field.name]}
                  helperText={validationErrors[field.name]}
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                required
                label="Company Type"
                name="companyType"
                variant="outlined"
                onChange={handleChange}
                error={!!validationErrors.companyType}
                helperText={validationErrors.companyType}
              >
                {companyTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2, color: "#3A4E61" }} />

          <Typography fontSize="15px" fontWeight={500} color="primary" mb={1.5} sx={{ textDecoration: "underline" }}>Branches & Notifications</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2, rowGap: 0.5 }}>
                {chips.map((chip, index) => (
                  <Chip key={index} label={chip} onDelete={() => handleDelete(chip)} color="primary" />
                ))}
              </Stack>
              <TextField
                fullWidth
                label="Enter branch and press enter"
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Notification Given</InputLabel>
                <Select multiple value={formData.sensorsTaken} onChange={handleMultiSelectChange} input={<OutlinedInput label="Notification required" />}>
                  {sensorOptions.map((sensor) => (
                    <MenuItem key={sensor} value={sensor}>
                      <Chip label={sensor} sx={{ padding: 0, fontSize: '12px', height: '24px' }} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2, color: "#3A4E61" }} />

          <Typography fontSize="15px" fontWeight={500} color="primary" mb={1.5} sx={{ textDecoration: "underline" }}>Contact Person Details</Typography>
          <Grid container spacing={2}>
            {[
              { label: "Name", name: "contactName" },
              { label: "Mobile Number", name: "mobile" },
              { label: "Email", name: "email" },
              { label: "Username", name: "username" },
            ].map((field) => (
              <Grid item xs={12} sm={field.name === "username" ? 12 : 6} key={field.name}>
                <TextField
                  fullWidth
                  required
                  label={field.label}
                  name={field.name}
                  variant="outlined"
                  value={formData[field.name]}
                  onChange={handleChange}
                  error={!!validationErrors[field.name]}
                  helperText={validationErrors[field.name]}
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={6}>
            <TextField
            type="password"
                  fullWidth
                  required
                 label="Password"
                  name='password'
                  variant="outlined"
                  // value={formData[field.name]}
                  onChange={handleChange}
                  // error={!!validationErrors[field.name]}
                  // helperText={validationErrors[field.name]}
                />
                </Grid>
            <Grid item xs={12} sm={6}>

              <TextField
                select
                fullWidth
                required
                label="Role"
                name="role"
                variant="outlined"
                onChange={handleChange}
                error={!!validationErrors.role}
                helperText={validationErrors.role}
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>{role}</MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1, padding: 1 }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
    </Modal>
  );
}
