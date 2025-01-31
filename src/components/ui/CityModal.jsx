const Modal = ({ isOpen, onClose, cityList, onCitySelect }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#00000099] flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-lg font-bold text-gray-700 mb-4">Select a City</div>
                <div className="space-y-4 grid grid-cols-2 gap-x-10">
                    {cityList.map((city, index) => (
                        <div 
                        key={index} 
                        onClick={() => onCitySelect(city)}
                        className="flex items-center gap-4 hover:bg-gray-100 p-2">
                            <img
                                src={city.img}
                                alt={city.name}
                                className="w-16 h-16 aspect-3/2 rounded-md cursor-pointer"
                            />
                            <div
                                className="text-gray-700 cursor-pointer"
                            >
                                {city.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-right">
                    <button
                        className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
