import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { DetailedBlog } from "../components/DetailedBlog";
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ClipLoader } from 'react-spinners';

export const DetailedBlogPage = () => {
  const { blogid } = useParams();
  // const { singleblog, dispatch } = useBlogsContext();

  const [blog, setblog] = useState(null);
  const [username, setusername] = useState(null);
  const [profilepic, setprofilepic] = useState(null);
  useEffect(() => {
    // const fetchBlog = async () => {
    //   const response = await fetch(`/blog/${blogid}`)
    //   const json = await response.json();
    //   // if (response.ok) {
    //   //   dispatch({ type: "SET_BLOG", payload: json.blog});
    //   // }
    //   setblog(json.blog);
    // };
    // fetchBlog();

    fetch(`/blog/${blogid}`) // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setblog(data.blog);
        setprofilepic(data.profilepic);
        setusername(data.username); // Update the state with the fetched data
        // Or for class components: this.setState({ data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <NavBar />
      {/* <DetailedBlog blog={blog}/> */}
      {blog ? (
        // Pass the data as a prop to ChildComponent
        <DetailedBlog blog={blog} username={username} profilepic={profilepic}/>
      ) : (
        <ClipLoader color="#000" loading={blog} size={50} />
      )}
      <Footer/>
    </>
  );
};
