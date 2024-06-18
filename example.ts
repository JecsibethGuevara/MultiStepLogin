// actions.ts
export const SET_STEP_DATA = 'SET_STEP_DATA';
export const RESET_FORM = 'RESET_FORM';
export const SUBMIT_FORM = 'SUBMIT_FORM';

interface SetStepDataAction {
  type: typeof SET_STEP_DATA;
  step: string;
  data: any;
}

interface ResetFormAction {
  type: typeof RESET_FORM;
}

interface SubmitFormAction {
  type: typeof SUBMIT_FORM;
}

export type ActionTypes = SetStepDataAction | ResetFormAction | SubmitFormAction;

// reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import { ActionTypes } from './actions';

interface FormData {
  step1: {
    name: string;
    email: string;
    phone: string;
  };
  step2: {
    plan: string;
    subscription: string;
  };
  step3: {
    online: boolean;
    storage: boolean;
    profile: boolean;
  };
  step4: {
    confirmation: boolean;
  };
}

const initialState: FormData = {
  step1: {
    name: '',
    email: '',
    phone: '',
  },
  step2: {
    plan: '',
    subscription: '',
  },
  step3: {
    online: false,
    storage: false,
    profile: false,
  },
  step4: {
    confirmation: false,
  },
};

const formReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_STEP_DATA:
      return {...state, [action.step]: action.data };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

const submitReducer = (state = false, action: ActionTypes) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  formData: formReducer,
  isSubmitted: submitReducer,
});

// store.ts
import { createStore } from 'edux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;

// index.ts
import React from 'eact';
import ReactDOM from 'eact-dom';
import { Provider } from 'eact-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);