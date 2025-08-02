"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { RootState } from "../store/store";
import { placeOrder } from "../store/slices/orderSlice";
import { clearCart } from "../store/slices/cartSlice";

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
    return (
      <div className="max-w-xl mx-auto mt-10 text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          🎉 Thank you for your order!
        </h2>
        <p>We’ve received your order and will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            {...register("name", { required: "Full name is required" })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Shipping Address</label>
          <input
            {...register("address", { required: "Address is required" })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,}$/,
                message: "Invalid phone number",
              },
            })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Place Order (${totalAmount.toFixed(2)})
        </button>
      </form>
    </div>
  );
}
