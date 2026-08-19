import React from "react";

const About = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Logos */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4">
          <img
            src="/images/springer.jpeg"
            alt="United University Logo"
            className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src="/images/book.png"
            alt="Taylor & Francis Logo"
            className="w-40 object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">About The ConCISE 2027</h2>
          <p className="text-gray-600 text-justify">
            ConCISE 2027 is a two-day International Conference that brings together researchers, academicians, scientists, industry professionals, engineers, policymakers, and students from across the globe to share knowledge, present innovative research, and explore emerging technological trends.

The conference provides a common platform for research, collaboration, and knowledge exchange in key areas including Computational Intelligence, Artificial Intelligence, Smart Computing, Cognitive Computing, Systems Engineering, IoT, Generative AI, Cloud Computing, Machine Learning, Deep Learning, and related emerging technologies.

Through keynote talks, technical sessions, paper presentations, and expert interactions, ConCISE 2027 aims to foster interdisciplinary collaboration and academia–industry partnerships, while highlighting innovative solutions for a smarter, sustainable, and connected future.
          </p>
          <p className="text-gray-600 text-justify">
            
          </p>
          <p className="text-blue-800 font-bold text-justify text-lg">
            All accepted and presented papers will be published in Springer LNNS book series (Scopus Indexed)
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center justify-center flex-wrap gap-4">
          <a href="https://cmt3.research.microsoft.com/AICCT2025/Submission/Index">
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-800">
              SUBMIT ARTICLE
            </button>
          </a>
          <a
            href="/files/Word_Sample_template_8.25 x11_column.docx"
            download
            className="text-blue-600 underline hover:text-blue-800"
          >

            <button className="px-6 py-2 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-800">
              DOC TEMPLATE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;


