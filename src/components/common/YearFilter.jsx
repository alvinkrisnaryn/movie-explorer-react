import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function YearFilter({ year, onChange }) {
  const handleIncrement = () => {
    onChange(year ? Number(year) + 1 : new Date().getFullYear());
  };
  const handleDecrement = () => {
    onChange(year ? Number(year) - 1 : new Date().getFullYear());
  };

  return (
    <div className="flex text-white font-semibold text-base">
      <div className="flex items-center bg-[#333333] rounded-full py-2">
        <input
          type="text"
          value={year || ""}
          onChange={(e) => onChange(e.target.value || null)}
          placeholder="Year"
          className="w-20 text-center text-white border-none rounded-full focus:outline-none"
        />

        <button onClick={handleIncrement} className="px-2 py-1">
          <FaChevronUp size={20} />
        </button>
        <button onClick={handleDecrement} className="px-2 py-1">
          <FaChevronDown size={20} />
        </button>
      </div>
    </div>
  );
}

export default YearFilter;
