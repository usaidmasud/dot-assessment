import { Route, Routes } from "react-router";
import { ROUTE_CONSTANT } from "../../constants/route.constant";
import MainLayout from "../../ui/layouts/MainLayout";
import App from "../../ui/pages/App";
import ProductLayout from "../../ui/layouts/ProductLayout";
import ProductPage from "../../ui/pages/ProductPage";
import ProductDetailPage from "../../ui/pages/ProductDetailPage";
import ProductCartPage from "../../ui/pages/ProductCartPage";
import AuthLayout from "../../ui/layouts/AuthLayout";
import LoginPage from "../../ui/pages/LoginPage";
import TaskManagementLayout from "../../ui/layouts/TaskManagementLayout";
import TaskManagementPage from "../../ui/pages/TaskManagementPage";

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
