import { FaStar } from "react-icons/fa";

function RatingFilter({ rating, onChange }) {
  return (
    <div className="flex items-center space-x-2">
      <FaStar size={20} className="text-yellow-400" />
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        value={rating || 0}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-60 accent-red-600 custom-range"
      />
      <span className="text-yellow-400 font-bold">{rating || 0}</span>
    </div>
  );
}

export default RatingFilter;
