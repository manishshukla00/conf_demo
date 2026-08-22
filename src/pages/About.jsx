import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   STATS
   ========================================================= */

const stats = [
  {
    value: "2",
    label: "Conference Days",
    icon: "📅",
  },
  {
    value: "71+",
    label: "TPC Members",
    icon: "👥",
  },
  {
    value: "Global",
    label: "Reach",
    icon: "🌍",
  },
  {
    value: "Scopus",
    label: "Indexed",
    icon: "📖",
  },
];

/* =========================================================
   HIGHLIGHTS
   ========================================================= */

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

/* =========================================================
   WHY ATTEND
   ========================================================= */

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

/* =========================================================
   PUBLICATIONS
   ========================================================= */

const publications = [
  "CRC Press (FIST Series) — Scopus Indexing",
  "Recent Advances in Computer Science & Communications, Bentham Science (Scopus)",
  "International Journal of Sensors, Wireless Comm. & Control, Bentham (Scopus)",
  "Journal of Thermal Engineering (ESCI, Scopus)",
  "Sigma Journal of Engineering & Natural Sciences (ESCI)",
  "Sensors, MDPI (SCIE, Scopus)",
];

/* =========================================================
   ABOUT COMPONENT
   ========================================================= */

const About = () => {
  const [visible, setVisible] = useState(false);

  /* =======================================================
     MODERN FONT
     ======================================================= */

  useEffect(() => {
    const fontId = "concise-about-font";

    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");

      link.id = fontId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";

      document.head.appendChild(link);
    }

    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-900
        via-indigo-950
        to-blue-900
        pt-[74px]
        sm:pt-[80px]
        lg:pt-[84px]
      "
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* =====================================================
          TOP HERO
          SAME STYLE AS REGISTRATION PAGE
          ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-slate-50
          via-blue-50
          to-indigo-50
          pt-5
          sm:pt-6
          lg:pt-7
          pb-8
          sm:pb-9
          px-4
          text-center
        "
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* =================================================
              CONCISE-2027
              ================================================= */}

          <div className="mb-3">
            <span
              className="
                inline-block
                px-4
                py-1
                bg-blue-100
                text-blue-700
                text-[11px]
                sm:text-xs
                font-semibold
                rounded-full
                border
                border-blue-200
                tracking-[0.16em]
                uppercase
              "
            >
              CONCISE-2027
            </span>
          </div>

          {/* =================================================
              MAIN HEADING
              ================================================= */}

          <h1
            className={`
              text-3xl
              sm:text-4xl
              lg:text-[46px]
              leading-[1.1]
              font-semibold
              text-slate-900
              tracking-[-0.04em]
              transition-all
              duration-700
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            About{" "}
            <span
              className="
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-blue-600
                to-violet-600
              "
            >
              ConCISE-2027
            </span>
          </h1>

          {/* =================================================
              SUBTITLE
              ================================================= */}

          <p
            className={`
              max-w-3xl
              mx-auto
              mt-3
              text-sm
              sm:text-[15px]
              leading-6
              text-slate-500
              font-normal
              transition-all
              duration-700
              delay-100
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            International Conference on Computational Intelligence & Systems
            Engineering
          </p>

          {/* =================================================
              DIVIDER
              ================================================= */}

          <div className="mt-5 flex justify-center items-center gap-2">
            <div className="h-1 w-10 rounded-full bg-blue-500"></div>

            <div className="h-1 w-5 rounded-full bg-indigo-400"></div>

            <div className="h-1 w-2.5 rounded-full bg-violet-400"></div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DARK CONTENT AREA
          ===================================================== */}

      <div
        className="
          bg-gradient-to-br
          from-slate-900
          via-indigo-950
          to-blue-900
        "
      >
        {/* ===================================================
            STATS
            =================================================== */}

        <section className="max-w-5xl mx-auto px-4 pt-9 pb-9">
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-3
            "
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="
                  bg-white
                  bg-opacity-5
                  border
                  border-white
                  border-opacity-10
                  rounded-2xl
                  p-4
                  sm:p-5
                  text-center
                  hover:bg-opacity-10
                  transition-all
                  duration-300
                "
              >
                <div className="text-2xl sm:text-3xl mb-1.5">{s.icon}</div>

                <div
                  className="
                    text-xl
                    sm:text-2xl
                    font-semibold
                    text-white
                    tracking-tight
                  "
                >
                  {s.value}
                </div>

                <div
                  className="
                    text-slate-400
                    text-[11px]
                    sm:text-xs
                    mt-1
                    font-medium
                  "
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            ABOUT THE CONFERENCE
            =================================================== */}

        <section className="max-w-5xl mx-auto px-4 pb-9">
          <div
            className="
              bg-white
              bg-opacity-5
              border
              border-white
              border-opacity-10
              rounded-2xl
              p-6
              md:p-8
              flex
              flex-col
              lg:flex-row
              gap-7
              items-start
            "
          >
            {/* ===============================================
                LOGOS
                =============================================== */}

            <div
              className="
                flex
                lg:flex-col
                items-center
                justify-center
                lg:justify-start
                gap-3
                flex-shrink-0
                w-full
                lg:w-28
              "
            >
              <div
                className="
                  w-24
                  h-24
                  sm:w-28
                  sm:h-28
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  p-1
                "
              >
                {/* <img
                  src="/images/springer.jpeg"
                  alt="Springer"
                  className="
                    w-full
                    h-full
                    object-contain
                  "
                /> */}
              </div>

              <div
                className="
                  w-24
                  sm:w-28
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  p-2
                "
              >
                {/* <img
                  src="/images/book.png"
                  alt="CRC Press"
                  className="
                    w-full
                    object-contain
                  "
                /> */}
              </div>
            </div>

            {/* ===============================================
                CONFERENCE TEXT
                =============================================== */}

            <div className="flex-1">
              <h2
                className="
                  text-xl
                  sm:text-2xl
                  font-semibold
                  text-white
                  mb-3
                  tracking-[-0.025em]
                "
              >
                About The Conference
              </h2>

              <p
                className="
                  text-slate-300
                  text-[13px]
                  sm:text-sm
                  text-justify
                  leading-6
                  font-normal
                "
              >
                ConCISE 2027 is a two-day International Conference that brings
                together researchers, academicians, scientists, industry
                professionals, engineers, policymakers, and students from across
                the globe to share knowledge, present innovative research, and
                explore emerging technological trends. The conference provides a
                common platform for research, collaboration, and knowledge
                exchange in key areas including Computational Intelligence,
                Artificial Intelligence, Smart Computing, Cognitive Computing,
                Systems Engineering, IoT, Generative AI, Cloud Computing,
                Machine Learning, Deep Learning, and related emerging
                technologies. Through keynote talks, technical sessions, paper
                presentations, and expert interactions, ConCISE 2027 aims to
                foster interdisciplinary collaboration and academia–industry
                partnerships, while highlighting innovative solutions for a
                smarter, sustainable, and connected future.
              </p>

              {/* BUTTONS */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                  pt-5
                "
              >
                <a
                  href="https://cmt3.research.microsoft.com/AICCT2025/Submission/Index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5
                    py-2.5
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    text-white
                    font-semibold
                    rounded-full
                    hover:scale-[1.02]
                    transition-all
                    duration-200
                    shadow-lg
                    text-xs
                    sm:text-sm
                  "
                >
                  Submit Article
                </a>

                <a
                  href="/files/Word_Sample_template_8.25 x11_column.docx"
                  download
                  className="
                    px-5
                    py-2.5
                    bg-white
                    bg-opacity-10
                    border
                    border-white
                    border-opacity-20
                    text-white
                    font-semibold
                    rounded-full
                    hover:bg-opacity-20
                    transition-all
                    duration-200
                    text-xs
                    sm:text-sm
                  "
                >
                  Doc Template
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            MISSION & VISION
            =================================================== */}

        <section className="max-w-5xl mx-auto px-4 pb-9">
          <div className="text-center mb-6">
            <h2
              className="
                text-2xl
                sm:text-3xl
                font-semibold
                text-white
                mb-2
                tracking-[-0.03em]
              "
            >
              Mission &{" "}
              <span
                className="
                  bg-clip-text
                  text-transparent
                  bg-gradient-to-r
                  from-cyan-400
                  to-violet-400
                "
              >
                Vision
              </span>
            </h2>

            <div className="flex justify-center gap-1.5">
              <div className="h-1 w-8 rounded-full bg-cyan-400"></div>

              <div className="h-1 w-4 rounded-full bg-violet-400"></div>
            </div>
          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
            "
          >
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
              <div
                key={i}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  hover:scale-[1.02]
                  transition-all
                  duration-200
                "
              >
                <div
                  className={`
                    h-1.5
                    w-full
                    bg-gradient-to-r
                    ${item.color}
                  `}
                ></div>

                <div className="p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-gray-900
                      mb-2
                      tracking-[-0.02em]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-gray-600
                      text-sm
                      leading-6
                      font-normal
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            KEY TOPICS
            KEPT COMMENTED AS IN YOUR PREVIOUS PAGE
            =================================================== */}

        {/*
        <section className="max-w-5xl mx-auto px-4 pb-9">

          <div className="text-center mb-6">

            <h2
              className="
                text-2xl
                sm:text-3xl
                font-semibold
                text-white
                mb-2
              "
            >
              Key{" "}
              <span
                className="
                  bg-clip-text
                  text-transparent
                  bg-gradient-to-r
                  from-emerald-400
                  to-cyan-400
                "
              >
                Topics
              </span>
            </h2>

            <p className="text-slate-400 text-sm">
              Research areas covered at ConCISE-2027
            </p>

          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
            "
          >

            {highlights.map((h, i) => (

              <div
                key={i}
                className={`
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  ${h.border}
                  shadow-lg
                  hover:scale-[1.02]
                  transition-all
                  duration-200
                `}
              >

                <div
                  className={`
                    h-1.5
                    bg-gradient-to-r
                    ${h.color}
                  `}
                ></div>

                <div
                  className={`
                    bg-gradient-to-br
                    ${h.bg}
                    p-4
                  `}
                >

                  <div className="text-2xl mb-2">
                    {h.icon}
                  </div>

                  <h4
                    className="
                      font-semibold
                      text-gray-900
                      text-sm
                      mb-1.5
                    "
                  >
                    {h.title}
                  </h4>

                  <p
                    className="
                      text-gray-500
                      text-xs
                      leading-5
                    "
                  >
                    {h.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>
        */}

        {/* ===================================================
            WHY ATTEND
            =================================================== */}

        <section className="max-w-5xl mx-auto px-4 pb-9">
          <div className="text-center mb-6">
            <h2
              className="
                text-2xl
                sm:text-3xl
                font-semibold
                text-white
                mb-2
                tracking-[-0.03em]
              "
            >
              Why{" "}
              <span
                className="
                  bg-clip-text
                  text-transparent
                  bg-gradient-to-r
                  from-amber-400
                  to-orange-400
                "
              >
                Attend?
              </span>
            </h2>

            <div className="flex justify-center gap-1.5">
              <div className="h-1 w-8 rounded-full bg-amber-400"></div>

              <div className="h-1 w-4 rounded-full bg-orange-400"></div>
            </div>
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-3
            "
          >
            {whyAttend.map((item, i) => (
              <div
                key={i}
                className="
                  flex
                  items-start
                  gap-3
                  bg-white
                  bg-opacity-5
                  border
                  border-white
                  border-opacity-10
                  rounded-xl
                  p-4
                  hover:bg-opacity-10
                  transition-all
                  duration-200
                "
              >
                <span
                  className="
                    text-xl
                    flex-shrink-0
                  "
                >
                  {item.icon}
                </span>

                <p
                  className="
                    text-slate-300
                    text-[13px]
                    leading-5
                    font-normal
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            PUBLICATIONS
            KEPT COMMENTED
            =================================================== */}

        {/*
        <section className="max-w-5xl mx-auto px-4 pb-9">

          <div
            className="
              bg-gradient-to-br
              from-indigo-900
              to-blue-900
              border
              border-indigo-700
              border-opacity-50
              rounded-2xl
              p-6
              md:p-8
            "
          >

            <div className="text-center mb-6">

              <span className="text-2xl mb-2 block">
                📚
              </span>

              <h2
                className="
                  text-xl
                  sm:text-2xl
                  font-semibold
                  text-white
                  mb-1
                "
              >
                Publication Opportunities
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm">
                Accepted papers will be considered for publication in
              </p>

            </div>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
              "
            >

              {publications.map((pub, i) => (

                <div
                  key={i}
                  className="
                    flex
                    items-start
                    gap-3
                    bg-white
                    bg-opacity-5
                    rounded-xl
                    p-3
                    border
                    border-white
                    border-opacity-10
                  "
                >

                  <div
                    className="
                      w-6
                      h-6
                      rounded-full
                      bg-gradient-to-br
                      from-cyan-400
                      to-blue-500
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
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

                  <p
                    className="
                      text-slate-300
                      text-xs
                      leading-5
                    "
                  >
                    {pub}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
        */}

        {/* ===================================================
            CTA
            =================================================== */}

        <section
          className="
            max-w-3xl
            mx-auto
            px-4
            pb-12
            text-center
          "
        >
          <div
            className="
              bg-gradient-to-br
              from-blue-600
              to-violet-700
              rounded-2xl
              p-7
              sm:p-8
              shadow-2xl
            "
          >
            <h2
              className="
                text-xl
                sm:text-2xl
                font-semibold
                text-white
                mb-2
                tracking-[-0.025em]
              "
            >
              Ready to Join ConCISE-2027?
            </h2>

            <p
              className="
                text-blue-100
                text-sm
                mb-6
                leading-6
                max-w-xl
                mx-auto
                font-normal
              "
            >
              Submit your research and be part of the global conversation
              shaping the future of intelligent computing.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-3
                justify-center
              "
            >
              <a
                href="https://cmt3.research.microsoft.com/AICCT2025/Submission/Index"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6
                  py-2.5
                  bg-white
                  text-blue-700
                  font-semibold
                  rounded-full
                  hover:scale-[1.02]
                  transition-all
                  duration-200
                  shadow-lg
                  text-xs
                  sm:text-sm
                "
              >
                Submit Your Paper
              </a>

              <Link
                to="/registration"
                className="
                  px-6
                  py-2.5
                  bg-white
                  bg-opacity-20
                  border
                  border-white
                  border-opacity-40
                  text-white
                  font-semibold
                  rounded-full
                  hover:bg-opacity-30
                  transition-all
                  duration-200
                  text-xs
                  sm:text-sm
                "
              >
                Register Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
