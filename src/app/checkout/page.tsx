"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { RootState } from "../store/store";
import { placeOrder } from "../store/slices/orderSlice";
import { clearCart } from "../store/slices/cartSlice";
import SuccessMessage from "../components/successMessage";

type CheckoutFormData = {
  name: string;
  address: string;
  phone: string;
};

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [submitted, setSubmitted] = useState(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const onSubmit = (data: CheckoutFormData) => {
    if (cartItems.length === 0) return alert("Your cart is empty!");

    dispatch(
      placeOrder({
        name: data.name,
        address: data.address,
        phone: data.phone,
        items: cartItems,
        totalAmount,
        date: new Date().toLocaleString(),
      })
    );
    dispatch(clearCart());
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br pt-20 from-indigo-50 via-white to-cyan-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Complete Your Order
          </h1>
          <p className="text-gray-600 mt-2">
            Just one more step to get your items delivered!
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>

          <h2 className="text-2xl font-bold mb-6 relative">Checkout</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 relative"
          >
            <div className="group">
              <label className="block mb-2 text-sm font-medium text-gray-700 transition-all duration-200 group-focus-within:text-indigo-600">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  {...register("name", { required: "Full name is required" })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl transition-all duration-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:bg-indigo-50 focus:shadow-lg focus:scale-[1.02] hover:border-gray-300"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 animate-pulse flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="group">
              <label className="block mb-2 text-sm font-medium text-gray-700 transition-all duration-200 group-focus-within:text-indigo-600">
                Shipping Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <input
                  {...register("address", { required: "Address is required" })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl transition-all duration-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:bg-indigo-50 focus:shadow-lg focus:scale-[1.02] hover:border-gray-300"
                  placeholder="Enter your complete address"
                />
              </div>
              {errors.address && (
                <p className="mt-2 text-sm text-red-600 animate-pulse flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="group">
              <label className="block mb-2 text-sm font-medium text-gray-700 transition-all duration-200 group-focus-within:text-indigo-600">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl transition-all duration-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:bg-indigo-50 focus:shadow-lg focus:scale-[1.02] hover:border-gray-300"
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600 animate-pulse flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl p-6 border border-indigo-100">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Order Summary
              </h3>
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Place Order (${totalAmount.toFixed(2)})
              </span>
            </button>

            {/* Security Badge */}
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm border border-green-200">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                256-bit SSL Encrypted & Secure
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
