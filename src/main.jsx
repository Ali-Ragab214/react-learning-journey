import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx' 
import Home from './pages/Home.jsx'
import MainLayout from './layout/MainLayout.jsx'
import Login from './pages/Login.jsx'
import { SignupForm } from './pages/SignupForm.jsx'
import NotFound from './pages/NotFound.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import UserDetails from './pages/UserDetails.jsx'
import User from './pages/User.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout />,

    children:[
      {
        index:true,
        element:<Home />
      },

      {
        path:'about',
        element:<About />
      },

      {
        path:'*',
        element:<NotFound/>
      },
       {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/users/:id",
    element: <UserDetails />,
  }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<SignupForm/>
  },
  {
    path:"/users",
    element:<User/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
