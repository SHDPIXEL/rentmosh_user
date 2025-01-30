import CategoryCard from "../components/CategoryCard";
import sofa from "../assets/images/sofa.png";
import Banner from "../components/Banner";
import BenefitsCard from "../components/BenefitsCard";
import MarqueeComponent from "../components/ui/Marquee";

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
            description: "Keep track of items you love and purchase them when you're ready"
        },
        {
            icon: "truck",
            title: "Quick Purchase",
            description: "Easily move items to cart and complete your purchase"
        },
        {
            icon: "shield",
            title: "Price Alerts",
            description: "Get notified when your saved items go on sale"
        },
        {
            icon: "package",
            title: "Share Lists",
            description: "Share your wishlist with friends and family"
        }
    ]

    return (
        <div className="px-4 w-full">
            <div className="mb-10 flex flex-col gap-10">
                <Banner />
                <MarqueeComponent />
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
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Why Choose US ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BenefitDetails.map((benefit, index) => (
                        <BenefitsCard key={index} benefit={benefit} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Home;
