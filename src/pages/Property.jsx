import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronRight,
  FaChevronLeft,
  FaBookmark,
  FaRegBookmark,
  FaStar,
} from "react-icons/fa";
import { getAllProperties, toggleBookmark } from "../api/propertyService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBookmarks, useUser } from "../../redux/feature/authSlice";

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black/70 hover:bg-black text-white p-2 rounded-full"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black/70 hover:bg-black text-white p-2 rounded-full"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
}

export default function PropertyCarousel() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(useUser);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getAllProperties();
        if (user?.bookmarks?.length) {
          const bookmarksObj = {};
          user.bookmarks.forEach((id) => {
            bookmarksObj[id] = true;
          });
          setBookmarked(bookmarksObj);
        }

        setProperties(data);
      } catch (err) {
        console.error("Failed to fetch properties", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleBookmarkToggle = async (propertyId, e) => {
    e.stopPropagation();

    try {
      const result = await toggleBookmark(propertyId);

      console.log("result ", result);

      // Update local state with new bookmarks list from backend
      const updatedBookmarks = {};
      result.bookmarks.forEach((id) => {
        updatedBookmarks[id] = true;
      });
      setBookmarked(updatedBookmarks);

      dispatch(updateBookmarks(result.bookmarks));
    } catch (error) {
      console.error("Bookmark toggle failed:", error);
      // alert('Login required to bookmark');
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="px-10 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Properties
      </h2>
      <Slider {...settings}>
        {properties.map((property, index) => (
          <div key={index} className="px-3 relative">
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer"
              onClick={() => navigate(`/properties/${property._id}`)}
            >
              <img
                src={property.image || property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-1">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-gray-600 text-sm">{property.location}</p>
                <p className="text-black font-bold">{property.price}</p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < property?.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">
                      ({property?.rating || 0})
                    </span>
                  </div>

                  <div
                    onClick={(e) => handleBookmarkToggle(property._id, e)}
                    className="ml-4 text-black text-xl cursor-pointer"
                  >
                    {bookmarked[property._id] ? (
                      <FaBookmark />
                    ) : (
                      <FaRegBookmark />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
