import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import toast, { Toaster } from "react-hot-toast";
import API from "../api";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${API}auth/send-otp`,
        {
          email: email,
          reason: "forgot-password",
        }
      );

      if (response.data.status === "success") {
        const otpData = response.data;
        setOtp(otpData.otp);
        toast.success("send otp successfully");
        setLoading(false);
        setVisible(true);
      } else {
        toast.error(response.data.message);
        setLoading(false);
        
      }
    } catch (error) {
      toast.error(error.message)
      setLoading(false);
      console.log(error.message);
    }
  };
  const handleOtpSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}auth/forgot-password`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
            otp,
            email,
          }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        toast.success("Successfully Password Change!");
        setOtp("");
        setPassword("");
        setEmail("");
        setLoading(false);
        var url = "/login";
        window.location.href = url;
      } else {
        console.log(data);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      // Handle the error state or display an error message
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Toaster/>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Forgot Your Password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                {visible ? (
                  <div className="mb-4">
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Enter OTP
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="otp"
                          placeholder="OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="my-4">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Enter New Password
                        </label>
                        <div className="mt-1">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {visible ? (
                  <button
                    type="submit"
                    className="border-2 items-center justify-center text-xl border-[--main-color] rounded-full px-12 inline-block hover:bg-white font-semi-bold hover:text-[--main-color] bg-[--main-color] text-white"
                    onClick={handleOtpSubmit}
                  >
                    Set New password
                  </button>
                ) : (
                  <button
                    className="border-2 text-xl border-[--main-color] rounded-full px-12 inline-block hover:bg-white font-semi-bold hover:text-[--main-color] bg-[--main-color] text-white"
                    type="submit"
                  >
                    Otp
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
