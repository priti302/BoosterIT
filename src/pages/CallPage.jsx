import { useParams, useNavigate } from "react-router-dom";
import { PhoneOff, Mic, Volume2, User } from "lucide-react";
import { useState, useEffect } from "react";

const experts = {
  "1": {
    id: 1,
    name: "Richa",
    image: "/experts/richa.jpg",
    status: "Online",
  }
};

export default function CallPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const expert = experts[id];

  const [seconds, setSeconds] = useState(0);
  const [inCall, setInCall] = useState(false);

  // Automatic call connect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setInCall(true), 3000);

    return () => clearTimeout(timer);
  }, []);

  // Call timer once connected
  useEffect(() => {
    if (!inCall) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [inCall]);

  const formatTime = () => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  const endCall = () => {
    navigate(-1);
  };

  if (!expert) {
    return <div className="p-10 text-center">Expert not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-600 to-purple-900 text-white">

      {/* Profile */}
      <img
        src={expert.image}
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mb-6"
      />

      {/* Name */}
      <h1 className="text-3xl font-semibold">{expert.name}</h1>

      {/* Call Status */}
      {!inCall ? (
        <p className="mt-2 text-lg opacity-80 animate-pulse">Calling…</p>
      ) : (
        <p className="mt-2 text-lg opacity-80">{formatTime()}</p>
      )}

      {/* Buttons */}
      <div className="flex gap-10 mt-16">

        {/* Mute */}
        <button className="p-4 rounded-full bg-white/20">
          <Mic size={28} />
        </button>

        {/* End Call */}
        <button
          onClick={endCall}
          className="p-5 rounded-full bg-red-600 shadow-xl hover:bg-red-700"
        >
          <PhoneOff size={32} />
        </button>

        {/* Speaker */}
        <button className="p-4 rounded-full bg-white/20">
          <Volume2 size={28} />
        </button>

      </div>
    </div>
  );
}
