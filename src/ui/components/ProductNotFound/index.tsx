import { Link } from "react-router";
import { ROUTE_CONSTANT } from "../../../constants/route.constant";
import "./ProductNotFound.scss";
interface ProductNotFoundProps {
  title?: string;
}
export default function ProductNotFound({
  title = "Product not found",
}: ProductNotFoundProps) {
  return (
    <div className="product-not-found">
      <img
        src="/assets/images/undraw_no-data_ig65.svg"
        alt="Record not found"
      />
      <h1>{title}</h1>
      <Link className="back" to={ROUTE_CONSTANT.PRODUCT}>
        Back to Home
      </Link>
    </div>
  );
}
