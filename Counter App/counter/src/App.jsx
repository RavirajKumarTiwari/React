import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const addValue = () => {
        setCount(count + 1);
    };

    const subtractValue = () => {
        if (count > 0) setCount(count - 1);
        else alert("Count can not be less then 0");
    };

    return (
        <>
            <div className="heading">
                <h1>Counter App</h1>
            </div>
            
            <div className="container">
                <button onClick={addValue}> + </button>
                <span>Counter Value: {count}</span>
                <button onClick={subtractValue}> - </button>
            </div>
        </>
    );
}

export default App;
