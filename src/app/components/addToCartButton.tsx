"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { Product } from "../libs/productDetailsApi";

type Props = {
  product: Omit<Product, "quantity">;
};

export default function AddToCartButton({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("✅ Added to cart!");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Add to Cart
    </button>
  );
}
