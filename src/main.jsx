import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './Contact/contact.jsx'
import Layout from './layout.jsx'
import Home from './Home/home.jsx'
import Github,{githubInfoLoader} from './Github/github.jsx'
import User from './User/user.jsx'
import About from './components/about.jsx'

// import About from './components/About/about.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout />}> 
       {/* //nesting ke top level pe layout diya he tbhi ye sare outlet aa pa rhe home about etc */}
      <Route path='' element={<Home />} />
      
      <Route path='about' element={<About />} > 
        <Route path='hitesh'/>
      </Route>
      {/* //agar about ke baad bhi ek /chaiye toh ek aur route bnalo nesting krdega wo about me /hitesh*/}

      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> 
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />    {/* //iska bs ek kaam router bnake dedo aur kn chahiye isko */}
  </React.StrictMode>,
)