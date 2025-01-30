import { useState } from "react";
import { Heart, ShoppingCart, MapPin, CircleUser } from "lucide-react";
import SearchBar from "./ui/SearchBar";
import Modal from "./ui/CityModal";
import Dropdown from "./ui/DropDown";
import city from "../assets/images/city.jpg"
import { Link } from "react-router-dom";
import WishlistPage from "../pages/WishList";

const Header = () => {
    const [selectedCity, setSelectedCity] = useState("Mumbai");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({});

    const cityList = [
        { name: "Mumbai", img: city },
        { name: "Vadodara", img: city },
        { name: "Udaipur", img: city },
        { name: "Pune", img: city },
        { name: "Gandhinagar", img: city },
    ];

    const dropdownData = [
        { label: "Furniture", items: ["Bed", "Table", "Chair"] },
        { label: "Appliance", items: ["Washing Machine", "Fridge", "Microwave"] },
        { label: "Electronics", items: ["Mobile", "Laptop", "Headphones"] },
        { label: "Books", items: ["Fiction", "Non-Fiction", "Comics"] },
    ];

    const handleCitySelect = (city) => {
        setSelectedCity(city.name);
        setIsModalOpen(false);
    };

    const [selectedCategories, setSelectedCategories] = useState({});

    const handleCategorySelect = (category, item) => {
        setSelectedCategories((prev) => ({
            ...prev,
            [category]: item,
        }));
        console.log(`Selected category item: ${item}`);
    };


    return (
        <header>
            <div className="flex items-center justify-between space-x-10 px-24 h-16">
                <div className="flex items-center space-x-8">
                    <Link to="/">
                        <div className="poppins-bold text-2xl text-gray-600">RentMosh</div>
                    </Link>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                        <MapPin className="w-5 h-5 text-gray-700" />
                        <div
                            className="text-gray-700 cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            {selectedCity}
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-10">
                    <SearchBar />
                    <div className="flex items-center space-x-5">
                        <Link to={"/whishlist"}>
                            <Heart className="w-5 h-5 text-gray-700 cursor-pointer " />
                        </Link>
                        <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer" />
                        <div className="flex items-center gap-2 hover:bg-gray-100 rounded-md p-2 cursor-pointer">
                            <CircleUser className="w-5 h-5 text-gray-700 rounded-md" />
                            <div>Login</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Center bottom dropdowns */}
            <div className="flex justify-center space-x-5 mt-8">
                {dropdownData.map((category, index) => (
                    <Dropdown
                        key={index}
                        options={category.items}
                        selectedOption={selectedCategories[category.label] || null}
                        onSelect={(item) => handleCategorySelect(category.label, item)}
                        label={category.label}
                    />
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cityList={cityList}
                onCitySelect={handleCitySelect}
            />
        </header>
    );
};

export default Header;
