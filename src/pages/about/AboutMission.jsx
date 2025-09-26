function AboutMission() {
  const milestones = [
    {
      year: "2007",
      title: "Streaming Launch",
      description:
        "Netflix introduced online streaming, marking a massive shift from physical media to digital content. For the first time, audiences could watch movies instantly without waiting for DVDs in the mail.",
      img: "/images/milestone/laptop-streaming.jpg",
    },
    {
      year: "2013",
      title: "First Original Series",
      description:
        "The release of 'House of Cards' marked Netflix entry into original programming. It wasn't just another show—it proved that streaming platforms could produce content as compelling and high-quality as traditional studios.",
      img: "/images/milestone/first-original-series.png",
    },
    {
      year: "2016",
      title: "Global Expansion",
      description:
        "Netflix expanded to more than 190 countries, connecting people from every corner of the world. This step turned Netflix based service into a global cultural phenomenon, bridging cultures and conversations across borders.",
      img: "/images/milestone/world-map-netflix.jpg",
    },
    {
      year: "2021",
      title: "Oscar Wins",
      description:
        "With films like 'Mank' and 'My Octopus Teacher,' Netflix achieved recognition at the Academy Awards. These wins were proof that streaming wasn't just about accessibility—it could deliver cinematic quality worthy of Hollywood`s highest honors.",
      img: "/images/milestone/oscar-stage.jpg",
    },
    {
      year: "2023",
      title: "Emmy Milestone",
      description:
        "Netflix became one of the studios with the most Emmy wins in history, showcasing its ability to consistently deliver world-class television. From dramas to documentaries, the platform had become a powerhouse in every genre",
      img: "/images/milestone/emmy-awards.jpg",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <h2 className="text-5xl font-extrabold text-center pb-30">Milestones</h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[15%_35%_50%] gap-6 justify-center items-center"
          >
            <h3 className="text-2xl md:text-right md:order-1 text-center order-1 font-bold text-red-600 mb-2">
              {item.year}
            </h3>

            <div className="flex justify-center order-2 md:order-2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-w-sm h-56 rounded-xl object-cover"
              />
            </div>

            <div className="text-center md:text-left order-4">
              <p className="text-white text-sm md:text-base mb-5">
                {item.description}
              </p>
              <button className="px-3 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition cursor-pointer text-sm">
                Read Story
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMission;
