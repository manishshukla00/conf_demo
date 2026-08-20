import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "2", label: "Conference Days", icon: "📅" },
  { value: "71+", label: "TPC Members", icon: "👥" },
  { value: "Global", label: "Reach", icon: "🌍" },
  { value: "Scopus", label: "Indexed", icon: "📖" },
];

const highlights = [
  {
    icon: "🤖",
    title: "Artificial Intelligence & ML",
    desc: "Deep learning, neural networks, NLP, and intelligent system design.",
    color: "from-blue-500 to-cyan-400",
    bg: "from-blue-50 to-cyan-50",
    border: "border-blue-200",
  },
  {
    icon: "🔗",
    title: "Blockchain & Cyber Security",
    desc: "Distributed systems, cryptography, privacy, and cyber-physical security.",
    color: "from-violet-500 to-purple-400",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-200",
  },
  {
    icon: "📡",
    title: "Smart Networks & IoT",
    desc: "Wireless networks, communication systems, smart cities, and IoT.",
    color: "from-emerald-500 to-teal-400",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
  },
  {
    icon: "⚛️",
    title: "Quantum Computing",
    desc: "Quantum algorithms, quantum communication, and quantum cryptography.",
    color: "from-rose-500 to-pink-400",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-200",
  },
];

const whyAttend = [
  {
    icon: "🎤",
    text: "Engage with leading global experts and keynote speakers",
  },
  {
    icon: "🔬",
    text: "Discover the latest research trends and innovations",
  },
  {
    icon: "🤝",
    text: "Network with researchers, academicians & industry leaders",
  },
  {
    icon: "📝",
    text: "Present your research and receive expert feedback",
  },
  {
    icon: "🚀",
    text: "Explore international collaboration opportunities",
  },
  {
    icon: "🏆",
    text: "Publish in Scopus/SCIE indexed journals",
  },
];

