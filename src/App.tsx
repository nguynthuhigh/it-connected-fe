import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./admin/pages/home/dashboard";
import LoginAdmin from "./admin/pages/authentication/login";
import ManageUser from "./admin/pages/manage-user/manage-user";
import CompanyDetails from "./candidate/pages/company/company-details";
import Home from "./candidate/pages/home";
import JobDetail from "./candidate/pages/JobDetail/JobDetail";
import CompanyReviews from "./candidate/pages/company/company-review";
import Draft from "./candidate/pages/draft/draft";
import CompanyWriteReviews from "./candidate/pages/company/company-write-review";
import Register from "./candidate/pages/authentication/register";
import Login from "./candidate/pages/authentication/login";
import { Sidebar } from "./shared/components/sidebar/sidebar";
const RootLayout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flexGrow: 1, padding: "20px" }}>
      <Outlet /> {/* This is where the route components will render */}
    </div>
  </div>
);
function App() {
  const router = createBrowserRouter([
    //customer site
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "company",
          element: <CompanyDetails />,
        },
        {
          path: "reviews",
          element: <CompanyReviews />,
        },
        {
          path: "write-review",
          element: <CompanyWriteReviews />,
        },
        {
          path: "job",
          element: <JobDetail />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    //company site
    {
      path: "/company",
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: "draft",
          element: <Draft></Draft>,
        },
        {
          path: "dashboard",
          element: <Draft></Draft>,
        },
      ],
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
