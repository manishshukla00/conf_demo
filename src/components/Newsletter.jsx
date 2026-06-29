import React, { useState, useEffect } from "react";

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("newsletter-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email, "Name:", firstName);
  };

  return (
    <section
      id="newsletter-section"
      className="section-padding relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-900 to-violet-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-white ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get access to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-violet-300 to-indigo-300">
                exclusive discounts
              </span>{" "}
              and announcements
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join the AICCT network now for updates, speakers news, and early
              access to offers.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-gray-200">
                  Early bird registration discounts
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-gray-200">Exclusive speaker announcements</p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-gray-200">
                  Priority access to workshops and sessions
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white border-opacity-20 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-semibold mb-2 text-sm"
                  >
                    Email address <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@example.com"
                    required
                    className="w-full px-4 py-4 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* First Name Input */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-white font-semibold mb-2 text-sm"
                  >
                    First name <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                    className="w-full px-4 py-4 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Privacy Notice */}
                <p className="text-sm text-gray-300">
                  You may withdraw your consent at any time.{" "}
                  <a
                    href="#"
                    className="text-violet-300 hover:text-violet-200 underline"
                  >
                    Learn more
                  </a>{" "}
                  on our{" "}
                  <a
                    href="#"
                    className="text-violet-300 hover:text-violet-200 underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-violet-300 hover:text-violet-200 underline"
                  >
                    T&Cs
                  </a>
                  .
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-display font-bold text-lg rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  Join our network
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

// Made with Bob


