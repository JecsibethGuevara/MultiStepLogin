import { useEffect, useState } from "react";
import { stepOneFormData } from "../../../../interfaces/form";
import { Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { registerStep } from "../../../../redux/register/registerSlice";

const StepOne = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<stepOneFormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    dispatch(registerStep({step:1, formData}))
  },[dispatch, formData]);
  

  return (
    <> 
      <Box component="form"  noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="phone"
          label="phone"
          type="phone"
          id="phone"
          autoComplete="current-phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </Box>
    </>
  );
};

export default StepOne;
