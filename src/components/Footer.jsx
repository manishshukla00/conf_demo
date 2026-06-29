import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white py-10">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About AICCT</h3>
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              AICCT 2025 is an international conference that brings together
              researchers, academicians, and industry professionals to discuss
              the latest advancements in  intellegent computing, communication, and
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 relative hover:text-blue-400 transition-transform transform hover:scale-105 group"
                >
                  Home
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-violet-500 to-emerald-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 relative hover:text-blue-400 transition-transform transform hover:scale-105 group"
                >
                  About
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-violet-500 to-emerald-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/committee-member"
                  className="text-gray-400 relative hover:text-blue-400 transition-transform transform hover:scale-105 group"
                >
                  Committee
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-violet-500 to-emerald-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/speakers"
                  className="text-gray-400 relative hover:text-blue-400 transition-transform transform hover:scale-105 group"
                >
                  Speakers
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-violet-500 to-emerald-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/callforpapers"
                  className="text-gray-400 relative hover:text-blue-400 transition-transform transform hover:scale-105 group"
                >
                  Call For Papers
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-violet-500 to-emerald-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Department of CSE</li>
              <li>+919161292060</li>
              <li>sanjeev.kumar@uniteduniversity.edu.in</li>
              <li>
                United University, Prayagraj, Uttar Pradesh (INDIA)
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; 2025 AICCT | Developed by Dr. Sanjeev Gupta. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


