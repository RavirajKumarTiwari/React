import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDatails";

function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState();
    const [relatedBlogs, setRelatedBlogs] = useState();
    const location = useLocation();
    const navigation = useNavigate();
    const { loading, setLoading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error in fetching related blogs");
            console.log(error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

    return (
        <div>
            <Header className="mb-4" />
            <div className="w-1/2 max-w-[650px] py-3 mt-12 mb-2 flex flex-col items-center gap-y-2 mx-auto">
                <div className="w-full">
                    {loading ? (
                        <h1 className="flex justify-center items-center h-screen text-blue-500 font-bold text-3xl">
                            Loading...
                        </h1>
                    ) : blog ? (
                        <div>
                            <BlogDetails post={blog} />
                            <h2 className="font-bold text-center bg-blue-200 sticky top-0 p-2 m-3">
                                Related Blogs
                            </h2>
                            {relatedBlogs.length === 0 ? (
                                <p>No related blogs found!</p>
                            ) : (
                                relatedBlogs.map((post) => (
                                    <div key={post.id}>
                                        <BlogDetails post={post} />
                                    </div>
                                ))
                            )}
                        </div>
                    ) : (
                        <p>No blog Found!</p>
                    )}
                    <button
                        onClick={() => navigation(-1)}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md m-3"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
