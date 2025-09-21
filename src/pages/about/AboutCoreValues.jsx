function AboutCoreValues() {
  const values = [
    {
      title: "Creativity",
      description: "Overcoming barriers to storytelling.",
      color: "bg-amber-500",
      img: "/images/core-values/creativity.svg",
      imgSize: "w-55 h-55",
    },
    {
      title: "Innovation",
      description: "Taking stories beyond boundaries",
      color: "bg-emerald-500",
      img: "/images/core-values/innovation.svg",
      imgSize: "w-60 h-60",
    },
    {
      title: "Community",
      description: "Build connections in the screen.",
      color: "bg-red-500",
      img: "/images/core-values/community.svg",
      imgSize: "w-55 h-55",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-15 px-6">
      <h2 className="text-5xl font-extrabold text-center pb-20">
        Guiding Principles of Netflix
      </h2>

      <div className="grid md:grid-cols-3 gap-15 max-w-5xl mx-auto">
        {values.map((item, index) => (
          <div
            key={index}
            className={`${item.color} rounded-4xl px-5 py-4 flex flex-col justify-start items-center shadow-lg`}
          >
            <div className="w-full text-left mb-5">
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-base font-semibold">{item.description}</p>
            </div>
            <img
              src={item.img}
              alt={item.title}
              className={`${item.imgSize} flex justify-center items-center`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutCoreValues;
