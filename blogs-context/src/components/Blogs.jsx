import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDatails from "./BlogDatails";

const Blogs = () => {
    // consume the context here
    const { loading, posts } = useContext(AppContext);
    return (
        <div className="w-1/2 max-w-[650px] py-3 mt-12 mb-12 flex flex-col gap-y-5 m-auto">
            {loading ? (
                <h1 className="flex justify-center items-center h-screen text-blue-500 font-bold text-3xl">
                    Loading...
                </h1>
            ) : posts.length === 0 ? (
                <div>
                    <p>No post Found!</p>
                </div>
            ) : (
                posts.map((post) => <BlogDatails key={post.id} post={post} />)
            )}
        </div>
    );
};

export default Blogs;
