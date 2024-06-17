import { useState } from "react";
import { stepOneFormData } from "../../../../interfaces/form";
import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setStepData } from "../../../../redux/formActions";

const StepOne = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [formData, setFormData] = useState<stepOneFormData>({
    name: "",
    email: "",
    phone: "",
  });


  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event?.target?.name]: event?.target.value,
    });

    dispatch(setStepData(1, formData));
    console.log(state.register.register.step1, "state or wtv");
  };


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
