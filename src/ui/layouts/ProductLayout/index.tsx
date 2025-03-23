import { useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router";
import { ROUTE_CONSTANT } from "../../../constants/route.constant";
import { useAppSelector } from "../../../hooks/redux.hook";
import "./index.scss";
export default function ProductLayout() {
  const { carts } = useAppSelector((state) => state.product);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const totalQuantity = useMemo(() => {
    return carts.reduce((total, item) => {
      return total + item.count;
    }, 0);
  }, [carts]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTE_CONSTANT.LOGIN);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="product-layout">
      <header>
        <div className="logo" onClick={() => navigate(ROUTE_CONSTANT.PRODUCT)}>
          <img src="/shopping-bag.png" alt="Logo" />
          <span>Shopping Cart</span>
        </div>
        {/* <div className="search">
          <InputFieldSearch
            placeholder="Search product"
            onChange={() => {}}
            value=""
          />
        </div> */}
        <div className="cart">
          <button onClick={() => navigate(ROUTE_CONSTANT.PRODUCT_CART)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {totalQuantity > 0 && (
              <span className="total-quantity">{totalQuantity}</span>
            )}
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