const publications = [
  "Springer — Lecture Notes in Networks and Systems (LNNS)",
  "Recent Advances in Computer Science & Communications, Bentham Science (Scopus)",
  "International Journal of Sensors, Wireless Comm. & Control, Bentham (Scopus)",
  "Journal of Thermal Engineering (ESCI, Scopus)",
  "Sigma Journal of Engineering & Natural Sciences (ESCI)",
  "Sensors, MDPI (SCIE, Scopus)",
];

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-16 px-4">

      {/* =====================================================
          HERO
      ===================================================== */}
      <div className="text-center mb-12">

        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 mb-4 tracking-widest uppercase">
          ConCISE-2027
        </span>

        <h1
          className={`
            text-4xl sm:text-5xl lg:text-6xl
            font-black text-gray-900
            mb-4 leading-tight
            transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          About{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            ConCISE-2027
          </span>
        </h1>

        <p
          className={`
            text-lg text-gray-500
            max-w-3xl mx-auto
            leading-relaxed
            transition-all duration-700 delay-100
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          2<sup>nd</sup> International Conference on
          Artificial Intelligence, Smart Computing
          and Data Science
        </p>

        <div className="mt-5 flex justify-center gap-2">
          <div className="h-1 w-12 rounded-full bg-blue-500"></div>
          <div className="h-1 w-6 rounded-full bg-indigo-400"></div>
          <div className="h-1 w-3 rounded-full bg-violet-400"></div>
        </div>

      </div>

      {/* =====================================================
          STATS
      ===================================================== */}
      <div className="max-w-5xl mx-auto pb-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {stats.map((s, i) => (

            <div
              key={i}
              className="
                bg-white
                border border-gray-200
                rounded-3xl
                p-6
                text-center
                shadow-sm
                hover:shadow-lg
                hover:scale-105
                transition-all
                duration-300
              "
            >

              <div className="text-3xl mb-2">
                {s.icon}
              </div>

              <div className="text-2xl font-black text-gray-900">
                {s.value}
              </div>

              <div className="text-gray-500 text-sm mt-1">
                {s.label}
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* =====================================================
          ABOUT CONFERENCE
      ===================================================== */}
      <div className="max-w-5xl mx-auto pb-16">

        <div
          className="
            bg-white
            border border-gray-200
            rounded-3xl
            p-8 md:p-12
            flex flex-col lg:flex-row
            gap-10
            items-start
            shadow-sm
          "
        >

          {/* LOGOS */}
          <div className="flex flex-col items-center gap-5 flex-shrink-0">

            <div
              className="
                w-32 h-32
                rounded-full
                bg-blue-50
                border border-blue-200
                flex items-center justify-center
                overflow-hidden
                p-2
                shadow-sm
              "
            >
              <img
                src="/images/springer.jpeg"
                alt="ConCISE Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div
              className="
                w-32
                bg-slate-50
                border border-gray-200
                rounded-2xl
                flex items-center justify-center
                overflow-hidden
                p-3
              "
            >
              <img
                src="/images/book.png"
                alt="Springer"
                className="w-full object-contain"
              />
            </div>

          </div>

          {/* TEXT */}
          <div className="flex-1 space-y-5">

            <h2 className="text-2xl font-bold text-gray-900">
              About The Conference
            </h2>

            <p className="text-gray-600 leading-relaxed">
              ConCISE-2027 is an international conference and the objective is to
              provide a platform for academicians, researchers, scholars, and
              students from various institutions, universities, and industries in
              India and abroad to exchange their research and innovative ideas in
              the field of Artificial Intelligence, Machine learning, Natural
              Language Processing, Smart Systems, Networks, and Communication
              Systems, Quantum computing, Blockchain and Cyber-Physical System.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We invite all students, research scholars, academicians, engineers,
              scientists, and industrialists working in the field of Intelligent
              Computing and Communications Techniques from all over the world. We
              warmly welcome all the authors to submit their original research in
              the upcoming conference ConCISE-2027 to share their knowledge and
              experience among each other.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">

              <a
                href="https://cmt3.research.microsoft.com/AICCT2025/Submission/Index"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-2.5
                  bg-gradient-to-r from-blue-600 to-violet-600
                  text-white
                  font-semibold
                  rounded-full
                  hover:scale-105
                  transition-all duration-300
                  shadow-lg
                  text-sm
                "
              >
                Submit Article
              </a>

              <a
                href="/files/Word_Sample_template_8.25 x11_column.docx"
                download
                className="
                  px-6 py-2.5
                  bg-white
                  border border-gray-200
                  text-gray-700
                  font-semibold
                  rounded-full
                  hover:bg-gray-50
                  hover:scale-105
                  transition-all duration-300
                  shadow-sm
                  text-sm
                "
              >
                Doc Template
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <div className="max-w-5xl mx-auto pb-16">

        <div className="text-center mb-10">

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Mission &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Vision
            </span>
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            {
              icon: "🎯",
              title: "Our Mission",
              color: "from-blue-500 to-cyan-400",
              bg: "from-blue-50 to-cyan-50",
              border: "border-blue-200",
              text: "To provide a global platform for researchers and professionals to present innovative ideas and solutions to real-world challenges in computing, communication, and technology — fostering collaboration across borders.",
            },
            {
              icon: "🔭",
              title: "Our Vision",
              color: "from-violet-500 to-indigo-400",
              bg: "from-violet-50 to-indigo-50",
              border: "border-violet-200",
              text: "We envision a future where intelligent technology drives sustainable development and innovation, creating opportunities for researchers worldwide to shape the digital future together.",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                border border-gray-200
                shadow-sm
                hover:scale-105
                hover:shadow-xl
                transition-all duration-300
              "
            >

              <div
                className={`h-1.5 w-full bg-gradient-to-r ${item.color}`}
              ></div>

              <div
                className={`bg-gradient-to-br ${item.bg} p-8`}
              >

                <div className="text-4xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* =====================================================
          KEY TOPICS
      ===================================================== */}
      <div className="max-w-5xl mx-auto pb-16">

        <div className="text-center mb-10">

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Key{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Topics
            </span>
          </h2>

          <p className="text-gray-500">
            Research areas covered at ConCISE-2027
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {highlights.map((h, i) => (

            <div
              key={i}
              className={`
                bg-white
                rounded-3xl
                overflow-hidden
                border ${h.border}
                shadow-sm
                hover:scale-105
                hover:shadow-xl
                transition-all duration-300
              `}
            >

              <div
                className={`h-1.5 bg-gradient-to-r ${h.color}`}
              ></div>

              <div
                className={`bg-gradient-to-br ${h.bg} p-5`}
              >

                <div className="text-3xl mb-3">
                  {h.icon}
                </div>

                <h4 className="font-bold text-gray-900 text-sm mb-2">
                  {h.title}
                </h4>

                <p className="text-gray-500 text-xs leading-relaxed">
                  {h.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* =====================================================
          WHY ATTEND
      ===================================================== */}
      <div className="max-w-5xl mx-auto pb-16">

        <div className="text-center mb-10">

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
              Attend?
            </span>
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {whyAttend.map((item, i) => (

            <div
              key={i}
              className="
                flex items-start gap-4
                bg-white
                border border-gray-200
                rounded-3xl
                p-5
                shadow-sm
                hover:shadow-lg
                hover:scale-105
                transition-all duration-300
              "
            >

              <div
                className="
                  w-11 h-11
                  rounded-2xl
                  bg-blue-50
                  border border-blue-100
                  flex items-center justify-center
                  flex-shrink-0
                  text-2xl
                "
              >
                {item.icon}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed pt-1">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* =====================================================
          PUBLICATIONS
      ===================================================== */}
      <div className="max-w-5xl mx-auto pb-16">

        <div
          className="
            bg-white
            border border-gray-200
            rounded-3xl
            p-8 md:p-12
            shadow-sm
          "
        >

          <div className="text-center mb-8">

            <span className="text-3xl mb-3 block">
              📚
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              Publication Opportunities
            </h2>

            <p className="text-gray-500 text-sm">
              Accepted papers will be considered for publication in
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {publications.map((pub, i) => (

              <div
                key={i}
                className="
                  flex items-start gap-3
                  bg-slate-50
                  rounded-2xl
                  p-4
                  border border-gray-200
                  hover:bg-blue-50
                  transition-colors
                "
              >

                <div
                  className="
                    w-6 h-6
                    rounded-full
                    bg-gradient-to-br from-blue-500 to-violet-500
                    flex items-center justify-center
                    flex-shrink-0
                    mt-0.5
                  "
                >

                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {pub}
                </p>

              </div>

            ))}

          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            * No APC for journals 1–4 · APC applicable for Sensors, MDPI
          </p>

        </div>

      </div>

      {/* =====================================================
          CTA
      ===================================================== */}
      <div className="max-w-3xl mx-auto pb-20 text-center">

        <div
          className="
            bg-gradient-to-br
            from-blue-600
            to-violet-700
            rounded-3xl
            p-10
            shadow-xl
          "
        >

          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to Join ConCISE-2027?
          </h2>

          <p className="text-blue-100 mb-8 leading-relaxed">
            Submit your research and be part of the global conversation shaping
            the future of intelligent computing.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">

            <a
              href="https://cmt3.research.microsoft.com/AICCT2025/Submission/Index"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-3
                bg-white
                text-blue-700
                font-bold
                rounded-full
                hover:scale-105
                transition-all duration-300
                shadow-lg
                text-sm
              "
            >
              Submit Your Paper
            </a>

            <Link
              to="/registration"
              className="
                px-8 py-3
                bg-white/20
                border border-white/40
                text-white
                font-bold
                rounded-full
                hover:bg-white/30
                transition-all duration-300
                text-sm
              "
            >
              Register Now
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;