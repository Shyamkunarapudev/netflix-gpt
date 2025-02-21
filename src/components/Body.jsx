import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import MoreInfo from './MoreInfo'

const Body = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Login />
    },
    {
      path:"/browse",
      element: <Browse />
    },
    {
      path:"/browse/info",
      element: <MoreInfo />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Body