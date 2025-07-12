import { useNavigate } from "react-router-dom";
export default function TermsOfService() {
  const navigate = useNavigate();
  return (
   
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <div className="bg-black text-white py-10 text-center px-4">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-3 text-lg opacity-90">By using EstateEase, you agree to these terms</p>
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
          <h2 className="text-2xl font-semibold mb-3">Use of Platform</h2>
          <p className="text-black leading-relaxed">
            You agree to use EstateEase only for lawful purposes. Any misuse, fraud, or spam may lead to account suspension.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Content Ownership</h2>
          <p className="text-black leading-relaxed">
            You are responsible for the listings and information you upload. Ensure accuracy and avoid false claims.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Policy Changes</h2>
          <p className="text-black leading-relaxed">
            We may update these terms periodically. Continued use of our platform implies acceptance of the latest version.
          </p>
        </section>
      </div>
    </div>
  );
}
