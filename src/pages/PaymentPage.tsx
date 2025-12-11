import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreditCard, Wallet, Landmark, Smartphone } from "lucide-react";
import TopNav from "../components/TopNav";

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.amount || 50;
  const gst = Number((amount * 0.18).toFixed(2));
  const total = amount + gst;

  return (
    <div className="min-h-screen bg-white p-6 sm:p-10">
   
    <TopNav title="Payment Details" /> 
      <div className="p-8">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
        Payment Details
      </h1>

      {/* SUMMARY CARD */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow p-6 mb-8">
        
        <table className="w-full text-gray-700">
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-semibold">Recharge Amount</td>
              <td className="p-3 text-right">₹ {amount.toFixed(2)}</td>
            </tr>

            <tr className="border-b">
              <td className="p-3 font-semibold">GST @ 18%</td>
              <td className="p-3 text-right">₹ {gst.toFixed(2)}</td>
            </tr>

            <tr>
              <td className="p-3 font-bold text-lg">Total Amount</td>
              <td className="p-3 text-right font-bold text-lg text-green-600">
                ₹ {total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* OFFER SECTION */}
      <div className="bg-blue-50 border border-blue-300 rounded-2xl shadow p-5 mb-6">
        <p className="font-bold text-blue-700 flex items-center gap-2 text-lg">
          % Special Offer
        </p>
        <p className="text-sm text-blue-600 mt-1">
          Get <span className="font-bold">₹ {amount}</span> cashback instantly after recharge!
        </p>
      </div>

      <p className="text-center text-red-600 underline mb-8 cursor-pointer">
        Apply another coupon
      </p>

      {/* PAYMENT OPTIONS */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Payment Method</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* UPI */}
        <button className="border bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
          <div className="flex items-center justify-center gap-3 text-lg">
            <Smartphone size={28} className="text-blue-500" />
            <span className="font-semibold text-gray-700">UPI</span>
          </div>
        </button>

        {/* CARD */}
        <button className="border bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
          <div className="flex items-center justify-center gap-3 text-lg">
            <CreditCard size={28} className="text-red-500" />
            <span className="font-semibold text-gray-700">Credit / Debit Card</span>
          </div>
        </button>

        {/* NET BANKING */}
        <button className="border bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
          <div className="flex items-center justify-center gap-3 text-lg">
            <Landmark size={28} className="text-green-600" />
            <span className="font-semibold text-gray-700">Net Banking</span>
          </div>
        </button>

        {/* WALLET */}
        <button className="border bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
          <div className="flex items-center justify-center gap-3 text-lg">
            <Wallet size={28} className="text-yellow-600" />
            <span className="font-semibold text-gray-700">Other Wallets</span>
          </div>
        </button>

      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 shadow transition"
        >
          Back
        </button>
      </div>
    </div>
    </div>
  );
}
