import { useState } from "react";
import bgImage from "../../assets/background-email-signup.png";
import { HiOutlineMail } from "react-icons/hi";

function AboutCallToAction() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    sessionStorage.setItem("userEmail", email);

    setEmail("");
  };

  return (
    <section className="relative w-full min-h-[400px] md:h-[500px]">
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug text-white max-w-4xl my-5 ">
          Gain Access to unlimited movies, Tv shows, and more.
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row w-full max-x-xl gap-4"
        >
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">
              <HiOutlineMail size={22} />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="w-full sm:w-[300px] md:w-[400px] pl-11 pr-4 py-4 rounded-sm focus:outline-none text-gray-700 bg-white font-bold placeholder:font-bold"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-black cursor-pointer text-white px-5 py-4 rounded-sm font-bold tracking-wide uppercase text-sm sm:w-auto w-full"
          >
            Get Started
          </button>
        </form>
      </div>
      <div></div>
    </section>
  );
}

export default AboutCallToAction;
