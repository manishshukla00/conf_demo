import React from "react";

const Callforpapers = () => {
  const tracks = [
    {
      title: "Track-1: Advances in Machine Learning and Deep Learning",
      topics: [
        "General Machine Learning, Active Machine Learning",
        "Fuzzy Learning",
        "Kernel Based Learning",
        "Genetic Learning",
        "Bayesian Estimation Approaches",
        "Recurrent Neural Networks",
        "Machine Learning over the Cloud",
        "Learning Paradigms",
        "Clustering, Classification and Regression Methods",
        "Supervised, Semi-Supervised and Unsupervised Learning",
      ],
    },
    {
      title: "Track-2: Advances in Data Science",
      topics: [
        "Mathematical, Probabilistic and Statistical Models and Theories",
        "Data Mining, Exploratory Data Analysis and Predictive Modelling",
        "Machine Learning Theories, Models and Systems",
        "Knowledge Discovery Theories, Models and Systems",
        "Manifold and Metric Learning",
      ],
    },
    {
      title:
        "Track-3: Applications of Artificial Intelligence in Interdisciplinary Areas",
      topics: [
        "Applications of AI in Manufacturing Industry",
        "Applications of AI in Insurance and Banking",
        "Applications of AI in Cybersecurity",
        "Applications of AI in Robotics and Automation",
        "Applications of AI in Cloud Computing and Cloud Infrastructure",
      ],
    },
    {
      title: "Track-4: High Performance Computing",
      topics: [
        "Autonomic Computing",
        "Cluster, Cloud and Grid Computing",
        "Distributed Computing",
        "Parallel and Distributed Algorithms/Systems",
        "Quantum Computing",
      ],
    },
    {
      title: "Track-5: Advances in Communication and Networks",
      topics: [
        "Ad-hoc Networks",
        "Computer Networks",
        "Cyber Crime",
        "Network Security and Privacy",
        "Wireless Communication",
      ],
    },
    {
      title: "Track-6: Computer Technologies Trends",
      topics: [
        "Big Data",
        "Internet of Things",
        "Blockchain",
        "Cyber-Physical Systems",
        "Smart Cities",
        "Machine to Machine",
        "Digital Transformation",
        "Social Computing",
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
          AICCT-2025 is soliciting original, previously unpublished, and
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


