import { useParams } from "react-router-dom";
import { useState } from "react";
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import sofa from "../assets/images/sofa.png";

const ProductPage = () => {
  const { productId } = useParams(); // Get product ID from URL
  const [mainImage, setMainImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Sample product data (replace this with API fetch if needed)
  const products = [
    {
      id: 1,
      title: "Modern Comfort Sofa",
      description:
        "Experience ultimate comfort with our modern design sofa. Perfect for your living room with its ergonomic design and premium materials.",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      reviews: 128,
      images: [sofa, sofa, sofa, sofa],
      offers: "Free Delivery + Assembly",
      specifications: [
        { label: "Material", value: "Premium Fabric" },
        { label: "Dimensions", value: "L200 x W85 x H70 cm" },
        { label: "Color", value: "Slate Gray" },
        { label: "Weight", value: "45 kg" },
      ],
    },
    {
      id: 2,
      title: "Luxury Recliner Chair",
      description:
        "A premium recliner for the ultimate relaxation experience, designed with soft leather and an adjustable reclining mechanism.",
      price: 499.99,
      discount: 10,
      rating: 4.7,
      reviews: 89,
      images: [sofa, sofa, sofa],
      offers: "Free Installation",
      specifications: [
        { label: "Material", value: "Genuine Leather" },
        { label: "Dimensions", value: "L180 x W90 x H100 cm" },
        { label: "Color", value: "Brown" },
        { label: "Weight", value: "55 kg" },
      ],
    },
  ];

  // Find product by ID
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div className="text-center text-red-500 text-lg">Product Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-25">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src={product.images[mainImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={() => setMainImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setMainImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex space-x-4">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(index)}
                className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
                  mainImage === index ? "border-blue-500" : "border-transparent"
                }`}
              >
                <img src={img} alt={`${product.title}-${index}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index}
                    className={`w-5 h-5 ${index < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>
            <button onClick={() => setIsLiked(!isLiked)} className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-baseline space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                ₹{(product.price * (100 - product.discount) / 100).toFixed(2)}
              </span>
              <span className="text-xl text-gray-500 line-through">₹{product.price}</span>
              <span className="text-red-500 font-semibold">{product.discount}% OFF</span>
            </div>

            {product.offers && (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block">{product.offers}</div>
            )}
          </div>

          {/* Specifications */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-6">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Buy Now
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
