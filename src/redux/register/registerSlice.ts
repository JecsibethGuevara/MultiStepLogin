import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { FormData } from '../../interfaces/form';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    1: {
      name: '',
      email: '',
      phone: '',
    },
    2: {
      plan: '',
      subscription: '',
    },
    3: {
      online: false,
      storage: false,
      profile: false
    },
    4: {
      confirmation: false
    },
  },
  reducers: {
    registerStep(state, action) {
      const { step, formData } = action.payload;
      return {
        ...state,
        [step]: {
          ...formData
        }
      }
    },
    registerStepClear(state, action) {
      const { step, formData } = action.payload;
      return {
        ...state,
        [step]: {
          ...formData
        }
      }
    }
  }
})

export const { registerStep, registerStepClear } = registerSlice.actions;

export default registerSlice.reducer


