import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './todoSlice'

export const store = configureStore({
    reducer: {
        // Here we add multiple store if u want
        tasks: taskReducer,
    },
})