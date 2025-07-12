import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPropertyById } from "../api/propertyService";
import { FaStar } from "react-icons/fa";

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropertyById(id);
        setProperty(data);
      } catch (error) {
        console.error("Error loading property", error);
      }
    };
    fetchData();
  }, [id]);

  if (!property)
    return <div className="text-center py-10 text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate("/")}
        className="mb-6 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        ← Back to Home
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
        <img
          src={property.image || property.imageUrl}
          alt={property.title}
          className="w-full h-64 sm:h-96 object-cover"
        />
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {property.title}
          </h1>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Location:</span> {property.location}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Price:</span> {property.price}
          </p>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < property?.rating ? "text-yellow-400" : "text-gray-300"
                }
              />
            ))}
            <span className="text-xs text-gray-500 ml-2">
              ({property?.rating || 0})
            </span>
          </div>
          {property.description && (
            <p className="mt-4 text-gray-700 leading-relaxed">
              {property.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
