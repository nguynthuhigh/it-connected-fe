import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./admin/pages/home/dashboard"
import Login from "./admin/pages/authentication/login"

function App() {

  const router =  createBrowserRouter([{
    path:'/',
    children:[
      {
        path:'dashboard', 
        element:<Dashboard></Dashboard>
      },
      {
        path:'login',
        element:(
          <div className="flex w-full h-screen">
          <div className="w-full flex items-center justify-center">
            <Login/>
          </div>
        </div>
        )
      }
    ]
  }])
  return(
    <><RouterProvider router={router}></RouterProvider></>
  )
}

export default App
