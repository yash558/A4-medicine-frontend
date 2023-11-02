import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-[--main-color] mb-4">Error 404</h1>
      <p className="text-lg text-gray-700 mb-8">
        Oops! The page you're looking for could not be found.
      </p>
      <Link
        to="/"
        className="text-[--main-color-1] text-xl text-bold hover:underline focus:outline-none"
      >
        Go back to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
