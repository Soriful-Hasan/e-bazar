import React from "react";

export default function Hero() {
  return (
    <section
      className="hero-section relative bg-no-repeat bg-cover bg-center lg:bg-right min-h-[50vh] sm:min-h-[80vh] lg:min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20hero%20image%20with%20stylish%20clothing%20items%20arranged%20on%20a%20clean%20minimalist%20background%2C%20soft%20gradient%20lighting%2C%20professional%20product%20photography%20style%2C%20high-end%20fashion%20items%20displayed%20elegantly%2C%20neutral%20colors%20with%20subtle%20accent%20colors%2C%20plenty%20of%20whitespace%20on%20the%20left%20side%20for%20text&width=1920&height=600&seq=hero1&orientation=landscape')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 lg:bg-gradient-to-r lg:from-black/40 lg:via-black/20 lg:to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32 w-full relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          {/* New Badge */}
          <div className="inline-flex items-center px-3 py-1 mb-4 sm:mb-6 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
            ✨ New Arrival 2025
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Summer Collection 2025
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed drop-shadow-md max-w-lg">
            Discover our latest arrivals designed for comfort and style. Premium
            quality that lasts with sustainable materials.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 sm:py-4 px-6 sm:px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              Shop Now
              <svg
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center py-3 sm:py-4 px-6 sm:px-8 rounded-xl bg-white/90 backdrop-blur-sm text-gray-800 font-semibold border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Explore Collection
            </a>
          </div>

          {/* Enhanced Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 sm:mt-12">
            <div className="flex items-center space-x-2 text-white/80">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Premium Quality</span>
            </div>

            <div className="flex items-center space-x-2 text-white/80">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H3zM3 10a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3zM3 16a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3zM8 5a1 1 0 011-1h5a1 1 0 110 2H9a1 1 0 01-1-1zM8 11a1 1 0 011-1h5a1 1 0 110 2H9a1 1 0 01-1-1zM8 17a1 1 0 011-1h5a1 1 0 110 2H9a1 1 0 01-1-1z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Free Shipping</span>
            </div>

            <div className="flex items-center space-x-2 text-white/80">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
