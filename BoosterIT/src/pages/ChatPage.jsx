import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  MoreVertical,
  Paperclip,
  Camera,
  Check,
  CheckCheck,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const experts = {
  "1": {
    id: 1,
    name: "Richa",
    image: "/experts/richa.jpg",
    status: "Online",
  },
};

export default function ChatPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const expert = experts[id || "1"];

  if (!expert) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-red-500">
        Expert not found ❌
      </div>
    );
  }

  const [messages, setMessages] = useState([
    {
      sender: "expert",
      text: "Hi! 😊 How can I assist you today?",
      time: "10:01 AM",
      status: "seen",
    },
  ]);

  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMsg = {
      sender: "user",
      text: input,
      time: "Now",
      status: "sent",
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].status = "delivered";
        return updated;
      });
    }, 500);

    setTimeout(() => {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].status = "seen";
        return updated;
      });
    }, 1200);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "expert",
          text: "Thanks! I'm here to help 💜",
          time: "Now",
          status: "seen",
        },
      ]);
    }, 1800);
  };

  // ⭐ FIXED JSX version — NO TypeScript
  const renderTicks = (status) => {
    if (status === "sent") return <Check size={14} className="text-gray-400" />;
    if (status === "delivered")
      return <CheckCheck size={14} className="text-gray-400" />;
    return <CheckCheck size={14} className="text-blue-500" />;
  };

  return (
    <div className="flex flex-col h-screen bg-[#efe7f8]">

      {/* HEADER */}
      <div className="flex items-center gap-3 px-4 py-3 bg-green-600 text-white shadow">
        <ArrowLeft size={22} className="cursor-pointer" onClick={() => navigate(-1)} />

        <img src={expert.image} className="w-10 h-10 rounded-full object-cover border" />

        <div className="flex-1">
          <h2 className="font-semibold">{expert.name}</h2>
          <p className="text-sm text-white/80">{expert.status}</p>
        </div>

        <MoreVertical size={22} />
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[75%] px-3 py-2 rounded-xl text-sm shadow 
              ${
                msg.sender === "user"
                  ? "ml-auto bg-purple-600 text-white rounded-br-none"
                  : "bg-white text-gray-900 rounded-bl-none"
              }`}
          >
            <p>{msg.text}</p>
            <div className="flex justify-end items-center gap-1 mt-1 text-[10px] opacity-70">
              <span>{msg.time}</span>
              {msg.sender === "user" && renderTicks(msg.status)}
            </div>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* INPUT BAR */}
      <div className="p-3 bg-white flex items-center gap-3 border-t">

        <button className="p-2 bg-purple-200 rounded-full text-purple-700">
          <Paperclip size={20} />
        </button>

        <button className="p-2 bg-purple-200 rounded-full text-purple-700">
          <Camera size={20} />
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 bg-purple-100 rounded-full outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="p-3 bg-purple-600 text-white rounded-full"
          onClick={sendMessage}
        >
          <Send size={20} />
        </button>

      </div>
    </div>
  );
}