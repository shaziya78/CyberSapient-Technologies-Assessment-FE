import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../api/authService";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <div className="bg-black text-white py-10 text-center px-4">
        <h1 className="text-4xl font-bold">Your Profile</h1>
        <p className="mt-2 text-base opacity-90">Manage your personal details</p>
      </div>

      <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mb-4 text-sm font-semibold text-white bg-black p-2 rounded"
        >
          Back
        </button>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <p className="mt-1 text-gray-800 text-base break-words">
                {user?.name}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <p className="mt-1 text-gray-800 text-base break-words">
                {user?.email}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Role
              </label>
              <p className="mt-1 text-gray-800 text-base">{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
