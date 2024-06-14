import { useState } from "react";
import ProgressBar from "./ProgressBar";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import Stack from "@mui/material/Stack";
import Controller from "./Controller";

 


const Form = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const steps = [
        1,2,3,4
    ]

    const handleNextStep = () => {
        console.log(currentStep)
        setCurrentStep(currentStep + 1);
      };
    
      const handlePrevStep = () => {
        console.log(currentStep)
        setCurrentStep(currentStep - 1);
      };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
        <div>
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
            {currentStep === 4 && <StepFour />}
            <Controller
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </div>
      </Stack>
    </>
  );
};

export default Form;
