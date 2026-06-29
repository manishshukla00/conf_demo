import React, { useState, useEffect } from "react";

const Speakers = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById("speakers-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const speakers = [
    {
      name: "Prof. Rajeev Srivastava",
      image: "/images/RajeevPhoto1.jpeg",
      designation: "Director",
      department: "IIIT Ranchi",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Prof. Dr. Sanjay Mishra",
      image: "/images/sanjay-misra.png",
      designation: "Senior Scientist",
      department: "Institute for Energy Technology, Halden",
      gradient: "from-blue-500 to-violet-500",
    },
    {
      name: "Prof. Shekhar Verma",
      image: "/images/sverma.jpg",
      designation: "Professor in CSE",
      department: "Indian Institute of Information Technology - Allahabad",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="speakers-section"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            They've spoken at{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              our events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-renowned experts and thought leaders sharing their insights
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${speaker.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div className="relative bg-white m-[2px] rounded-2xl overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${speaker.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {speaker.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      {speaker.designation}
                    </p>
                    <p className="text-sm text-gray-500">
                      {speaker.department}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Speakers Button */}
        <div
          className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <button className="px-10 py-4 bg-gradient-to-r from-indigo-900 via-indigo-900 to-violet-900 text-white font-display font-semibold text-lg rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10">See all speakers</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900 via-indigo-900 to-indigo-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
