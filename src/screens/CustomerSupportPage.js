import React from "react";
import { Link } from "react-router-dom";
const CustomerSupportPage = () => {
  const supportEmail = "info@example.com";
  const supportPhoneNumber = "+44-7908434147";
  const subcriptionId = localStorage.getItem("subscriptionId");

  return (
    <div className="flex flex-col items-center justify-center h-full py-48 mt-20 bg-[#E1E9FB]">
          <div className="flex flex-row items-center justify-center pb-20">
          {
          subcriptionId !== "none" &&

        <button className="bg-[--main-color]  text-xl flex items-center justify-center text-white text-center font-[Poppins] px-5 cursor-pointer py-2  rounded md:ml-4 hover:bg-[#9d9b9a]">
          <Link to="/subscriptionPlan">Subscription</Link>
        </button>
        }
        <button className="bg-[--main-color]  text-xl flex items-center justify-center text-white text-center font-[Poppins] px-5 cursor-pointer py-2  rounded md:ml-4 hover:bg-[#F17732]">
          <Link to="/userprofile">Edit Profile</Link>
        </button>      
        <button className="bg-[--main-color]  text-xl flex items-center justify-center text-white text-center font-[Poppins] px-2 cursor-pointer py-2  rounded md:ml-4 hover:bg-[#F17732]">
          <Link to="/customersupport">Customer Support</Link>
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-6">Customer Support</h1>
      <div className="bg-white p-12 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <a
            href={`mailto:${supportEmail}`}
            className="text-gray-700 hover:text-blue-500 text-2xl"
          >
            {supportEmail}
          </a>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <a
            href={`tel:${supportPhoneNumber}`}
            className="text-gray-700 hover:text-blue-500 text-2xl"
          >
            {supportPhoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportPage;
