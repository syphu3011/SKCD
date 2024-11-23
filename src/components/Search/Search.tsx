// components/SearchBar.tsx
"use client";
import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!query) return;

    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          index: 'skcd-bai-viet', // Thay bằng tên index của bạn
        }),
      });

      const data = await res.json();
      console.log(data)
      setResults(data.hits || []);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border px-4 py-2 rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <div className="mt-4">
        {results.map((result, index) => (
          <div key={index} className="border-b py-2">
            <h3 className="font-bold">{result.title}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
