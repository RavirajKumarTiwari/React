import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice.jsx";

export const store = configureStore({
    reducer: {
        // Accessing the reducer function from the slice object
        // counter: CounterSlice.reducer,

        // Using the imported reducer function
        counter: CounterSlice,
    },
});
