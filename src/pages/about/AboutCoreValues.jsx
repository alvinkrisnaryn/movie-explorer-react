function AboutCoreValues() {
  const values = [
    {
      title: "Innovation",
      description: "We Push boundaries to create new ways of storytelling.",
      color: "bg-red-600",
    },
    {
      title: "Accessibility",
      description: "Stories should be reachable to everyone, everywhere.",
      color: "bg-blue-600",
    },
    {
      title: "Community",
      description: "We build connections that go beyond the screen.",
      color: "bg-green-600",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {values.map((item, index) => (
          <div
            key={index}
            className={`${item.color} rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-lg`}
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-100">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutCoreValues;
