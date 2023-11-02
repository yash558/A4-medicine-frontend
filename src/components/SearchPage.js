import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import scrollToTop from "./scrollToTop";

const SearchResult = ({ result }) => {
  const { setSavedResult } = useStateContext();
  const token = localStorage.getItem("token");
  const currentUrl = () => {
    if (result.type === "webinar") {
      return "/webinar";
    }
    if (result.type === "pannellist") {
      return "/pannellist";
    }
    if (result.type === "section") {
      if (token) {
        return "/chart/details";
      } else {
        return "/subscription";
      }
    }
    if (result.type === "book" && result._id === "64953c90ea5bc673e346683d") {
      return "/book";
    }
    if (result.type === "book" && result._id === "64953bbeea5bc673e346683a") {
      return "/book";
    }
    if (result.type === "section") {
      return "/chart/details";
    }
    if (result.type === "quiz") {
      return "/quiz";
    }
    if (result.type === "book") {
      return "/revision";
    }
    return "";
  };

  const handleClick = () => {
    setSavedResult([]);
    scrollToTop();
  };

  const url = currentUrl();

  return (
    <>
      <li className="my-2 hover:scale-105 text-start transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <Link
          to={token ? `${url}/${result._id}` : `${url}`}
          onClick={handleClick}
          className="text-[--main-color] md:text-2xl text-lg font-bold capitalize flex items-center"
        >
          <span className="rounded-full h-6 w-6  mr-2 flex items-start justify-center">
            <i className="fas fa-circle  text-xs"></i>
          </span>
          {result.name}
        </Link>
      </li>
    </>
  );
};

const SearchPage = () => {
  const { savedResult } = useStateContext();

  return (
    <div className="min-h-screen w-full bg-[#E1E9FB] md:p-12 p-4 md:mt-20 mt-40">
      <div className="flex justify-start w-full items-start mt-28 bg-white p-8 rounded-lg">
        <div className=" ">
          {savedResult?.length > 0 && (
            <ul className="flex item-start justify-start flex-col">
              {savedResult.map((result, id) => (
                <>
                  <SearchResult key={id} result={result} />
                  <div className="bg-gray-300 h-[1px] w-full" />
                </>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
