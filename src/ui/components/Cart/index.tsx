import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hook";
import { toggleRemoveFromCart } from "../../../libs/redux/slices/product.slice";

export default function Cart() {
  const { carts } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const onRemove = (id: string) => {
    dispatch(toggleRemoveFromCart(id));
  };
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {carts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        carts.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.product.name}</h3>
            <p>${item.product.price.toFixed(2)}</p>
            <button onClick={() => onRemove(item.product.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
