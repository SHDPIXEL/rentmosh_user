import CategoryCard from "../components/CategoryCard";
import sofa from "../assets/images/sofa.png";
import Banner from "../components/Banner";
import BenefitsCard from "../components/BenefitsCard";
import OffersCard from "../components/OffersCard";
import MarqueeComponent from "../components/ui/Marquee";
import Testimonial from "../components/Testimonial";
import StepstoBook from "../components/StepstoBook";
import FAQ from "../components/FAQ";
const Home = () => {
  const categoryDetail = [
    { title: "Sofa", image: sofa, bgColor: "bg-blue-400" },
    { title: "Chair", image: sofa, bgColor: "bg-red-400" },
    { title: "Table", image: sofa, bgColor: "bg-green-400" },
    { title: "Bed", image: sofa, bgColor: "bg-yellow-400" },
    { title: "Shelf", image: sofa, bgColor: "bg-purple-400" },
    { title: "Lamp", image: sofa, bgColor: "bg-pink-400" },
    { title: "TV Stand", image: sofa, bgColor: "bg-indigo-400" },
  ];

  const BenefitDetails = [
    {
      icon: "clock",
      title: "Save for Later",
      description:
        "Keep track of items you love and purchase them when you're ready",
    },
    {
      icon: "truck",
      title: "Quick Purchase",
      description: "Easily move items to cart and complete your purchase",
    },
    {
      icon: "shield",
      title: "Price Alerts",
      description: "Get notified when your saved items go on sale",
    },
    {
      icon: "package",
      title: "Share Lists",
      description: "Share your wishlist with friends and family",
    },
  ];

  const Offerdetails = [
    {
      icon: "gift",
      name: "Special Rewards",
      description: "Earn reward points on every rental and gift.",
      title: "Flat ₹100 OFF",
      code: "RENT100",
      bullets: "Get ₹100 off on your first rental order!",
    },
    {
      icon: "percent",
      name: "Limited-Time Offer",
      description: "Exclusive discounts available for a short period.",
      title: "Save 30% Today",
      code: "LIMIT30",
      bullets: "Hurry! Offer valid only for the next 24 hours.",
    },
    {
      icon: "truck",
      name: "Free Express Delivery",
      description: "Enjoy fast and free delivery on selected items.",
      title: "Zero Delivery Charges",
      code: "FREESHIP",
      bullets: "Valid for orders above ₹500. No extra charges!",
    },
    {
      icon: "shield",
      name: "Extended Warranty",
      description: "Get an extended warranty on selected products.",
      title: "Extra 6 Months Warranty",
      code: "WARRANTY6",
      bullets: "Peace of mind with additional warranty.",
    },
  ];

  return (
    <div className="px-4 w-full">
      <div className="mb-10 mt-5 flex flex-col gap-5">
        <MarqueeComponent />
        <Banner />
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="inline-flex space-x-8">
          {categoryDetail.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              bgColor={category.bgColor}
            />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Why Choose Us ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BenefitDetails.map((benefit, index) => (
            <BenefitsCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Offerdetails.map((offer, index) => (
            <OffersCard key={index} offer={offer} bgColor={offer.bgColor} />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Testimonials
        </h2>
        <div className="w-full mx-auto">
          {/* Testimonial Component */}
          <Testimonial />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Your Next Rental Is Just 4 Steps Away!
        </h2>
        <div className="w-full max-w-7xl mx-auto">
          <StepstoBook />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="w-full max-w-7xl mx-auto">
          <FAQ />
        </div>
      </div>
    </div>
  );
};
export default Home;
