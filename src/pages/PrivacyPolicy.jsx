import { useNavigate } from "react-router-dom";
export default function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <div className="bg-black text-white py-10 text-center px-4">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-lg opacity-90">Your privacy is our priority</p>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-6 space-y-10">
           <button
          type="button"
          onClick={() => navigate("/")}
          className="mb-4 text-sm font-semibold text-white bg-black p-2 rounded"
        >
          Back
        </button>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p className="text-black leading-relaxed">
            We collect personal information like name, email, and usage data only to improve your experience. Sensitive data is never stored without consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>To personalize user experience</li>
            <li>To improve our service offerings</li>
            <li>To communicate service updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Your Control</h2>
          <p className="text-black leading-relaxed">
            You can request to update or delete your information at any time. We respect your privacy rights.
          </p>
        </section>
      </div>
    </div>
  );
}
