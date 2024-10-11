import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./admin/pages/home/dashboard";
import LoginAdmin from "./admin/pages/authentication/login";
import ManageUser from "./admin/pages/manage-user/manage-user";
import CompanyDetails from "./candidate/pages/company/company-details";
import Home from "./candidate/pages/home";
import JobDetail from "./candidate/pages/JobDetail/JobDetail";
import CompanyReviews from "./candidate/pages/company/company-review";
import Draft from "./candidate/pages/draft/draft";
import CompanyNewReviews from "./candidate/pages/company/company-new-review";
import Register from "./candidate/pages/authentication/register";
import Login from "./candidate/pages/authentication/login";
function App() {
  const router = createBrowserRouter([
    //customer site
    {
      path: "/",
      children: [
        {
          path: "draft",
          element: <Draft></Draft>,
        },
        {
          path: "company",
          element: <CompanyDetails></CompanyDetails>,
        },
        {
          path: "company-review",
          element: <CompanyReviews></CompanyReviews>,
        },
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "new-review",
          element: <CompanyNewReviews></CompanyNewReviews>,
        },
        {
          path: "job-detail",
          element: <JobDetail></JobDetail>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
      ],
    },
    //company site
    {
      path: "/company",
      children: [],
    },
    //admin site
    {
      path: "/admin",
      children: [
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>,
        },

        {
          path: "login-admin",
          element: <LoginAdmin />,
        },
        {
          path: "manage-user",
          element: <ManageUser></ManageUser>,
        },
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
