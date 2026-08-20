import React from "react";

const Callforpapers = () => {
 const tracks = [
  {
    title: "Track-1: Intelligent Systems",
    topics: [
      "Intelligent Human Interfacing and Agent-Based Systems",
      "Cognitive and Reactive Distributed AI Systems",
      "Intelligent Time Series Prediction",
      "AI and Robotic Process Automation",
      "Fog & Edge Computing",
      "Generative and Explainable AI",
      "Embedded Systems",
    ],
  },

  {
    title: "Track-2: Advanced Computing and Modeling",
    topics: [
      "NLP and Machine Translation",
      "Intelligent Control and Automation",
      "Visual and Multimedia Computing",
      "Combinatorial Game Theory",
      "Distributed Quantum Computing",
      "Nature-Inspired Computing",
      "Cloud Computing Techniques for Big Data",
      "High-Performance Data Mining Algorithms",
      "Statistical Modeling of Intelligent Systems",
    ],
  },

  {
    title: "Track-3: Systems Engineering and Security",
    topics: [
      "Modeling and Simulation of Intelligent Systems",
      "Holistic Integration of Intelligent Systems",
      "Intelligent Systems Requirements Management",
      "Human-Centric Lifecycle Management of Smart Systems",
      "Intelligent Subsystem Integration and Management",
      "System of Interest (SoI) Identification",
      "Risk and Trade-off Analysis and Optimization",
      "Security, Privacy, and Game Theory in Networked Systems",
      "Secured Smart Systems Integration",
      "Distributed Systems Security",
    ],
  },

  {
    title: "Track-4: Systems Engineering Applications",
    topics: [
      "Aerospace and Defense Systems",
      "Software and IT Infrastructure",
      "Healthcare Systems",
      "Transportation Systems",
      "Smart Surveillance",
      "Pattern Recognition and Analysis",
      "Real-Time Systems",
      "Complex Multimodal Systems",
    ],
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 p-8">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6 pt-4">
          Call for Papers
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center">
          ConCISE-2027 is soliciting original, previously unpublished, and
          high-quality research papers addressing research challenges and
          advances in the tracks mentioned below. The topics of the conference
          include, but are not limited to:
        </p>

        {/* Responsive Cards for Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 p-1 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="bg-white rounded-lg p-4 h-full">
                <h2 className="text-xl font-bold text-blue-700 text-left mb-4">
                  {track.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {track.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Callforpapers;


