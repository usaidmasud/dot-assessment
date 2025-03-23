import React from "react";
import { Product } from "../../../models/Product";
import ProductItem from "../ProductItem";
import "./index.scss";
interface ProductListProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onViewDetails,
}) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
