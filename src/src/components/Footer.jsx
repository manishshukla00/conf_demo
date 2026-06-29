import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white py-10">
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About AICCT</h3>
          <p className="text-gray-400 text-sm leading-relaxed text-justify">
            AICCT 2025 is an international conference that brings together researchers, academicians,
            and industry professionals to discuss the latest advancements in intelligent computing,
            communication, and technology.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[{ to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/committee-member", label: "Committee" }, { to: "/speakers", label: "Speakers" }, { to: "/callforpapers", label: "Call For Papers" }].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-gray-400 relative hover:text-blue-400 transition-transform transform hover:scale-105 group">
                  {label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-violet-500 to-emerald-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Department of CSE</li>
            <li>+919161292060</li>
            <li>sanjeev.kumar@uniteduniversity.edu.in</li>
            <li>United University, Prayagraj, Uttar Pradesh (INDIA)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { href: "https://facebook.com", Icon: FaFacebookF },
              { href: "https://twitter.com", Icon: FaTwitter },
              { href: "https://linkedin.com", Icon: FaLinkedinIn },
              { href: "https://instagram.com", Icon: FaInstagram },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110">
                <Icon className="text-2xl" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; 2025 AICCT | Developed by Dr. Sanjeev Gupta. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
