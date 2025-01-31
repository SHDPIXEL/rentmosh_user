import React, { useState } from "react";
import { Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import sofa from "../assets/images/sofa.png"; // Add an empty cart image to your assets

// Cart Page Component
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    // Replace this with an empty array to simulate an empty cart
    {
      id: 1,
      title: "Modern Comfort Sofa",
      price: 299.99,
      discount: 15,
      image: sofa,
      quantity: 1,
    },
    {
      id: 2,
      title: "Ergonomic Office Chair",
      price: 199.99,
      discount: 10,
      image: sofa,
      quantity: 2,
    },
    {
      id: 3,
      title: "Minimalist Coffee Table",
      price: 149.99,
      discount: 0,
      image: sofa,
      quantity: 1,
    },
  ]);

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const discountedPrice = (item.price * (100 - item.discount)) / 100;
      return total + discountedPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
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
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
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
                        Quantity: {item.quantity}
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
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-300">
                      <ShoppingCart className="w-5 h-5" />
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
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Items</span>
                  <span className="font-semibold">{cartItems.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Payable</span>
                  <span className="font-semibold text-gray-900">
                    ₹{calculateTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-semibold text-red-500">
                    -₹
                    {cartItems
                      .reduce((total, item) => {
                        const discountAmount =
                          ((item.price * item.discount) / 100) * item.quantity;
                        return total + discountAmount;
                      }, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-6 border-t pt-4">
                <span className="text-lg font-semibold text-gray-900">
                  Total
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  ₹{calculateTotal().toFixed(2)}
                </span>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
