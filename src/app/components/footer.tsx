import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-['Pacifico'] text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              E-Bazar
            </Link>

            <p className="text-gray-600 mb-6 max-w-md">
              We offer premium quality clothing and accessories for men and
              women. Our mission is to provide sustainable fashion that lasts.
            </p>
            <div className="flex space-x-4">
              <Link
                href={""}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={""}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <AiFillInstagram />
              </Link>
              <Link
                href={""}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <FaSquareXTwitter />
              </Link>
              <Link
                href={""}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <FaPinterest />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Women{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Men{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Accessories{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Footwear{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  New Arrivals{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Sale{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Customer Service{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  My Account{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Find a Store{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Shipping & Returns{" "}
                </a>
              </li>
              <li>
                <a href="">FAQs</a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About Us{" "}
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 ShopEase. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
                Terms of Service
              </a>

              <a href="#" className="text-gray-500 text-sm hover:text-gray-700">
                Cookies Settings
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <i className="ri-visa-fill text-2xl text-gray-600"></i>
              <i className="ri-mastercard-fill text-2xl text-gray-600"></i>
              <i className="ri-paypal-fill text-2xl text-gray-600"></i>
              <i className="ri-apple-fill text-2xl text-gray-600"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
