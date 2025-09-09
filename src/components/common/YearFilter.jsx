import { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function YearFilter({ year, onChange }) {
  const [inputValue, setInputValue] = useState(year || "");

  useEffect(() => {
    setInputValue(year || "");
  }, [year]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue) {
        onChange(inputValue);
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, onChange]);

  const handleIncrement = () => {
    const newYear = (Number(inputValue) || new Date().getFullYear()) + 1;
    setInputValue(newYear);
    onChange(newYear);
  };

  const handleDecrement = () => {
    const newYear = (Number(inputValue) || new Date().getFullYear()) - 1;
    setInputValue(newYear);
    onChange(newYear);
  };

  return (
    <div className="flex text-white font-semibold text-base">
      <div className="flex items-center bg-[#333333] rounded-full py-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
