"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Trash2,
  Heart,
  CreditCard,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

import { clearCart, removeFromCart } from "../store/slices/cartSlice";
import { RootState } from "../store/store";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState<number | null>(null);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleRemoveFromCart = (id: number) => {
    setIsAnimating(id);
    setTimeout(() => {
      dispatch(removeFromCart(id));
      setIsAnimating(null);
    }, 300);
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemoveFromCart(id);
      return;
    }

    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(removeFromCart(id));

      for (let i = 0; i < newQuantity; i++) {}
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-30 from-gray-50 to-gray-100 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl mb-8 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Shopping Cart
                </h1>
                <p className="text-gray-500">{totalItems} items in your cart</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-3xl font-bold text-green-600">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              // Empty Cart Message
              <div className="bg-white rounded-2xl p-12 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 mb-6">
                  Looks like you havent added any items to your cart yet.
                </p>
                <Link href="/">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 mx-auto group">
                    Start Shopping
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            ) : (
              // Cart Items List
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isAnimating === item.id
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    {/* Product Image */}
                    <div className="relative group">
                      <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                        <Image
                          width={96}
                          height={96}
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {item.quantity}
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Price */}
                        <div>
                          <p className="text-2xl font-bold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>

                        {/* Quantity Display Only */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">
                            <span className="font-semibold text-gray-700">
                              Qty: {item.quantity}
                            </span>
                          </div>

                          <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors group"
                          >
                            <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Subtotal ({totalItems} items)
                  </span>
                  <span className="font-semibold">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-600">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {cartItems.length === 0 ? (
                  // Disabled Checkout Button
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 py-4 rounded-xl font-semibold cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  // Active Checkout Button
                  <Link href="/checkout">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                      <CreditCard className="w-5 h-5" />
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                )}

                {cartItems.length > 0 && (
                  <button
                    onClick={() => dispatch(clearCart())}
                    className="w-full border-2 mt-4 border-red-200 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-50 hover:border-red-300 transition-colors"
                  >
                    Clear Cart
                  </button>
                )}
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Secure checkout with 256-bit SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
