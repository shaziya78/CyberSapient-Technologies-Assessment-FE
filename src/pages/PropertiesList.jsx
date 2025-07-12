import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { getAllProperties, deleteProperty } from "../api/propertyService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../Components/Pagination";
export default function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const paginatedProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getAllProperties();
        setProperties(data);
      } catch (err) {
        setError(err?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProperty(id);
      setProperties((prev) => prev.filter((p) => p._id !== id && p.id !== id));
      toast.success("Property deleted successfully!", { autoClose: 2000 });
    } catch (err) {
      toast.error(err?.message || "Failed to delete property");
    }
  };

  if (loading)
    return (
      <div className="p-8 text-center text-gray-600">Loading properties...</div>
    );
  if (error)
    return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Property Listings</h2>
      </div>
      <p className="text-sm text-gray-500 mb-2 md:hidden">
        Swipe left/right to view full table details
      </p>
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="md:min-w-full min-w-[900px] table-auto text-sm text-gray-800 border border-gray-300 border-collapse">
          <thead className="bg-gray-100">
            <tr className="">
              <th className="px-4 py-3 border border-gray-300 font-semibold w-[60px]">
                Sr.No
              </th>
              <th className="px-4 py-3 border border-gray-300 font-semibold">
                Image
              </th>
              <th className="px-4 py-3 border border-gray-300 font-semibold">
                Title
              </th>
              <th className="px-4 py-3 border border-gray-300 font-semibold">
                Location
              </th>
               <th className="px-4 py-3 border border-gray-300 font-semibold">
                Rating
              </th>
              <th className="px-4 py-3 border border-gray-300 font-semibold">
                Price
              </th>
              <th className="px-4 py-3 border border-gray-300 font-semibold w-[180px] text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {properties.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-6 text-gray-500 border border-gray-300"
                >
                  No properties found.
                </td>
              </tr>
            ) : (
              paginatedProperties.map((property, index) => (
                <tr
                  key={property._id || property.id}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-3 border border-gray-300 align-middle">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    <div className="flex items-center gap-3">
                      <a
                        href={property.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm  cursor-pointer"
                      >
                        View
                      </a>
                    </div>
                  </td>
                  <td className="px-4 py-3 border border-gray-300 text-center">
                    {property.title}
                  </td>
                  <td className="px-4 py-3 border border-gray-300 text-center">
                    {property.location}
                  </td>
                  <td className="px-4 py-3 border border-gray-300 text-center">
                    {property.rating}
                  </td>
                  <td className="px-4 py-3 border border-gray-300 text-center">
                    {property.price}
                  </td>
                  <td className="px-4 py-3 border border-gray-300 text-center space-x-2">
                    <Link to={`/edit-property/${property.id || property._id}`}>
                      <button className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">
                        <Pencil size={14} /> Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(property._id || property.id)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-xs"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
}
