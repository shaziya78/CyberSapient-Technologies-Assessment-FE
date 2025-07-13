import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "../Components/AuthInput";
import AuthFormWrapper from "../Components/AuthFormWrapper";
import { loginUser, signupUser } from "../api/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/feature/authSlice";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await signupUser(formData);
      console.log("Signup successful:", res);
      if (res?.data) {
        // login user
        const res = await loginUser({
          email: formData?.email,
          password: formData?.password,
          role: "user",
        });

        if (res?.data) {
          dispatch(setUser(res?.data));
          navigate("/login");
        }
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <AuthFormWrapper>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border rounded-xl p-6 w-full sm:w-[22rem] mx-auto"
        >
          <div className="text-center p-8">
            <h1 className="font-bold text-2xl">Create Your Account</h1>
            <p className="text-sm text-gray-700 mt-1">
              Join Pillow by filling your details
            </p>
          </div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Name:
          </label>
          <AuthInput
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email:
          </label>
          <AuthInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Password:
          </label>
          <AuthInput
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Confirm Password:
          </label>
          <AuthInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded font-bold text-sm"
          >
            Signup
          </button>

          <div className="flex gap-2">
            <p className="text-sm">Already have an account?</p>
            <p
              onClick={() => navigate("/login")}
              className="font-bold text-sm cursor-pointer"
            >
              Login
            </p>
          </div>
        </form>
      </AuthFormWrapper>
    </div>
  );
}
