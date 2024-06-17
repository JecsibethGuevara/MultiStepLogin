import { useState } from "react";
import ProgressBar from "./ProgressBar";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import Stack from "@mui/material/Stack";
import Controller from "./Controller";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../../redux/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Form = () => {
  const formData = useAppSelector((state) => state.register);
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3, 4];

  const handleNextStep = () => {
    if (currentStep >= 1 && currentStep <= steps.length) {
      console.log(formData);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep >= 1 && currentStep <= steps.length) {
      setCurrentStep(currentStep - 1);
    }
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
