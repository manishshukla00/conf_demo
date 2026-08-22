import React from "react";

const Speakers = () => {
  /* =========================================================
     ORIGINAL SPEAKER DATA
     KEPT COMMENTED — NOTHING DELETED
     ========================================================= */

  // const speakers = [
  //   {
  //     name: "Prof. Siddhartha Bhattacharyya",
  //     image:
  //       "https://i1.rgstatic.net/ii/profile.image/564921299464192-1511699141118_Q128/Siddhartha-Bhattacharyya-2.jpg",
  //     designation: "Professor",
  //     department: "VSB Technical University of Ostrava, Czech Republic",
  //     gradient: "from-blue-500 to-cyan-500",
  //   },
  //   {
  //     name: "Prof. Jyoti Sekhar Banerjee",
  //     image:
  //       "https://i1.rgstatic.net/ii/profile.image/886099685675010-1588274036653_Q512/Jyoti-Sekhar-Banerjee.jpg",
  //     designation: "Asso. Prof. & Head, CSE(AI&ML)",
  //     department:
  //       "Techno Bengal Institute of Technology&Remote Researcher,UOWM,Greece",
  //     gradient: "from-blue-500 to-violet-500",
  //   },
  //   {
  //     name: "Dr. Rajesh Prasad",
  //     image: "/images/17.jpg",
  //     designation: "Professor",
  //     department: "AKGEC , India",
  //     gradient: "from-orange-500 to-red-500",
  //   },
  // ];

  /* =========================================================
     COMING SOON PAGE
     ========================================================= */

  return (
    <main className="min-h-screen bg-[#070B18] overflow-hidden relative">
      {/* =====================================================
          OPTIMIZED CSS ANIMATIONS
          ===================================================== */}

      <style>
        {`
          /* -----------------------------------------------
             Slow orbital movement
             ----------------------------------------------- */

          @keyframes speakerOrbit {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes speakerOrbitReverse {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }

          /* -----------------------------------------------
             Core breathing effect
             ----------------------------------------------- */

          @keyframes speakerCorePulse {
            0%,
            100% {
              transform: scale(0.96);
              opacity: 0.75;
            }

            50% {
              transform: scale(1.04);
              opacity: 1;
            }
          }

          /* -----------------------------------------------
             Signal pulse
             ----------------------------------------------- */

          @keyframes speakerSignal {
            0% {
              transform: scale(0.7);
              opacity: 0;
            }

            35% {
              opacity: 0.45;
            }

            100% {
              transform: scale(1.35);
              opacity: 0;
            }
          }

          /* -----------------------------------------------
             Horizontal scanner
             ----------------------------------------------- */

          @keyframes speakerScan {
            0% {
              transform: translateX(-160%);
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              transform: translateX(420%);
              opacity: 0;
            }
          }

          /* -----------------------------------------------
             Floating particles
             ----------------------------------------------- */

          @keyframes speakerParticle {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.2;
            }

            50% {
              transform: translate3d(0, -12px, 0);
              opacity: 0.8;
            }
          }

          /* -----------------------------------------------
             Text breathing
             ----------------------------------------------- */

          @keyframes speakerTextGlow {
            0%,
            100% {
              opacity: 0.7;
            }

            50% {
              opacity: 1;
            }
          }

          /* -----------------------------------------------
             Progress signal
             ----------------------------------------------- */

          @keyframes speakerProgress {
            0% {
              transform: translateX(-130%);
            }

            100% {
              transform: translateX(260%);
            }
          }

          .speaker-orbit {
            animation: speakerOrbit 20s linear infinite;
            will-change: transform;
          }

          .speaker-orbit-reverse {
            animation: speakerOrbitReverse 14s linear infinite;
            will-change: transform;
          }

          .speaker-core {
            animation: speakerCorePulse 3.2s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .speaker-signal {
            animation: speakerSignal 3.2s ease-out infinite;
            will-change: transform, opacity;
          }

          .speaker-scan {
            animation: speakerScan 4.5s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .speaker-particle {
            animation: speakerParticle 4s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .speaker-text-glow {
            animation: speakerTextGlow 3s ease-in-out infinite;
          }

          .speaker-progress {
            animation: speakerProgress 3.2s ease-in-out infinite;
            will-change: transform;
          }

          /* -----------------------------------------------
             Accessibility
             ----------------------------------------------- */

          @media (prefers-reduced-motion: reduce) {
            .speaker-orbit,
            .speaker-orbit-reverse,
            .speaker-core,
            .speaker-signal,
            .speaker-scan,
            .speaker-particle,
            .speaker-text-glow,
            .speaker-progress {
              animation: none !important;
            }
          }
        `}
      </style>

      {/* =====================================================
          TECHNICAL GRID BACKGROUND
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.055]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(148,163,184,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148,163,184,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* =====================================================
          AMBIENT BLUE LIGHT
          ===================================================== */}

      <div
        className="
          absolute
          -top-44
          left-1/2
          -translate-x-1/2
          w-[540px]
          h-[540px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================================================
          AMBIENT VIOLET LIGHT
          ===================================================== */}

      <div
        className="
          absolute
          -bottom-48
          -right-28
          w-[480px]
          h-[480px]
          rounded-full
          bg-violet-600/10
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================================================
          FLOATING DATA PARTICLES
          ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <span
          className="
            speaker-particle
            absolute
            left-[12%]
            top-[27%]
            w-1.5
            h-1.5
            rounded-full
            bg-cyan-400
          "
        />

        <span
          className="
            speaker-particle
            absolute
            left-[23%]
            top-[66%]
            w-1
            h-1
            rounded-full
            bg-blue-400
          "
          style={{ animationDelay: "0.8s" }}
        />

        <span
          className="
            speaker-particle
            absolute
            left-[34%]
            top-[20%]
            w-1
            h-1
            rounded-full
            bg-indigo-300
          "
          style={{ animationDelay: "1.5s" }}
        />

        <span
          className="
            speaker-particle
            absolute
            right-[19%]
            top-[25%]
            w-1.5
            h-1.5
            rounded-full
            bg-violet-400
          "
          style={{ animationDelay: "1.1s" }}
        />

        <span
          className="
            speaker-particle
            absolute
            right-[12%]
            top-[65%]
            w-1
            h-1
            rounded-full
            bg-cyan-300
          "
          style={{ animationDelay: "2s" }}
        />

        <span
          className="
            speaker-particle
            absolute
            right-[34%]
            bottom-[18%]
            w-1
            h-1
            rounded-full
            bg-blue-300
          "
          style={{ animationDelay: "2.6s" }}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <section
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-5
          py-24
        "
      >
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* =================================================
              CONFERENCE LABEL
              ================================================= */}

          <div className="mb-7">
            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-blue-400/20
                bg-blue-500/[0.08]
                text-blue-300
                text-[11px]
                sm:text-xs
                font-semibold
                tracking-[0.22em]
                uppercase
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_10px_rgba(34,211,238,0.8)]
                "
              />
              ConCISE-2027
            </span>
          </div>

          {/* =================================================
              SPEAKER SIGNAL / ORBITAL CORE
              ================================================= */}

          <div
            className="
              relative
              mx-auto
              w-[230px]
              h-[230px]
              sm:w-[280px]
              sm:h-[280px]
              flex
              items-center
              justify-center
              mb-10
            "
          >
            {/* -----------------------------------------------
                Outer orbital ring
                ----------------------------------------------- */}

            <div
              className="
                speaker-orbit
                absolute
                inset-0
                rounded-full
                border
                border-dashed
                border-blue-400/20
              "
            >
              <span
                className="
                  absolute
                  -top-1
                  left-1/2
                  -translate-x-1/2
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_18px_rgba(34,211,238,0.95)]
                "
              />
            </div>

            {/* -----------------------------------------------
                Second orbital ring
                ----------------------------------------------- */}

            <div
              className="
                speaker-orbit-reverse
                absolute
                inset-[28px]
                rounded-full
                border
                border-violet-400/20
              "
            >
              <span
                className="
                  absolute
                  top-1/2
                  -right-1
                  w-2
                  h-2
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_16px_rgba(167,139,250,0.9)]
                "
              />
            </div>

            {/* -----------------------------------------------
                Expanding signal
                ----------------------------------------------- */}

            <div
              className="
                speaker-signal
                absolute
                w-[118px]
                h-[118px]
                rounded-full
                border
                border-cyan-400/20
              "
            />

            {/* -----------------------------------------------
                Third subtle ring
                ----------------------------------------------- */}

            <div
              className="
                absolute
                w-[150px]
                h-[150px]
                rounded-full
                border
                border-white/[0.06]
              "
            />

            {/* -----------------------------------------------
                CENTRAL SPEAKER CORE
                ----------------------------------------------- */}

            <div
              className="
                speaker-core
                relative
                z-10
                w-[112px]
                h-[112px]
                sm:w-[128px]
                sm:h-[128px]
                rounded-full
                bg-gradient-to-br
                from-slate-900
                via-indigo-950
                to-blue-950
                border
                border-white/10
                flex
                items-center
                justify-center
                overflow-hidden
              "
            >
              {/* Inner radial glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)]
                "
              />

              {/* Scanning signal */}

              <div
                className="
                  speaker-scan
                  absolute
                  left-0
                  top-1/2
                  w-1/3
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-300
                  to-transparent
                "
              />

              {/* Speaker icon */}

              <div className="relative z-10">
                <svg
                  className="
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    mx-auto
                    text-cyan-300
                  "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="3.2" />

                  <path d="M5.5 20c.7-3.5 3-5.5 6.5-5.5s5.8 2 6.5 5.5" />

                  <path d="M3.5 12.5v-1.5" />

                  <path d="M20.5 12.5v-1.5" />
                </svg>

                <div
                  className="
                    mt-1
                    text-[9px]
                    sm:text-[10px]
                    font-semibold
                    tracking-[0.25em]
                    text-slate-400
                    uppercase
                  "
                >
                  Experts
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MAIN TITLE
              ================================================= */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              tracking-[-0.045em]
              text-white
              leading-tight
            "
          >
            Meet Our{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Speakers
            </span>
          </h1>

          {/* =================================================
              COMING SOON
              ================================================= */}

          <div className="mt-6">
            <p
              className="
                speaker-text-glow
                text-2xl
                sm:text-3xl
                font-bold
                tracking-[0.08em]
                uppercase
                text-white
              "
            >
              Coming Soon
            </p>

            <p
              className="
                mt-3
                max-w-xl
                mx-auto
                text-sm
                sm:text-base
                leading-7
                text-slate-400
              "
            >
              Our distinguished keynote and invited speakers will be announced
              shortly.
            </p>
          </div>

          {/* =================================================
              TECHNICAL STATUS BAR
              ================================================= */}

          <div
            className="
              mx-auto
              mt-8
              w-[190px]
              sm:w-[240px]
              h-[2px]
              rounded-full
              bg-white/10
              overflow-hidden
            "
          >
            <div
              className="
                speaker-progress
                h-full
                w-1/2
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-cyan-400
                to-transparent
              "
            />
          </div>

          {/* =================================================
              BOTTOM INFORMATION
              ================================================= */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-3
              gap-y-2
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.18em]
              text-slate-500
            "
          >
            <span>Knowledge</span>

            <span className="w-1 h-1 rounded-full bg-cyan-400" />

            <span>Innovation</span>

            <span className="w-1 h-1 rounded-full bg-blue-400" />

            <span>Global Experts</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Speakers;
