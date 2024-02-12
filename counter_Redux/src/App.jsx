import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  console.log("counter app");
    return (
        <div>
            <h1>CounteR</h1>
            <Counter />
        </div>
    );
}

export default App;
