import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
import Chat from "./Pages/Chat";


export const router = createBrowserRouter([
    {
        path:"/Chatly/",
        element:<Home/>
    },
    {
        path:"/Chatly/ChatlyAI",
        element:<Chat/>
    },
])