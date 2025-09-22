import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FaRegFlag } from "react-icons/fa";

function NavbarDetail({ title }) {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-white hover:text-gray-300 hover:cursor-pointer transition"
        >
          <HiOutlineArrowLeft size={20} />
        </button>

        <h1 className="text-white text-xl md:text-base font-bold truncate max-w-[60%] text-center">
          {title}
        </h1>

        <button className="text-white hover:text-gray-300 hover:cursor-pointer transition">
          <FaRegFlag size={18} />
        </button>
      </div>
    </nav>
  );
}

export default NavbarDetail;
