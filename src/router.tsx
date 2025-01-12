import { createBrowserRouter, Navigate } from "react-router-dom";
// import LoginPage from "@/pages/LoginPage";
import HomePage from "@/Pages/Home";
// import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "@/layout/DashboardLayout";
// import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard/home" />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      //   {
      //     path: "books",
      //     element: <BooksPage />,
      //   },
      //   {
      //     path: "books/create",
      //     element: <CreateBook />,
      //   },
    ],
  },
  //   {
  //     path: "/auth",
  //     element: <AuthLayout />,
  //     children: [
  //       {
  //         path: "login",
  //         element: <LoginPage />,
  //       },
  //       {
  //         path: "register",
  //         element: <RegisterPage />,
  //       },
  //     ],
  //   },
]);

export default router;
