import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

// console.log(CounterSlice.name);

export const { increment, decrement } = CounterSlice.actions;

// Exporting the entire slice object
// export default CounterSlice;


// Exporting just the reducer function
export default CounterSlice.reducer;
