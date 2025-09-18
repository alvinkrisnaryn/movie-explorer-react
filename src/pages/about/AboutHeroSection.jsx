import bgImage from "../../assets/netflix-office.png";

function AboutHeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden text-white bg-black">
      <img
        src={bgImage}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gray-900/30"></div>

      <div className="relative flex flex-col items-start justify-center h-full px-15">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-xl tracking-wide ">
          Our Movies is Ours.
        </h1>
        <p className="text-base md:text-lg text-gray-200 font-semibold ">
          We are passionate about bringing people closer to the stories they
          love through technology, creativity, and community.
        </p>
      </div>
    </section>
  );
}

export default AboutHeroSection;
