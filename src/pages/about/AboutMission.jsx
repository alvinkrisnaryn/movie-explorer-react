function AboutMission() {
  const milestones = [
    {
      year: "2023",
      title: "The Idea",
      description:
        "We started with a simple thought: how we can make stories more accessible for everyone?",
      img: "../../assets/netflix-office.png",
    },
    {
      year: "2024",
      title: "First Launch",
      description:
        "Our platform went live, bringing together movies and TV shows in one place.",
      img: "../../assets/netflix-office.png",
    },
    {
      year: "2025",
      title: "Growing Community",
      description:
        "Thousands of users joined us, shaping a community that loves stories as much as we do.",
      img: "../../assets/netflix-office.png",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>

      <div className="space-y-16 max-w-5xl mx-auto">
        {milestones.map((item, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
            {/* Year + title */}
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-amber-500 mb-2">
                {item.year}
              </h3>
              <p className="text-xl font-semibold">{item.title}</p>
            </div>

            {/* Image + description */}
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center md:items-start">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMission;
