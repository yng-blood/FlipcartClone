import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-wrap items-center justify-center w-full'>
            <input
                type="text"
                placeholder="Search for Products , Brands and More"
                value={searchTerm}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[80%]
                bg-white"
            />
        </form>
    );
}

export default SearchBar;
