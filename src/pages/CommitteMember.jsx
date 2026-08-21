import React, { useState } from "react";

/* =========================================================
   GOOGLE FONT
   Add this once in your index.html <head>:

   <link
     href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
     rel="stylesheet"
   />
   ========================================================= */

const committeeData = [
  {
    title: "Chief Patron",
    color: "from-amber-500 to-yellow-400",
    bg: "from-amber-50 to-yellow-50",
    border: "border-amber-300",
    badge: "bg-amber-100 text-amber-800",
    members: [
      "Dr. Jagdish Gulati, Pro Chancellor, United University, Prayagraj, Uttar Pradesh, India",
    ],
  },

  {
    title: "Patron",
    color: "from-purple-600 to-indigo-500",
    bg: "from-purple-50 to-indigo-50",
    border: "border-purple-300",
    badge: "bg-purple-100 text-purple-800",
    members: ["Prof. A.M. Agarwal, Vice Chancellor, Prayagraj, U.P., India"],
  },

  {
    title: "General Chair",
    color: "from-blue-600 to-cyan-500",
    bg: "from-blue-50 to-cyan-50",
    border: "border-blue-300",
    badge: "bg-blue-100 text-blue-800",
    members: [
      "Prof. (Dr.) Siddhartha Bhattacharya, VSBTU, Ostrava, Czech Republic AUC, Zagreb, Croatia",
      "Prof. (Dr.) Jyoti Sekhar Banerjee, Bengal Institute of Technology, Kolkata, India",
      "Dr. Chetan Vyas, Dean, United University, Prayagraj, India",
    ],
  },

  {
    title: "Program Chair",
    color: "from-emerald-600 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-300",
    badge: "bg-emerald-100 text-emerald-800",
    members: [
      "Dr. Prashant Shukla, HoD (Faculty of Engg. and Technology), United University, Prayagraj, India",
      "Dr. Sanjeev Kumar, United University, Prayagraj, India",
    ],
  },

  {
    title: "Technical Chairs",
    color: "from-rose-600 to-pink-500",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-300",
    badge: "bg-rose-100 text-rose-800",
    members: [
      "Dr. Manoj Kumar Pal, United University, Prayagraj, India",
      "Dr. Ashutosh Kumar Tripathi, United University, Prayagraj, India",
      "Dr. Santosh Kumar Sharma, United University, Prayagraj, India",
    ],
  },

  {
    title: "Editorial Chair",
    color: "from-violet-600 to-purple-500",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-300",
    badge: "bg-violet-100 text-violet-800",
    members: [
      "Prof. (Dr.) Siddhartha Bhattacharya, VSBTU, Ostrava, Czech Republic AUC, Zagreb, Croatia",
      "Prof. (Dr.) Jyoti Sekhar Banerjee, Bengal Institute of Technology, Kolkata, India",
      "Dr. Prashant Shukla, HoD (Faculty of Engg. and Technology), United University, Prayagraj, India",
      "Dr. Sanjeev Kumar, United University, Prayagraj, India",
      "Dr. Manoj Kumar Pal, United University, Prayagraj, India",
    ],
  },

  {
    title: "Publicity Chair",
    color: "from-orange-500 to-amber-400",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-300",
    badge: "bg-orange-100 text-orange-800",
    members: ["Dr. Tulika Narang, United University, Prayagraj, India"],
  },

  {
    title: "Publicity Co-Chairs",
    color: "from-sky-600 to-blue-400",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-300",
    badge: "bg-sky-100 text-sky-800",
    members: [
      "Mr. Naveen Kumar Gupta, United University, Prayagraj, India",
      "Mr. Umakant Singh, United University, Prayagraj, India",
      "Mr. Saurabh Srivastava, United University, Prayagraj, India",
    ],
  },

  {
    title: "Finance Chair",
    color: "from-green-600 to-emerald-400",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-300",
    badge: "bg-green-100 text-green-800",
    members: ["Mrs. Archana Tandon, United University, Prayagraj, India"],
  },

  {
    title: "Finance Co-Chairs",
    color: "from-teal-600 to-cyan-400",
    bg: "from-teal-50 to-cyan-50",
    border: "border-teal-300",
    badge: "bg-teal-100 text-teal-800",
    members: [
      "Mr. Gaurav Dwivedi, United University, Prayagraj, India",
      "Mr. Ravindra Verma, United University, Prayagraj, India",
    ],
  },

  {
    title: "Sponsorship Chair",
    color: "from-fuchsia-600 to-pink-400",
    bg: "from-fuchsia-50 to-pink-50",
    border: "border-fuchsia-300",
    badge: "bg-fuchsia-100 text-fuchsia-800",
    members: ["Dr. Sweta Singh, United University, Prayagraj, India"],
  },

  {
    title: "Sponsorship Co-Chairs",
    color: "from-indigo-600 to-blue-400",
    bg: "from-indigo-50 to-blue-50",
    border: "border-indigo-300",
    badge: "bg-indigo-100 text-indigo-800",
    members: ["Dr. Mukesh Kumar, United University, Prayagraj, India"],
  },

  {
    title: "Local Organizing Chair",
    color: "from-lime-600 to-green-400",
    bg: "from-lime-50 to-green-50",
    border: "border-lime-300",
    badge: "bg-lime-100 text-lime-800",
    members: [
      "Mr. Rahul Vyas, United University, Prayagraj, India",
      "Mr. Praven Kumar Srivastva, United University, Prayagraj, India",
    ],
  },

  {
    title: "Local Organizing Co-Chairs",
    color: "from-red-500 to-rose-400",
    bg: "from-red-50 to-rose-50",
    border: "border-red-300",
    badge: "bg-red-100 text-red-800",
    members: [
      "Mr. Biju Natesan, United University, Prayagraj, India",
      "Mr. Anurag Tripathi, United University, Prayagraj, India",
      "Mrs. Vibha Tripathi, United University, Prayagraj, India",
    ],
  },

  {
    title: "Conference Secretaries",
    color: "from-cyan-600 to-sky-400",
    bg: "from-cyan-50 to-sky-50",
    border: "border-cyan-300",
    badge: "bg-cyan-100 text-cyan-800",
    members: [
      "Ms. Priyanka, United University, Prayagraj, India",
      "Ms. Kumkum Dwivedi, United University, Prayagraj, India",
    ],
  },
];

