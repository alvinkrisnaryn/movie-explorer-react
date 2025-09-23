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
      <div className="flex items-center bg-[#333333] rounded-full px-3 py-2">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Year"
          className="w-16 sm:w-20 md:w-24 text-center text-white border-none rounded-full focus:outline-none"
        />

        <div className="flex flex-col ml-2">
          <button onClick={handleIncrement} className="px-1">
            <FaChevronUp size={14} />
          </button>
          <button onClick={handleDecrement} className="px-1">
            <FaChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default YearFilter;
