import { combineReducers } from '@reduxjs/toolkit';
import { FormData } from '../interfaces/form';

const initialState: FormData = {
    1: {
      name: '',
      email: '',
      phone: '',
    },
    2: {
      plan: '',
      subscription : '',
    },
    3: {
        online: false,
        storage: false,
        profile: false
    },
    4: {
        confirmation : false
    },
  };


  const formReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_STEP_DATA':
        console.log('aaaaaaaaaaaa', action.payload.step, action.payload.data)
        return {...state, [action.payload.step]: action.payload.data };
      default:
        return state;
    }
  };

  export default combineReducers({ register: formReducer });
