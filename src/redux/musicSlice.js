import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
    date: ''
}

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        create: (state, action) => {
            state.token = action.payload.token;
            state.date = action.payload.date;
        }
    }
})

export const {create} = musicSlice.actions;
export default musicSlice.reducer;