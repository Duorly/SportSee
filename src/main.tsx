import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import './assets/style.css';

const domContainer = document.getElementById('root') as HTMLElement

createRoot(domContainer).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)