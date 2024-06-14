import React from 'react'
import Button from '@mui/material/Button';

interface ControllerProps {
  handleNextStep : any,
  handlePrevStep : any
}
const Controller = ({ handleNextStep, handlePrevStep } : ControllerProps) => {
  return (
    <>
        <Button variant="outlined" onClick={handlePrevStep}>Prev</Button>

        <Button variant="outlined" onClick={handleNextStep}>Next</Button>

    </>
  )
}

export default Controller