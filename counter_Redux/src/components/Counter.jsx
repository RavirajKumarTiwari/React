import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    console.log("counter component");
    console.log(count);

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br />
            <br />

            <div>{count}</div>

            <br />
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter;
