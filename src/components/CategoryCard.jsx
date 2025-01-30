import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, image, bgColor = "bg-indigo-600" }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/category/${title.toLowerCase()}`);
    };

    return (
        <div
            onClick={handleClick} 
            className={`group relative flex-shrink-0 w-48 h-52 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg ${bgColor} cursor-pointer`}
        >
            {/* Title Section */}
            <div className="absolute top-0 left-0 p-4 z-10">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>

            {/* Image Container */}
            <div className="absolute bottom-0 w-full h-40 bg-white rounded-t-2xl p-3 transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full flex items-center justify-center">
                    <img 
                        src={image} 
                        alt={title} 
                        className="max-w-full max-h-full object-contain" 
                    />
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
