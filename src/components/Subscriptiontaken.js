import React from "react";
import Subscription from "./Subscription";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import Button from "./Button";

const SubscriptionTaken = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-full bg-gray-100 pt-48 pb-20">
      <div className=" mx-auto bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
        Please note that this content is exclusively available to members. To gain access, kindly select a subscription plan now.
        </h1>
        <Subscription />
        <div className="flex justify-center mt-6 space-x-4">
        <div className="flex gap-6">
                <button className="bg-transparent text-[--main-color] border-2 rounded-md text-center ml-10 hover:text-[#F17732] hover:border-[#F17732] h-[3rem] w-[7rem] border-[#3C3CAF] border-spacing-2">
                  <Link
                    to="/login"
                    className="text-xl font-bold"
                    onClick={scrollToTop}
                  >
                    LOGIN
                  </Link>
                </button>
                <Button>
                  <Link
                    to="/signup"
                    className="font-sans"
                    onClick={scrollToTop}
                  >
                    REGISTER
                  </Link>
                </Button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionTaken;
