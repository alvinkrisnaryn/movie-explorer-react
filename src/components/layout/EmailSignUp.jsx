import bgImage from "../../assets/background-email-signup.png";
import { HiOutlineMail } from "react-icons/hi";

function EmailSignUp() {
  return (
    <section className="relative w-full h-[500px]">
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" />

      <div className="relative z-10 h-full grid grid-cols-[90%_10%] px-15">
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl leading-15 font-bold max-w-[800px] mb-10 text-white">
            Gain Access to unlimited movies, Tv shows, and more.
          </h2>

          <div className="flex w-full max-w-xl">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">
                <HiOutlineMail size={22} />
              </span>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full pl-11 pr-4 py-4 rounded-sm focus:outline-none text-gray-700 bg-white font-bold placeholder:font-bold"
              />
            </div>
            <button className="bg-black cursor-pointer text-white mx-4 px-5 py-4 rounded-sm font-bold tracking-wide uppercase text-sm">
              Get Started
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default EmailSignUp;
