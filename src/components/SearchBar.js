import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const SearchBar = ({ onSearch, searchRef }) => {
  const { results, setResults } = useStateContext();
  const { savedResult, setSavedResult } = useStateContext();
  const {dis, setDis} = useStateContext();
  const handleGoButtonClick = () => {
    setSavedResult(results);
    setResults([]);
  };
  return (
    <div className="flex gap-x-4">
      <input
        ref={searchRef}
        type="text"
        placeholder="Search..."
        onChange={onSearch}
        className="px-4 py-3 border border-gray-300 w-64 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Link to="/search" onClick={handleGoButtonClick}>
        <button
          className={`${
            dis ? "bg-gray-500" : "bg-green-400"
          } px-4 h-12 text-white font-bold`}
          disabled={dis}
        >
          Go
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
