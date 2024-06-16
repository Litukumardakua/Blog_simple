import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="bg-slate-300 shadow-sm shadow-slate-300 ">
      <div class="container mx-auto px-4 py-3 flex items-center ">
        <img src="assets/images/easyshop.png" alt="company logo" />

        <div class="ml-12 flex">
          <Link
            class="flex items-center font-semibold text-md hover:text-blue-700 transition "
            to="/"
          >
            <span class="mr-2">
              <i class="fas fa-home"></i>
            </span>
            Home
          </Link>
        </div>
        <div class="ml-12 flex">
          <Link
            class="flex items-center font-semibold text-md hover:text-blue-700 transition "
            to="/about"
          >
            <span class="mr-2">
              <i class="fas fa-file-alt"></i>
            </span>
            About
          </Link>
        </div>

        <div class="ml-12 flex">
          <Link
            class="flex items-center font-semibold text-md hover:text-blue-700 transition "
            to="/contact"
          >
            <span class="mr-2">
              <i class="fas fa-phone"></i>
            </span>
            Contact
          </Link>
        </div>

        <div class="relative ml-auto ">
          <span class="absolute left-3 top-2 text-sm text-gray-600 ">
            <i class="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search..."
            class="block w-full rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-gray-200 text-sm text-gray-600 shadow-sm shadow-slate-300 "
          />
        </div>

        <div class="ml-5">
          <a
            href="#"
            class="flex items-center font-semibold text-md text-gray-900 hover:text-blue-700 transition"
          >
            <span class="mr-2">
              <i class="far fa-user"></i>
            </span>
            Login/Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
