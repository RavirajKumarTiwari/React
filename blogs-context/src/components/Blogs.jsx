import React from 'react';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Blogs = () => {
  // consume the context here
  const {loading, posts} = useContext(AppContext)
  return (
    <div className='w-11/12 max-w-[650px] py-3 mt-12 mb-12 flex flex-col gap-y-7'>
      {
        loading ? (<h1 className='flex justify-center items-center h-screen text-blue-500 font-bold text-3xl'>Loading...</h1>) : (
          posts.length === 0 ? (
            <div>
              <p>No post Found!</p>
            </div>
          ) : (posts.map((post) => (
            <div key={post.id}>
              <h2 className='font-bold'>{post.title}</h2>
              <p className='text-xs mb-1'>
                By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
              </p>
              <p className='text-xs'> Posted on {post.date} </p>
              <p className='text-sm mt-2'> {post.content} </p>
              <div className='flex gap-x-1'>
                {post.tags.map((tag, index) => {
                  return <span key={index} className='text-blue-500 underline text-xs' > {`#${tag}`} </span>
                })}
              </div>
            </div>
          )))
        )
      }
    </div>
  )
}

export default Blogs