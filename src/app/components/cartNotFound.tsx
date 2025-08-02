import React from "react";
import { ShoppingCart, AlertCircle, ArrowLeft, RotateCcw } from "lucide-react";

export default function CartItemNotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleRefreshCart = () => {
    window.location.reload();
  };

  const handleContinueShopping = () => {
    // In a real app, this would navigate to the products page
    console.log("Navigate to products page");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
            <ShoppingCart className="w-10 h-10 text-gray-400" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
        </div>

        {/* Title and Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Item Not Found
        </h2>
        <p className="text-gray-600 mb-2">
          The cart item you re looking for doesn t exist or may have been
          removed.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          This could happen if the item was deleted, your session expired, or
          the link is invalid.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleRefreshCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Refresh Cart
          </button>

          <button
            onClick={handleContinueShopping}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Continue Shopping
          </button>

          <button
            onClick={handleGoBack}
            className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Need help?
            <button className="text-blue-600 hover:text-blue-700 ml-1 underline">
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
