import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function TopNav({ title }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white shadow-md p-4 flex items-center gap-4 sticky top-0 z-50">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <ArrowLeft size={22} className="text-gray-700" />
      </button>

      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
      >
        <Home size={22} className="text-blue-600" />
      </button>

      <h2 className="text-lg font-bold text-gray-800 ml-2">{title}</h2>
    </div>
  );
}
