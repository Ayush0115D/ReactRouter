import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './Home/home.jsx'
import 
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
path:"",
element:<Home/>
      },
        {
          path:"about",
          element:<About/>
        }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> *//* //not required in react router to render */}
 <RouterProvider router={router}/>
  </StrictMode>,
)
