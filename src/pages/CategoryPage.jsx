import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import sofa from "../assets/images/sofa.png";

// Category Page Component
const CategoryPage = () => {
  const { categoryName } = useParams();

  const products = [
    {
      id: 1,
      title: "Product Name",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      reviews: 128,
      images: [sofa, sofa, sofa],
      offers: "Free Delivery"
    },
    {
      id: 2,
      title: "Product Name",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      reviews: 128,
      images: [sofa, sofa, sofa],
      offers: "Free Delivery"
    },
    {
      id: 3,
      title: "Product Name",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      reviews: 128,
      images: [sofa, sofa, sofa],
      offers: "Free Delivery"
    },
    {
      id: 4,
      title: "Product Name",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      reviews: 128,
      images: [sofa, sofa, sofa],
      offers: "Free Delivery"
    },
    {
      id: 5,
      title: "Product Name",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      reviews: 128,
      images: [sofa, sofa, sofa],
      offers: "Free Delivery"
    },
    {
      id: 6,
      title: "Product Name",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      reviews: 128,
      images: [sofa, sofa, sofa],
      offers: "Free Delivery"
    }
  ];

  return (
    <div className="mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 capitalize">{categoryName}</h1>
        <p className="text-gray-600">Displaying products for {categoryName}</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {/* Empty State for No Products (Optional) */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">No Products Available</h2>
          <p className="text-gray-600 mb-6">There are no products available in this category.</p>
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            <span>Browse Other Categories</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
