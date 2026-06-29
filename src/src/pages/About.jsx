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
  { icon: "🎤", text: "Engage with leading global experts and keynote speakers" },
  { icon: "🔬", text: "Discover the latest research trends and innovations" },
  { icon: "🤝", text: "Network with researchers, academicians & industry leaders" },
  { icon: "📝", text: "Present your research and receive expert feedback" },
  { icon: "🚀", text: "Explore international collaboration opportunities" },
  { icon: "🏆", text: "Publish in Scopus/SCIE indexed journals" },
];

const publications = [
  "CRC Press (FIST Series) — Scopus Indexing",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden pt-28 pb-20 px-4 text-center">
        {/* blurred blobs */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-indigo-500 bg-opacity-30 text-indigo-200 text-sm font-semibold rounded-full border border-indigo-400 border-opacity-40 mb-6 tracking-widest uppercase">
            AICCT 2025
          </span>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              AICCT 2025
            </span>
          </h1>
          <p className={`text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            1st International Conference on Advances in Intelligent Computing and Communication Technology —
            bringing together the brightest minds from academia and industry worldwide.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-1 w-12 rounded-full bg-cyan-400"></div>
            <div className="h-1 w-6 rounded-full bg-blue-400"></div>
            <div className="h-1 w-3 rounded-full bg-violet-400"></div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-3xl p-6 text-center hover:bg-opacity-10 transition-all duration-300">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl font-black text-white">{s.value}</div>
              <div className="text-slate-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── About Text ── */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-start">
          {/* Logo */}
          <div className="flex flex-col items-center gap-5 flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-white bg-opacity-10 border border-white border-opacity-20 flex items-center justify-center overflow-hidden p-2">
              <img src="/images/logo.png" alt="AICCT Logo" className="w-full h-full object-contain" />
            </div>
            <div className="w-32 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl flex items-center justify-center overflow-hidden p-3">
              <img src="/images/crc.png" alt="CRC Press" className="w-full object-contain" />
            </div>
          </div>
          {/* Text */}
          <div className="flex-1 space-y-5">
            <h2 className="text-2xl font-bold text-white">About The Conference</h2>
            <p className="text-slate-300 leading-relaxed">
              AICCT-2025 is an international conference with the objective of providing a platform for academicians,
              researchers, scholars, and students from various institutions, universities, and industries in India
              and abroad to exchange research and innovative ideas in Artificial Intelligence, Machine Learning,
              Natural Language Processing, Smart Systems, Networks, Communication Systems, Quantum Computing,
              Blockchain and Cyber-Physical Systems.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We invite students, research scholars, academicians, engineers, scientists, and industrialists
              working in the field of Intelligent Computing and Communications Techniques from all over the world
              to submit their original research and share knowledge at AICCT-2025.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://cmt3.research.microsoft.com/AICCT2025/Submission/Index" target="_blank" rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-sm">
                Submit Article
              </a>
              <a href="/files/Word_Sample_template_8.25 x11_column.docx" download
                className="px-6 py-2.5 bg-white bg-opacity-10 border border-white border-opacity-20 text-white font-semibold rounded-full hover:bg-opacity-20 transition-all duration-300 text-sm">
                Doc Template
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Mission &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Vision</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              color: "from-blue-500 to-cyan-400",
              text: "To provide a global platform for researchers and professionals to present innovative ideas and solutions to real-world challenges in computing, communication, and technology — fostering collaboration across borders.",
            },
            {
              icon: "🔭",
              title: "Our Vision",
              color: "from-violet-500 to-indigo-400",
              text: "We envision a future where intelligent technology drives sustainable development and innovation, creating opportunities for researchers worldwide to shape the digital future together.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300">
              <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`}></div>
              <div className="p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Topics ── */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Key{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Topics</span>
          </h2>
          <p className="text-slate-400">Research areas covered at AICCT 2025</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h, i) => (
            <div key={i} className={`bg-white rounded-3xl overflow-hidden border ${h.border} shadow-lg hover:scale-105 transition-all duration-300`}>
              <div className={`h-1.5 bg-gradient-to-r ${h.color}`}></div>
              <div className={`bg-gradient-to-br ${h.bg} p-5`}>
                <div className="text-3xl mb-3">{h.icon}</div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{h.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why Attend ── */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">Attend?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyAttend.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl p-5 hover:bg-opacity-10 transition-all duration-300">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Publications ── */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-indigo-900 to-blue-900 border border-indigo-700 border-opacity-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <span className="text-3xl mb-3 block">📚</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Publication Opportunities</h2>
            <p className="text-slate-400 text-sm">Accepted papers will be considered for publication in</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {publications.map((pub, i) => (
              <div key={i} className="flex items-start gap-3 bg-white bg-opacity-5 rounded-2xl p-4 border border-white border-opacity-10">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{pub}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-xs mt-6">* No APC for journals 1–4 · APC applicable for Sensors, MDPI</p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-3xl mx-auto px-4 pb-20 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to Join AICCT 2025?</h2>
          <p className="text-blue-100 mb-8 leading-relaxed">Submit your research and be part of the global conversation shaping the future of intelligent computing.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://cmt3.research.microsoft.com/AICCT2025/Submission/Index" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-sm">
              Submit Your Paper
            </a>
            <Link to="/registration"
              className="px-8 py-3 bg-white bg-opacity-20 border border-white border-opacity-40 text-white font-bold rounded-full hover:bg-opacity-30 transition-all duration-300 text-sm">
              Register Now
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
