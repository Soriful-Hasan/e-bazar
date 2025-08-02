import Link from "next/link";

export default function SuccessMessage() {
  return (
    <div className="min-h-screen   flex items-center justify-center py-30 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Success Icon */}
        <div className="relative mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-2xl animate-bounce">
            <svg
              className="w-12 h-12 text-white animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Main Success Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-400/20 to-green-400/20 rounded-full blur-2xl"></div>

          <div className="relative">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              🎉 Thank you for your order!
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We ve received your order and will contact you shortly.
            </p>

            {/* Order Status Timeline */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-100">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Whats Next?
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span>Order confirmed and being processed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Well contact you within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Prepare your items for delivery</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                href={"/"}
                className="w-full bg-white border-2 border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-700 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-2">
            Need help? We re here for you!
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Support
          </div>
        </div>
      </div>
    </div>
  );
}
