import Navbar from '../Components/Navbar';
import Header from '../assets/header-rent.jpg';
import Property from '../pages/Property';
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
<div
  className="w-full h-[550px] bg-cover bg-center pl-10 flex items-center"
  style={{ backgroundImage: `url(${Header})` }}
>
  <div className="text-white text-left">
    <h1 className='text-2xl'>Welcome to EstateEase</h1>
    <h1 className="mt-2 text-4xl font-bold">Rent. Relax.<br/> Repeat. Simple.</h1>
     <button className="mt-5 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
      Learn More
    </button>
  </div>
</div>
<Property/>
<div className="overflow-hidden py-12 bg-gradient-to-r from-white via-gray-50 to-white">
  <div className="animate-marquee-smooth flex gap-6 items-center text-nowrap px-4">
    {[
      { title: "Prime Location", sub: "Workspace" },
      { title: "Fully Furnished", sub: "Modern Interiors, Move-in Ready" },
      { title: "Budget Friendly", sub: "Affordable Price" },
      { title: "Verified Listings", sub: "Trusted Properties with Documents" },
      { title: "Zero Deposit", sub: "Book Now, Pay Later Plans" },
      { title: "Scenic City Views", sub: "Balcony Homes with Skyline View" },
      { title: "Ready to Move", sub: "Instant Possession Available" },
      { title: "Luxury Interiors", sub: "Designer Touch to Every Corner" },
      { title: "Secure Access", sub: "24x7 Gated Community" },
      { title: "Cozy Studio Apartments", sub: "Perfect for Working Professionals" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white shadow-xl px-6 py-5 rounded-xl border border-gray-200 min-w-[260px] transform hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl"
      >
        <h4 className="text-lg font-semibold text-gray-800 tracking-wide">
          {item.title}
        </h4>
        <p className="text-sm text-gray-500 mt-1">{item.sub}</p>
      </div>
    ))}
  </div>
</div>
      </div>
          <Footer />
    </>
  );
}
