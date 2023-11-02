import React, { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import API from "../api";

const SubscriptionPlan = () => {
  const id = localStorage.getItem("id");
  const [subscription, setSubscription] = useState("");
  const [subscriptionItems, setSubscriptionItems] = useState("");

  const token = localStorage.getItem("token");
  const [isDropdownPlanOpen, setIsDropdownPlanOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    // Fetch initial data from the API and populate the form fields
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API}user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setSubscription(data.data.subscription); 
      setSubscriptionItems(data.data.subscription?.subscription_items[0]);
      setLoading(false);
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };



 

  const trialStart = subscription.current_term_start; // UNIX timestamp value
  const trialEnd = subscription.current_term_end; // UNIX timestamp value
  const changeDate = subscription.next_billing_at; // UNIX timestamp value
  const cancelAt = subscription.cancelled_at;
  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toDateString(); // Convert date to a human-readable format
  };

  const StartDate = convertTimestampToDate(trialStart);
  const EndDate = convertTimestampToDate(trialEnd);
  const ChangeDate = convertTimestampToDate(changeDate);
  const CancelAt = convertTimestampToDate(cancelAt);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownPlanOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

 

 



  const [initialform, setInitialForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    // Fetch initial data from the API and populate the form fields
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API}user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setInitialForm(data.data.user);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="h-full flex flex-col justify-center bg-[#E1E9FB] items-center pt-48 mt-16">
      <Toaster />
      <div className="flex flex-row items-center justify-center">
        <button className="bg-[--main-color]  text-xl flex items-center justify-center text-white text-center font-[Poppins] px-5 cursor-pointer py-2  rounded md:ml-4 hover:bg-[#9d9b9a]">
          <Link to="/subscriptionPlan">Subscription</Link>
        </button>
        <button className="bg-[--main-color]  text-xl flex items-center justify-center text-white text-center font-[Poppins] px-5 cursor-pointer py-2  rounded md:ml-4 hover:bg-[#F17732]">
          <Link to="/userprofile">Edit Profile</Link>
        </button>
        <button className="bg-[--main-color]  text-xl flex items-center justify-center text-white text-center font-[Poppins] px-2 cursor-pointer py-2  rounded md:ml-4 hover:bg-[#F17732]">
          <Link to="/customersupport">Customer Support</Link>
        </button>
      </div>
      <div className="bg-white shadow-lg h-full p-8 my-20">
        <h1 className="text-2xl font-semibold text-center">
          Subscription Plan
        </h1>
        {loading ? (
          <>
            <Loading color="#0058AB" />
          </>
        ) : (
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-6 w-[900px] inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-x divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="">
                        <th
                          scope="col"
                          className="px-12 py-3 text-xl font-bold text-start text-gray-500 uppercase "
                        >
                          Info
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3 text-xl font-bold text-start text-gray-500 uppercase "
                        >
                          User Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-start  divide-x divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          Subscription Id
                        </td>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          <p className="text-xl text-bold text-black">
                            {subscription.id}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          Subscription Plan
                        </td>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          <p className="text-xl text-bold text-black">
                            {subscriptionItems.item_price_id}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          Status
                        </td>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          {subscription.status}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          Subscription Start Date
                        </td>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          {StartDate}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          Subscription End Date
                        </td>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          {EndDate}
                        </td>
                      </tr>
                      {CancelAt !== "Invalid Date" ? (
                        <tr>
                          <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                            Cancel At
                          </td>
                          <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                            {CancelAt}
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                            Next Billing Date
                          </td>
                          <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                            {ChangeDate}
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          Subscription Price
                        </td>
                        <td className="px-6 py-4 text-xl text-gray-800 whitespace-nowrap">
                          {subscription.currency_code}{" "}
                          {subscriptionItems.unit_price/100} per month
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
         
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPlan;
