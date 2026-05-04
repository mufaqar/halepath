import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface Stock {
    id: number;
    name: string;
}

function SearchForm() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Stock[]>([]);

    const stocks: Stock[] = [
        { id: 1, name: "Stock Name 1" },
        { id: 2, name: "Stock Name 2" },
        // Add other stock data
    ];

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        if (event.target.value !== "") {
            const results = stocks.filter((stock) =>
                stock.name.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleAlert = () => {
        if (searchResults.length === 0 && searchTerm !== "") {
            window.alert("Term not found");
        }
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                id="live-search"
                placeholder="Search products..."
                autoComplete="off"
                className="text-sm md:leading-[40px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7  border border-secondary focus:border-primary outline-none rounded-full w-full"
            />

            <div
                id="live-search-results"
                className="absolute z-60 w-full mt-1 bg-white rounded-lg shadow-lg hidden"
            ></div>
        </div>
    );
}

export default SearchForm;
