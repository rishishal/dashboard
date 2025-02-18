import { createBrowserRouter } from "react-router-dom";
// import LoginPage from "@/pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "@/layout/DashboardLayout";
import BanneSlider from "./Pages/banner-slider";
import ProductList from "./Pages/products";
import Order from "./Pages/orders";
import Users from "./Pages/users";

import { AddCategoryList } from "./Pages/categories/add-categoryList";
import { CategoryList } from "./Pages/categories/category-list";
import SubCategoryAdd from "./Pages/categories/sub-category/sub-categoryAdd";
import SubCategoryList from "./Pages/categories/sub-category/sub-categoryList";
import DasboardHome from "./Pages/Home";
import ProductUpload from "./Pages/products/product_upload";
// import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DasboardHome />,
      },
      {
        path: "/banner-silder",
        element: <BanneSlider />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "products/product-upload",
        element: <ProductUpload />,
      },
      {
        path: "/category/list",
        element: <CategoryList />,
      },
      {
        path: "/category/add",
        element: <AddCategoryList />,
      },
      {
        path: "/category/sub-category-list",
        element: <SubCategoryList />,
      },
      {
        path: "/category/sub-category-add",
        element: <SubCategoryAdd />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/orders",
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
