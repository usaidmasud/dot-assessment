// src/components/ProductItem.tsx
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hook";
import {
  toggleAddToCart,
  toggleAddToFavorite,
  toggleDeccreaseCart,
  toggleIncreaseCart,
} from "../../../libs/redux/slices/product.slice";
import { Product } from "../../../models/Product";
import Button from "../Button";
import Favorite from "../Favorite";
import "./ProductItem.scss";

interface ProductItemProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductItem({
  product,
  onViewDetails,
}: ProductItemProps) {
  const { carts, favorites } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: Product) => {
    dispatch(toggleAddToCart(product));
  };

  const handleIncrease = (productId: string) => {
    dispatch(toggleIncreaseCart(productId));
  };

  const handleDecrease = (productId: string) => {
    dispatch(toggleDeccreaseCart(productId));
  };
  const getCountCart = useMemo(() => {
    const cartItem = carts.find((item) => item.product.id === product.id);
    return cartItem ? cartItem.count : 0;
  }, [carts, product.id]);

  const checkIsFavorite = useMemo(() => {
    const fav = favorites.find((item) => item.id === product.id);
    return fav ? true : false;
  }, [favorites, product.id]);

  const handleFavorite = () => {
    dispatch(toggleAddToFavorite(product));
  };
  return (
    <div className="product-item">
      <img src={`/assets/products/${product.imageUrl}`} alt={product.name} />
      <div className="white-list">
        <Favorite onClick={handleFavorite} isActive={checkIsFavorite} />
      </div>
      <div className="product-info">
        <h2 onClick={() => onViewDetails(product)} className="title">
          {product.name}
        </h2>

        <p onClick={() => onViewDetails(product)} className="description">
          {product.description}
        </p>
        <p onClick={() => onViewDetails(product)} className="price">
          ${product.price.toFixed(2)}
        </p>
        <div className="product-footer">
          {getCountCart > 0 ? (
            <div className="in-cart">
              <Button onClick={() => handleDecrease(product.id)}>-</Button>
              <h5 className="count">{getCountCart}</h5>
              <Button onClick={() => handleIncrease(product.id)}>+</Button>
            </div>
          ) : (
            <div className="add-cart">
              <Button onClick={() => handleAddToCart(product)}>Add</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
