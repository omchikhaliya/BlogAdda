import React from "react";

export const DetailedBlog = ({blog, username, profilepic}) => {
  
  return (
    <main class="pt-8 pb-16 bg-gradient-to-r from-slate-900 via-cyan-900 to-gray-800 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format bg-transparent">
            <address class="flex items-center mb-6 not-italic">
              <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  class="mr-4 w-16 h-16 rounded-full"
                  src={profilepic}
                  alt="Jese Leos"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    class="text-xl text-emerald-300"
                  >
                    {username}
                  </a>
                 
                  <p class="text-base text-pink-300">
                    <time>
                      {blog.createdAt}
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 class="mb-4 text-3xl font-semibold leading-tight text-violet-300 lg:mb-6 lg:text-4xl dark:text-white">
              {blog.title}
            </h1>
            <p class="mb-4 text-base leading-tight text-violet-300 lg:mb-6 dark:text-white">
              {blog.short_description }
            </p>
          </header>
            <img
              src={blog.thumbnail}
              alt=""
            />
            <br></br>
            <div class="text-slate-300">
              {blog.content}
            </div>
          <br/>
          <section class="not-format">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg lg:text-2xl font-semibold text-violet-300 dark:text-white">
                Discussion (20)
              </h2>
            </div>
            <form class="mb-6">
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="6"
                  class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </form>
            <article class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                    <img
                      class="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    Michael Gough
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      datetime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
              </footer>
              <p>
                Very straight-to-point article. Really worth time reading. Thank
                you! But tools are just the instruments for the UX designers.
                The knowledge of the design tools are as important as the
                creation of the design strategy.
              </p>
            </article>
            
            <article class="p-6 mb-6 text-base bg-white rounded-lg border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                    <img
                      class="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie Green"
                    />
                    Bonnie Green
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      datetime="2022-03-12"
                      title="March 12th, 2022"
                    >
                      Mar. 12, 2022
                    </time>
                  </p>
                </div>
              </footer>
              <p>
                The article covers the essentials, challenges, myths and stages
                the UX designer should consider while creating the design
                strategy.
              </p>
            </article>
            <article class="p-6 text-base bg-white rounded-lg border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                    <img
                      class="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                      alt="Helene Engels"
                    />
                    Helene Engels
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <time pubdate datetime="2022-06-23" title="June 23rd, 2022">
                      Jun. 23, 2022
                    </time>
                  </p>
                </div>
                
              </footer>
              <p>
                Thanks for sharing this. I do came from the Backend development
                and explored some of the tools to design my Side Projects.
              </p>
            </article>
          </section>
        </article>
      </div>
    </main>
  );
};
