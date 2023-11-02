// src/components/NotificationPopup.js
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useStateContext } from "../context/StateContext";

const NotificationPopup = () => {
  const { show, setShow } = useStateContext();
  const handleClose = () => {
    // Set the flag to indicate the notification has been cancelled
    localStorage.setItem("notificationCancelled", "false");
    setShow(false);
  };
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-opacity-75 bg-gray-900">
      <div className="bg-white w-[90%] md:w-[60%] md:h-full h-[600px] overflow-y-auto md:overflow-y-hidden p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            Notification
          </h2>
          <button
            className="bg-[--main-color] h-10 w-10 relative mb-4"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faClose} className="text-2xl text-white" />
          </button>
        </div>
        <p className="text-gray-800 text-lg  leading-relaxed">
          Dear Valued Member, <br />
          We are thrilled to introduce our newly updated website, designed to
          enhance your browsing experience and provide you with even more
          valuable content. As we transition to this new platform, we apologize
          for any inconvenience you may have faced while accessing your account.
          An e-mail is also being sent to you.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed">
          Regain Access with a Free Trial! If you are an existing member and
          experiencing difficulties accessing your account, we have a solution
          for you. We invite you to take a <b>FREE TRIAL</b> using the{" "}
          <b>SAME EMAIL ID</b> as before. Simply sign up for the trial, and we
          will extend your membership based on your existing account without
          incurring any extra charges.
        </p>
        <h3 className="text-xl font-bold mt-4">How to Proceed:</h3>
        <ol className="list-decimal list-inside text-gray-800 leading-relaxed pl-6 mt-2">
          <li>
            1. Click on the "Start Free Trial" button on the registration page
          </li>
          <li>
            2. Enter the same email ID associated with your previous account and
            complete the Chargebee step to update payment details
          </li>
          <li>
            3. Enjoy uninterrupted access to our platform with your membership!
            We will extend the membership before the free trial ends based on
            your previous membership.
          </li>
        </ol>
        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          Thank you for your understanding, and we value your continued support
          as we work to improve our services. If you encounter any issues or
          have any questions, please don't hesitate to reach out to our customer
          support team at <b> contact@a4medicine.co.uk</b>
        </p>
        <div className="mt-6 flex justify-end"></div>
      </div>
    </div>
  );
};

export default NotificationPopup;
