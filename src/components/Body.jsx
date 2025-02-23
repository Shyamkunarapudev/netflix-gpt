import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import MoreInfo from './MoreInfo'

const Body = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Login />,
      errorElement:<h1>Opps! Somthing went wrong</h1>
    },
    {
      path:"/browse",
      element: <Browse />,
      errorElement:<h1>Opps! Somthing went wrong</h1>
    },
    {
      path:"/browse/info",
      element: <MoreInfo />,
      errorElement:<h1>Opps! Something went wrong</h1>
    }
  ])

  return (
    <div className='bg-black'>
      <RouterProvider router={router} />
    </div>
  )
}

export default Body