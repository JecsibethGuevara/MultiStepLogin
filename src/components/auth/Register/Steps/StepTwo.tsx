import { useState } from "react"
import { stepTwoFormData } from "../../../../interfaces/form"
import { Box, Button, TextField } from "@mui/material";

const StepTwo = () => {
  const [formData, setFormData] = useState<stepTwoFormData>({
    plan: '',
    subscription: '',
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
        value={formData.plan}
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
        value={formData.subscription}
        onChange={handleInputChange}
      />
    </Box>
    </>
  )
}

export default StepTwo