import React, { useState, useEffect } from 'react';

export const resultList = ({}) => {
    return (
        <div>

        </div>
    );
};

export const resultItem = ({}) => {
    return (
        <div>

        </div>
    );
};

const results = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: "5 x 2 Bathroom",
  address: "UC university Square, Irvine, CA",
}));

export const Sidebar = () => {
  return (
    <div className="w-[300px] overflow-y-auto bg-gray-100 p-4 border-r border-gray-300">
      <h2 className="text-lg font-semibold mb-4">12 Results</h2>
      <div className="space-y-4">
        {results.map((result) => (
          <SearchResult key={result.id} {...result} />
        ))}
      </div>
    </div>
  );
};

export const SearchResult = ({ title, address }) =>  {
  return (
    <div className="bg-white rounded shadow p-2">
      <img
        src="https://via.placeholder.com/250x140"
        alt="Thumbnail"
        className="rounded mb-2 w-full h-[140px] object-cover"
      />
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-gray-600">{address}</p>
      <button className="mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700">
        Find Bathroom
      </button>
    </div>
  );
};

