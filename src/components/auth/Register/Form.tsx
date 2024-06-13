import { useState } from "react";
import ProgressBar from "./ProgressBar";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import Stack from "@mui/material/Stack";

const Form = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const steps = [
    
    ]

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
      };
    
      const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
      };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <ProgressBar />
        <StepOne />
      </Stack>
    </>
  );
};

export default Form;
