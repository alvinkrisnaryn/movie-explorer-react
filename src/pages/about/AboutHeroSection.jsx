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
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2">
          Our Movies is Yours.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 font-semibold">
          Behind the screens, our story begins.
        </p>
      </div>
    </section>
  );
}

export default AboutHeroSection;
