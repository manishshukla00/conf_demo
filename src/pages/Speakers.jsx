import React from "react";

const Speakers = () => {
  const speakers = [
    {
      name: "Prof. Siddhartha Bhattacharyya",
      image: "https://i1.rgstatic.net/ii/profile.image/564921299464192-1511699141118_Q128/Siddhartha-Bhattacharyya-2.jpg",
      designation: "Professor",
      department: "VSB Technical University of Ostrava, Czech Republic",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Prof. Jyoti Sekhar Banerjee",
      image: "https://i1.rgstatic.net/ii/profile.image/886099685675010-1588274036653_Q512/Jyoti-Sekhar-Banerjee.jpg",
      designation: "Asso. Prof. & Head, CSE(AI&ML)",
      department: "Techno Bengal Institute of Technology&Remote Researcher,UOWM,Greece",
      gradient: "from-blue-500 to-violet-500",
    },
    {
      name: "Dr. Rajesh Prasad",
      image: "/images/17.jpg",
      designation: "Professor",
      department: "AKGEC , India",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 p-4">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6 pt-8">
          Meet Our <span className="text-violet-500">Speakers</span>
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center">
          Our conference features distinguished speakers who are experts in
          their respective fields. Learn from their insights and experiences.
        </p>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 p-1 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="bg-white rounded-lg p-4 h-full flex flex-col items-center">
                {/* Speaker Image */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mb-4 border-4 border-gray-300 shadow-md"
                />
                {/* Speaker Name */}
                <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">
                  {speaker.name}
                </h2>
                {/* Speaker Designation */}
                <p className="text-gray-600 text-center text-sm">
                  {speaker.designation}
                </p>
                {/* Speaker Department */}
                <p className="text-sm text-gray-500 text-center mt-2">
                  {speaker.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;


