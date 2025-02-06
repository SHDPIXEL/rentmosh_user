import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
  Tag,
  Gift,
  Copy,
  Percent,
  BadgeCheck,
} from "lucide-react";
import sofa from "../assets/images/sofa.png";
import toast, { Toaster } from "react-hot-toast";
import ProductCard from "../components/ProductCard"; // Import ProductCard component
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const scrollRef = useRef(null);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

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
      Tags: [
        { label: "Material", value: "Premium Fabric" },
        { label: "Dimensions", value: "L200 x W85 x H70 cm" },
        { label: "Color", value: "Slate Gray" },
        { label: "Weight", value: "45 kg" },
      ],
      benefits: [
        {
          icon: "truck",
          title: "Fast Delivery",
          description: "Delivered within 2 days",
        },
        {
          icon: "shield",
          title: "1 Year Warranty",
          description: "On manufacturing defects",
        },
        {
          icon: "clock",
          title: "24/7 Support",
          description: "We’re here to help anytime",
        },
        {
          icon: "package",
          title: "Easy Returns",
          description: "Hassle-free return policy",
        },
      ],
      offerDetails: [
        {
          title: "Get 10% Off",
          icon: { Tag },
          code: "SOFA10",
          description: "Save 10% on all sofa purchases!",
        },
        {
          title: "Free Delivery",
          icon: { Gift },
          code: "FREESHIP",
          description: "Enjoy free delivery on all orders above ₹500!",
        },
      ],
    },
  ];

  const relatedProducts = [
    {
      id: 2,
      title: "Luxury Recliner Chair",
      description:
        "A comfortable recliner with soft fabric and a sleek design.",
      price: 349.99,
      discount: 10,
      rating: 4.8,
      reviews: 100,
      images: [sofa, sofa, sofa, sofa],
      offers: "20% Off",
    },
    {
      id: 3,
      title: "Elegant Coffee Table",
      description:
        "A stylish and elegant coffee table to complement your living room.",
      price: 129.99,
      discount: 5,
      rating: 4.3,
      reviews: 45,
      images: [sofa, sofa, sofa, sofa],
      offers: "Free Delivery",
    },
  ];

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="text-center text-red-500 text-lg">Product Not Found</div>
    );
  }

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= product.offerDetails.length ? 0 : nextIndex; // Loop back to the first offer if we reach the end
      });
    }, 3000); // 3000ms = 3 seconds

    // Cleanup interval when component unmounts or when autoplay stops
    return () => clearInterval(autoplayInterval);
  }, [product.offerDetails.length]); // Depend on the offerDetails length

  // Function to handle the previous slide
  const handlePrevSlide = () => {
    setCurrentOfferIndex(
      currentOfferIndex === 0
        ? product.offerDetails.length - 1
        : currentOfferIndex - 1
    );
  };

  // Function to handle the next slide
  const handleNextSlide = () => {
    setCurrentOfferIndex(
      currentOfferIndex === product.offerDetails.length - 1
        ? 0
        : currentOfferIndex + 1
    );
  };

  const priceOptions = {
    3: 1000, // Price for 3 months
    6: 1800, // Price for 6 months
    12: 3000, // Price for 12 months
  };

  const [selectedMonth, setSelectedMonth] = useState(3);
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[3]); // Default price for 3 months

  const handleMonthChange = (event) => {
    const month = Number(event.target.value);
    setSelectedMonth(month);
    setSelectedPrice(priceOptions[month]); // Update price based on selected month
  };

  const copyToClipboard = async (code) => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not available");
      }
      await navigator.clipboard.writeText(code);
      toast.success(`Code "${code}" copied to clipboard!`, {
        position: "top-right", // Toast will appear at the top-right
        duration: 3000,
      });
    } catch (err) {
      // Fallback if Clipboard API is not supported
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        toast.success(`Code "${code}" copied!`, { position: "top-right" });
      } catch {
        toast.error("Failed to copy code.", { position: "top-right" });
      }
      document.body.removeChild(textarea);
    }
  };

  const [rating, setRating] = useState(Math.floor(product.rating));

  const handleRatingClick = (index) => {
    setRating(index + 1); // Set the rating based on clicked star
  };

  return (
    <>
      {/* Ensure toaster is globally placed at the top right */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="mx-auto px-4 md:py-8 py-0 md:mt-5 mt-0">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative flex justify-center items-center h-100 top-8 rounded-xl overflow-hidden">
              <img
                src={product.images[mainImage]}
                alt={product.title}
                className="w-full h-full object-contain"
              />
              {/* Previous Button */}
              <button
                onClick={() =>
                  setMainImage((prev) =>
                    prev === 0 ? product.images.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              {/* Next Button */}
              <button
                onClick={() =>
                  setMainImage((prev) =>
                    prev === product.images.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center space-x-4 md:mt-20 mt-10 ">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`md:w-20 md:h-20 w-16 h-16 rounded-lg cursor-pointer border-2 transition-all duration-300 ${mainImage === index
                    ? "border-blue-500 scale-105"
                    : "border-gray-300"
                    }`}
                  onClick={() => setMainImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="md:text-3xl text-2xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>
                <div className="flex items-center">
                  {/* Map through 5 stars */}
                  {[...Array(5)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleRatingClick(index)} // Update rating when clicked
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        className={`md:w-5 md:h-5 w-4 h-4 ${index < rating
                          ? "fill-yellow-400 text-yellow-400" // Filled star if the index is less than the rating
                          : "text-gray-300" // Empty star if the index is greater than or equal to the rating
                          }`}
                      />
                    </button>
                  ))}
                  {/* Display current rating and reviews */}
                  <span className="ml-2 md:text-base text-sm text-gray-600">
                    {rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Heart
                  className={`md:w-6 md:h-6 h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                />
              </button>
            </div>

            <p className="text-gray-600 md:text-base text-sm">{product.description}</p>
            <div className="flex items-baseline space-x-4">
              <span className="md:text-3xl text-2xl font-bold text-gray-900">
                ₹{((product.price * (100 - product.discount)) / 100).toFixed(2)}
              </span>
              <span className="md:text-xl text-sm text-gray-500 line-through">
                ₹{product.price}
              </span>
              <span className="text-red-500 md:text-lg text-md font-semibold">
                {product.discount}% OFF
              </span>
            </div>

            {product.offers && (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block md:text-base text-sm">
                {product.offers}
              </div>
            )}

            <div className="border-t pt-6 mb-0">
              <h3 className="text-lg font-semibold mb-4">
                Select Tenure & Price
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                {/* Month Selection */}
                <select
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  className="bg-gray-100 text-black font-medium md:text-md text-sm py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
                >
                  {Object.keys(priceOptions).map((month) => (
                    <option key={month} value={month}>
                      {month} Months
                    </option>
                  ))}
                </select>

                {/* Price Selection */}
                <select
                  value={selectedPrice}
                  className="bg-gray-100 text-black font-medium text-md py-2 px-4 rounded-lg cursor-pointer appearance-none"
                  disabled
                >
                  {Object.entries(priceOptions).map(([month, price]) => (
                    <option
                      key={month}
                      value={price}
                      selected={Number(month) === selectedMonth}
                    >
                      ₹{price}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Offer Slider Section */}
            <div className="mt-6 relative mb-0">
              <h3 className="text-lg font-semibold mb-2">Special Offers</h3>
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-900 via-blue-950 to-violet-900 p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  {/* Render the icon dynamically */}
                  {product.offerDetails[currentOfferIndex].icon === "Tag" ? (
                    <Tag size={24} className="text-blue-500" />
                  ) : product.offerDetails[currentOfferIndex].icon ===
                    "Gift" ? (
                    <Gift size={24} className="text-green-500" />
                  ) : null}
                  <div>
                    {/* Code with copy functionality */}
                    <div
                      className="flex items-center gap-2 text-black text-sm font-semibold rounded-md cursor-pointer"
                      onClick={() =>
                        copyToClipboard(
                          product.offerDetails[currentOfferIndex].code
                        )
                      }
                    >
                      <div className="flex justify-center items-center">
                        <h4 className="font-bold mb-1 text-yellow-400">
                          {product.offerDetails[currentOfferIndex].title}
                        </h4>
                      </div>
                      <div className="flex bg-yellow-400 font-semibold rounded-md p-2 justify-center items-center">
                        Code: {product.offerDetails[currentOfferIndex].code}
                        <Copy
                          className="w-4 h-4 text-black cursor-pointer ml-1"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents triggering parent click
                            copyToClipboard(
                              product.offerDetails[currentOfferIndex].code
                            );
                          }}
                        />
                      </div>
                    </div>
                    {/* Description for the offer */}
                    <p className="mt-2 text-xs text-yellow-400">
                      {product.offerDetails[currentOfferIndex].description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="md:p-2 p-1 rounded-full bg-yellow-400 hover:bg-yellow-500"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="md:p-2 p-1 rounded-full bg-yellow-400 hover:bg-yellow-500"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <button className="flex-1 bg-red-800 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300">
                Buy Now
              </button>
              <button className="flex-1 border-2 border-red-800 text-red-800 py-3 px-6 rounded-lg hover:bg-red-50">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12">
          <h3 className="md:text-2xl text-xl font-bold text-gray-800 mb-4">
            Product Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-6 gap-3">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="p-4">
                <div className="bg-gray-100 border border-gray-100 overflow-hidden bg-opacity-100 p-6 rounded-xl transform transition duration-300 hover:scale-101 hover:shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <i className="fas fa-check text-xl text-red-800"></i>
                    </div>
                    <h4 className="ml-4 text-lg font-semibold text-black">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-black text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Product Specifications Section */}
        <div className="mt-12">
          <h3 className="md:text-2xl text-xl font-bold text-gray-800 mb-6">
            Product Specifications
          </h3>
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl md:p-6 p-2">
            <table className="w-full table-auto rounded-xl border-collapse">
              <tbody>
                {product.Tags.map((spec, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 transition duration-200 rounded-lg overflow-hidden"
                  >
                    <td className="py-3 font-semibold text-gray-700 rounded-md md:text-lg text-sm p-2 pr-4">
                      {spec.label}
                    </td>
                    <td className="py-3 text-gray-600 rounded-md md:text-lg text-sm">
                      <span className="inline-block w-4 text-center">:</span>
                      <span className="ml-2">{spec.value}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Related Products
          </h3>
          <div className="flex gap-6 overflow-x-auto">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
