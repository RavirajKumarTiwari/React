import React from "react";
import Random from "./components/Random.jsx";
import Tag from "./components/Tag.jsx";
export default function App() {
    return (
        <div className="w-full h-full flex flex-col background relative items-center">
            <h1 className="bg-white w-11/12 text-center text-4xl font-bold rounded-lg px-10 py-2 mt-[40px]">
                Random GIFS
            </h1>
            <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
                <Random />
                <Tag />
            </div>
        </div>
    );
}
