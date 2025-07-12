import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h2 className="text-xl font-bold text-white mb-4">EstateEase</h2>
      <p className="text-sm text-gray-400">
        Your trusted rental partner for comfortable and verified homes.
      </p>
    </div>

<div>
  <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
  <ul className="space-y-2 text-sm">
    <li><Link to="/" className="hover:text-white transition">Home</Link></li>
    <li><Link to="/about" className="hover:text-white transition">About</Link></li>
  </ul>
</div>

<div>
  <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
  <ul className="space-y-2 text-sm">
    <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
    <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
  </ul>
</div>


    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
      <p className="text-sm text-gray-400">📍 Mumbai, India</p>
      <p className="text-sm text-gray-400">📞 +91 98765 43210</p>
      <p className="text-sm text-gray-400">✉️ support@pillowrent.com</p>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} EstateEase Rentals. All rights reserved.
  </div>
</footer>

  )
}

export default Footer
