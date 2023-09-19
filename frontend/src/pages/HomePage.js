import React from "react";
import { NavBar } from "../components/NavBar";
import { BlogDetails } from '../components/BlogDetails';
import {BlogForm} from '../components/BlogForm';
 
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
    <>
      <NavBar />
      {/* <div>
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 h-screen w-screen-fit">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Explore the Blogs</h2>
              <p className="font-serif text-sm dark:text-gray-400">
                Qualisque erroribus usu at, duo te agam soluta mucius.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://source.unsplash.com/200x200/?fashion?1"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracki uppercase hover:underline dark:text-violet-400"
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    Te nulla oportere reprimique his dolorum
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 1, 2020</span>
                    <span>2.1K views</span>
                  </div>
                </div>
              </article>
              
            </div>
          </div>
        </section>
      </div> */}  
      <div className="home">
        <div className="blogs">
          {blogs &&
            blogs.map((blog) => <BlogDetails blog={blog} key={blog._id} />)}
        </div>
      </div>
      {/* <BlogForm /> */}
    </>
  );
};
