import React from "react";
import { NavBar } from "../components/NavBar";
import { BlogDetails } from "../components/BlogDetails";
import { BlogForm } from "../components/BlogForm";

import { useEffect } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";

export const HomePage = () => {
  const { blogs, dispatch } = useBlogsContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/blog");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BLOGS", payload: json });
      }
    };

    fetchBlogs();
  }, [dispatch]);

  return (
    <div className="w-screen">
      <NavBar />
        <div className="home bg-gradient-to-r from-slate-900 via-cyan-900 to-gray-800 scroll-smooth">
          <div className="blogs flex flex-wrap w-screen ml-16 mt-5">
            {blogs &&
              blogs.map((blog) => <BlogDetails blog={blog} key={blog._id} />)}
          </div>
        </div>
    </div>
  );
};
