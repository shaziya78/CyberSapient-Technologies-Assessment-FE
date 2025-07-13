import { useState } from "react";
import AuthFormWrapper from "../Components/AuthFormWrapper";
import AuthInput from "../Components/AuthInput";
import { createProperty } from "../api/propertyService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    rating: 3,
  });
  const navigate = useNavigate();
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
      data.append("image", formData.image);
      data.append("rating", formData.rating);

      await createProperty(data);

      toast.success("Property created successfully!", {
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(error?.message || "Failed to create property");
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen px-4 sm:px-6">
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
          className="space-y-4 border rounded-xl p-6 w-full sm:w-[22rem] mx-auto"
        >
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">Add New Property</h2>
            <p className="text-sm text-gray-600 mt-1">
              Enter property details below
            </p>
          </div>

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Title:
          </label>
          <AuthInput
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Location:
          </label>
          <AuthInput
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Price:
          </label>
          <AuthInput
            type="text"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />

          <label className="block text-sm font-medium mb-1 text-gray-700">
            Image:
          </label>
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
            Create Property
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </AuthFormWrapper>
    </div>
  );
}