/* =========================================================
   INITIALS
   ========================================================= */

const getInitials = (name) => {
  const parts = name
    .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s*/i, "")
    .trim()
    .split(" ");

  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
};

/* =========================================================
   COMPONENT
   ========================================================= */

const CommitteMember = () => {
  const [hovered, setHovered] = useState(null);

  const chiefPatron = committeeData[0];
  const patron = committeeData[1];
  const rest = committeeData.slice(2);

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-indigo-950
        to-blue-950
        pt-24
        pb-20
        px-4
      "
      style={{
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="text-center mb-14">
        <span
          className="
            inline-block
            px-5
            py-2
            bg-indigo-500/10
            text-indigo-200
            text-xs
            sm:text-sm
            font-semibold
            rounded-full
            border
            border-indigo-400/30
            mb-6
            tracking-[0.28em]
            uppercase
          "
        >
          ConCISE 2027
        </span>

        <h1
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-semibold
            text-white
            mb-5
            leading-tight
            tracking-tight
          "
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Conference{" "}
          <span
            className="
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-violet-400
            "
          >
            Committees
          </span>
        </h1>

        <p
          className="
            text-base
            sm:text-lg
            text-slate-300
            max-w-2xl
            mx-auto
            leading-relaxed
            font-normal
          "
        >
          Meet the esteemed members contributing to the success of ConCISE-2027.
        </p>

        <div className="mt-7 flex justify-center items-center gap-2">
          <div className="h-1 w-14 rounded-full bg-cyan-400"></div>
          <div className="h-1 w-8 rounded-full bg-blue-400"></div>
          <div className="h-1 w-4 rounded-full bg-violet-400"></div>
        </div>
      </div>

      {/* =====================================================
          CHIEF PATRON
          SMALLER + CENTERED
          ===================================================== */}

      <div className="max-w-2xl mx-auto mb-4">
        <div
          onMouseEnter={() => setHovered("chief")}
          onMouseLeave={() => setHovered(null)}
          className={`
            relative
            rounded-2xl
            overflow-hidden
            border
            ${chiefPatron.border}
            border-opacity-50
            bg-white
            shadow-xl
            transition-all
            duration-300
            ${hovered === "chief" ? "scale-[1.015] shadow-amber-500/30" : ""}
          `}
        >
          <div
            className={`
              h-1.5
              w-full
              bg-gradient-to-r
              ${chiefPatron.color}
            `}
          ></div>

          <div
            className={`
              bg-gradient-to-br
              ${chiefPatron.bg}
              px-6
              py-5
              flex
              flex-col
              items-center
            `}
          >
            <span
              className={`
                text-[11px]
                font-bold
                px-4
                py-1.5
                rounded-full
                ${chiefPatron.badge}
                mb-3
                tracking-[0.2em]
                uppercase
              `}
            >
              {chiefPatron.title}
            </span>

            {chiefPatron.members.map((member, idx) => {
              const [name, ...rest] = member.split(",");

              return (
                <div key={idx} className="text-center">
                  <p
                    className="
                      text-lg
                      sm:text-xl
                      font-bold
                      text-gray-900
                      tracking-tight
                    "
                  >
                    {name.trim()}
                  </p>

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      text-gray-500
                      mt-1
                      leading-relaxed
                    "
                  >
                    {rest.join(",").trim()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          PATRON
          EVEN SMALLER
          ===================================================== */}

      <div className="max-w-xl mx-auto mb-12">
        <div
          onMouseEnter={() => setHovered("patron")}
          onMouseLeave={() => setHovered(null)}
          className={`
            relative
            rounded-2xl
            overflow-hidden
            border
            ${patron.border}
            border-opacity-50
            bg-white
            shadow-xl
            transition-all
            duration-300
            ${hovered === "patron" ? "scale-[1.015] shadow-purple-500/30" : ""}
          `}
        >
          <div
            className={`
              h-1.5
              w-full
              bg-gradient-to-r
              ${patron.color}
            `}
          ></div>

          <div
            className={`
              bg-gradient-to-br
              ${patron.bg}
              px-6
              py-5
              flex
              flex-col
              items-center
            `}
          >
            <span
              className={`
                text-[11px]
                font-bold
                px-4
                py-1.5
                rounded-full
                ${patron.badge}
                mb-3
                tracking-[0.2em]
                uppercase
              `}
            >
              {patron.title}
            </span>

            {patron.members.map((member, idx) => {
              const [name, ...rest] = member.split(",");

              return (
                <div key={idx} className="text-center">
                  <p
                    className="
                      text-lg
                      sm:text-xl
                      font-bold
                      text-gray-900
                      tracking-tight
                    "
                  >
                    {name.trim()}
                  </p>

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      text-gray-500
                      mt-1
                      leading-relaxed
                    "
                  >
                    {rest.join(",").trim()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          OTHER COMMITTEES
          ===================================================== */}

      <div
        className="
          max-w-5xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {rest.map((committee, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(`card-${index}`)}
            onMouseLeave={() => setHovered(null)}
            className={`
              relative
              rounded-2xl
              overflow-hidden
              border
              ${committee.border}
              border-opacity-40
              shadow-xl
              bg-white
              transition-all
              duration-300
              ${
                hovered === `card-${index}`
                  ? "scale-[1.025] shadow-indigo-400/30"
                  : ""
              }
            `}
          >
            {/* Gradient line */}

            <div
              className={`
                h-1.5
                w-full
                bg-gradient-to-r
                ${committee.color}
              `}
            ></div>

            <div
              className={`
                bg-gradient-to-br
                ${committee.bg}
                p-5
              `}
            >
              {/* Committee title */}

              <div className="mb-5">
                <span
                  className={`
                    inline-block
                    text-[11px]
                    font-bold
                    px-3
                    py-1.5
                    rounded-full
                    ${committee.badge}
                    tracking-[0.16em]
                    uppercase
                    leading-tight
                  `}
                >
                  {committee.title}
                </span>
              </div>

              {/* Members */}

              <div className="space-y-4">
                {committee.members.map((member, idx) => {
                  const [name, ...rest] = member.split(",");

                  return (
                    <div
                      key={idx}
                      className="
                        border-b
                        border-gray-200/70
                        pb-3
                        last:border-0
                        last:pb-0
                      "
                    >
                      <p
                        className="
                          text-sm
                          font-bold
                          text-gray-800
                          leading-snug
                          tracking-tight
                        "
                      >
                        {name.trim()}
                      </p>

                      {rest.length > 0 && (
                        <p
                          className="
                            text-xs
                            text-gray-500
                            mt-1
                            leading-relaxed
                            font-normal
                          "
                        >
                          {rest.join(",").trim()}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteMember;
