import { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className={`relative flex flex-grow items-center w-96 h-10 rounded-md border transition-all duration-200 ${
      isFocused ? 'border-gray-400 shadow-sm' : 'border-gray-200'
    }`}>
      <div className="flex items-center justify-center w-10 h-full pointer-events-none">
        <Search className="w-4 h-4 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search Furniture..."
        className="w-full h-full px-2 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
      />
      {searchQuery && (
        <button
          onClick={handleClear}
          className="flex items-center justify-center w-10 h-full hover:text-gray-600"
        >
          <X className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;