import { createAction } from "@reduxjs/toolkit";

export const setStepData = createAction(
  "SET_STEP_DATA",
  (step: number, data: any) => ({ payload: { step, data } })
);
