import { useBlogsContext } from "../hooks/useBlogsContext";
import React from "react";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export const BlogDetails = ({ blog }) => {
  const { dispatch } = useBlogsContext();

  const handleClick = async () => {
    const response = await fetch("/blog/" + blog._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BLOG", payload: json });
    }
  };

  return (
    <div className="card cursor-pointer transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110">
      <div className="card-header">
        <img
          src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
          alt="ballons"
        />
      </div>
      <div className="card-body">
        <span className="tag tag-purple">{blog.blogtype}</span>
        <h4>{blog.title}</h4>
        <p>
          {blog.short_description}
        </p>
        <div className="user">
          <img
            src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
            alt="user"
          />
          <div className="user-info">
            <h5>{blog.userid}</h5>
            <small>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</small>
          </div>
        </div>
      </div>
    </div>
  );
  
     <div className="blog-details">
      <h4>{blog.title}</h4>
      <p><strong>About: </strong>{blog.short_description}</p>
      <p><strong>Content: </strong>{blog.content}</p>
      <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div> 
  
};

// export default BlogDetails;
