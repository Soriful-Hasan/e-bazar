import { ShoppingBag, Loader2 } from "lucide-react";

interface LoadingComponentProps {
  type?: "page" | "button" | "card" | "spinner";
  size?: "sm" | "md" | "lg";
  message?: string;
  showLogo?: boolean;
}
export default function LoadingComponent({
  type = "page",
  size = "md",
  message = "Loading...",
  showLogo = true,
}: LoadingComponentProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

 
  if (type === "page") {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center z-50">
        <div className="text-center">
          {/* Animated Logo */}
          {showLogo && (
            <div className="mb-8 flex justify-center">
              <div className="relative animate-pulse">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
                  <ShoppingBag className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center animate-spin">
                  <span className="text-sm font-bold text-white">E</span>
                </div>
              </div>
            </div>
          )}

          {/* Loading Dots */}
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          </div>

          {/* Brand Name */}
          {showLogo && (
            <h2 className="font-['Pacifico'] text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              E-Bazar
            </h2>
          )}

          <p className="text-gray-600 text-lg">{message}</p>
        </div>
      </div>
    );
  }

  // Button Loading
  if (type === "button") {
    return (
      <div className="flex items-center gap-2">
        <Loader2 className={`${sizeClasses[size]} animate-spin`} />
        <span className={textSizes[size]}>{message}</span>
      </div>
    );
  }

  // Card Loading
  if (type === "card") {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    );
  }

  // Simple Spinner
  if (type === "spinner") {
    return (
      <div className="flex items-center justify-center">
        <div
          className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}
        ></div>
      </div>
    );
  }

  // Default fallback
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />
    </div>
  );
}
