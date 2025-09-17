import bgImage from "../../assets/netflix-office.png";

function AboutHeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden text-white bg-black">
      <img
        src={bgImage}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-xl tracking-wide ">
          About Us
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
