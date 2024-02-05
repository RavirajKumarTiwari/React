import React from "react";
import "./Spinner";

const Spinner = () => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="spinner">Spinner</div>
            <p className="text-bgDark text-lg font-semibold">Loading...</p>
        </div>
    );
};

export default Spinner;
