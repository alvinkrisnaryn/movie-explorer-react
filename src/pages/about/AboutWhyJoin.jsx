function AboutWhyJoin() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      img: "/images/join-us/television.png",
      imgSize: "w-16 h-16",
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favorites easily and always have something to watch.",
      img: "/images/join-us/downloading.png",
      imgSize: "w-16 h-16",
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      img: "/images/join-us/telescope.png",
      imgSize: "w-16 h-16",
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favorite characters in a space made just for them free with your membership.",
      img: "/images/join-us/children.png",
      imgSize: "w-16 h-16",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-15 px-6">
      <h2 className="text-3xl font-extrabold text-center md:text-left py-3 pl-[140px]">
        More Reasons to Join
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e0e38] rounded-3xl p-6 flex flex-col justify-between shadow-md"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-base font-semibold">{item.description}</p>
            </div>
            <div className="flex justify-end items-end mt-10">
              <img src={item.img} alt={item.title} className={item.imgSize} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutWhyJoin;
