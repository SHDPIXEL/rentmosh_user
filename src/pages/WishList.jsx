import React, { useState } from 'react';
import { Heart, Trash2, ShoppingCart, Clock, ArrowRight } from 'lucide-react';
import BenefitsCard from '../components/BenefitsCard';
import sofa from "../assets/images/sofa.png"

// Wishlist Page Component
const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "Modern Comfort Sofa",
      price: 299.99,
      discount: 15,
      image: sofa,
      available: true,
      addedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Ergonomic Office Chair",
      price: 199.99,
      discount: 10,
      image: sofa,
      available: true,
      addedDate: "2024-01-20"
    },
    {
      id: 3,
      title: "Minimalist Coffee Table",
      price: 149.99,
      discount: 0,
      image: sofa,
      available: false,
      addedDate: "2024-01-25"
    }
  ]);

  const BenefitDetails = [
    {
      icon: "clock",
      title: "Save for Later",
      description: "Keep track of items you love and purchase them when you're ready"
    },
    {
      icon: "truck",
      title: "Quick Purchase",
      description: "Easily move items to cart and complete your purchase"
    },
    {
      icon: "shield",
      title: "Price Alerts",
      description: "Get notified when your saved items go on sale"
    },
    {
      icon: "package",
      title: "Share Lists",
      description: "Share your wishlist with friends and family"
    }
  ]

  const removeFromWishlist = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600">{wishlistItems.length} items</p>
        </div>
        {wishlistItems.length > 0 && (
          <button className="text-red-800 hover:text-red-700 text-sm font-medium">
            Move All to Cart
          </button>
        )}
      </div>

      {/* Wishlist Items */}
      {wishlistItems.length > 0 ? (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm w-full hover:shadow-md transition-shadow duration-300 p-4"
            >
              <div className="flex items-center space-x-4">
                {/* Product Image */}
                <div className="md:w-32 md:h-32 w-28 h-28 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow">
                  <h3 className="md:text-lg text-base font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  <div className="flex items-center space-x-2 mb-2">
                    <span className="md:text-xl text-sm font-bold text-gray-900">
                    ₹{(item.price * (100 - item.discount) / 100).toFixed(2)}
                    </span>
                    {item.discount > 0 && (
                      <>
                        <span className="md:text-sm text-xs text-gray-500 line-through">
                          ${item.price}
                        </span>
                        <span className="md:text-sm text-xs text-red-500 font-medium">
                          {item.discount}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 md:text-sm text-xs">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">
                      Added on {new Date(item.addedDate).toLocaleDateString()}
                    </span>
                  </div>

                  {!item.available && (
                    <div className="text-red-500 text-sm mt-2">
                      Currently out of stock
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  {item.available && (
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-300">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Empty State
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Why So Empty ?
          </h2>
          <p className="text-gray-600 mb-6">
            Save items you love and come back to them later
          </p>
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Benefits Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Why Save to Wishlist?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BenefitDetails.map((benefit, index) => (
            <BenefitsCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
