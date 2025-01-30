import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import sofa from "../assets/images/sofa.png"

const CategoryPage = () => {
    const { categoryName } = useParams();

    const products = [{
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
        id: 1,
        title: "Product Name",
        price: 299.99,
        discount: 15,
        rating: 4.5,
        reviews: 128,
        images: [sofa, sofa, sofa],
        offers: "Free Delivery"
    }];

    return (<>
        <div className="p-8">
            <h1 className="text-4xl capitalize font-bold text-gray-800">{categoryName}</h1>
            <p className="text-gray-600 capitalize">Displaying products for {categoryName}</p>
        </div>

        <div className="grid grid-cols-3 space-y-10">
            {
                products.map((product, index) => (
                    <ProductCard product={product} />
                ))
            }
        </div>

    </>
    );
};

export default CategoryPage;
