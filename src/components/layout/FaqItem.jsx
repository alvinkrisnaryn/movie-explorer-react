import { FaPlus, FaTimes } from "react-icons/fa";

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="py-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-white"
      >
        {question}
        <span
          className={`ml-2 transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FaTimes /> : <FaPlus />}
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-2 text-white/70 text-base">{answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;
