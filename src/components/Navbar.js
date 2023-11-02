import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import SearchBar from "./SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import API from "../api";

const Navbar = () => {
  const searchRef = useRef();
  const firstName = localStorage.getItem("firstName");

  let Links = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "MEDICAL TOPICS",
      link: "/chart",
    },
    {
      name: "REVISION",
      link: "/quiz",
    },
    {
      name: "BOOKS",
      link: "",
      submenu: true,
      subLinks: [
        { name: "Visual Guidebook", link: "/book/64953bbeea5bc673e346683a" },
        {
          name: "Essentials of Cancer Medicine",
          link: "/book/64953c90ea5bc673e346683d",
        },
      ],
    },
    {
      name: "WEBINARS",
      link: "/webinar/past",
      submenu: true,
      subLinks: [
        { name: "Future Webinar", link: "/webinar/future" },
        {
          name: "Past Webinar",
          link: "/webinar/past",
        },
      ],
    },
    {
      name: "PANELISTS",
      link: "/pannellist",
    },
  ];

  let [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const token = localStorage.getItem("token");

  const [selectsearch, setSelectSearch] = useState("");
  const { results, setResults } = useStateContext();
  const { dis, setDis } = useStateContext();
  const { name, setName } = useStateContext();

  const handleSearch = async (e) => {
    if (!e.currentTarget.value) {
      return setResults([]);
    }
    try {
      // Make API request to fetch search results
      const response = await fetch(`${API}/search/?search=${e.target.value}`);
      const dat = await response.json();
      if (dat.status === "success" && e.target.value.length > 3) {
        console.log(dat.data.searchResults);
        setResults(dat.data.searchResults);
      }
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  if (results.length > 3) {
    setDis(false);
  } else {
    setDis(true);
  }

  const logout = () => {
    toast.success("you are now logged out of A4Medicine!");

    localStorage.removeItem("token");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const currentUrl = (result) => {
    let links = "";
    if (result.type === "webinar") {
      links = "/webinar";
    }
    if (result.type === "pannellist") {
      links = "/pannellist";
    }
    if (result.type === "section") {
      if (token) {
        links = "/chart/details";
      } else {
        links = "/subscription";
      }
    }
    if (result.type === "book" && result._id === "64953c90ea5bc673e346683d") {
      links = "/book";
    }
    if (result.type === "book" && result._id === "64953bbeea5bc673e346683a") {
      links = "/book";
    }
    if (result.type === "chart") {
      links = "/chart";
    }
    if (result.type === "quiz") {
      links = "/quiz";
    }

    return links;
  };

  const { savedResult, setSavedResult } = useStateContext();

  const handleGoButtonClick = () => {
    setSavedResult(results);
    setResults([]);
  };
  return (
    <>
      <div
        style={{ display: visible ? "visible" : "none" }}
        className="left-0 md:px-12 px-2  right-0 bg-[#213555] text-white top-0 z-[999] space-x-4 w-full h-[100px] md:h-[70px] fixed flex justify-between items-center flex-col md:flex-row bg-gradient-to-b "
      >
        <Toaster />
        <div className="flex flex-wrap items-center justify-center">
          <h1 className="md:text-xl text-[16px] font-semibold md:text-left text-center flex justify-start items-center md:mx-4 mx-0 my-1">
            {" "}
            <i className="fas fa-plus text-[#EFFF10] text-3xl animate-spin-slow z-10"></i>
            &nbsp; "Empower Your RCGP AKT Journey: Master the MCQs with Us! 🚀"
            &nbsp;
            <i className="fas fa-plus text-[#EFFF10] text-3xl animate-spin-slow z-10 "></i>
          </h1>
          <div className="flex gap-2">
            <button className="bg-white text-[#010767] font-bold p-2">
              <Link to="/quiz" onClick={scrollToTop}>
                Try Now
              </Link>
              !
            </button>
          </div>
        </div>
        <div className="md:flex hidden">
          {token ? (
            <div className="flex gap-6">
              <Link
                to="/userprofile"
                className="text-xl font-bold"
                onClick={scrollToTop}
              >
                <button className="bg-transparent border-white border-2 rounded-md text-center ml-10 hover:text-[#F17732] hover:border-[#F17732] h-[3rem] w-[7rem] mt-1 px-6 py-2  border-spacing-2">
                  {firstName}
                </button>
              </Link>
              <Link onClick={logout} className="font-sans">
                <Button>Logout</Button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-6">
              <Link
                to="/login"
                className="text-xl font-bold"
                onClick={scrollToTop}
              >
                <button className="bg-transparent border-white border-2 rounded-md text-center ml-10 hover:text-[#F17732] hover:border-[#F17732] h-[3rem] w-[7rem] mt-1 px-6 py-2  border-spacing-2">
                  LOGIN
                </button>
              </Link>
              <Button>
                <Link to="/signup" className="font-sans" onClick={scrollToTop}>
                  REGISTER
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      <div
        className={`shadow-md w-full sm:top-0 z-50 fixed  ${
          visible ? "mt-[100px]" : "mt-[0px]"
        }   ${visible ? "md:mt-[65px]" : "md:mt-[0px]"} bg-white left-0`}
      >
        <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <Link to="/" onClick={scrollToTop}>
              <span className="md:text-3xl text-lg text-indigo mr-1 pt-2">
                <img
                  src={logo}
                  alt=""
                  className="md:h-[50px] h-[40px] relative "
                />
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-2">
            <div className="w-full">
              <SearchBar
                className="md:flex hidden"
                onSearch={handleSearch}
                searchRef={searchRef}
                disable={dis}
              />

              {/* Display the search results */}

              {results?.length > 0 ? (
                <ul className="absolute bg-white max-h-64 mt-2 p-2 rounded shadow-md overflow-y-auto">
                  {results.map((result, id) => {
                    let url = currentUrl(result);
                    return (
                      <Link
                        to="/search"
                        onClick={() => {
                          searchRef.current.value = result.name;
                          handleGoButtonClick();
                          setSelectSearch(result.name);
                          scrollToTop();
                        }}
                        key={id}
                      >
                        <li>{result.name}</li>
                      </Link>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </div>
          <div
            className="text-3xl absolute right-8 md:top-8 top-6 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static backdrop-filter backdrop-blur-lg bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "right-20" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => {
              return (
                <li
                  key={link.name}
                  className="md:ml-8 text-xl md:my-0 my-7 group cursor-pointer"
                  onClick={scrollToTop}
                >
                  <a
                    href={link.link}
                    className="text-[--main-color] font-[600] hover:text-[#F17732] flex duration-500 "
                  >
                    {link.name}{" "}
                    {link.submenu && (
                      <div className="">
                        <div className="absolute top-6 left-96 hidden group-hover:block hover:block">
                          <div className="py-3 mt-8">
                            <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                          </div>
                          <div className="bg-white p-5  shadow-2xl relative">
                            {link.subLinks.map((mySubLinks) => {
                              return (
                                <div key={mySubLinks.name}>
                                  <li onClick={scrollToTop}>
                                    <a
                                      href={mySubLinks.link}
                                      className="text-lg hover:text-[#F17732] hover:scale-75 text-gray-600 my-2.5"
                                    >
                                      {mySubLinks.name}
                                    </a>
                                  </li>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </a>
                </li>
              );
            })}
            <div className="md:hidden flex">
              {token ? (
                <div className="flex gap-6">
                  <Link
                    to="/userprofile"
                    className="text-xl font-bold"
                    onClick={scrollToTop}
                  >
                    <button className="bg-transparent border-[--main-color] border-2 rounded-md text-center ml-10 hover:text-[#F17732] hover:border-[#F17732] h-[3rem] w-[7rem]  mt-2 text-[--main-color]  border-spacing-2">
                      {firstName}
                    </button>
                  </Link>
                  <Link onClick={logout} className="font-sans">
                    <button className="bg-[--main-color]  border-2 rounded-md text-center  hover:text-[#F17732] hover:border-[#F17732] h-[3rem] w-[7rem]  mt-2 text-white  border-spacing-2">
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-6">
                  <Link
                    to="/login"
                    className="text-xl font-bold"
                    onClick={scrollToTop}
                  >
                    <button className="bg-transparent border-[--main-color] border-2 rounded-md text-center ml-10 hover:text-[#F17732] hover:border-[#F17732] h-[3rem] w-[7rem]  mt-2 text-[--main-color]  border-spacing-2">
                      LOGIN
                    </button>
                  </Link>
                  <Link
                    to="/signup"
                    className="font-sans"
                    onClick={scrollToTop}
                  >
                    <button className="bg-[--main-color]  border-2 rounded-md text-center  hover:text-[#F17732] hover:border-[#F17732] h-[3rem] w-[7rem]  mt-2 text-white  border-spacing-2">
                      REGISTER
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
