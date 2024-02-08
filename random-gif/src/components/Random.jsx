import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {
  const { gif, loding, fetchData } = useGif();
  return (
      <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center mt-1 gap-y-5 ">
          <h1 className="text-2xl underline uppercase font-bold mt-1 ">
              A Random Gif
          </h1>
          {loding ? (
              <Spinner />
          ) : (
              <img src={gif} width="450" alt="random_gif" />
          )}

          <button
              onClick={() => fetchData()}
              className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-3 "
          >
              Generate
          </button>
      </div>
  );
}
