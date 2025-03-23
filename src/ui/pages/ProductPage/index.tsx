import { useState } from "react";
import { initialProductValues } from "../../../constants/initialProductValues";
import { Product } from "../../../models/Product";
import ProductList from "../../components/ProductList";
import { toggleSetProductSelected } from "../../../libs/redux/slices/product.slice";
import { Link, useNavigate } from "react-router";
import { ROUTE_CONSTANT } from "../../../constants/route.constant";

export default function ProductPage() {
  const [products] = useState<Product[]>(initialProductValues);
  const navigate = useNavigate();

  const viewProductDetails = (product: Product) => {
    toggleSetProductSelected(product);
    navigate(ROUTE_CONSTANT.PRODUCT_DETAIL.replace(":id", product.id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h1 className="">Product List</h1>
        <Link to={ROUTE_CONSTANT.HOME}>Back to home</Link>
      </div>
      <ProductList products={products} onViewDetails={viewProductDetails} />
    </div>
  );
}
