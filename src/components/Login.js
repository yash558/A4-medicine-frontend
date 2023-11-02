import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import Loading from "./Loading";
import API from "../api";
import { useStateContext } from "../context/StateContext";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { name, setName } = useStateContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API}auth/login/`, {
        email,
        password,
      });

      if (response.data.status === "success") {
        toast.success("Successfully Login!");
        setLoading(false);
        console.log(response.data)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.data.id);
        localStorage.setItem("email", response.data.data.email);
        localStorage.setItem("firstName", response.data.data.firstName);
        setName(response.data.data.firstName)
        localStorage.setItem("lastName", response.data.data.lastName);
        localStorage.setItem("plan", response.data.data.plan);
        localStorage.setItem("subscriptionId", response.data.data.subscription_id);
        setTimeout(() => {
          history("/");
          window.location.reload();
        }, 3000);
      } else {
        setLoading(false);
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center py-2 md:mt-32 pt-72 md:pt-0 bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Loading color="#0058AB" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full flex-1 md:px-20 px-4 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex flex-wrap-reverse md:w-2/3 w-full md:max-w-4xl max-w-full">
            <div className="md:w-3/5 w-full p-5">
              <div className="text-left font-bold">
                <img src={logo} alt="" className="h-8" />
                {/* <span className="text-blue-600">A4Medicine</span> */}
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-[--main-color] mb-2">
                  Sign in to Account
                </h2>
                <div className="border-2 w-10 border-[--main-color] inline-block mb-2"></div>

                <p className="text-gray-400 my-3">or use your email account</p>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                      <FaEnvelope className="text-gray-400 m-2" />
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="bg-gray-100 outline-none border-0 text-sm flex-1"
                      />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center">
                      <MdLockOutline className="text-gray-400 m-2" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="bg-gray-100 border-0 text-sm flex-1"
                      />
                      <button
                        type="button"
                        className="password-toggle-button"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FontAwesomeIcon
                            icon={faEye}
                            className="text-gray-400"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faEyeLowVision}
                            className="text-gray-400"
                          />
                        )}
                      </button>
                    </div>
                    <div className="flex justify-end w-64 mt-2 mb-5">
                      <Link to="/forgotpassword" className="text-sm">
                        Forgot Password?
                      </Link>
                    </div>
                    <button
                      className="border-2 text-xl border-[--main-color] rounded-full px-12  inline-block hover:bg-white font-semi-bold hover:text-[--main-color] bg-[--main-color] text-white"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                {error && <p>{error}</p>}
              </div>
            </div>
            <div className="md:w-2/5 w-full bg-[--main-color] text-white rounded-2xl  py-36 md:px-12 px-4">
              <h2 className="text-3xl font-bold mb-2">Welcome, Colleague!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">
                Provide your personal information and embark on your learning
                journey with us
              </p>
              <Link
                to="/signup"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-white hover:text-blue-700"
              >
                Register
              </Link>
              <p></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
