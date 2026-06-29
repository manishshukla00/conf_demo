import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://gyaanarth.com/wp-content/uploads/2022/05/United-University-Cover-Page-7.jpg)",
        }}
      ></div>

      {/* Lighter Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-blue-900/60 to-violet-900/70"></div>

      {/* Animated Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center text-white px-4 pt-32 pb-24">
        {/* Main Heading */}
        <div
          className={`mb-12 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
        >
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl">
            1st International Conference on
          </h1>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="block text-white drop-shadow-2xl mb-3">
              Advances in Intelligent Computing
            </span>
            <span className="block text-white drop-shadow-2xl">
              and Communication Technology
            </span>
          </h2>
          <div className="inline-block px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-700 rounded-full shadow-2xl mt-4">
            <span className="font-display text-3xl md:text-4xl font-black text-white">
              AICCT-2025
            </span>
          </div>
        </div>

        {/* Event Details */}
        <div
          className={`space-y-5 mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-2xl md:text-3xl font-bold text-cyan-300 drop-shadow-lg">
            📅 13-14 September 2025
          </p>
          <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg">
            Organized by
          </p>
          <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            Department of Computer Science & Engineering
          </p>
          <p className="text-lg md:text-xl font-semibold text-white drop-shadow-lg">
            United University, Prayagraj, India
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap gap-4 justify-center ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <button className="btn-primary group">
            <span className="relative z-10">Book Tickets</span>
            <svg
              className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button className="btn-secondary group">
            <span className="relative z-10">View Schedule</span>
            <svg
              className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Download Buttons Section */}
      <div className="relative z-20 w-full bg-black bg-opacity-30 backdrop-blur-md py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="files/AICCTOfflineScheduleDay1.pdf"
              download
              className="group w-full md:w-auto text-center bg-white bg-opacity-10 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Offline Schedule Day-1</span>
            </a>
            <a
              href="files/AICCTOnlineScheduleDay1-4.pdf"
              download
              className="group w-full md:w-auto text-center bg-white bg-opacity-10 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Online Schedule Day-1</span>
            </a>
            <a
              href="files/AICCTOnlineScheduleDay2.pdf"
              download
              className="group w-full md:w-auto text-center bg-white bg-opacity-10 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Online Schedule Day-2</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
