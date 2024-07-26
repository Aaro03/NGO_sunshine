import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import React from 'react'
import Loginto from "./Loginto";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'login',
            element:<Loginto/>
        }
    ])
    return (
        <div>
        <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;
