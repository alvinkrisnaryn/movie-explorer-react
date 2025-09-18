function AboutPricing() {
  const plans = [
    {
      name: "Basic",
      price: "$8.90 / mouth",
      features: ["1 screen", "720p resolution", "Unlimited Movies & Tv Shows"],
      highlight: false,
    },
    {
      name: "Standar",
      price: "$13.90 / mouth",
      features: ["2 screen", "1080p Full HD", "Unlimited Movies & Tv Shows"],
      highlight: true,
    },
    {
      name: "Premium",
      price: "$17.90 / mouth",
      features: [
        "4 screen",
        "4K Ultra HD + HDR",
        "Unlimited Movies & Tv Shows",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 flex flex-col justify-between shadow-lg border ${
              plan.highlight
                ? "bg-red-600 border-red-500 scale-105"
                : "bg-gray-900 border-gray-700"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-extrabold mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-400"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPricing;
