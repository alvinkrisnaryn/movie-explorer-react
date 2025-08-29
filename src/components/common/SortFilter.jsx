import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function SortFilter({ sortBy, onChange }) {
  const currentIndex = letters.indexOf(sortBy);

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
      <div className="flex items-center bg-[#333333] rounded-full py-2">
        <input
          type="text"
          maxLength={1}
          value={sortBy || ""}
          onChange={(e) => {
            const val = e.target.value.toUpperCase();
            if (/^[A-Z]?$/.test(val)) {
              onChange(val || null);
            }
          }}
          placeholder="A-Z"
          className="w-20 text-center text-white border-none rounded-full focus:outline-none"
        />
        <button onClick={handleNext} className="px-2 py-1">
          <FaChevronUp size={20} />
        </button>
        <button onClick={handlePrev} className="px-2 py-1">
          <FaChevronDown size={20} />
        </button>
      </div>
    </div>
  );
}

export default SortFilter;
