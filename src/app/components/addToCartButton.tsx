"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { Product } from "../libs/productDetailsApi";
import { MdShoppingCart } from "react-icons/md";

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
      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
    >
      <MdShoppingCart /> Add to Cart
    </button>
  );
}
