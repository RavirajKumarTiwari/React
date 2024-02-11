import React from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagenation from "../components/Pagination";

function TagPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div className="w-full">
            <Header />
            <div className="mt-16 w-1/2 m-auto max-w-[650px] -mb-12 overflow-auto">
                <button
                    onClick={() => navigation(-1)}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md m-3"
                >
                    Back
                </button>
                <h2 className="font-bold text-center bg-blue-200 sticky top-14 p-2 m-3">
                    Blogs Tagged <span>{tag}</span>{" "}
                </h2>
            </div>
            <Blogs />
            <Pagenation/>
        </div>
    );
}

export default TagPage;
