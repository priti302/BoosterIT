import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SessionsPage() {
  const navigate = useNavigate();

  const sessions = [
    {
      id: 1,
      expert: "Aarav Sharma",
      topic: "Future & Career Reading",
      date: "2024-12-01",
      duration: "10 mins"
    }
  ];

  return (
    <div className="min-h-screen bg-white p-4 border border-purple-200">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-purple-700 font-bold mb-4"
      >
        <ArrowLeft /> Back to Home
      </button>

      <h2 className="text-xl font-bold mb-4">Your Past Sessions</h2>

      <div className="space-y-4">
        {sessions.map((s) => (
          <div
            key={s.id}
            className="border border-purple-200 rounded-xl p-4 bg-gray-50"
          >
            <h3 className="font-bold">{s.expert}</h3>
            <p className="text-sm text-gray-600">{s.topic}</p>

            <div className="flex items-center gap-2 text-gray-700 mt-2">
              <Calendar size={16} /> {s.date}
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Clock size={16} /> {s.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
