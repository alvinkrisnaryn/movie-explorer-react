import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function AboutPricing() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      tagline: "Affordable and ready to use",
      monthly: "$8.90",
      yearly: "$9.90",
      quarterly: "$10.90",
      features: [
        "1 screen at time",
        "720p resolution",
        "Mobile and Laptop",
        "Ad-supported",
      ],
      highlight: false,
    },
    {
      name: "Standar",
      tagline: "Perfect balence for a family",
      monthly: "$13.90",
      yearly: "$14.90",
      quarterly: "$15.90",
      features: [
        "2 screen at the same time",
        "Full HD 1080p",
        "Download on 2 devices",
        "Ad-free experience",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      tagline: "For the ultimate experience",
      monthly: "$17.90",
      yearly: "$18.90",
      quarterly: "$19.90",
      features: [
        "4 screen at the same time",
        "Ultra HD 4K + HDR",
        "Download on 6 devices",
        "Premium audio experience",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="text-center py-9">
        <h1 className="text-5xl font-bold max-w-6xl mx-auto tracking-wide mb-5">
          Plans designed for the way you watch unlimited entertainment, anytime,
          anywhere
        </h1>
        <p className="text-gray-400 mt-3 max-w-3xl mx-auto tracking-wide">
          Whether you're watching on your phone during a commute, streaming on
          the big screen at home, or downloading for offline adventures, Netflix
          has a plan that fits perfectly. No hidden fees, no long-term
          commitments just stories waiting for you.
        </p>
      </div>

      <div className="flex justify-center mb-15">
        <div className="bg-gray-800 rounded-full p-1.5 flex space-x-5">
          {["monthly", "yearly", "quarterly"].map((type) => (
            <button
              key={type}
              onClick={() => setBilling(type)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                billing === type
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 flex flex-col justify-between shadow-lg border transition transform ${
              plan.highlight
                ? "bg-red-600 border-red-600 scale-105"
                : "bg-gray-900 border-gray-700"
            }`}
          >
            <h3 className="text-4xl font-bold mb-2">{plan.name}</h3>
            <p className="text-sm mb-2 italic font-semibold">{plan.tagline}</p>
            <p className="text-3xl font-extrabold mb-3">
              {plan[billing]} <span className="text-xl">/{billing}</span>
            </p>
            <p className="text-sm mb-6">What's includes</p>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-400">
                    <FaCheck />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-white text-black font-bold py-2 rounded-3xl hover:bg-gray-300 hover:cursor-pointer transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPricing;
