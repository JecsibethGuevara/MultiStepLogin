import { useState, useEffect} from "react"
import { stepTwoFormData } from "../../../../interfaces/form"
import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerStep } from "../../../../redux/register/registerSlice";

const StepTwo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [formData, setFormData] = useState<stepTwoFormData>({
    plan: '',
    subscription: '',
    price: 0
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    dispatch(registerStep({step:2, formData}))
  },[dispatch, formData]);

  useEffect(() => {
    console.log(state, 'in two')
  }, [state])
  

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
        id="plan"
        label="plan"
        name="plan"
        autoComplete="plan"
        autoFocus
        value={formData.plan}
        onChange={handleInputChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="subscription"
        label="subscription"
        name="subscription"
        autoComplete="subscription"
        value={formData.subscription}
        onChange={handleInputChange}
      />
    </Box>
    </>
  )
}

export default StepTwo