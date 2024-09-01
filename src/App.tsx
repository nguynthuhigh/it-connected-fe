import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./admin/pages/home/dashboard"
import Login from "./admin/pages/authentication/login"
function App() {
  const router =  createBrowserRouter([{
    path:'/',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'dashboard',
        element:<Login></Login>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  }])
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
