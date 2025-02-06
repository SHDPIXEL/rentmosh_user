import React from "react";
import { ChevronRight } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa"; // Import the green tickmark icon

const cards = [
  {
    id: 1,
    title: "Discover & Confirm Booking",
    description: "Find what you need, and we’ll make it happen!",
    icon: "https://d3juy0zp6vqec8.cloudfront.net/images/icons/browse_order_icn.svg",
    number: "1",
  },
  {
    id: 2,
    title: "Payment & KYC Verification",
    description: "Confirm rental plans that fit your needs.",
    icon: "https://d3juy0zp6vqec8.cloudfront.net/images/icons/kyc_pick_delivery_slot_icn.svg",
    number: "2",
  },
  {
    id: 3,
    title: "Fast & Reliable Delivery",
    description: "Get your order delivered quickly and hassle-free.",
    icon: "https://d3juy0zp6vqec8.cloudfront.net/images/icons/swift_delivery_icn.svg",
    number: "3",
  },
  {
    id: 4,
    title: "Delivered",
    description: "Get your order delivered quickly and hassle-free.",
    icon: null, // Set to null since we'll use FaCheckCircle instead of an image
    number: "4",
  },
];

const Card = ({ title, description, icon, number }) => {
  return (
    <div className="relative p-4 sm:p-6 w-full sm:w-50 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      {/* Icon */}
      <div className="bg-blue-100 p-3 rounded-full">
        {icon ? (
          <img src={icon} alt="icon" className="w-10 h-10 sm:w-12 sm:h-12" />
        ) : (
          <FaCheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" /> // Use FaCheckCircle for the "Delivered" card
        )}
      </div>
      {/* Title */}
      <h3 className="text-md sm:text-lg font-semibold text-gray-900 mt-4">{title}</h3>
    </div>
  );
};

const CardsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      {/* Responsive Card Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 relative w-full max-w-4xl">
        {cards.map((card, index) => (
          <div key={card.id} className="flex flex-col md:flex-row items-center">
            {/* Display card */}
            <Card {...card} />
            {/* Display horizontal arrow-like line between cards except after the last card */}
            {index < cards.length - 1 && (
              <div className="hidden md:flex items-center">
                <div className="w-12 sm:w-24 h-0.5 bg-gray-300" />
                <ChevronRight className="h-5 w-5 text-gray-300" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
