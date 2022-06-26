import { createSlice } from "@reduxjs/toolkit";

export const Code = createSlice({
    name: 'Code',
    initialState:{
        value: 31,
    },
    reducers: {
        setCode: (state,action) => {state.value = action.payload}, 
    }
})

export const {setCode} = Code.actions
export const SelectCode = (state) => state.Code.value
export default Code.reducer