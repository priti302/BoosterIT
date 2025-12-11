import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function RechargePage() {
   const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(null); 
  const amounts = [50, 100, 200, 300, 500, 1000, 2000];

  const offers = [
    { amount: 200, offer: "Get extra ₹20", color: "blue" },
    { amount: 500, offer: "Get extra ₹70", color: "blue" },
    { amount: 1000, offer: "Get extra ₹200", color: "blue" },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
       <TopNav title="Add Money to Wallet" />  
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Add Money to Wallet
      </h1>

      {/* OFFERS */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-3xl mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-4">🔥 Best Offers for You</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {offers.map((o, i) => (
            <div
              key={i}
              className="border border-blue-300 bg-white rounded-xl p-4 shadow"
            >
              <p className="font-bold text-blue-700">Recharge ₹{o.amount}</p>
              <p className="text-sm text-blue-500">{o.offer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AMOUNTS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => setSelectedAmount(amount)}
            className={`p-4 rounded-xl border shadow font-bold text-gray-700 
              ${selectedAmount === amount ? "bg-green-200 border-green-500" : "bg-gray-100"}
            `}
          >
            ₹{amount}
          </button>
        ))}
      </div>

      {/* PAY BUTTON */}
      <div className="text-center">
      <button
       onClick={() => navigate("/payment", { state: { amount: selectedAmount } })}
       className="px-8 py-3 rounded-full bg-red-500 text-white font-bold text-lg hover:bg-red-600"
       >
        Proceed to Pay ₹{selectedAmount}
       </button>
       </div>
      </div>
    </div>
  );
}
