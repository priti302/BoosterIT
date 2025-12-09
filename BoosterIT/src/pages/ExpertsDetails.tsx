import { useParams, useNavigate } from "react-router-dom";
import { Star, MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const experts = {
  1: {
    id: 1,
    name: "Aarav Sharma",
    skills: "Social Media Marketing",
    languages: "Hindi",
    experience: "11 Years",
    orders: 26353,
    price: 5,
    oldPrice: 29,
    status: "Offline",
    wait: "Currently offline",
    image: "/experts/aarav.jpg",
  },
  2: {
    id: 2,
    name: "Bhumija",
    skills: "Content Strategy",
    languages: "Hindi • Punjabi",
    experience: "6 Years",
    orders: 29110,
    price: 5,
    oldPrice: 26,
    status: "Online",
    image: "/experts/priya.jpg",
  },
  3: {
    id: 3,
    name: "Avishkar",
    skills: "Brand Strategy & Positioning",
    languages: "Hindi",
    experience: "5 Years",
    orders: 9544,
    price: 5,
    oldPrice: 20,
    status: "Online",
    image: "/experts/rahul.jpg",
  },
  4: {
    id: 4,
    name: "Dwarkanath",
    skills: "Analytics & Performance Tracking (Google Analytics)",
    languages: "English • Hindi • Tamil",
    experience: "20 Years",
    orders: 8073,
    price: 5,
    oldPrice: 28,
    status: "Online",
    image: "/experts/e1.jpg",
  },
  5: {
    id: 5,
    name: "Vrivina",
    skills: "Email Marketing & Automation",
    languages: "Hindi",
    experience: "3 Years",
    orders: 10112,
    price: 5,
    oldPrice: 27,
    status: "Online",
    image: "/experts/e2.jpg",
  },
  6: {
    id: 6,
    name: "Sarvagnay",
    skills: "Full-Stack Web Development",
    languages: "Hindi",
    experience: "7 Years",
    orders: 12489,
    price: 25,
    oldPrice: 32,
    status: "Online",
    image: "/experts/e3.jpg",
  },
  7: {
    id: 7,
    name: "Rasheshwari",
    skills: "Cloud Computing (AWS / Azure / GCP)",
    languages: "Hindi • English",
    experience: "6 Years",
    orders: 11844,
    price: 36,
    oldPrice: 40,
    status: "Busy",
    wait: "Wait ~ 4m",
    image: "/experts/e4.jpg",
  },
  8: {
    id: 8,
    name: "Akshath",
    skills: "AI / Machine Learning",
    languages: "Hindi • English",
    experience: "4 Years",
    orders: 9625,
    price: 30,
    oldPrice: 35,
    status: "Busy",
    wait: "Wait ~ 7m",
    image: "/experts/e5.jpg",
  },
  9: {
    id: 9,
    name: "Vishakha",
    skills: "UI/UX Design & Prototyping",
    languages: "Hindi • English",
    experience: "6 Years",
    orders: 37684,
    price: 43,
    oldPrice: 50,
    status: "Busy",
    wait: "Wait ~ 9m",
    image: "/experts/e6.jpg",
  },
  10: {
    id: 10,
    name: "Manju Devi",
    skills: "Cybersecurity & Ethical Hacking",
    languages: "Hindi",
    experience: "9 Years",
    orders: 18700,
    price: 20,
    oldPrice: 30,
    status: "Online",
    image: "/experts/e7.jpg",
  },
  11: {
    id: 11,
    name: "Samar Singh",
    skills: "Influencer & Affiliate Marketing",
    languages: "Hindi • English",
    experience: "12 Years",
    orders: 22300,
    price: 22,
    oldPrice: 33,
    status: "Offline",
    wait: "Offline",
    image: "/experts/e8.jpg",
  },
  12: {
    id: 12,
    name: "Tanya Sharma",
    skills: "Cybersecurity & Ethical Hacking",
    languages: "Hindi • English",
    experience: "4 Years",
    orders: 9900,
    price: 17,
    oldPrice: 25,
    status: "Online",
    image: "/experts/e9.jpg",
  },
};

export default function ExpertDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const expert = experts[id];
  const [showPopup, setShowPopup] = useState(false);

  return (
    // <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-50 p-4">
    // <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-50 pl-6 pr-4 pt-4 pb-4">
     <div className="min-h-screen p-4 
     bg-gradient-to-b from-purple-100 to-purple-50 
     dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800
     transition-all duration-300">


      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-purple-700 font-bold mb-4"
      >
        <ArrowLeft size={20} /> Back
      </button>

      {/* Main Card */}
      {/* <div className="bg-white border border-purple-200 rounded-3xl p-6 shadow-xl"> */}
      <div className="bg-white dark:bg-gray-800 
                text-gray-900 dark:text-gray-100 
                border border-purple-200 dark:border-gray-700 
                rounded-3xl p-6 shadow-xl transition">

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 pl-16 pr-6 pt-6 pb-4">

          {/* IMAGE */}
          <div className="text-center">
            <img
              src={expert.image}
              className="w-40 h-40 rounded-full border-4 border-purple-400 shadow-md object-cover mx-auto"
            />

            <button className="mt-3 w-full bg-yellow-400 text-black font-bold py-2 rounded-lg shadow hover:bg-yellow-500">
              Follow
            </button>
          </div>

          {/* DETAILS */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-purple-800">{expert.name}</h2>
            <p className="text-lg text-gray-700 mt-1">{expert.skills}</p>
            <p className="text-gray-600">{expert.languages}</p>

            <p className="mt-2 font-semibold text-gray-800">Experience: {expert.experience}</p>

            <div className="flex items-center gap-1 text-yellow-500 mt-1">
              <Star fill="gold" size={20} />
              <span className="font-semibold text-gray-800 text-lg">4.9</span>
            </div>

            <p className="text-gray-600 mt-2">{expert.orders} successful orders</p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">

              {/* CHAT BUTTON (orange) */}
              <button
                onClick={() => setShowPopup(true)}
                className="w-56 py-3  rounded-full text-lg font-semibold 
                           bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg 
                           hover:scale-105 active:scale-95 transition"
              >
                <MessageCircle size={20} className="inline-block mr-2" />
                Start Chat
                <div className="text-xs text-orange-100">{expert.wait}</div>
              </button>

              {/* CALL BUTTON (green) */}
              <button
               onClick={() => navigate(`/call/${expert.id}`)}
                className="w-56 py-3 rounded-full text-lg font-semibold 
                           bg-gradient-to-r from-green-500 to-green-500 text-white shadow-lg 
                           hover:scale-105 active:scale-95 transition dark:shadow-green-900"
              >
                <Phone size={20} className="inline-block mr-2" />
                Start Call
                <div className="text-xs text-green-100">{expert.wait}</div>
              </button>

            </div>
          </div>
        </div>

        {/* COMMENTS SECTION */}
        <div className="mt-10 border-t pt-6">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">User Reviews & Ratings ⭐</h3>

          {/* Example Reviews */}
          <div className="space-y-4">

            <div className="p-4 bg-purple-50 rounded-xl shadow-sm border">
              <p className="font-semibold text-gray-800">Rahul Kumar</p>
              <div className="flex text-yellow-500">
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
              </div>
              <p className="text-gray-600 mt-1">Very accurate and helpful guidance!</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl shadow-sm border">
              <p className="font-semibold text-gray-800">Simran Patel</p>
              <div className="flex text-yellow-500">
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
                <Star size={18} fill="gold" />
              </div>
              <p className="text-gray-600 mt-1">Amazing insights! Highly recommended.</p>
            </div>

          </div>
        </div>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] sm:w-[400px]">

            <p className="text-gray-800 text-lg font-medium mb-4">
              Minimum balance of <b>5 minutes</b> (₹ {expert.price * 5}) is required 
              to start chat with <b>{expert.name}</b>.
            </p>

            <div className="flex justify-center gap-4 mt-6">

              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 border border-gray-500 rounded-lg text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate(`/chat/${expert.id}`);
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Recharge
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}