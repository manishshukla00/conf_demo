import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="
        relative
        overflow-hidden
        min-h-[calc(100vh-74px)]
        flex
        flex-col
        justify-between
      "
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* =====================================================
          LOAD MODERN FONT
          ===================================================== */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

          .carousel-title {
            letter-spacing: -0.035em;
          }

          .carousel-subtitle {
            letter-spacing: -0.02em;
          }
        `}
      </style>

      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          scale-[1.01]
        "
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLEj1jRQzV6_4n5USrdfu6ZoYBrU_gYmPPDgX_TDwqMWrM1KtU6M4__Dnu&s=10)",
        }}
      ></div>

      {/* =====================================================
          GRADIENT OVERLAY
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-indigo-900/75
          via-blue-900/65
          to-violet-900/75
        "
      ></div>

      {/* =====================================================
          EXTRA DARK BOTTOM GRADIENT
          ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-black/40
          to-transparent
        "
      ></div>

      {/* =====================================================
          ANIMATED SHAPES
          ===================================================== */}

      <div
        className="
          absolute
          top-20
          left-10
          w-72
          h-72
          bg-blue-500
          rounded-full
          mix-blend-multiply
          filter
          blur-3xl
          opacity-20
          animate-float
        "
      ></div>

      <div
        className="
          absolute
          top-40
          right-10
          w-72
          h-72
          bg-violet-500
          rounded-full
          mix-blend-multiply
          filter
          blur-3xl
          opacity-20
          animate-float
        "
        style={{
          animationDelay: "2s",
        }}
      ></div>

      <div
        className="
          absolute
          bottom-20
          left-1/2
          w-72
          h-72
          bg-emerald-500
          rounded-full
          mix-blend-multiply
          filter
          blur-3xl
          opacity-20
          animate-float
        "
        style={{
          animationDelay: "4s",
        }}
      ></div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          flex-1
          flex
          flex-col
          justify-center
          items-center
          text-center
          text-white
          px-4
          pt-24
          sm:pt-28
          lg:pt-24
          pb-16
          sm:pb-20
        "
      >
        {/* ===================================================
            MAIN CONTENT WRAPPER
            =================================================== */}

        <div
          className={`
            w-full
            max-w-6xl
            mx-auto
            flex
            flex-col
            items-center
            ${isVisible ? "animate-fade-in-down" : "opacity-0"}
          `}
        >
          {/* =================================================
              CONCISE-2027
              NOW ABOVE THE CONFERENCE TITLE
              ================================================= */}

          <div className="mb-5 sm:mb-6">
            <span
              className="
                inline-block
                px-5
                sm:px-6
                py-1.5
                sm:py-2
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/25
                text-cyan-200
                text-xs
                sm:text-sm
                font-semibold
                tracking-[0.18em]
                uppercase
                shadow-lg
              "
            >
              CONCISE-2027
            </span>
          </div>

          {/* =================================================
              INTERNATIONAL CONFERENCE
              ================================================= */}

          <h1
            className="
              carousel-title
              font-semibold
              text-2xl
              sm:text-4xl
              md:text-5xl
              lg:text-[56px]
              leading-tight
              text-white
              drop-shadow-2xl
              mb-3
            "
          >
            International Conference on
          </h1>

          {/* =================================================
              MAIN CONFERENCE NAME
              ================================================= */}

          <h2
            className="
              carousel-title
              font-semibold
              text-2xl
              sm:text-4xl
              md:text-5xl
              lg:text-[58px]
              leading-[1.08]
              text-white
              max-w-6xl
              mx-auto
              drop-shadow-2xl
            "
          >
            Computational Intelligence & Systems Engineering
          </h2>

          {/* =================================================
              DATE / EVENT INFORMATION
              ================================================= */}

          <div
            className={`
              mt-8
              sm:mt-9
              space-y-4
              ${isVisible ? "animate-fade-in-up" : "opacity-0"}
            `}
            style={{
              animationDelay: "0.3s",
            }}
          >
            {/* DATE */}

            <p
              className="
                text-lg
                sm:text-xl
                md:text-2xl
                font-medium
                text-cyan-300
                drop-shadow-lg
              "
            >
              📅 07-08 May 2027
            </p>

            {/* ORGANIZED BY */}

            <div className="pt-1">
              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-medium
                  text-white/80
                  mb-1
                "
              >
                Organized by
              </p>

              <p
                className="
                  carousel-subtitle
                  text-base
                  sm:text-lg
                  md:text-xl
                  font-medium
                  text-white
                  drop-shadow-lg
                "
              >
                Department of Computer Science & Engineering
              </p>

              <p
                className="
                  carousel-subtitle
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-medium
                  text-white/90
                  mt-1
                  drop-shadow-lg
                "
              >
                United University, Prayagraj, India
              </p>
            </div>
          </div>

          {/* =================================================
              SMALL DIVIDER
              ================================================= */}

          <div className="mt-7 flex justify-center items-center gap-2">
            <div className="h-1 w-10 rounded-full bg-cyan-400"></div>

            <div className="h-1 w-5 rounded-full bg-blue-400"></div>

            <div className="h-1 w-2.5 rounded-full bg-violet-400"></div>
          </div>
        </div>

        {/* ===================================================
            CTA BUTTONS
            KEPT COMMENTED
            =================================================== */}

        {/*
        <div
          className={`
            flex
            flex-wrap
            gap-4
            justify-center
            mt-8
            ${
              isVisible
                ? "animate-scale-in"
                : "opacity-0"
            }
          `}
          style={{
            animationDelay: "0.6s",
          }}
        >

          <button className="btn-primary group">

            <span className="relative z-10">
              Book Tickets
            </span>

            <svg
              className="
                w-5
                h-5
                ml-2
                inline-block
                transform
                group-hover:translate-x-1
                transition-transform
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>

          </button>

          <button className="btn-secondary group">

            <span className="relative z-10">
              View Schedule
            </span>

            <svg
              className="
                w-5
                h-5
                ml-2
                inline-block
                transform
                group-hover:translate-x-1
                transition-transform
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

          </button>

        </div>
        */}
      </div>

      {/* =====================================================
          DOWNLOAD BUTTONS
          KEPT COMMENTED
          ===================================================== */}

      {/*
      <div
        className="
          relative
          z-20
          w-full
          bg-black
          bg-opacity-30
          backdrop-blur-md
          py-6
        "
      >

        <div className="container-custom">

          <div
            className="
              flex
              flex-col
              md:flex-row
              gap-4
              justify-center
              items-center
            "
          >

            <a
              href="files/AICCTOfflineScheduleDay1.pdf"
              download
              className="
                group
                w-full
                md:w-auto
                text-center
                bg-white
                bg-opacity-10
                backdrop-blur-sm
                text-white
                font-semibold
                py-3
                px-6
                rounded-full
                hover:bg-opacity-20
                transition-all
                duration-300
                transform
                hover:scale-105
                border
                border-white
                border-opacity-20
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>

              <span>
                Offline Schedule Day-1
              </span>

            </a>

            <a
              href="files/AICCTOnlineScheduleDay1-4.pdf"
              download
              className="
                group
                w-full
                md:w-auto
                text-center
                bg-white
                bg-opacity-10
                backdrop-blur-sm
                text-white
                font-semibold
                py-3
                px-6
                rounded-full
                hover:bg-opacity-20
                transition-all
                duration-300
                transform
                hover:scale-105
                border
                border-white
                border-opacity-20
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>

              <span>
                Online Schedule Day-1
              </span>

            </a>

            <a
              href="files/AICCTOnlineScheduleDay2.pdf"
              download
              className="
                group
                w-full
                md:w-auto
                text-center
                bg-white
                bg-opacity-10
                backdrop-blur-sm
                text-white
                font-semibold
                py-3
                px-6
                rounded-full
                hover:bg-opacity-20
                transition-all
                duration-300
                transform
                hover:scale-105
                border
                border-white
                border-opacity-20
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 012 2z"
                />
              </svg>

              <span>
                Online Schedule Day-2
              </span>

            </a>

          </div>

        </div>

      </div>
      */}
    </div>
  );
};

export default Carousel;
