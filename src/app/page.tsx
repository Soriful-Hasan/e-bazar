import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "./libs/productsApi";
import Hero from "./components/hero";

export default async function Products() {
  const products = await fetchProducts();

  return (
    <>
      {/* hero section */}
      <Hero />

      {/*  Featured Products section */}
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl mt-10 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Featured Products
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products?.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                  <div className="bg-white rounded-3xl h-full w-full"></div>
                </div>

                {/* Product Image Container */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 h-72 flex items-center justify-center overflow-hidden">
                  {/* Animated Background Circles */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-blue-200/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-purple-200/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>

                  <Image
                    src={product.image}
                    alt={product.title}
                    width={220}
                    height={220}
                    className="object-contain max-h-full group-hover:scale-110 transition-transform duration-500 z-10 relative"
                  />

                  {/* NEW Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    NEW
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4 relative z-20">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {product.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        (4.8)
                      </span>
                      <span className="text-xs text-gray-400">42 reviews</span>
                    </div>
                  </div>

                  {/* Price and Discount */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                          ${product.price}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          $69.99
                        </span>
                      </div>
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                        28% OFF
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Link
                      href={`/product/${product.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
