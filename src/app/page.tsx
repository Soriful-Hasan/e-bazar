import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "./libs/productsApi";
import Hero from "./components/hero";
export default async function Products() {
  const products = await fetchProducts();

  return (
    <>
      <Hero />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products?.map((product) => (
            <div key={product.id} className="max-w-md w-full">
              <div className="bg-white rounded-2xl  overflow-hidden hover:shadow-3xl">
                <div className="relative bg-gray-300/10 p-2 h-80">
                  <div className="absolute   "></div>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={100}
                    className="object-contain mx-auto"
                  />
                  <div className="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-3 py-2 rounded-full z-20 transform rotate-12">
                    NEW
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium text-lg  text-gray-900 mb-1 mt-4">
                    Elegant White Blouse
                  </h3>
                  <div className="flex items-center mb-1">
                    <div className="flex text-amber-400 text-sm">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-half-fill"></i>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(42)</span>
                  </div>
                  <p className="text-gray-900 font-medium">$49.99</p>
                  <Link
                    className="w-full text-blue-600"
                    href={`/product/${product.id}`}
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
