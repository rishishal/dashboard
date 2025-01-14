import { createBrowserRouter, Navigate } from "react-router-dom";
// import LoginPage from "@/pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "@/layout/DashboardLayout";
import BanneSlider from "./Pages/banner-slider";
import ProductList from "./Pages/products/product-list";
import ProductUpload from "./Pages/products/product-upload";
import Order from "./Pages/orders";
import Users from "./Pages/users";

import { AddCategoryList } from "./Pages/categories/add-categoryList";
import { CategoryList } from "./Pages/categories/category-list";
import SubCategoryAdd from "./Pages/categories/sub-category/sub-categoryAdd";
import SubCategoryList from "./Pages/categories/sub-category/sub-categoryList";
import DasboardHome from "./Pages/Home";
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
        path: "/dashboard/home",
        element: <DasboardHome />,
      },
      {
        path: "/dashboard/banner-silder",
        element: <BanneSlider />,
      },
      {
        path: "/dashboard/products/list",
        element: <ProductList />,
      },
      {
        path: "/dashboard/product/upload",
        element: <ProductUpload />,
      },

      {
        path: "/dashboard/category/list",
        element: <CategoryList />,
      },
      {
        path: "/dashboard/category/add",
        element: <AddCategoryList />,
      },
      {
        path: "/dashboard/category/sub-category-list",
        element: <SubCategoryList />,
      },
      {
        path: "/dashboard/category/sub-category-add",
        element: <SubCategoryAdd />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/orders",
        element: <Order />,
      },
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
