import { useMemo } from "react";
import { useAppSelector } from "../../../hooks/redux.hook";
import Button from "../../components/Button";
import ProductCartItem from "../../components/ProductCartItem";
import ProductNotFound from "../../components/ProductNotFound";

export default function ProductCartPage() {
  const { carts } = useAppSelector((state) => state.product);

  const calculatePrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      return acc + cart.product.price * cart.count;
    }, 0);
  }, [carts]);

  if (carts.length === 0) {
    return <ProductNotFound title="Cart is empty" />;
  }
  return (
    <div className="">
      <h1 className="mb-1">My Cart</h1>
      <div className="flex flex-col gap-2">
        {carts.map((cart) => (
          <ProductCartItem key={cart.id} cart={cart} />
        ))}
      </div>
      <div className="mt-2">
        <Button onClick={() => alert("soon")} block>
          ${calculatePrice.toFixed(3)} Checkout
        </Button>
      </div>
    </div>
  );
}
