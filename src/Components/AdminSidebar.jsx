import { NavLink, useNavigate } from "react-router-dom";
import { PlusSquare, List, User, LogOut, Settings } from "lucide-react";
import { logoutUser } from "../api/authService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/feature/authSlice";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const resp = await logoutUser();

      if (resp) {
        toast.success("Logged out successfully");
        setTimeout(() => {
          dispatch(logout);
          navigate("/admin");
        }, 1000);
      }
    } catch (error) {
      toast.error(error || "Logout failed");
    }
  };
  const navItems = [
    { to: "/dashboard", label: "All Properties", icon: List },
    { to: "/add-property", label: "Add Property", icon: PlusSquare },
    { to: "/adminprofile", label: "Admin Profile", icon: User },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white shadow-lg flex flex-col justify-between">
      <div>
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage properties with ease
          </p>
        </div>
        <nav className="flex flex-col p-4 gap-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md transition hover:bg-gray-800 ${
                  isActive ? "bg-gray-800 text-white" : "text-gray-400"
                }`
              }
            >
              <Icon className="w-5 h-5 mr-3" />
              {label}
            </NavLink>
          ))}
          <div
            onClick={handleLogout}
            className="flex items-center px-3 py-2 rounded-md text-gray-400 hover:bg-gray-800 hover:text-white transition cursor-pointer"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </div>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-700 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} EstateEase Admin
      </div>
    </aside>
  );
}
