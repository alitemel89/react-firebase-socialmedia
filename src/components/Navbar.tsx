import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../config/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [nav, setNav] = useState(false);

  const signUserOut = async () => {
    await signOut(auth);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-white text-2xl font-bold italic">
            Travel Blog 🍉
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            {user ? (
              <>
                <AiOutlineHome className="-mr-2" size={20} />
                <Link to="/" className="px-4">
                  Feed
                </Link>
                <Link to="/about" className="px-4">
                  About
                </Link>
                <Link
                  to="/createpost"
                  className="px-4 font-bold text-lg text-cyan-400"
                >
                  Create Post +
                </Link>
                <Link to="/" className="px-4 font-bold text-lg">
                  {user?.displayName}
                </Link>

                <div className="mr-4">
                  <img
                    src={user?.photoURL || ""}
                    className="h-10 w-10 rounded-full"
                    alt="profile"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <Link to="/login">
                  <button
                    className="my-4 flex items-center"
                    onClick={signUserOut}
                  >
                    Log out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="px-4">
                  Home
                </Link>
                <Link to="/about" className="px-4">
                  About
                </Link>
                <Link to="/login">
                  <button className="my-4 flex items-center">
                    Login <FcGoogle className="ml-2" size={25} />
                  </button>
                </Link>
              </>
            )}
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
        {!user ? (
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
                  Login <FcGoogle className="ml-2" size={25} />
                </button>
              </Link>
            </ul>
          </div>
        ) : (
          <>
            <div
              className={
                nav
                  ? "w-full bg-slate-800 text-white absolute top-[90px] left-0 flex justify-center text-center"
                  : "absolute left-[-100%] md:hidden"
              }
            >
              <div className="flex flex-col items-center px-4">
                <span className="text-xl font-bold my-2">
                  {user?.displayName}
                </span>

                <img
                  src={user?.photoURL || ""}
                  className="h-12 w-12 rounded-full mb-2"
                  alt="profile"
                />

                <Link to="/" className="py-2">
                  Feed
                </Link>

                <Link to="/about" className="py-2">
                  About
                </Link>

                <Link to="/createpost" className="py-2">
                  Create a post
                </Link>

                <Link to="/login">
                  <button
                    className="flex items-center my-3"
                    onClick={signUserOut}
                  >
                    Log out
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
