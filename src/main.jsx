import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import router from './router/Routes';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
  <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
)
