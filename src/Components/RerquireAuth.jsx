import { useSelector } from "react-redux";
import { isLoggedIn, useUser } from "../../redux/feature/authSlice";
import { Outlet, Navigate, useLocation } from "react-router-dom";
const RequireAuth = ({ role = "user" }) => {
  const userLoggedIn = useSelector(isLoggedIn);
  const user = useSelector(useUser);

  const location = useLocation();

  console.log("user role", user)

  if (!userLoggedIn) {
    if (user?.role == "user")
      return <Navigate to="/login" state={{ from: location }} replace />;
    else return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
