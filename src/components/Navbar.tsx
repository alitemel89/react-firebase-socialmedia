import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-[90px] bg-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-white text-2xl font-bold italic">
            Watermelon Joy 🍉
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <Link to="/" className="px-4">
              Home
            </Link>
            <Link to="/about" className="px-4">
              About
            </Link>
            <Link to="/login">
              <button className="my-4 flex items-center">
                Login <FcGoogle className="ml-2" size={25}/>
              </button>
            </Link>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-slate-800 text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul className="flex flex-col md:hidden">
            <Link to="/" className="py-3">
              Home
            </Link>
            <Link to="/about" className="py-3">
              About
            </Link>
            <Link to="/login">
              <button className="my-4 flex items-center">
                Login <FcGoogle className="ml-2"  size={25} />
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
