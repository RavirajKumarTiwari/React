import React from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";

const App = () => {
    const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(apiUrl);
            const output = await response.json();
            setCourses(output.data);
        } catch (error) {
            toast.error(error.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-bgDark2 min-h-screen flex flex-col">
            <div>
                <Navbar />
            </div>

        <div className="bg-bgDark2">
            <div>
            <Filter filterData={filterData}
              category={category}
              setCategory={setCategory}
            />
            </div>

            <div className="w-11/12 mac-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
                {loading ? (Spinner) : <Cards courses={courses} category = {category} />}
            </div>
        </div>
        </div>
    );
};

export default App;
