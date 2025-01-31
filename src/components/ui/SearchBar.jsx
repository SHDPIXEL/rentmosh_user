import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);

  // Close search bar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Search Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-md hover:bg-gray-300 transition"
      >
        <Search className="w-5 h-5 text-gray-600" />
      </button>

      {/* Full-width Search Bar */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#00000099]  flex items-center justify-center z-50">
          <div
            ref={inputRef}
            className="fixed top-[calc(50%-90px)] left-1/2 w-[45%] transform -translate-x-1/2 bg-white border border-gray-300 rounded-2xl shadow-lg p-3"
          >
            <div className="flex items-center">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Furniture..."
                className="w-full bg-transparent text-gray-900 placeholder-gray-400  outline-none text-lg"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-md text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
