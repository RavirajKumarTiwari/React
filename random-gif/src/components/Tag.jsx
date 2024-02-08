import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {

    const [tag, setTag] = useState("");
    const { gif, loding, fetchData } = useGif(tag);

    console.log("tag = ", tag);

    return (
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center mt-1 gap-y-5 ">
            <h1 className="text-2xl underline uppercase font-bold mt-1 ">
                Random {tag} Gif
            </h1>
            {loding ? (
                <Spinner />
            ) : (
                <img src={gif} width="450" alt="random_gif" />
            )}

            <input
                className="w-10/12 text-lg text-cyan-600 text-center py-2 rounded-lg mb-[3px] "
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button
                onClick={() => fetchData(tag)}
                className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-3 "
            >
                Generate
            </button>
        </div>
    );
}
