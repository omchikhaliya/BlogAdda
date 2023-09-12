import React from 'react'
import { NavBar } from '../components/NavBar'
import LoginForm from '../components/LoginForm'

export const HomePage = () => {
  return (
    <>
    <NavBar/>
    <div className='bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center text-white'> Home Page</div>
    
    </>
  );
}
