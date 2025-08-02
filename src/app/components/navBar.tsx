"use client";
import Link from "next/link";
import React, { useState } from "react";
import Hero from "./hero";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-['Pacifico'] text-2xl text-primary">
            logo
          </a>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
            <div className="relative group">
              <button className="text-gray-900 font-medium hover:text-primary transition-colors flex items-center">
                Shop <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded hidden group-hover:block">
                {["Women", "Men", "Accessories", "Footwear"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-primary transition-colors"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-primary transition-colors"
            >
              Sale
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-primary transition-colors"
            >
              About
            </a>
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
              >
                <i className="ri-search-line text-xl">Search</i>
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center text-gray-400">
                      <i className="ri-search-line"></i>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Account */}
            <div className="relative group">
              <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors">
                <i className="ri-user-line text-xl"></i>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded hidden group-hover:block">
                {["Sign In", "Register", "My Account", "Orders"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Cart */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
              >
                <i className="ri-shopping-bag-line text-xl"> 🛒</i>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-3">
                    Your Cart (3)
                  </h3>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {/* Example Products - In real app, map over cart items */}
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm text-gray-600">Subtotal</span>
                      <span className="text-sm font-medium">$214.97</span>
                    </div>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block w-full py-2 px-4 bg-primary text-white text-center font-medium rounded-button hover:bg-primary/90 transition-colors"
                      >
                        Checkout
                      </a>

                      <Link
                        href={"/cart"}
                        className="block w-full py-2 px-4 bg-gray-100 text-gray-800 text-center font-medium rounded-button hover:bg-gray-200 transition-colors"
                      >
                        Go To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700"
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-3 space-y-3">
              <a href="#" className="block py-2 text-gray-900 font-medium">
                Home
              </a>
              <div>
                <button
                  onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-900 font-medium"
                >
                  Shop <i className="ri-arrow-down-s-line"></i>
                </button>
                {isShopMenuOpen && (
                  <div className="pl-4 space-y-2 mt-1">
                    {["Women", "Men", "Accessories", "Footwear"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block py-1 text-gray-700"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#" className="block py-2 text-gray-900 font-medium">
                New Arrivals
              </a>
              <a href="#" className="block py-2 text-gray-900 font-medium">
                Sale
              </a>
              <a href="#" className="block py-2 text-gray-900 font-medium">
                About
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
