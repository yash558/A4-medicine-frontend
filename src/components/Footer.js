import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";

const Footer = () => {
  return (
    <footer className="bg-[--main-color] text-center mb-0 mt-1 pb-0 text-white  font-bold dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span className="text-xl">
            Get connected with us on social networks:
          </span>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.facebook.com/a4medicine.co.uk/?locale=en_GB"
            target="_blank"
            rel="noreferrer"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/a4Medicine?s=20"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            target="_blank"
            rel="noreferrer"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            target="_blank"
            rel="noreferrer"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/a4medicine/"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            target="_blank"
            rel="noreferrer"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <Link to="/" onClick={scrollToTop}>
              <img
                src={logo}
                alt=""
                className="mr-3 mb-4 ml-20 md:ml-0 bg-white p-4 rounded-lg w-[50%] sm:w-[70%] md:w-[70%] justify-center items-center"
              />
            </Link>
            <p className="text-xl font-medium">
              A4Medicine is a comprehensive and fully referenced medical
              educational resource designed specifically for primary care
              clinicians worldwide.
            </p>
          </div>

          <div className="">
            <h6 className="mb-4 text-2xl flex justify-center font-semibold uppercase md:justify-start">
              Quick Links
            </h6>
            <p className="mb-4 hover:text[#F17732]">
              <Link
                to="/"
                className="text-[1.1rem] hover:text[#F17732] dark:text-neutral-200"
                onClick={scrollToTop}
              >
                Home
              </Link>
            </p>
            <p className="mb-4 hover:text[#F17732]">
              <Link
                to="/chart"
                className="text-[1.1rem] hover:text[#F17732] dark:text-neutral-200"
                onClick={scrollToTop}
              >
                Medical Topics
              </Link>
            </p>
            <p className="mb-4 hover:text[#F17732]">
              <Link
                to="/webinar"
                className="text-[1.1rem] hover:text[#F17732] dark:text-neutral-200"
                onClick={scrollToTop}
              >
                Webinars
              </Link>
            </p>
            <p>
              <Link
                to="/quiz"
                className="text-[1.1rem] hover:text[#F17732] "
                onClick={scrollToTop}
              >
                AKT Revision
              </Link>
            </p>
          </div>

          <div className="text-white">
            <h6 className="mb-4  text-2xl flex justify-center font-semibold uppercase md:justify-start">
              Services
            </h6>
            <p className="mb-4 hover:text[#F17732]">
              <Link
                to="/demoquiz"
                className="text-[1.1rem] hover:text[#F17732] dark:text-neutral-200"
                onClick={scrollToTop}
              >
                Demo Quiz
              </Link>
            </p>
            <p className="mb-4 hover:text[#F17732]">
              <Link
                to="/pannellist"
                className="text-[1.1rem] hover:text[#F17732] dark:text-neutral-200"
                onClick={scrollToTop}
              >
                Panel Experts
              </Link>
            </p>
            <p className="mb-4 hover:text[#F17732]">
              <Link
                to="/privacy"
                onClick={scrollToTop}
                className="text-[1.1rem] hover:text[#F17732] dark:text-neutral-200"
              >
                Privacy Policy
              </Link>
            </p>
            <p className="hover:text[#F17732]">
              <Link
                to="/visual-guidebook"
                className="text-[1.1rem] hover:text[#F17732] dark:text-neutral-200"
                onClick={scrollToTop}
              >
                Books
              </Link>
            </p>
          </div>

          <div>
            <h6 className="mb-4 text-2xl flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
       
            <p className="mb-4 text-[1.2rem] flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-6 w-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              contact@a4medicine.co.uk
            </p>
    
          
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center text-xl flex flex-row justify-center dark:bg-neutral-700">
        <span className="text-black"> © 2023 Copyright:</span>
        <a
          className="font-semibold text-[--main-color] dark:text-neutral-400"
          href="https://a4medicine.com"
        >
          &nbsp; Twenty First Century Medical Education Ltd T/A A4Medicine
        </a>
      </div>
    </footer>
  );
};

export default Footer;
