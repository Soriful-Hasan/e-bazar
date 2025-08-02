"use client";

import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import Image from "next/image";

import { clearCart, removeFromCart } from "../store/slices/cartSlice";
import { RootState } from "../store/store";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto mt-10 text-center">
        <h2 className="text-xl font-semibold">🛒 Your cart is empty</h2>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 text-sm hover:underline mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</p>
        <div className="mt-4 flex gap-4 justify-end">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50"
          >
            Clear Cart
          </button>
          <Link href="/checkout">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
