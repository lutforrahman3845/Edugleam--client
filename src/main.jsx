import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/router';
import ThemeProvider from './Context/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider>
   <RouterProvider router={router}></RouterProvider>
   </ThemeProvider>
  </StrictMode>,
)
