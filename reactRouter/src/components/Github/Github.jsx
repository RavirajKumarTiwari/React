// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
    const data = useLoaderData();

    // 1st method
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/ravirajkumartiwari")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         });
    // },[])

    return (
        <div className=" flex p-4">
            <div className="flex-col">
                <img
                    src={data.avatar_url}
                    alt="Git picture"
                    width={200}
                    className="rounded-full content-start"
                />
                <h1 className="text-center text-3xl font-bold">{data.name}</h1>

                <div className="flex-row mx-1">
                    <p className="text-gray-500">Followers: {data.followers}</p>
                    <p className="text-gray-500">Following: {data.following}</p>
                    <p className="text-gray-500">Public Repositories: {data.public_repos}</p>
                </div>
            </div>
        </div>
    );
}

// 2nd way ( Optimize way )
export const githubInfoLoader = async () => {
    const response = await fetch(
        "https://api.github.com/users/ravirajkumartiwari"
    );
    return response.json();
};
