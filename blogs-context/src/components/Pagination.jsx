import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
    const { page, totalPages, handlePageChange } = useContext(AppContext);
    return (
        <div className="w-full flex justify-center items-center fixed bottom-0 bg-blue-200 shadow-black">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2">
                <div className="flex gap-x-2">
                    {page > 1 && (
                        <button
                            className="bg-blue-500 text-white px-4 py-1 rounded-md"
                            onClick={() => handlePageChange(page - 1)}
                        >
                            Previous
                        </button>
                    )}
                    {page < totalPages && (
                        <button
                            className="bg-blue-500 text-white px-4 py-1 rounded-md"
                            onClick={() => handlePageChange(page + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>
                <p className="font-bold text-sm text-blue-800">
                    Page {page} of {totalPages}{" "}
                </p>
            </div>
        </div>
    );
}

export default Pagination;
