import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stepOneFormData } from '../interfaces/form';

const initialState: stepOneFormData ={
    name: '',
    email : '',
    phone: ''
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setRegister: (state, action : PayloadAction<stepOneFormData>) =>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
        }
    }
})

export const {setRegister} = registerSlice.actions;
export default registerSlice.reducer