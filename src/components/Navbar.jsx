// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChevronIcon = ({ open }) => (
  <svg
    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileDropdown(null);
  };

  return (
    <div className="w-full bg-white bg-opacity-95 backdrop-blur-lg fixed top-0 left-0 z-50 shadow-lg border-b border-gray-200">
      <nav className="w-full max-w-screen-xl mx-auto flex items-center px-4 sm:px-6 lg:px-8 py-3">

        {/* ── LEFT: Logo ── */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
              <img
                src="/images/logo.png"
                alt="AICCT Logo"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-gray-900">AICCT</span>
              <p className="text-xs text-gray-500">2025</p>
            </div>
          </Link>
        </div>

        {/* ── CENTER: Desktop Nav Links ── */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-1 font-semibold">
          <Link
            to="/"
            className="relative px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors group text-sm"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors group text-sm"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Committee Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("committee")}
              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
            >
              Committee <ChevronIcon open={openDropdown === "committee"} />
            </button>
            {openDropdown === "committee" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden z-10">
                <Link
                  to="/committee-member"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-blue-700 transition-all"
                >
                  Committee Members
                </Link>
                <Link
                  to="/technicalprogramcommitte"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-blue-700 transition-all"
                >
                  Technical Program Committee
                </Link>
              </div>
            )}
          </div>

          {/* Call for Papers Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("callforpapers")}
              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
            >
              Call For Papers <ChevronIcon open={openDropdown === "callforpapers"} />
            </button>
            {openDropdown === "callforpapers" && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden z-10">
                <Link
                  to="/callforpapers"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-blue-700 transition-all"
                >
                  Call for Papers
                </Link>
                <Link
                  to="/author-guidelines"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-blue-700 transition-all"
                >
                  Submission
                </Link>
                <Link
                  to="/publication-ethics"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-blue-700 transition-all"
                >
                  Publication Ethics
                </Link>
              </div>
            )}
          </div>

          {/* Speakers Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("speakers")}
              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
            >
              Speakers <ChevronIcon open={openDropdown === "speakers"} />
            </button>
            {openDropdown === "speakers" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden z-10">
                <Link
                  to="/speakers"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-blue-700 transition-all"
                >
                  Speaker
                </Link>
                <Link
                  to="/keynotespeakers"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-blue-700 transition-all"
                >
                  Keynote Speaker
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/registration"
            className="relative px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors group"
          >
            Registration
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact"
            className="relative px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* ── RIGHT: CTA Buttons (desktop) ── */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-3 ml-4">
          <Link
            to="/registration"
            className="px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Book Tickets
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 bg-teal-500 text-white text-sm font-semibold rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Exhibit
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-gray-900 text-3xl focus:outline-none hover:text-blue-600 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* ── Mobile Fullscreen Menu ── */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-2 z-40 overflow-y-auto py-10"
          style={{ fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif" }}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 text-3xl text-white hover:text-blue-400 transition-colors"
          >
            ✖
          </button>

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors py-2"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMobileMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors py-2"
          >
            About
          </Link>

          {/* Committee — collapsible dropdown */}
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => toggleMobileDropdown("committee")}
              className="flex items-center gap-1 text-2xl font-bold hover:text-blue-300 transition-colors py-2 focus:outline-none"
            >
              Committee
              <ChevronIcon open={mobileDropdown === "committee"} />
            </button>
            {mobileDropdown === "committee" && (
              <div className="flex flex-col items-center gap-1 mt-1 mb-2 bg-white bg-opacity-10 rounded-xl px-6 py-3 w-72">
                <Link
                  to="/committee-member"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium hover:text-blue-300 transition-colors py-1"
                >
                  Committee Members
                </Link>
                <Link
                  to="/technicalprogramcommitte"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium hover:text-blue-300 transition-colors py-1"
                >
                  Technical Program Committee
                </Link>
              </div>
            )}
          </div>

          {/* Call for Papers — collapsible dropdown */}
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => toggleMobileDropdown("callforpapers")}
              className="flex items-center gap-1 text-2xl font-bold hover:text-blue-300 transition-colors py-2 focus:outline-none"
            >
              Call For Papers
              <ChevronIcon open={mobileDropdown === "callforpapers"} />
            </button>
            {mobileDropdown === "callforpapers" && (
              <div className="flex flex-col items-center gap-1 mt-1 mb-2 bg-white bg-opacity-10 rounded-xl px-6 py-3 w-72">
                <Link
                  to="/callforpapers"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium hover:text-blue-300 transition-colors py-1"
                >
                  Call for Papers
                </Link>
                <Link
                  to="/author-guidelines"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium hover:text-blue-300 transition-colors py-1"
                >
                  Submission
                </Link>
                <Link
                  to="/publication-ethics"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium hover:text-blue-300 transition-colors py-1"
                >
                  Publication Ethics
                </Link>
              </div>
            )}
          </div>

          {/* Speakers — collapsible dropdown */}
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => toggleMobileDropdown("speakers")}
              className="flex items-center gap-1 text-2xl font-bold hover:text-blue-300 transition-colors py-2 focus:outline-none"
            >
              Speakers
              <ChevronIcon open={mobileDropdown === "speakers"} />
            </button>
            {mobileDropdown === "speakers" && (
              <div className="flex flex-col items-center gap-1 mt-1 mb-2 bg-white bg-opacity-10 rounded-xl px-6 py-3 w-72">
                <Link
                  to="/speakers"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium hover:text-blue-300 transition-colors py-1"
                >
                  Speaker
                </Link>
                <Link
                  to="/keynotespeakers"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium hover:text-blue-300 transition-colors py-1"
                >
                  Keynote Speaker
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/registration"
            onClick={closeMobileMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors py-2"
          >
            Registration
          </Link>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors py-2"
          >
            Contact
          </Link>

          {/* Mobile CTA Buttons */}
          <div className="flex gap-4 mt-4">
            <Link
              to="/registration"
              onClick={closeMobileMenu}
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all"
            >
              Book Tickets
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all"
            >
              Exhibit
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
