import { useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import PropertyListing from "./PropertiesList";
import { Menu } from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="md:h-screen min-h-screen bg-gray-100 flex flex-col md:flex-row overflow-hidden">
      <div className="md:hidden flex justify-between items-center bg-white px-4 py-3 shadow">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu size={24} />
        </button>
      </div>
      <div className={`fixed md:static top-0 left-0 z-50 md:z-auto w-64 bg-gray-900 h-full text-white transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}>
        <AdminSidebar />
      </div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className="flex-1 p-4 mt-4 md:mt-0">
        <PropertyListing />
      </div>
    </div>
  );
}
