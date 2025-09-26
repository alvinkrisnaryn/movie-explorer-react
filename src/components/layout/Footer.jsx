import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 text-sm pt-20">
      <div className="max-w-6xl mx-auto flex flex-col space-y-8 px-16">
        <div className="flex justify-center md:justify-start gap-x-10">
          <a href="#">
            <FaFacebook size={28} />
          </a>
          <a href="#">
            <FaInstagram size={28} />
          </a>
          <a href="#">
            <FaTwitter size={28} />
          </a>
          <a href="#">
            <FaYoutube size={28} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-10 font-bold">
          <ul className="flex flex-col space-y-2">
            <li className="link-underline">Audio Description</li>
            <li className="link-underline">Investor Relations</li>
            <li className="link-underline">Legal Information</li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li className="link-underline">Help Center</li>
            <li className="link-underline">Job Vacancy</li>
            <li className="link-underline">Cookie Preferences</li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li className="link-underline">Gift Card</li>
            <li className="link-underline">Terms of Use</li>
            <li className="link-underline">Company Information</li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li className="link-underline">Media Center</li>
            <li className="link-underline">Privacy</li>
            <li className="link-underline">Contact Us</li>
          </ul>
        </div>

        <p className="text-center md:text-left text-xs">
          &copy; 1997-2025 NetFlix, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
