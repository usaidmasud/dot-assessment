// src/components/ProductCartItem.tsx
import { useAppDispatch } from "../../../hooks/redux.hook";
import { toggleRemoveFromCart } from "../../../libs/redux/slices/product.slice";
import { ProductCart } from "../../../models/Product";
import "./index.scss";

interface ProductCartItemProps {
  cart: ProductCart;
}

export default function ProductCartItem({ cart }: ProductCartItemProps) {
  const dispatch = useAppDispatch();
  const handleRemoveCart = (productId: string) => {
    dispatch(toggleRemoveFromCart(productId));
  };

  return (
    <div className="product-cart-item">
      <img
        src={`/assets/products/${cart.product.imageUrl}`}
        alt={cart.product.name}
      />
      <div className="cart-info">
        <div className="title">{cart.product.name}</div>
        <div className="price">${cart.product.price}</div>

        <p className="quantity">
          Quantity: <span>{cart.count}</span>
        </p>
      </div>
      <div className="close">
        <button onClick={() => handleRemoveCart(cart.product.id)}>
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
