import { useState } from "react"
import { stepOneFormData } from "../../../../interfaces/form"
import { Box, Button, TextField } from "@mui/material";
import { AppDispatch, RootState } from "../../../../redux/store";
import {useDispatch} from 'react-redux';

const StepOne = () => {
  const register = useSelector((state : RootState) => state.register)
  const dispatch = useDispatch<AppDispatch>();
  
  const [formData, setFormData] = useState<stepOneFormData>({
    name: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setFormData({
      ...formData,
      [event?.target?.name] : event?.target.value,
    });
  };

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log(formData)
  }
 
  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
  )
}

export default StepOne

function useSelector(arg0: (state: RootState) => stepOneFormData) {
  throw new Error("Function not implemented.");
}
