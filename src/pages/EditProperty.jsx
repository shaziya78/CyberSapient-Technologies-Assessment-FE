import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthFormWrapper from "../Components/AuthFormWrapper";
import AuthInput from "../Components/AuthInput";
import { getPropertyById, updateProperty } from "../api/propertyService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    rating: 3,
  });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const property = await getPropertyById(id);
        setFormData({
          title: property.title,
          location: property.location,
          price: property.price,
          image: property.imageUrl || "",
          rating: property.rating || 3,
        });
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };
    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("location", formData.location);
      data.append("price", formData.price);
      data.append("rating", formData.rating);

      if (formData.image && typeof formData.image !== "string") {
        data.append("image", formData.image);
      }

      await updateProperty(id, data);

      toast.success("Property updated successfully!", {
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(error?.message || "Failed to update property");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <AuthFormWrapper>
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="mb-4 text-sm font-semibold text-white bg-black p-2 rounded"
        >
          Back
        </button>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border rounded-xl md:p-6 p-10 w-[400px] bg-white shadow"
        >
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">Edit Property</h2>
            <p className="text-sm text-gray-600 mt-1">
              Update property details below
            </p>
          </div>

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Title:
          </label>
          <AuthInput
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Location:
          </label>
          <AuthInput
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Price:
          </label>
          <AuthInput
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Image:
          </label>
          {typeof formData.image === "string" && formData.image && (
            <img
              src={formData.image}
              alt="Current Property"
              className="w-full h-40 object-cover rounded border mb-2"
            />
          )}
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-black file:text-white hover:file:bg-gray-800"
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Rating (0 - 5):
          </label>

          <AuthInput
            type="number"
            name={"rating"}
            min="1"
            max="5"
            step="0.1"
            placeholder="e.g. 4.5"
            value={formData?.rating}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded font-bold text-sm"
          >
            Update Property
          </button>
        </form>
      </AuthFormWrapper>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
