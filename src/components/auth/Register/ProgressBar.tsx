import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}




const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  return (
    <div>
      <Stack  alignItems="center" spacing={2}>
        {[{id: 1, text: "Your Info"}, {id: 2, text: "Choose Plan"}, {id: 3, text: "Add-ons"}, {id: 4, text: "Payment"}].map((step) => (
          <Stack key={step.id} direction="row" alignItems="center" spacing={1}>
            <Box
              bgcolor={step.id <= currentStep ? 'primary.main' : 'grey.300'}
              color={step.id <= currentStep ? 'primary.contrastText' : 'grey.500'}
              borderRadius="50%"
              width={40}
              height={40}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body1">{step.id}</Typography>
            </Box>
            <Stack>
            <Typography variant="body2" color={step.id <= currentStep ? 'primary.main' : 'grey.500'}>
              STEP {step.id}
            </Typography>
            <p>{step.text}</p>
            </Stack>
          </Stack>
        ))}
      </Stack>

    </div>
  );
};

export default  ProgressBar;