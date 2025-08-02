import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "./libs/productsApi";
export default async function Products() {
  const products = await fetchProducts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <>
            <div className="max-w-md w-full">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl">
                <div className="relative">
                  <div className="absolute   "></div>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-contain mx-auto"
                  />
                  <div className="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-3 py-2 rounded-full z-20 transform rotate-12">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-indigo-600">
                      ${product.price}
                    </span>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-600">
                        4.9 (120 reviews)
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/ProductDetails/${product.id}`}
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
