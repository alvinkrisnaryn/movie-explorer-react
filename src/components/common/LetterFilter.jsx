import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function LetterFilter({ letter, onChange }) {
  const currentIndex = letters.indexOf(letter);

  const handlePrev = () => {
    const newIndex =
      currentIndex >= 0
        ? (currentIndex - 1 + letters.length) % letters.length
        : 0;
    onChange(letters[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex >= 0 ? (currentIndex + 1) % letters.length : 0;
    onChange(letters[newIndex]);
  };

  return (
    <div className="flex text-white font-semibold text-base">
      <div className="flex items-center bg-[#333333] rounded-full px-3 py-2">
        <input
          type="text"
          maxLength={1}
          value={letter || ""}
          onChange={(e) => {
            const val = e.target.value.toUpperCase();
            if (/^[A-Z]?$/.test(val)) {
              onChange(val);
            }
          }}
          placeholder="A-Z"
          className="w-12 sm:w-14 md:w-16 text-center text-white border-none rounded-full focus:outline-none"
        />

        <div className="flex flex-col ml-2">
          <button onClick={handleNext} className="px-1">
            <FaChevronUp size={14} />
          </button>
          <button onClick={handlePrev} className="px-1">
            <FaChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LetterFilter;
