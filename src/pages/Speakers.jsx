import React from "react";

const Speakers = () => {
  const speakers = [
    {
      name: "Prof. Rajeev Srivastava",
      image: "/images/RajeevPhoto1.jpeg",
      designation: "Director",
      department: "IIIT Ranchi",
    },
    {
      name: "Prof. Dr. Sanjay Mishra",
      image: "/images/sanjay-misra.png",
      designation: "Senior Scientist",
      department: "Institute for Energy Technology, Norway",
    },
    {
      name: "Prof. Shekhar Verma",
      image: "/images/sverma.jpg",
      designation: "Professor in CSE",
      department:
        "Indian Institute of Information Technology - Allahabad",
    },
  ];

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-16 px-4">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="text-center mb-12">

        {/* Conference Badge */}
        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 mb-4 tracking-widest uppercase">
          ConCISE 2027
        </span>

        {/* Page Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-3 leading-tight">
          Meet Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Speakers
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Our conference features distinguished speakers who are experts in
          their respective fields. Learn from their insights and experiences.
        </p>

        {/* Accent Lines */}
        <div className="mt-5 flex justify-center gap-2">
          <div className="h-1 w-12 rounded-full bg-blue-500"></div>
          <div className="h-1 w-6 rounded-full bg-indigo-400"></div>
          <div className="h-1 w-3 rounded-full bg-violet-400"></div>
        </div>

      </div>

      {/* =====================================================
          SPEAKERS GRID
      ===================================================== */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {speakers.map((speaker, index) => {
          const theme = gradients[index % gradients.length];

          return (
            <div
              key={index}
              className={`
                group
                relative
                rounded-3xl
                overflow-hidden
                bg-white
                border ${theme.border}
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
                  CARD CONTENT
              ================================================= */}
              <div
                className={`
                  bg-gradient-to-br
                  ${theme.bg}
                  p-6
                  flex
                  flex-col
                  items-center
                  text-center
                `}
              >

                {/* =================================================
                    SPEAKER IMAGE
                ================================================= */}
                <div
                  className={`
                    w-32
                    h-32
                    rounded-full
                    p-1
                    bg-gradient-to-br
                    ${theme.color}
                    shadow-lg
                    mb-5
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

                {/* =================================================
                    SPEAKER NAME
                ================================================= */}
                <h2 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                  {speaker.name}
                </h2>

                {/* =================================================
                    DESIGNATION BADGE
                ================================================= */}
                <span
                  className={`
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-bold
                    tracking-wide
                    mb-4
                    ${theme.badge}
                  `}
                >
                  {speaker.designation}
                </span>

                {/* =================================================
                    DIVIDER
                ================================================= */}
                <div
                  className={`
                    h-px
                    w-16
                    bg-gradient-to-r
                    ${theme.color}
                    opacity-50
                    mb-4
                  `}
                ></div>

                {/* =================================================
                    DEPARTMENT / INSTITUTION
                ================================================= */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {speaker.department}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default Speakers;