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

  // ============================================================
  // ORIGINAL COMMENTED SPEAKER DATA - KEPT AS IT WAS
  // ============================================================

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

  // ============================================================
  // CURRENT VISIBLE SPEAKERS
  // ============================================================

  const speakers = [
    {
      name: "Coming Soon",
      gradient: "from-blue-500 to-cyan-500",
      accent: "blue",
    },

    {
      name: "Coming Soon",
      gradient: "from-blue-500 to-violet-500",
      accent: "violet",
    },

    {
      name: "Coming Soon",
      gradient: "from-orange-500 to-red-500",
      accent: "orange",
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

          /* ==================================================
             OPTIMIZED COMING SOON ANIMATIONS
             ================================================== */

          @keyframes comingSoonFloat {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, -7px, 0);
            }
          }

          @keyframes comingSoonPulse {
            0% {
              transform: scale(0.92);
              opacity: 0.45;
            }

            50% {
              transform: scale(1);
              opacity: 0.9;
            }

            100% {
              transform: scale(0.92);
              opacity: 0.45;
            }
          }

          @keyframes comingSoonGlow {
            0%,
            100% {
              opacity: 0.35;
              transform: scale(0.96);
            }

            50% {
              opacity: 0.7;
              transform: scale(1.04);
            }
          }

          @keyframes comingSoonShimmer {
            0% {
              transform: translateX(-120%);
            }

            100% {
              transform: translateX(120%);
            }
          }

          @keyframes comingSoonDot {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.35;
            }

            50% {
              transform: translateY(-5px);
              opacity: 1;
            }
          }

          @keyframes comingSoonRotate {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          .coming-soon-float {
            animation: comingSoonFloat 4s ease-in-out infinite;
            will-change: transform;
          }

          .coming-soon-pulse {
            animation: comingSoonPulse 2.8s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .coming-soon-glow {
            animation: comingSoonGlow 3.2s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .coming-soon-shimmer {
            animation: comingSoonShimmer 3.8s ease-in-out infinite;
            will-change: transform;
          }

          .coming-soon-dot {
            animation: comingSoonDot 1.6s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .coming-soon-rotate {
            animation: comingSoonRotate 18s linear infinite;
            will-change: transform;
          }

          /* Accessibility */
          @media (prefers-reduced-motion: reduce) {
            .coming-soon-float,
            .coming-soon-pulse,
            .coming-soon-glow,
            .coming-soon-shimmer,
            .coming-soon-dot,
            .coming-soon-rotate {
              animation: none !important;
            }
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
                    COMING SOON VISUAL
                    ================================================= */}

                <div
                  className="
                    relative
                    h-64
                    sm:h-60
                    lg:h-64
                    overflow-hidden
                    bg-gradient-to-br
                    from-slate-50
                    via-white
                    to-slate-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  {/* Ambient glow */}

                  <div
                    className={`
                      absolute
                      w-52
                      h-52
                      rounded-full
                      bg-gradient-to-r
                      ${speaker.gradient}
                      blur-3xl
                      opacity-20
                      coming-soon-glow
                    `}
                    style={{
                      animationDelay: `${index * 0.35}s`,
                    }}
                  ></div>

                  {/* Rotating decorative ring */}

                  <div
                    className="
                      absolute
                      w-44
                      h-44
                      rounded-full
                      border
                      border-dashed
                      border-slate-300/70
                      coming-soon-rotate
                    "
                    style={{
                      animationDirection:
                        index % 2 === 0 ? "normal" : "reverse",
                    }}
                  ></div>

                  {/* Inner pulse ring */}

                  <div
                    className="
                      absolute
                      w-36
                      h-36
                      rounded-full
                      border
                      border-slate-200
                      coming-soon-pulse
                    "
                    style={{
                      animationDelay: `${index * 0.3}s`,
                    }}
                  ></div>

                  {/* Floating dots */}

                  <div
                    className={`
                      absolute
                      top-[25%]
                      left-[24%]
                      w-2
                      h-2
                      rounded-full
                      bg-gradient-to-r
                      ${speaker.gradient}
                      coming-soon-dot
                    `}
                  ></div>

                  <div
                    className={`
                      absolute
                      top-[32%]
                      right-[23%]
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-gradient-to-r
                      ${speaker.gradient}
                      coming-soon-dot
                    `}
                    style={{
                      animationDelay: "0.4s",
                    }}
                  ></div>

                  <div
                    className={`
                      absolute
                      bottom-[27%]
                      left-[28%]
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-gradient-to-r
                      ${speaker.gradient}
                      coming-soon-dot
                    `}
                    style={{
                      animationDelay: "0.8s",
                    }}
                  ></div>

                  <div
                    className={`
                      absolute
                      bottom-[23%]
                      right-[27%]
                      w-2
                      h-2
                      rounded-full
                      bg-gradient-to-r
                      ${speaker.gradient}
                      coming-soon-dot
                    `}
                    style={{
                      animationDelay: "1.1s",
                    }}
                  ></div>

                  {/* =================================================
                      MAIN SPEAKER ICON
                      ================================================= */}

                  <div className="relative z-10 coming-soon-float">
                    <div
                      className={`
                        relative
                        w-28
                        h-28
                        rounded-full
                        bg-gradient-to-br
                        ${speaker.gradient}
                        p-[2px]
                        shadow-lg
                        coming-soon-pulse
                      `}
                    >
                      <div
                        className="
                          w-full
                          h-full
                          rounded-full
                          bg-white
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="
                            w-12
                            h-12
                            text-slate-400
                          "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      COMING SOON BADGE
                      ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-1/2
                      -translate-x-1/2
                      z-20
                    "
                  >
                    <div
                      className="
                        relative
                        overflow-hidden
                        whitespace-nowrap
                        px-5
                        py-2
                        rounded-full
                        bg-white/90
                        backdrop-blur-md
                        border
                        border-slate-200
                        shadow-lg
                      "
                    >
                      {/* Shimmer */}

                      <div
                        className="
                          absolute
                          inset-y-0
                          w-8
                          bg-white/60
                          blur-md
                          -skew-x-12
                          coming-soon-shimmer
                        "
                      ></div>

                      <span
                        className={`
                          relative
                          z-10
                          text-[11px]
                          sm:text-xs
                          font-bold
                          tracking-[0.2em]
                          uppercase
                          bg-gradient-to-r
                          ${speaker.gradient}
                          bg-clip-text
                          text-transparent
                        `}
                      >
                        Coming Soon
                      </span>
                    </div>
                  </div>

                  {/* Bottom gradient */}

                  <div
                    className={`
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-20
                      bg-gradient-to-t
                      ${speaker.gradient}
                      opacity-[0.04]
                      pointer-events-none
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
                    items-center
                    text-center
                  "
                >
                  {/* Speaker Name */}

                  <h3
                    className="
                      speaker-name
                      text-xl
                      sm:text-[22px]
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

                  {/* Status */}

                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span
                        className={`
                          absolute
                          inline-flex
                          h-full
                          w-full
                          rounded-full
                          bg-gradient-to-r
                          ${speaker.gradient}
                          opacity-60
                          coming-soon-pulse
                        `}
                      ></span>

                      <span
                        className={`
                          relative
                          inline-flex
                          rounded-full
                          h-2.5
                          w-2.5
                          bg-gradient-to-r
                          ${speaker.gradient}
                        `}
                      ></span>
                    </span>

                    <span
                      className="
                        text-xs
                        font-medium
                        text-slate-500
                        tracking-wide
                      "
                    >
                      Speaker announcement in progress
                    </span>
                  </div>

                  {/* Description */}

                  <p
                    className="
                      speaker-description
                      text-[13px]
                      text-slate-500
                      leading-5
                      font-normal
                      max-w-[280px]
                    "
                  >
                    Stay tuned for the announcement of our distinguished keynote
                    speaker.
                  </p>
                </div>

                {/* =================================================
                    SUBTLE HOVER LIGHT
                    ================================================= */}

                <div
                  className={`
                    absolute
                    inset-0
                    pointer-events-none
                    bg-gradient-to-br
                    ${speaker.gradient}
                    opacity-0
                    group-hover:opacity-[0.025]
                    transition-opacity
                    duration-500
                  `}
                ></div>
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
