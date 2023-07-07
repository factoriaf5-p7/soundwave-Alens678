import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// import {RouterProvider} from "react-router-dom";
// import { router } from './RoutesApp.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     {/* <RouterProvider router={router} /> */}
     <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>,
)
