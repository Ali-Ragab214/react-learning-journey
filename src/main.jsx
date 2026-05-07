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
import UserAxios from './pages/UsereAxios.jsx'
import FirstComponent from './pages/FirstComponent.jsx'
import SecondComponent from './pages/SecondComponent.jsx'
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
        path:'zustand',
        element:<div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Zustand Store</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div><h2 className="text-2xl font-semibold mb-4 text-gray-800">First Component</h2><FirstComponent/></div>
              <div><h2 className="text-2xl font-semibold mb-4 text-gray-800">Second Component</h2><SecondComponent/></div>
            </div>
          </div>
        </div>
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
  },
  {
    path:"/useraxios",
    element:<UserAxios/>
  }
  ,
  {
    path:'/dashboard',
   // lazy:()=>import('./pages/Dashboard') Component دا في حاله لو عاملين اسمه 
   lazy: async () => {
    const module = await import('./pages/Dashboard.jsx');
    return { 
    Component: module.default, //لو هعمله بالطريقه المعتاده ,هعمل كدا هنا 
    loader: module.loader,
    ErrorBoundary: module.ErrorBoundary,
     };
  }
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
