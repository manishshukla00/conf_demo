import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Keynotespeakers = () => {
  const speakers = [
    {
      name: "Murali Natti",
      image: "/images/1.jpg",
      designation: "Apple Inc., USA",
    },
    {
      name: "Sagar Kesarpu",
      image: "/images/3.jpg",
      designation: "McLean, USA",
    },
    {
      name: "Dr. Rajesh Prasad",
      image: "/images/17.jpg",
      designation: "Professor, AKGEC , India",
    },
    {
      name: "Reena Chandra",
      image: "/images/4.jpg",
      designation: "Amazon Inc, USA",
    },
    {
      name: "Swati Karni",
      image: "/images/5.jpg",
      designation: "SAIC/Department of Veteran Affairs, USA",
    },
    {
      name: "Dr. Mukund Pratap Singh",
      image: "/images/18.jpg",
      designation: "Bennet University, Noida, India",
    },
    {
      name: "Ajay Prasad",
      image: "/images/7.jpg",
      designation: "Apple, USA",
    },
    {
      name: "Prassanna R Rajgopal",
      image: "/images/23.jpg",
      designation:
        "Cybersecurity Leader and Independent Researcher, USA.",
    },
    {
      name: "Shilpi Yadav",
      image: "/images/8.jpg",
      designation: "IBM, USA",
    },
    {
      name: "Dr. Rajesh Kumar",
      image: "/images/19.jpg",
      designation: "University of Allahabad",
    },
    {
      name: "Savi Grover",
      image: "/images/9.jpg",
      designation: "NBC Universal, USA",
    },
    {
      name: "Naga Sai Mrunal",
      image: "/images/10.jpg",
      designation: "Humana Inc., USA",
    },
    {
      name: "Dr. Ashish Kumar Mishra",
      image: "/images/20.jpg",
      designation: "REC Ambedkar Nagar",
    },
    {
      name: "Swapnil Joijode",
      image: "/images/11.jpg",
      designation: "Hauppauge Inc., USA",
    },
    {
      name: "Deepak Pai",
      image: "/images/12.jpg",
      designation: "IBM, USA",
    },
    {
      name: "Dr. Manish Raj",
      image: "/images/21.jpg",
      designation: "Galgotias University, Greater Noida",
    },
    {
      name: "Sheeba Bromia Amalraj",
      image: "/images/13.jpg",
      designation: "TBC Corporation, USA",
    },
    {
      name: "Vasudevan Senathi Ramdoss",
      image: "/images/14.jpg",
      designation:
        "Senior performance Engineer & independent researcher",
    },
    {
      name: "Kishore Bandela",
      image: "/images/15.jpg",
      designation: "MassDOT, USA",
    },
    {
      name: "Dr. Abdul Aleem",
      image: "/images/22.jpg",
      designation: "Galgotias University, Greater Noida",
    },
    {
      name: "Karthik Sirigiri",
      image: "/images/16.jpg",
      designation: "RedMane Technology LLC, USA",
    },
  ];

  /* ============================================================
     RESPONSIVE ITEMS PER SLIDE
     ============================================================ */
  const getItemsPerSlide = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(
    getItemsPerSlide()
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  /* ============================================================
     RESPONSIVE RESIZE
     ============================================================ */
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentSlide(0);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ============================================================
     SLIDER CALCULATIONS
     ============================================================ */
  const totalSlides = Math.ceil(
    speakers.length / itemsPerSlide
  );

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const startIdx = currentSlide * itemsPerSlide;

  const visibleSpeakers = speakers.slice(
    startIdx,
    startIdx + itemsPerSlide
  );

  /* ============================================================
     CARD THEMES
     ============================================================ */
  const gradients = [
    {
      color: "from-blue-500 to-cyan-400",
      bg: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-800",
    },
    {
      color: "from-violet-500 to-purple-400",
      bg: "from-violet-50 to-purple-50",
      border: "border-violet-200",
      badge: "bg-violet-100 text-violet-800",
    },
    {
      color: "from-emerald-500 to-teal-400",
      bg: "from-emerald-50 to-teal-50",
      border: "border-emerald-200",
      badge: "bg-emerald-100 text-emerald-800",
    },
    {
      color: "from-rose-500 to-pink-400",
      bg: "from-rose-50 to-pink-50",
      border: "border-rose-200",
      badge: "bg-rose-100 text-rose-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-16 px-4">

      {/* ========================================================
          HEADER
      ======================================================== */}
      <div className="text-center mb-12">

        {/* Conference Badge */}
        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 mb-4 tracking-widest uppercase">
          ConCISE 2027
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-3 leading-tight">
          Keynote{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Speakers
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Meet our distinguished keynote speakers and session chairs
          from leading organizations and institutions around the world.
        </p>

        {/* Accent Lines */}
        <div className="mt-5 flex justify-center gap-2">
          <div className="h-1 w-12 rounded-full bg-blue-500"></div>
          <div className="h-1 w-6 rounded-full bg-indigo-400"></div>
          <div className="h-1 w-3 rounded-full bg-violet-400"></div>
        </div>

      </div>

      {/* ========================================================
          CAROUSEL
      ======================================================== */}
      <div className="max-w-6xl mx-auto relative">

        {/* ======================================================
            LEFT ARROW
        ====================================================== */}
        <button
          onClick={handlePrev}
          aria-label="Previous speakers"
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            z-20

            w-11
            h-11

            flex
            items-center
            justify-center

            bg-white
            border
            border-gray-200

            text-blue-600

            rounded-full

            shadow-lg

            hover:bg-blue-50
            hover:text-violet-600
            hover:scale-110

            transition-all
            duration-300

            -translate-x-1/2
          "
        >
          <FaChevronLeft size={18} />
        </button>

        {/* ======================================================
            SPEAKER GRID
        ====================================================== */}
        <div
          className={`
            grid
            gap-6
            ${
              itemsPerSlide === 4
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : ""
            }
            ${
              itemsPerSlide === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : ""
            }
            ${
              itemsPerSlide === 1
                ? "grid-cols-1 max-w-sm mx-auto"
                : ""
            }
          `}
        >

          {visibleSpeakers.map((speaker, index) => {

            const theme =
              gradients[
                (startIdx + index) % gradients.length
              ];

            return (
              <div
                key={startIdx + index}
                className={`
                  relative
                  rounded-3xl
                  overflow-hidden
                  bg-white
                  border
                  ${theme.border}

                  shadow-sm

                  hover:shadow-xl
                  hover:scale-105

                  transition-all
                  duration-300
                `}
              >

                {/* =================================================
                    TOP GRADIENT BAR
                ================================================= */}
                <div
                  className={`
                    h-1.5
                    w-full
                    bg-gradient-to-r
                    ${theme.color}
                  `}
                ></div>

                {/* =================================================
                    CARD
                ================================================= */}
                <div
                  className={`
                    bg-gradient-to-br
                    ${theme.bg}
                    p-5

                    min-h-[285px]

                    flex
                    flex-col
                    items-center
                    text-center
                  `}
                >

                  {/* Speaker Image */}
                  <div
                    className={`
                      w-28
                      h-28
                      rounded-full
                      p-1

                      bg-gradient-to-br
                      ${theme.color}

                      shadow-lg

                      mb-4
                    `}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1">

                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="
                          w-full
                          h-full
                          rounded-full
                          object-cover
                        "
                      />

                    </div>
                  </div>

                  {/* Speaker Name */}
                  <h2 className="text-base font-black text-gray-900 leading-tight mb-3">
                    {speaker.name}
                  </h2>

                  {/* Designation */}
                  <span
                    className={`
                      inline-block
                      px-3
                      py-1

                      rounded-full

                      text-xs
                      font-bold

                      leading-relaxed

                      ${theme.badge}

                      mb-3
                    `}
                  >
                    {speaker.designation}
                  </span>

                  {/* Divider */}
                  <div
                    className={`
                      h-px
                      w-14

                      bg-gradient-to-r
                      ${theme.color}

                      opacity-50

                      mb-3
                    `}
                  ></div>

                  {/* Small Label */}
                  <p className="text-gray-400 text-xs">
                    Keynote Speaker / Session Chair
                  </p>

                </div>
              </div>
            );
          })}

        </div>

        {/* ======================================================
            RIGHT ARROW
        ====================================================== */}
        <button
          onClick={handleNext}
          aria-label="Next speakers"
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            z-20

            w-11
            h-11

            flex
            items-center
            justify-center

            bg-white
            border
            border-gray-200

            text-blue-600

            rounded-full

            shadow-lg

            hover:bg-blue-50
            hover:text-violet-600
            hover:scale-110

            transition-all
            duration-300

            translate-x-1/2
          "
        >
          <FaChevronRight size={18} />
        </button>

      </div>

      {/* ========================================================
          SLIDE INDICATOR
      ======================================================== */}
      <div className="flex justify-center items-center gap-2 mt-8">

        {Array.from({ length: totalSlides }).map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300

              ${
                currentSlide === index
                  ? "w-8 bg-gradient-to-r from-blue-600 to-violet-600"
                  : "w-2 bg-gray-300 hover:bg-blue-300"
              }
            `}
          ></button>

        ))}

      </div>

      {/* ========================================================
          SLIDE COUNT
      ======================================================== */}
      <p className="text-center text-gray-400 text-sm mt-3">
        Showing{" "}
        <span className="font-semibold text-gray-600">
          {startIdx + 1}
        </span>
        {" – "}
        <span className="font-semibold text-gray-600">
          {Math.min(
            startIdx + itemsPerSlide,
            speakers.length
          )}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-600">
          {speakers.length}
        </span>{" "}
        speakers
      </p>

    </div>
  );
};

export default Keynotespeakers;