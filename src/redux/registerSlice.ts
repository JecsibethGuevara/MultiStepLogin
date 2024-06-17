import { combineReducers } from '@reduxjs/toolkit';
import { FormData } from '../interfaces/form';

const initialState: FormData = {
    step1: {
      name: '',
      email: '',
      phone: '',
    },
    step2: {
      plan: '',
      subscription : '',
    },
    step3: {
        online: false,
        storage: false,
        profile: false
    },
    step4: {
        confirmation : false
    },
  };


  const formReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_STEP_DATA':
        return {...state, [action.step]: action.data };
      default:
        return state;
    }
  };

  export default combineReducers({ register: formReducer });
