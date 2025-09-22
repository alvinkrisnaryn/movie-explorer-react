function AboutTechStack() {
  const stacks = [
    {
      name: "JavaScript",
      img: "/images/icons/javascript.svg",
    },
    {
      name: "React",
      img: "/images/icons/react.svg",
    },
    {
      name: "Yarn",
      img: "/images/icons/yarn.svg",
    },
    {
      name: "Vite",
      img: "/images/icons/vite.svg",
    },
    {
      name: "Tailwind",
      img: "/images/icons/tailwind-css.svg",
    },
    {
      name: "Next JS",
      img: "/images/icons/next-js.svg",
    },
    {
      name: "Axios",
      img: "/images/icons/axios.svg",
    },
    {
      name: "ES Lint",
      img: "/images/icons/eslint.svg",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-15 overflow-hidden">
      <h2 className="text-5xl font-bold text-center mb-16">
        Development Stack
      </h2>

      <div className="flex flex-col item-center space-y-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-15 mx-auto">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 w-24 rounded-2xl shadow-md bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={stack.img}
                alt={stack.name}
                className="h-16 w-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTechStack;
