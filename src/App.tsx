import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./admin/pages/home/dashboard";
import LoginAdmin from "./admin/pages/authentication/login";
import ManageUser from "./admin/pages/manage-user/manage-user";
import CompanyDetails from "./client/pages/company/company-details";
import Home from "./client/pages/home/home";
import JobDetail from "./client/pages/JobDetail/JobDetail";
import CompanyReviews from "./client/pages/company/company-review";
import Draft from "./client/pages/draft/draft";
import CompanyNewReviews from "./client/pages/company/company-new-review";
import Register from "./client/pages/authentication/register";
import Login from "./client/pages/authentication/login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "draft",
          element: <Draft></Draft>,
        },
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "login-admin",
          element: (
            <div className="flex w-full h-screen">
              <div className="w-full flex items-center justify-center">
                <LoginAdmin />
              </div>
            </div>
          ),
        },
        {
          path: "manage-user",
          element: <ManageUser></ManageUser>,
        },
        {
          path: "company",
          element: <CompanyDetails></CompanyDetails>,
        },
        {
          path: "company-review",
          element: <CompanyReviews></CompanyReviews>
        },
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "new-review",
          element: <CompanyNewReviews></CompanyNewReviews>
        },
        {
          path: "job-detail",  // Thêm đường dẫn chi tiết tuyển dụng
          element: <JobDetail></JobDetail>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "login",
          element: <Login></Login>
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
