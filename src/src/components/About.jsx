import React from "react";

const About = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Logos */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4">
          <img
            src="/images/logo.png"
            alt="United University Logo"
            className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            height={40}
            src="images/crc.png"
            alt="Taylor & Francis Logo"
            className="w-40 object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">About The AICCT</h2>
          <p className="text-gray-600 text-justify">
            AICCT-2025 is an international conference and the objective is to
            provide a platform for academicians, researchers, scholars, and
            students from various institutions, universities, and industries in
            India and abroad to exchange their research and innovative ideas in
            the field of Artificial Intelligence, Machine learning, Natural
            Language Processing, Smart Systems, Networks, and Communication
            Systems, Quantum computing, Blockchain and Cyber-Physical System.{" "}
          </p>
          <p className="text-gray-600 text-justify">
            We invite all students, research scholars, academicians, engineers,
            scientists, and industrialists working in the field of Intelligent
            Computing and Communications Techniques from all over the world. We
            warmly welcome all the authors to submit their original research in
            the upcoming conference AICCT-2025 to share their knowledge and
            experience among each other.
          </p>
          <p className="text-blue-800 font-bold text-justify text-lg">
            The paper will be published in conference Proceedings Series on
            Futuristic Intelligent and Smart Technologies (FIST), CRC Press,
            USA. <br /> The Proceedings volume will be sent for Indexing to
            Scopus for Inclusion after publication. <br /> Selected papers
            (Extended Version) will be submitted for Scopus/SCIE/SCI Journal
            Publication. <br /> <br /> Special Issue:- Selected Papers (Extended
            version) will be published in <br /> 1. Recent Advances in Computer
            Science and Communications, Bentham Science Publishers (Scopus){" "}
            <br /> 2. International Journal of Sensors, Wireless Communications
            and Control, Bentham Science Publishers (Scopus) <br /> 3. Journal
            of Thermal Engineering (ESCI, Scopus) <br /> 4. Sigma Journal of
            Engineering and Natural Sciences (ESCI) (No APC for any Journal){" "}
            <br /> 5. Sensors, MDPI journal (SCIE, Scopus) (APC Applicable)
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center justify-center flex-wrap gap-4">
          <a href="https://cmt3.research.microsoft.com/AICCT2025/Submission/Index">
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-800">
              SUBMIT ARTICLE
            </button>{" "}
            {""}
          </a>
          <a
            href="/files/Word_Sample_template_8.25 x11_column.docx"
            download
            className="text-blue-600 underline hover:text-blue-800"
          >
            {" "}
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-800">
              DOC TEMPLATE
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;


