import React from 'react'
import { NavBar } from '../components/NavBar'
import { DetailedBlog } from '../components/DetailedBlog';
import { Footer } from '../components/Footer';

export const DetailedBlogPage = () => {
  return (
    <>
        <NavBar/>
        <DetailedBlog/>
        <Footer/>
    </>
  );
}
