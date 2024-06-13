import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";



const ProgressBar = ({
  currentStep,
  totalSteps,
}) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  return (
    <>
       <Stack direction="row">
        <Container>
          <h2>1</h2>
        </Container>
        <Container>
          <p>STEP 1</p>
          <h4>YOUR INFO</h4>
        </Container>
       </Stack>
       <Stack direction="row">
        <Container>
          <h2>2</h2>
        </Container>
        <Container>
          <p>STEP 2</p>
          <h4>SELECT PLAN</h4>
        </Container>
       </Stack>
       <Stack direction="row">
        <Container>
          <h2>3</h2>
        </Container>
        <Container>
          <p>STEP 3</p>
          <h4>ADD-ONS</h4>
        </Container>
       </Stack>
       <Stack direction="row">
        <Container>
          <h2>4</h2>
        </Container>
        <Container>
          <p>STEP 4</p>
          <h4>SUMMARY</h4>
        </Container>
       </Stack>
      
       
    </>
  )
}

export default ProgressBar