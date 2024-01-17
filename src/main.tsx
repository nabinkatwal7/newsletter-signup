import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.tsx'
import Success from './Success.tsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/success",
        element: <Success />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
