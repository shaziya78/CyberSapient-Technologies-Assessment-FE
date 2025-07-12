import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { logoutUser } from "../api/authService";
import { isLoggedIn, logout } from "../../redux/feature/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const userLogin = useSelector(isLoggedIn);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogout = async () => {
    try {
      const resp = await logoutUser();

      if (resp) {
        toast.success("Logged out successfully");

        setTimeout(() => {
          dispatch(logout());
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <Link
        to="/"
        className="text-2xl font-bold text-black relative h-8 w-[180px] overflow-hidden"
      >
        <span
          className={`absolute left-0 top-0 transition-all duration-500 ease-in-out ${
            scrolled
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          EstateEase
        </span>
        <span
          className={`absolute left-0 top-0 transition-all duration-500 ease-in-out ${
            scrolled
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          Explore Property
        </span>
      </Link>

      <div className="relative" ref={dropdownRef}>
        {!userLogin ? (
          <div className="flex gap-4">
            <Link to="/login" className="text-sm font-semibold hover:underline">
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm font-semibold hover:underline"
            >
              Signup
            </Link>
          </div>
        ) : (
          <>
            <FaUserCircle
              size={28}
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-gray-700 cursor-pointer hover:text-black"
            />

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-36 bg-white shadow-md rounded-md border z-10">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
