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
      {
        threshold: 0.1,
      },
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

  // const speakers = [
  //   {
  //     name: "Comming Soon",
  //     image:
  //       "https://i1.rgstatic.net/ii/profile.image/564921299464192-1511699141118_Q128/Siddhartha-Bhattacharyya-2.jpg",
  //     designation: "Professor",
  //     department: "VSB Technical University of Ostrava, Czech Republic",
  //     gradient: "from-blue-500 to-cyan-500",
  //   },

  //   {
  //     name: "Comming Soon",
  //     image:
  //       "https://i1.rgstatic.net/ii/profile.image/886099685675010-1588274036653_Q512/Jyoti-Sekhar-Banerjee.jpg",
  //     designation: "Asso. Prof. & Head, CSE (AI&ML)",
  //     department:
  //       "Techno Bengal Institute of Technology & Remote Researcher, UOWM, Greece",
  //     gradient: "from-blue-500 to-violet-500",
  //   },

  //   {
  //     name: "Comming Soon",
  //     image: "/images/17.jpg",
  //     designation: "Professor",
  //     department: "AKGEC, India",
  //     gradient: "from-orange-500 to-red-500",
  //   },
  // ];

  const speakers = [
    {
      name: "Comming Soon",
      // image:
      //   "https://i1.rgstatic.net/ii/profile.image/564921299464192-1511699141118_Q128/Siddhartha-Bhattacharyya-2.jpg",
      // designation: "Professor",
      // department: "VSB Technical University of Ostrava, Czech Republic",
      // gradient: "from-blue-500 to-cyan-500",
    },

    {
      name: "",
      // image:
      //   "https://i1.rgstatic.net/ii/profile.image/886099685675010-1588274036653_Q512/Jyoti-Sekhar-Banerjee.jpg",
      // designation: "Asso. Prof. & Head, CSE (AI&ML)",
      // department:
      //   "Techno Bengal Institute of Technology & Remote Researcher, UOWM, Greece",
      // gradient: "from-blue-500 to-violet-500",
    },

    {
      name: "",
      // image: "/images/17.jpg",
      // designation: "Professor",
      // department: "AKGEC, India",
      // gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="speakers-section"
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* =====================================================
          MODERN FONT
          ===================================================== */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

          .speaker-name {
            letter-spacing: -0.025em;
          }

          .speaker-description {
            letter-spacing: -0.01em;
          }
        `}
      </style>

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-50
          via-indigo-50
          to-violet-50
          opacity-60
        "
      ></div>

      {/* Background decoration */}

      <div
        className="
          absolute
          top-0
          right-0
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-blue-300
          rounded-full
          mix-blend-multiply
          filter
          blur-3xl
          opacity-15
          animate-float
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          left-0
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-violet-300
          rounded-full
          mix-blend-multiply
          filter
          blur-3xl
          opacity-15
          animate-float
        "
        style={{
          animationDelay: "2s",
        }}
      ></div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            SECTION HEADER
            =================================================== */}

        <div
          className={`
            text-center
            mb-9
            sm:mb-10
            ${isVisible ? "animate-fade-in-up" : "opacity-0"}
          `}
        >
          {/* Small label */}

          <div className="mb-3">
            <span
              className="
                inline-block
                px-4
                py-1
                bg-blue-100
                text-blue-700
                border
                border-blue-200
                rounded-full
                text-[11px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
              "
            >
              ConCISE-2027
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              speaker-name
              text-3xl
              sm:text-4xl
              lg:text-[42px]
              leading-tight
              font-semibold
              text-slate-900
            "
          >
            Keynote{" "}
            <span
              className="
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-blue-600
                to-violet-600
              "
            >
              Speakers
            </span>
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-3
              text-sm
              sm:text-[15px]
              text-slate-500
              max-w-2xl
              mx-auto
              leading-6
              font-normal
            "
          >
            World-renowned experts and thought leaders sharing their insights
          </p>

          {/* Divider */}

          <div className="mt-4 flex justify-center items-center gap-2">
            <div className="h-1 w-10 rounded-full bg-blue-500"></div>

            <div className="h-1 w-5 rounded-full bg-indigo-400"></div>

            <div className="h-1 w-2.5 rounded-full bg-violet-400"></div>
          </div>
        </div>

        {/* ===================================================
            SPEAKERS GRID
            =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            lg:gap-6
          "
        >
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`
                group
                ${isVisible ? "animate-fade-in-up" : "opacity-0"}
              `}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* =================================================
                  CARD
                  ================================================= */}

              <div
                className="
                  relative
                  h-full
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-slate-200
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                {/* =================================================
                    TOP GRADIENT LINE
                    ================================================= */}

                <div
                  className={`
                    h-1.5
                    w-full
                    bg-gradient-to-r
                    ${speaker.gradient}
                  `}
                ></div>

                {/* =================================================
                    IMAGE
                    ================================================= */}

                <div
                  className="
                    relative
                    h-64
                    sm:h-60
                    lg:h-64
                    overflow-hidden
                    bg-slate-100
                  "
                >
                  {/* <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                    loading="lazy"
                  /> */}

                  {/* Subtle image overlay */}

                  <div
                    className={`
                      absolute
                      inset-0
                      bg-gradient-to-t
                      ${speaker.gradient}
                      opacity-0
                      group-hover:opacity-10
                      transition-opacity
                      duration-300
                    `}
                  ></div>
                </div>

                {/* =================================================
                    CARD CONTENT
                    ================================================= */}

                <div
                  className="
                    p-5
                    sm:p-5
                    min-h-[172px]
                    flex
                    flex-col
                  "
                >
                  {/* Speaker Name */}

                  <h3
                    className="
                      speaker-name
                      text-lg
                      sm:text-xl
                      font-semibold
                      text-slate-900
                      leading-[1.35]
                      mb-2
                      group-hover:text-blue-700
                      transition-colors
                      duration-200
                    "
                  >
                    {speaker.name}
                  </h3>

                  {/* Designation */}

                  <p
                    className="
                      text-sm
                      font-medium
                      text-slate-600
                      leading-5
                      mb-1.5
                    "
                  >
                    {speaker.designation}
                  </p>

                  {/* Institution */}

                  <p
                    className="
                      speaker-description
                      text-[13px]
                      text-slate-500
                      leading-5
                      font-normal
                    "
                  >
                    {speaker.department}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================
            SEE ALL SPEAKERS
            =================================================== */}

        <div
          className={`
            text-center
            mt-9
            ${isVisible ? "animate-fade-in-up" : "opacity-0"}
          `}
          style={{
            animationDelay: "0.7s",
          }}
        >
          <button
            className="
              px-7
              py-3
              bg-gradient-to-r
              from-indigo-900
              via-indigo-900
              to-violet-900
              text-white
              font-semibold
              text-sm
              rounded-full
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            See all speakers
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
