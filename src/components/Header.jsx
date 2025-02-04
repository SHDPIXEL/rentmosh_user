import { useState } from "react";
import { Heart, ShoppingCart, MapPin, CircleUser } from "lucide-react";
import SearchBar from "./ui/SearchBar";
import Modal from "./ui/CityModal";
import Dropdown from "./ui/DropDown";
import city from "../assets/images/city.jpg";
import { Link } from "react-router-dom";
import WishlistPage from "../pages/WishList";
import LoginModal from "../pages/LoginModal"; // Import the login modal component
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for Login Modal
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
      <div className="flex items-center justify-center px-30 h-16 shadow-sm">
        <div className="flex items-center justify-between gap-37 space-x-10 ">
          <div className="flex items-center space-x-8 ">
            <Link to="/">
              <div className="poppins-bold text-2xl text-gray-600">
                RentMosh
              </div>
            </Link>
            <div className="flex items-center p-2 hover:bg-gray-100 rounded-md">
              <i className="fas fa-map-pin text-black w-5 h-5"></i>
              <div
                className="text-gray-700 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                {selectedCity}
              </div>
            </div>
          </div>
          {/* Center bottom dropdowns */}
          <div className="flex justify-center">
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
          <div className="flex items-center space-x-4 ">
            <div className="hover:bg-gray-100 items-center rounded-md cursor-pointer">
              <SearchBar />
            </div>
            <div className="flex items-center space-x-4">
              <Link to={"/whishlist"} className="hover:bg-gray-100 p-2 rounded-md">
                <Heart className="w-5 h-5 text-gray-700 cursor-pointer " />
              </Link>
              <Link to={"/cart"} className="hover:bg-gray-100 p-2 rounded-md">
                <ShoppingCart className="w-5 h-5 text-gray-700 hover:bg-gray-100 cursor-pointer" />
              </Link>
              <div
                className="flex items-center gap-1 hover:bg-gray-100 rounded-md p-2 cursor-pointer"
                onClick={() => setIsLoginModalOpen(true)} // Open login modal on click
              >
                <i className="fas fa-user-circle text-gray-700 w-5"></i>
                <div>Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cityList={cityList}
        onCitySelect={handleCitySelect}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)} // Close login modal
      />
    </header>
  );
};

export default Header;
