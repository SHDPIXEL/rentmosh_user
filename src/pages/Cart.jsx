import React, { useState } from "react";
import {
  Trash2,
  ShoppingCart,
  Heart,
  ArrowRight,
  CheckCircle,
  Loader 
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import navigation
import sofa from "../assets/images/sofa.png"; // Add an empty cart image to your assets

// Cart Page Component
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Modern Comfort Sofa",
      price: 299.99,
      discount: 15,
      image: sofa,
      tenure: 1,
    },
    {
      id: 2,
      title: "Ergonomic Office Chair",
      price: 199.99,
      discount: 10,
      image: sofa,
      tenure: 4,
    },
    {
      id: 3,
      title: "Minimalist Coffee Table",
      price: 149.99,
      discount: 0,
      image: sofa,
      tenure: 1,
    },
  ]);

  // Track liked items in a state
  const [likedItems, setLikedItems] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use navigation hook

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    // Also remove from liked items if it's liked
    setLikedItems((prev) => {
      const newLikedItems = { ...prev };
      delete newLikedItems[id];
      return newLikedItems;
    });
  };

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle liked state for this item
    }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Price after discount
      const discountedPrice = (item.price * (100 - item.discount)) / 100;
      // Multiply discounted price by quantity (tenure)
      return total + discountedPrice * item.tenure;
    }, 0);
  };

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/booked", { state: { transactionId: `TXN${Date.now()}` } });
    }, 2000); // Simulating processing delay
  };

  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Cart</h1>
          <p className="text-gray-600">{cartItems.length} items</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Added Products */}
        <div className="space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center max-h-screen">
              {/* Centered Content */}
              <div className="flex flex-col items-center justify-center">
                <ShoppingCart className="w-48 h-48 mb-4" />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Your Cart is Empty
                </h2>
                <p className="text-gray-600 mb-4">
                  Looks like you haven't added anything yet. Start shopping and
                  add items to your cart!
                </p>
                <button
                  onClick={() => (window.location.href = "/products")} // Redirect to products page
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Browse Products
                </button>
              </div>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
              >
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl font-bold text-gray-900">
                        ₹
                        {((item.price * (100 - item.discount)) / 100).toFixed(
                          2
                        )}
                      </span>
                      {item.discount > 0 && (
                        <>
                          <span className="text-sm text-gray-500 line-through">
                            ₹{item.price}
                          </span>
                          <span className="text-sm text-red-500 font-medium">
                            {item.discount}% OFF
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-gray-600">
                        Tenure: {item.tenure}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => toggleLike(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedItems[item.id]
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Side - Order Summary */}
        {cartItems.length > 0 && (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="space-y-4">
                {/* Total Items Section */}
                <div>
                  <div className="flex justify-between space-y-1">
                    <span className="text-gray-600">Total Items</span>
                    <span className="font-semibold">
                      {cartItems.length} items
                    </span>
                  </div>

                  {/* Price and Tenure for each product */}
                  <div className="space-y-1">
                    {cartItems.map((item) => {
                      const itemTotal = (item.price * item.tenure).toFixed(2);
                      return (
                        <div key={item.id} className="flex justify-between">
                          <span className="text-gray-500">{item.title}</span>
                          <span className="font-semibold text-gray-500">
                            ₹{itemTotal} ({item.tenure} month
                            {item.tenure > 1 ? "s" : ""})
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className=" border-t-2 border-dashed border-gray-300 my-4"></div>
                {/* Total Amount (Before Discount) */}
                <div className="flex justify-between pt-2">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="font-semibold text-gray-900">
                    ₹
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.tenure,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>

                {/* Discount Section */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-semibold text-red-500">
                    -₹
                    {cartItems
                      .reduce((total, item) => {
                        const discountAmount =
                          ((item.price * item.discount) / 100) * item.tenure;
                        return total + discountAmount;
                      }, 0)
                      .toFixed(2)}
                  </span>
                </div>

                {/* Total Payable Section */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Payable</span>
                  <span className="font-semibold text-gray-900">
                    ₹{calculateTotal().toFixed(2)}
                  </span>
                </div>
              </div>
              {/* GST Section */}
              <div className="flex justify-between mt-3">
                <span className="text-gray-600">GST (18%)</span>
                <span className="font-semibold text-green-600">
                  +₹{((calculateTotal() * 18) / 100).toFixed(2)}
                </span>
              </div>

              <div className=" border-t-2 border-dashed border-gray-300 my-6"></div>

              {/* Total Price Calculation */}
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  Total
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  ₹
                  {(calculateTotal() + (calculateTotal() * 18) / 100).toFixed(
                    2
                  )}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-red-800 text-white py-3 rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin w-5 h-5" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Proceed to Checkout</span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
