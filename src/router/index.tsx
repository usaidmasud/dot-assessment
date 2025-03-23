import { Route, Routes } from "react-router";
import App from "../ui/pages/App";
import ProductPage from "../ui/pages/ProductPage";
import TaskManagementPage from "../ui/pages/TaskManagementPage";
import MainLayout from "../ui/layouts/MainLayout";
import ProductLayout from "../ui/layouts/ProductLayout";
import TaskManagementLayout from "../ui/layouts/TaskManagementLayout";
import ProductDetailPage from "../ui/pages/ProductDetailPage";
import { ROUTE_CONSTANT } from "../constants/route.constant";
import ProductCartPage from "../ui/pages/ProductCartPage";
import AuthLayout from "../ui/layouts/AuthLayout";
import LoginPage from "../ui/pages/LoginPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANT.HOME} element={<MainLayout />}>
        <Route index path={ROUTE_CONSTANT.HOME} element={<App />} />
      </Route>
      <Route path={ROUTE_CONSTANT.PRODUCT} element={<ProductLayout />}>
        <Route index element={<ProductPage />} />
        <Route
          path={ROUTE_CONSTANT.PRODUCT_DETAIL}
          element={<ProductDetailPage />}
        />
        <Route
          path={ROUTE_CONSTANT.PRODUCT_CART}
          element={<ProductCartPage />}
        />
      </Route>
      <Route path={ROUTE_CONSTANT.AUTH} element={<AuthLayout />}>
        <Route index path={ROUTE_CONSTANT.LOGIN} element={<LoginPage />} />
      </Route>
      <Route
        path={ROUTE_CONSTANT.TASK_MANAGEMENT}
        element={<TaskManagementLayout />}
      >
        <Route index element={<TaskManagementPage />} />
      </Route>
    </Routes>
  );
}
