function AboutTechStack() {
  const stacks = [
    { name: "React", img: "/favicon-netflix.png" },
    { name: "Tailwind", img: "/favicon-netflix.png" },
    { name: "Next Js", img: "/favicon-netflix.png" },
    { name: "Axios", img: "/favicon-netflix.png" },
    { name: "Yarn", img: "/favicon-netflix.png" },
    { name: "Vite", img: "/favicon-netflix.png" },
  ];

  return (
    <section className="w-full bg-black text-white py-16 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10">Our Tech Stack</h2>

      <div className="relative w-full">
        <div className="flex space-x-16 animate-marquee">
          {stacks.concat(stacks).map((stack, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={stack.img}
                alt={stack.name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTechStack;
