import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaEnvelope, FaUser, FaUserFriends } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "../context/StateContext";
import Loading from "./Loading";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [professionalNumber, setProfessionalNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const [plan, setPlan] = useState(null);
  const [autoCollection, setAutoCollection] = useState(null);

  const [isDropdownPlanOpen, setIsDropdownPlanOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [isDropdownAutoCollectionOpen, setIsDropdownAutoCollectionOpen] =
    useState(false);

  const { currentPlan, setCurrentPlan } = useStateContext();

  const plans = ["Free", "bronze", "silver", "gold"];
  const AutoCollection = ["on", "off"];

  const handleSelectPlan = (plan) => {
    setPlan(plan);
    setCurrentPlan(plan);
    setIsDropdownPlanOpen(false);
  };
  const handleSelectAutoCollection = (plan) => {
    setAutoCollection(plan);
    setIsDropdownAutoCollectionOpen(false);
  };
  const handlePhoneNumberChange = (value) => {
    setProfessionalNumber("+" + value);
  };

  const handleVerificationCodeChange = (value) => {
    setOtp(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://backend.a4medicine.com/api/v1/auth/send-otp/",
        {
          email: email,
          reason: "signup",
        }
      );

      if (response.data.status === "success") {
        const otpData = response.data;
        setOtp(otpData.otp);
        toast.success("otp send successfully!");
        setLoading(false);
        setVisible(true);
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
      setLoading(false);
    }
  };
  console.log(professionalNumber);
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://backend.a4medicine.com/api/v1/auth/signup/",
        {
          username,
          firstName,
          lastName,
          email,
          password,
          autoCollection,
          plan,
          otp,
        }
      );

      if (response.data.status === "success") {
        setLoading(false);
        toast.success("Successfully SignUp");
        var url = response.data.data.checkoutLink;
        window.location.href = url;
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center h-full justify-center py-24 md:mt-32 mt-44 bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Loading color="#0058AB" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-[100%] flex-1 md:px-20 px-4 text-center">
          <div className="bg-white md:flex-row flex-col rounded-2xl shadow-2xl flex md:w-4/5 w-full md:max-w-4xl max-w-full">
            <div className="md:w-4/5 w-full bg-[--main-color] text-white rounded-2xl  py-36 md:px-12 px-4">
              <h2 className="text-3xl font-bold mb-2">Welcome, Colleague!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">
                Provide your personal information and embark on your learning
                journey with us
              </p>
              <Link
                to="/login"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-white hover:text-blue-700"
              >
                Sign In
              </Link>
              <p></p>
            </div>

            <div className="w-full p-5">
              <div className="text-left font-bold">
                <img src={logo} alt="" className="h-8 flex flex-auto" />
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-[#010767] mb-2">
                  Register for an account
                </h2>
                <div className="border-2 w-10 border-[#010767] inline-block mb-2"></div>

                <p className="text-black mb-3">
                  Fill in the details and enjoy your new journey
                </p>
                <form onSubmit={handleSubmit} method="post">
                  <div className="">
                    <div className="flex md:flex-row flex-col md:gap-12 gap-8">
                      <div className="flex flex-col justify-start items-start">
                        <label className="text-bold text-lg mt-2">
                          Username*
                        </label>
                        <div className="bg-gray-100 md:w-64 w-full p-2 flex items-center ">
                          <FaUser className="text-gray-400 m-2" />
                          <input
                            type="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Username"
                            className="bg-gray-100 outline-none border-0 text-sm text-black flex-1"
                            required
                          />
                        </div>
                        <label className="text-bold text-lg mt-2">
                          FirstName*
                        </label>
                        <div className="bg-gray-100 md:w-64 w-full p-2 flex items-center ">
                          <FaUser className="text-gray-400 m-2" />
                          <input
                            type="firstname"
                            name="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="bg-gray-100 outline-none border-0 text-sm flex-1"
                            required
                          />
                        </div>
                        <label className="text-bold text-lg mt-2">
                          LastName*
                        </label>
                        <div className="bg-gray-100 md:w-64 w-full p-2 flex items-center">
                          <FaUser className="text-gray-400 m-2" />
                          <input
                            type="lastname"
                            name="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="bg-gray-100 outline-none border-0 text-sm flex-1"
                            required
                          />
                        </div>
                        <label className="text-bold text-lg mt-2">Email*</label>
                        <div className="bg-gray-100 md:w-64 w-full p-2 flex items-center md:mb-3 mb-0">
                          <FaEnvelope className="text-gray-400 m-2" />
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="bg-gray-100 outline-none border-0 text-sm flex-1"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex item-start justify-start flex-col text-start">
                        {/* <div className=" flex items-start text-start flex-col">
                          <label className="text-bold text-lg mt-2">
                            Phone No*
                          </label>

                          <PhoneInput
                            country={"uk"}
                            value={professionalNumber}
                            onChange={handlePhoneNumberChange}
                            inputStyle={{ width: "250px", height: "45px" }}
                            required
                          />
                        </div> */}
                        <label className="text-bold text-lg mt-2">
                          Password*
                        </label>
                        <div className="bg-gray-100 md:w-64 w-full p-2 flex items-center">
                          <MdLockOutline className="text-gray-400 m-2" />
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="bg-gray-100 border-0 text-sm flex-1"
                            required
                          />
                        </div>
                        {password.length < 8 && password.length > 0 && (
                          <div style={{ color: "red" }}>
                            Password should be at least 8 digits long.
                          </div>
                        )}
                        <label className="text-bold text-lg mt-2">Plan*</label>
                        <div className="relative">
                          <button
                            type="button"
                            className=" items-center px-4 py-4 bg-gray-100   md:w-64 w-full h-11  flex mb-3 outline-none text-sm leading-5 font-medium rounded-md  text-gray-400 focus:outline-none  active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                            onClick={() =>
                              setIsDropdownPlanOpen(!isDropdownPlanOpen)
                            }
                          >
                            <FaUserFriends className="text-gray-400 mr-5" />
                            {currentPlan || plan || "Plan"}
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
                            <div className="origin-top-right z-40 absolute overflow-y-auto h-40 right-0 mt-2 w-56 rounded-md shadow-lg">
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
                                      onChange={(e) => setPlan(e.target.key)}
                                    >
                                      {plan}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <label className="text-bold text-lg mt-2">
                          AutoRenewal*
                        </label>
                        <div className="relative">
                          <button
                            type="button"
                            className=" items-center px-4 py-2 bg-gray-100   md:w-64 w-full h-11 flex mb-3 outline-none text-sm leading-5 font-medium rounded-md  text-gray-400 focus:outline-none  active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                            onClick={() =>
                              setIsDropdownAutoCollectionOpen(
                                !isDropdownAutoCollectionOpen
                              )
                            }
                          >
                            <FaUserFriends className="text-gray-400 mr-5" />
                            {autoCollection || "Choose autorenewal"}
                            <svg
                              className={`-mr-1 ml-2 h-10 w-5 ${
                                isDropdownAutoCollectionOpen
                                  ? "transform rotate-180"
                                  : ""
                              } transition-transform duration-200`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" d="M7 10l5-5 5 5H7z" />
                            </svg>
                          </button>
                          {isDropdownAutoCollectionOpen && (
                            <div className="origin-top-right z-30 absolute h-20 right-0 mt-2 w-56 rounded-md shadow-lg">
                              <div className="rounded-md bg-gray-100 shadow-xs">
                                <div
                                  className="py-1"
                                  role="menu"
                                  aria-orientation="vertical"
                                  aria-labelledby="options-menu"
                                >
                                  {AutoCollection.map((auto) => (
                                    <button
                                      key={auto}
                                      onClick={() =>
                                        handleSelectAutoCollection(auto)
                                      }
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                      role="menuitem"
                                      onChange={(e) =>
                                        setAutoCollection(e.target.key)
                                      }
                                    >
                                      {auto}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex md:ml-40 ml-2 items-center text-center justify-start">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        required
                      />
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm leading-5 text-gray-900"
                      >
                        <Link to="/privacy">
                          Privacy Policy and Terms & Conditions
                        </Link>
                      </label>
                    </div>
                    {visible ? (
                      <div className="my-4">
                        <h2 className="text-black text-center text-2xl my-2">
                          Enter OTP
                        </h2>
                        <OtpInput
                          value={otp}
                          onChange={handleVerificationCodeChange}
                          OTPLength={6}
                          otpType="number"
                          inputStyle={{ border: "#000000" }}
                          autoFocus
                          className="flex item-center justify-center"
                          containerStyle={{ border: "#000000" }}
                          required
                        ></OtpInput>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    {visible ? (
                      <>
                        <button
                          type="submit"
                          className="border-2 text-xl border-[--main-color] rounded-full px-12 inline-block hover:bg-white font-semi-bold hover:text-[--main-color] bg-[--main-color] text-white"
                          onClick={handleOtpSubmit}
                        >
                          Register
                        </button>
                        <button
                          className="border-2 mx-6 text-xl border-[--main-color] rounded-full px-12 inline-block hover:bg-white font-semi-bold hover:text-[--main-color] bg-[--main-color] text-white"
                          type="submit"
                        >
                          Resend Otp
                        </button>
                      </>
                    ) : (
                      <button
                        className="border-2 mt-4 text-xl border-[--main-color] rounded-full px-12 inline-block hover:bg-white font-semi-bold hover:text-[--main-color] bg-[--main-color] text-white"
                        type="submit"
                      >
                        Send Otp
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
