import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 gap-y-4 text-sm pt-20">
      <div className="max-w-4xl mx-auto flex flex-col space-y-5">
        <div className="flex space-x-8">
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

        <div className="flex flex-wrap gap-x-16 text-sm font-bold">
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

        <p className="mt-7 text-sm">&copy; 1997-2025 NetFlix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
