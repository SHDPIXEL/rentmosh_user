import React, { useState } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ProductCard Component
const ProductCard = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Main Image Section */}
      <div className="relative h-64 rounded-t-xl overflow-hidden">
        <img 
          src={product.images[selectedImage]} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
        
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md">
          {product.discount}% OFF
        </div>
        
        {/* Like Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <Heart 
            className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 p-2 overflow-x-auto no-scrollbar">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(index);
            }}
            className={`w-12 h-12 rounded-md flex-shrink-0 border-2 
              ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
          >
            <img src={img} alt={`${product.title}-${index}`} className="w-full h-full object-cover rounded-md" />
          </button>
        ))}
      </div>

      {/* Product Info */}
      <div className="p-4" onClick={handleProductClick}>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < product.rating 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>

        {/* Price Section */}
        <div className="flex items-baseline mb-2">
          <span className="text-2xl font-bold text-gray-900">
          ₹{(product.price * (100 - product.discount) / 100).toFixed(2)}
          </span>
          <span className="ml-2 text-sm text-gray-500 line-through">
          ₹{product.price}
          </span>
          <span className="ml-2 text-sm text-gray-600">
            /month
          </span>
        </div>

        {/* Offers Badge */}
        {product.offers && (
          <div className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
            {product.offers}
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard;