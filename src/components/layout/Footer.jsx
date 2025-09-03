import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-black/98 text-gray-400 py-15">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[20%_10%_70%] gap-8 items-start">
        <div className="space-y-4">
          <img src="/logo-netflix.png" alt="Netflix Logo" className="h-9" />

          <p className="text-lg flex items-center">
            <FaMapMarkerAlt size={20} className="mr-2" /> Netflix Indonesia
          </p>

          <div className="relative inline-block mt-5">
            <HiOutlineGlobeAlt size={20} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-event-none" />
            <select className="pl-10 pr-4 py-2 bg-black border border-gray-500 rounded text-base text-white appearance-none ">
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
          </div>
        </div>

        <div></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-3 text-white">Account Services</h3>
            <ul className="space-y-2">
              <li>Redeem Gift Cards</li>
              <li>Account</li>
              <li>Buy Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Brand & Media</h3>
            <ul className="space-y-2">
              <li>Netflix Shop</li>
              <li>Media Center</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Support</h3>
            <ul className="space-y-2">
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Speed Test</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>Cookies</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
