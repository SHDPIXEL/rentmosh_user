import React, { useState } from "react";
import { Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="w-full sm:w-64 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-transform duration-300 p-2 cursor-pointer"
      onClick={handleProductClick}
    >
      {/* Image Section */}
      <div className="relative w-full h-40 sm:h-56 rounded-lg overflow-hidden">
        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {product.discount}% OFF
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
        >
          <Heart
            className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`}
          />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-1 p-2 overflow-x-auto no-scrollbar">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(index);
            }}
            className={`w-10 h-10 rounded border-2 ${selectedImage === index ? "border-blue-500" : "border-transparent"
              }`}
          >
            <img src={img} alt={`${product.title}-${index}`} className="w-full h-full object-cover rounded" />
          </button>
        ))}
      </div>

      {/* Product Info */}
      <div className="px-2 pb-2">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 truncate">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 ${index < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
            />
          ))}
          <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
        </div>  

        {/* Price Section */}
        <div className="flex flex-col md:flex-row items-baseline">
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            ₹{(product.price * (100 - product.discount) / 100).toFixed(2)}
          </span>
          <div>
            <span className="ml-1 text-xs text-gray-500 line-through">₹{product.price}</span>
            <span className="ml-1 text-xs text-gray-600">/month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
