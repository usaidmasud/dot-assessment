import { useMemo } from "react";
import { useParams } from "react-router";
import { initialProductValues } from "../../../constants/initialProductValues";
import ProductDetail from "../../components/ProductDetail";
import ProductNotFound from "../../components/ProductNotFound";

export default function ProductDetailPage() {
  const { id } = useParams();
  const findProduct = useMemo(
    () => initialProductValues.find((product) => product.id === id),
    [id]
  );
  if (!findProduct) {
    return <ProductNotFound />;
  }
  return (
    <div className="">
      <h1 className="mb-1">Product Detail</h1>

      <ProductDetail product={findProduct} />
    </div>
  );
}
