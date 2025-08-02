"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Heart,
  ShoppingCart,
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock cart count - replace with your Redux cart count
  const cartItemsCount = 3;

  return (
    <div className="">
      {/* Add padding to account for fixed navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-['Pacifico'] text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            E-Bazar
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 flex items-center group">
                Shop
                <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {[
                    {
                      name: "Women",
                      icon: "👗",
                      desc: "Fashion & Accessories",
                    },
                    { name: "Men", icon: "👔", desc: "Clothing & Style" },
                    { name: "Accessories", icon: "👜", desc: "Bags & Jewelry" },
                    { name: "Footwear", icon: "👟", desc: "Shoes & Sneakers" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={`/shop/${item.name.toLowerCase()}`}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-200 group/item"
                    >
                      <span className="text-lg mr-3">{item.icon}</span>
                      <div>
                        <div className="font-medium group-hover/item:text-blue-600">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {["New Arrivals", "Sale", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={`font-medium transition-all duration-300 relative group ${
                  item === "Sale"
                    ? "text-red-500 hover:text-red-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item}
                {item === "Sale" && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                    HOT
                  </span>
                )}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    item === "Sale" ? "bg-red-500" : "bg-blue-600"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-all duration-300"
              >
                <Search className="w-5 h-5" />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-xl rounded-xl border border-gray-100 p-4 transform transition-all duration-300">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for products..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all duration-300"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    Popular: Headphones, T-shirts, Sneakers
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-gray-100 rounded-full transition-all duration-300 relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Account */}
            <div className="relative group">
              <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-all duration-300">
                <User className="w-5 h-5" />
              </button>
              <div className="absolute right-0 mt-2 w-52 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {[
                    { name: "Sign In", icon: "🔐" },
                    { name: "Register", icon: "📝" },
                    { name: "My Account", icon: "👤" },
                    { name: "Orders", icon: "📦" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={`/${item.name.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-200"
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Cart */}
            <Link href="/cart">
              <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-all duration-300 relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block py-3 text-gray-900 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 transition-all duration-200"
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
                className="flex items-center justify-between w-full py-3 text-gray-900 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 transition-all duration-200"
              >
                Shop
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isShopMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ${
                  isShopMenuOpen
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="pl-6 space-y-1 mt-1">
                  {["Women", "Men", "Accessories", "Footwear"].map((item) => (
                    <Link
                      key={item}
                      href={`/shop/${item.toLowerCase()}`}
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {["New Arrivals", "Sale", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={`block py-3 font-medium hover:bg-gray-50 rounded-lg px-3 transition-all duration-200 ${
                  item === "Sale"
                    ? "text-red-500 hover:text-red-600"
                    : "text-gray-900 hover:text-blue-600"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
