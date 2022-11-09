import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [user, loading] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("Log out");
    });
  };
  return (
    <div className="h-16 w-full z-50 bg-white ">
      {loading ? (
        <div className="text-center  bg-white font-semibold flex items-center justify-center h-full w-full z-50 shadow">
          <p>Please wait a secound...</p>
        </div>
      ) : (
        <header className="  bg-white text-gray-900 px-8 md:px-16 shadow ">
          <div className="container flex justify-between h-16 mx-auto">
            <Link
              to="/"
              className="flex h-full w-48 md:w-auto items-center text-xl"
            >
              <p className="font-semibold ">
                <span className="text-green-500">Travel</span> buddy
              </p>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <Link
                  to="/"
                  className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent text-black"
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/services"
                  className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Services
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/blog"
                  className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Blog
                </Link>
              </li>
              {user ? (
                <li className="flex">
                  <Link
                    to="/myreview"
                    className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  >
                    My review
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {user ? (
              <div className="flex gap-4 items-center text-gray-50">
                <div>
                  <img
                    title={user.displayName}
                    className="w-12 cursor-pointer h-12 rounded-full mr-2"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <Link
                  to="/addservice"
                  className="hidden md:flex bg-green-500 px-4 py-3 rounded-full text-sm"
                >
                  Add service
                </Link>
                <button
                  onClick={handleLogout}
                  className=" bg-black px-4 py-3 rounded-full text-sm"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="items-center flex-shrink-0 flex">
                <Link
                  to="/login"
                  className="self-center px-8 py-3 font-semibold rounded-full bg-black text-gray-50"
                >
                  Sign in
                </Link>
              </div>
            )}
            <button
              onClick={() => setToggle(!toggle)}
              className="p-4 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              toggle ? "right-0" : "-right-full"
            }    absolute top-16 -right-full h-full z-50 w-full`}
          >
            <ul className="flex flex-col gap-7 justify-center items-center  lg:hidden w-1/2 h-full bg-gray-300 z-20">
              <li className="flex">
                <Link
                  onClick={() => setToggle(!toggle)}
                  to="/"
                  className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent text-black"
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  onClick={() => setToggle(!toggle)}
                  to="/services"
                  className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Services
                </Link>
              </li>
              <li className="flex">
                <Link
                  onClick={() => setToggle(!toggle)}
                  to="/blog"
                  className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Blog
                </Link>
              </li>
              {user ? (
                <li className="flex">
                  <Link
                    onClick={() => setToggle(!toggle)}
                    to="/myreview"
                    className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  >
                    My review
                  </Link>
                </li>
              ) : (
                ""
              )}
              <Link
                to="/addservice"
                className="flex text-white bg-green-500 px-4 py-3 rounded-full text-sm"
              >
                Add service
              </Link>
            </ul>
          </div>
        </header>
      )}
    </div>
  );
};

export default Navbar;
