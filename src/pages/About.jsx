import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
       
      <div className="bg-gradient-to-r bg-black text-white py-10 text-center px-4">
        <h1 className="text-4xl font-bold">About EstateEase</h1>
        <p className="mt-3 text-lg opacity-90">Simplifying Real Estate for Everyone</p>
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
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-black leading-relaxed">
            EstateEase is your go-to platform for real estate listing, management, and discovery. Whether you're an individual or agency, our platform is built to offer speed, simplicity, and trust in every property interaction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-black leading-relaxed">
            We aim to make property transactions transparent, efficient, and user-friendly by providing modern tools and secure infrastructure to buyers, sellers, and admins.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why EstateEase?</h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>Intuitive user experience</li>
            <li>Secure and fast listings</li>
            <li>Reliable property management tools</li>
            <li>Support from our expert team</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
