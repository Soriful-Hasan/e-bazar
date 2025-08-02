"use client";
import React from "react";
import { Home, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br py-30 from-indigo-50 via-white to-cyan-50 flex items-center justify-center px-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main 404 Section */}
      <div className="relative text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="relative mb-12">
          <div className="text-[10rem] lg:text-[14rem] font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-none ">
            404
          </div>
          <div className="absolute top-1/2 right-0 animate-float delay-1000"></div>
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed">
          The page youre looking for seems to have wandered off into the digital
          wilderness. Lets get you back to shopping!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center text-lg">
              <Home className="w-6 h-6 mr-3" />
              <Link href={"/"}>Back to Home</Link>
            </span>
          </button>

          <button className="bg-white border-2 border-indigo-200 hover:border-indigo-300 text-indigo-600 hover:text-indigo-700 font-semibold py-4 px-10 rounded-2xl transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
            <span className="flex items-center justify-center text-lg">
              <ShoppingBag className="w-6 h-6 mr-3" />

              <Link href={"/"}> Continue Shopping</Link>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float.delay-500 {
          animation-delay: 0.5s;
        }
        .animate-float.delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
