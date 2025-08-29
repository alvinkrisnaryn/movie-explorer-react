import { FaStar } from "react-icons/fa";

function RatingFilter({ rating, onChange }) {
  return (
    <div className="flex items-center space-x-2">
      <FaStar className="text-yellow-400" />
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        value={rating || 0}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className="text-yellow-400 font-bolf">{rating || 0}</span>
    </div>
  );
}

export default RatingFilter;
