import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

// -------------------------
// EXPERTS DATA
// -------------------------
const experts = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];

// -------------------------
// MAIN COMPONENT
// -------------------------
export default function ExpertsList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-100 via-white to-purple-50">


      <h1 className="text-4xl font-extrabold text-center mb-10 text-purple-700 tracking-wide drop-shadow-md">
        🌟 Our Top Experts
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {experts.map((e) => (
          <div
            key={e.id}
            className="
              backdrop-blur-xl 
              bg-white/70 
              p-6 
              rounded-3xl 
              shadow-lg 
              hover:shadow-2xl 
              transition-all 
              hover:-translate-y-2 
              border border-purple-200
            "
          >

            {/* IMAGE + DETAILS */}
            <div className="flex items-center gap-5">

              <img
                src={e.image}
                alt={e.name}
                className="
                  w-24 
                  h-24 
                  rounded-full 
                  object-cover 
                  border-4 
                  border-purple-400/50 
                  shadow-md
                "
              />

              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">{e.name}</h2>
                <p className="text-sm text-gray-700 font-medium">{e.skills}</p>
                <p className="text-xs text-gray-500">{e.languages}</p>

                <div className="flex items-center text-yellow-500 gap-1 mt-2">
                  <Star size={18} fill="gold" />
                  <span className="text-gray-800 font-semibold">4.9</span>
                </div>

                <p className="text-sm font-bold text-purple-700 mt-1">
                  Experience: {e.experience}
                </p>

                <p className="text-xs text-gray-500">{e.orders} orders</p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="text-pink-600 font-extrabold text-lg">₹ {e.price}/min</p>
                <p className="text-sm line-through text-gray-400">₹ {e.oldPrice}/min</p>
              </div>

              <button
                onClick={() => navigate(`/expert/${e.id}`)}
                className="
                  px-6 
                  py-2 
                  rounded-full 
                  bg-gradient-to-r 
                  from-blue-500 
                  to-red-500 
                  text-white 
                  font-bold 
                  shadow-md 
                  hover:shadow-xl 
                  hover:scale-105 
                  active:scale-95 
                  transition-all
                "
              >
                Chat Now 🚀
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}