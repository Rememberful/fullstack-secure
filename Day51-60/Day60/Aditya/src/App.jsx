import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
   const router  = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> <Home/></>
    },
    {
      path: "/login",
      element: <><Navbar/> <Login/></>
    },
   ])


  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
