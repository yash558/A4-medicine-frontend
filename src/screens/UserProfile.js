import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./../components/Loading";
import toast, { Toaster } from "react-hot-toast";
import API from "../api";
import { useStateContext } from "../context/StateContext";

const UserProfile = () => {
  const dropdownRef = useRef(null);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const [planId, setPlanId] = useState("");
  const [plan, setPlan] = useState("");
  const [isDropdownPlanOpen, setIsDropdownPlanOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [userName, setUserName] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const {name, setName} = useStateContext();
  const [formData, setFormData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
  });
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [subscriptionId, setSubscriptionId] = useState("");
  const [email, setEmail] = useState("");

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
        setData(data.data.user);
        setName(data.data.user.firstName);
        setSubscriptionId(data.data.user.subscription_id);
        setPlanId(data.data.user.subscription_id);
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    };
    fetchData();
  }, [id, token]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API}auth/reset-password`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(password),
      });
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Password reset successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API}user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const update = await response.json();
      if (update.status === "success") {
        toast.success("Data updated successfully");
        window.location.reload();
      } else {
        toast.error(update.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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

  const handleConfirm = () => {
    // Logic for handling confirm action
    fetchSubscription();
    setShowNotification(false);
  };

  const handleCancel = () => {
    // Logic for handling cancel action
    setShowNotification(false);
  };

  const fetchSubscription = async () => {
    try {
      const response = await fetch(`${API}subscription/cancel`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const cancelDetail = await response.json();

      if (cancelDetail.status === "success") {
        toast.success("Your Plan is processing in Cancel!");
      } else {
        toast.error(cancelDetail.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ChangeSubscription = async (event) => {
    // Prevent event propagation to parent elements
    event.stopPropagation();
    setLoading(true);

    try {
      const response = await fetch(
        `${API}${
          subscriptionId !== "none"
            ? "subscription/update/checkout"
            : "subscription/new/checkout"
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            item_price_id: plan,
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const updateDetail = await response.json();
      console.log(updateDetail.data);
      const url = updateDetail.data.url;
      if (updateDetail.status === "success") {
        toast.success("Your Plan is processing in update!");
        setLoading(false);
        window.location.href = url;
      } else {
        toast.error(updateDetail.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const plans = ["bronze", "silver", "gold"];

  const handleSelectPlan = (plan) => {
    setPlan(plan);
    setIsDropdownPlanOpen(false);
  };

  const handleSubscriptionCancel = () => {
    setShowNotification(true);
  };

  return (
    <div className="bg-[#E1E9FB] px-auto py-auto pt-48 mt-20">
      <Toaster />
      <div className="flex flex-row items-center justify-center">
        {subscriptionId !== "none" && (
          <button className="bg-[--main-color]  text-xl flex items-center justify-center text-white text-center font-[Poppins] px-5 cursor-pointer py-2 rounded md:ml-4 hover:bg-[#9d9b9a]">
            <Link to="/subscriptionPlan">Subscription</Link>
          </button>
        )}
        <Link to="/userprofile">
        <button className="bg-[--main-color]  text-xl flex items-center justify-center text-white text-center font-[Poppins] px-5 cursor-pointer py-2 rounded md:ml-4 hover:bg-[#F17732]">
          Edit Profile
        </button>
        </Link>
        <Link to="/customersupport">
          <button className="bg-[--main-color]  text-xl flex items-center justify-center text-white text-center font-[Poppins] px-2 cursor-pointer py-2 rounded md:ml-4 hover:bg-[#F17732]">
            Customer Support
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-md rounded flex flex-col w-[90%] md:w-[50%] justify-center items-center p-8 my-20">
          <h1 className="text-4xl text-center font-bold">Edit Profile</h1>
          {loading ? (
            <Loading color="#0058AB" />
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row gap-x-12">
                    <div className="mt-4">
                      <label className="block mb-2 font-medium">
                        FirstName
                      </label>
                      <input
                        type="text"
                        defaultValue={data.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-[250px] p-2  border-black border-2 rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 font-medium">LastName</label>
                      <input
                        type="text"
                        defaultValue={data.lastName}
                        contentEditable="true"
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-[250px] p-2 border-black border-2 rounded"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-x-12">
                    <div className="mt-4">
                      <label className="block mb-2 font-medium">UserName</label>
                      <input
                        type="text"
                        defaultValue={data.username}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-[250px] p-2 disabled:opacity-50  border-black border-2 rounded"
                        disabled
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        defaultValue={data.email}
                        contentEditable="true"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[250px] disabled:opacity-50 p-2 border-black border-2 rounded"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-x-12">
                    <div className="mt-4">
                      <label className="block mb-2 font-medium ">
                        Old Password
                      </label>
                      <input
                        type="password"
                        onChange={(e) =>
                          setPassword({
                            ...password,
                            oldPassword: e.target.value,
                          })
                        }
                        className="w-[250px] p-2 disabled:opacity-50  border-black border-2 rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 font-medium">
                        New Password
                      </label>
                      <input
                        type="password"
                        contentEditable="true"
                        onChange={(e) =>
                          setPassword({
                            ...password,
                            newPassword: e.target.value,
                          })
                        }
                        className="w-[250px] disabled:opacity-50 p-2 border-black border-2 rounded"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center flex-col justify-center">
                    <div>
                      <button
                        className="bg-blue-500 mt-4 mx-4 text-white px-4 py-2 rounded  disabled:opacity-50"
                        disabled={loading}
                        onClick={handleResetPassword}
                      >
                        {loading ? "Sending..." : "Reset Password"}
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex items-center justify-center">
                <div className="relative mt-3">
                  <button
                    type="button"
                    className="items-center px-4 py-4 bg-gray-100 w-64 h-11 flex mb-3 outline-none text-sm leading-5 font-medium rounded-md text-gray-400 focus:outline-none active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                    onClick={() => setIsDropdownPlanOpen(!isDropdownPlanOpen)}
                  >
                    {plan || "Plan"}
                    <svg
                      className={`-mr-1 ml-2 h-5 w-5 ${
                        isDropdownPlanOpen ? "transform rotate-180" : ""
                      } transition-transform duration-200`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M7 10l5-5 5 5H7z" />
                    </svg>
                  </button>
                  {isDropdownPlanOpen && (
                    <div
                      ref={dropdownRef}
                      className="origin-top-right z-40 absolute overflow-y-auto h-40 right-0 mt-2 w-56 rounded-md shadow-lg"
                    >
                      <div className="rounded-md bg-gray-100 shadow-xs">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {plans.map((plan) => (
                            <button
                              key={plan}
                              onClick={() => handleSelectPlan(plan)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                              role="menuitem"
                            >
                              {plan}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="bg-[--main-color] w-full text-xl flex items-center justify-center text-white text-center font-[Poppins] px-5 cursor-pointer py-2  rounded md:ml-4 hover:bg-[#2c2522]"
                  onClick={ChangeSubscription}
                >
                  {subscriptionId !== "none"
                    ? "Change"
                    : "Complete Your Subscription"}
                </button>

                {subscriptionId !== "none" && (
                  <button
                    className="bg-[--main-color] w-[120px] text-xl flex items-center justify-center text-white text-center font-[Poppins] px-5 cursor-pointer py-2  rounded md:ml-4 hover:bg-[#F17732]"
                    onClick={handleSubscriptionCancel}
                  >
                    Cancel
                  </button>
                )}
                {showNotification && (
                  <div className="bg-white border  top-0 fixed z-[1000] rounded-lg p-4 mt-4">
                    <p className="text-gray-800 text-lg mb-2">
                      Are you sure you want to cancel your plan?
                    </p>
                    <div className="flex justify-end">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleConfirm}
                      >
                        Confirm
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
