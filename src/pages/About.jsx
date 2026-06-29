import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 p-8">
      <div className="max-w-7xl mx-auto mt-20 pt-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6">
          About <span className="text-violet-500">AICCT 2025</span>
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8 text-justify">
          The International Conference on Innovations in Computing,
          Communication, and Technology (AICCT) 2025 is a premier event that
          brings together researchers, academicians, and industry professionals
          to discuss the latest advancements in computing, communication, and
          technology.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1 */}
          <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 p-1 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-justify">
                Our mission is to provide a platform for researchers and
                professionals to present their innovative ideas and solutions to
                real-world challenges in computing, communication, and
                technology.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 p-1 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 text-justify mb-6">
                We envision a future where technology drives sustainable
                development and innovation, creating a better world for
                everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Why Attend AICCT 2025?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li>Engage with leading experts in the field.</li>
              <li>Discover the latest trends and innovations.</li>
              <li>
                Network with researchers, academicians, and industry
                professionals.
              </li>
              <li>Present your research and receive valuable feedback.</li>
              <li>Explore collaboration opportunities for future projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


