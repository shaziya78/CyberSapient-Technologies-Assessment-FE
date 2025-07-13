import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "../Components/AuthInput";
import AuthFormWrapper from "../Components/AuthFormWrapper";
import { loginUser } from "../api/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/feature/authSlice";
export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await loginUser({ ...formData, role: "user" });
      console.log("Login success", res.success);

      if (res?.data) {
        dispatch(setUser(res?.data));
        navigate("/");
      }
    } catch (err) {
      console.log("error in login", err);
      setError(err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <AuthFormWrapper>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border rounded-xl p-6 w-full sm:w-[22rem] mx-auto"
        >
          <div className="text-center p-8">
            <h1 className="font-bold text-2xl">Welcome Back!</h1>
            <p className="text-sm text-gray-700 mt-1">
              Please Enter your details to sign in
            </p>
          </div>
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
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded font-bold text-sm"
          >
            Login
          </button>

          <div className="flex gap-2">
            <p className="text-sm">Don't have an account??</p>
            <p
              onClick={() => navigate("/signup")}
              className="font-bold text-sm cursor-pointer"
            >
              Signup
            </p>
          </div>
        </form>
      </AuthFormWrapper>
    </div>
  );
}
