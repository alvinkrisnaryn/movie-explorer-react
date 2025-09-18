import bgImage from "../../assets/netflix-office.png";

function AboutCallToAction() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center bg-black">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via/black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-3xl px-6">
        <p className="text-3xl md:text-4xl font-bold mb-4">
          "If A Man Empties His Purse Into His Head No Man Can Take It Away"
        </p>
        <span className="block text-gray-300 mb-8">BENJAMIN FRANKLIN</span>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-lg transition">
          Join Now!!
        </button>
      </div>
    </section>
  );
}

export default AboutCallToAction;
