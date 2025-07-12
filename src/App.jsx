import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Property from "./pages/Property";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from "./pages/Dashboard";
import AddProperty from "./pages/AddProperty";
import PropertyListing from "./pages/PropertiesList";
import EditProperty from "./pages/EditProperty";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AdminLogin from "./pages/AdminLogin";
import Profile from "./pages/profile";
import AdminProfile from "./pages/adminprofile";
import RequireAuth from "./Components/RerquireAuth";
import PropertyDetails from "./pages/PropertyDetails";
    

function App() {
  return (
    <Router>
      <Routes>
        {/* admin routes */}
        <Route element={<RequireAuth role="admin" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-property/:id" element={<EditProperty />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
        </Route>

        {/* user routes */}
        <Route element={<RequireAuth role="user" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-property/:id" element={<EditProperty />} />
        </Route>

        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/login" element={<Login />} />
         <Route path="/properties/:id" element={<PropertyDetails />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/property-list" element={<PropertyListing />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
