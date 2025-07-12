import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentAdmin } from '../api/authService'; 
import { toast } from 'react-toastify';

export default function AdminProfile() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const data = await getCurrentAdmin();
        setAdmin(data);
      } catch (err) {
        toast.error(err);
        navigate('/admin'); 
      }
    };

    fetchAdmin();
  }, [navigate]);

  if (!admin) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="bg-black text-white py-10 text-center px-4">
        <h1 className="text-4xl font-bold">Admin Profile</h1>
        <p className="mt-2 text-lg opacity-90">Your account information</p>
      </div>

      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 space-y-6">
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="mb-4 text-sm font-semibold text-white bg-black p-2 rounded"
          >
            Back
          </button>

          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <p className="mt-1 text-lg font-medium text-gray-900 break-words">{admin.name}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <p className="mt-1 text-lg font-medium text-gray-900 break-words">{admin.email}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Role</label>
            <p className="mt-1 text-lg font-medium text-gray-900">{admin.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
