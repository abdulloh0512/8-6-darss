import { configureStore } from "@reduxjs/toolkit";
import music from './musicSlice'

export const store = configureStore({
    reducer: {
        auth: music
    }
})