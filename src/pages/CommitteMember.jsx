import React, { useState } from "react";

const committeeData = [
  {
    title: "Chief Patron",
    icon: "👑",
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
    icon: "🎓",
    color: "from-purple-600 to-indigo-500",
    bg: "from-purple-50 to-indigo-50",
    border: "border-purple-300",
    badge: "bg-purple-100 text-purple-800",
    members: ["Prof. A.M. Agarwal, Vice Chancellor, Prayagraj, U.P., India"],
  },
  {
    title: "General Chair",
    icon: "🏛️",
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
    icon: "📋",
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
    icon: "⚙️",
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
    icon: "✏️",
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
    icon: "📢",
    color: "from-orange-500 to-amber-400",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-300",
    badge: "bg-orange-100 text-orange-800",
    members: ["Dr. Tulika Narang, United University, Prayagraj, India"],
  },
  {
    title: "Publicity Co-Chairs",
    icon: "📣",
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
    icon: "💼",
    color: "from-green-600 to-emerald-400",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-300",
    badge: "bg-green-100 text-green-800",
    members: ["Mrs. Archana Tandon, United University, Prayagraj, India"],
  },
  {
    title: "Finance Co-Chairs",
    icon: "📊",
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
    icon: "🤝",
    color: "from-fuchsia-600 to-pink-400",
    bg: "from-fuchsia-50 to-pink-50",
    border: "border-fuchsia-300",
    badge: "bg-fuchsia-100 text-fuchsia-800",
    members: ["Dr. Sweta Singh, United University, Prayagraj, India"],
  },
  {
    title: "Sponsorship Co-Chairs",
    icon: "🌟",
    color: "from-indigo-600 to-blue-400",
    bg: "from-indigo-50 to-blue-50",
    border: "border-indigo-300",
    badge: "bg-indigo-100 text-indigo-800",
    members: ["Dr. Mukesh Kumar, United University, Prayagraj, India"],
  },
  {
    title: "Local Organizing Chair",
    icon: "🗺️",
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
    icon: "📍",
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
    icon: "📝",
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

const getInitials = (name) => {
  const parts = name.replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s*/i, "").trim().split(" ");
  return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase();
};

const CommitteMember = () => {
  const [hovered, setHovered] = useState(null);
  const topTwo = committeeData.slice(0, 2);
  const rest = committeeData.slice(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 pt-24 pb-16 px-4">

      {/* Hero Header */}
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1 bg-indigo-500 bg-opacity-30 text-indigo-200 text-sm font-semibold rounded-full border border-indigo-400 border-opacity-40 mb-4 tracking-widest uppercase">
          AICCT 2025
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
          Conference{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
            Committees
          </span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Meet the esteemed members contributing to the success of AICCT-2025.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <div className="h-1 w-12 rounded-full bg-cyan-400"></div>
          <div className="h-1 w-6 rounded-full bg-blue-400"></div>
          <div className="h-1 w-3 rounded-full bg-violet-400"></div>
        </div>
      </div>

      {/* Chief Patron & Patron — full width centered */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-6 justify-center mb-8">
        {topTwo.map((committee, index) => (
          <div
            key={index}
            className="flex-1 max-w-sm mx-auto sm:mx-0"
            onMouseEnter={() => setHovered(`top-${index}`)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={`relative rounded-3xl overflow-hidden border ${committee.border} border-opacity-50 shadow-2xl transition-all duration-300 ${hovered === `top-${index}` ? "scale-105 shadow-indigo-500/30" : ""} bg-white`}>
              {/* Top gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${committee.color}`}></div>
              <div className={`bg-gradient-to-br ${committee.bg} p-6 flex flex-col items-center`}>
                <div className={`text-4xl mb-3`}>{committee.icon}</div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${committee.badge} mb-3 tracking-wider uppercase`}>
                  {committee.title}
                </span>
                {committee.members.map((member, idx) => {
                  const [name, ...rest] = member.split(",");
                  return (
                    <div key={idx} className="flex flex-col items-center mt-2 text-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${committee.color} flex items-center justify-center text-white font-bold text-sm mb-2 shadow-lg`}>
                        {getInitials(name)}
                      </div>
                      <p className="font-bold text-gray-900 text-sm">{name.trim()}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{rest.join(",").trim()}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rest — 2-col grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((committee, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(`card-${index}`)}
            onMouseLeave={() => setHovered(null)}
            className={`relative rounded-3xl overflow-hidden border ${committee.border} border-opacity-40 shadow-xl bg-white transition-all duration-300 ${hovered === `card-${index}` ? "scale-105 shadow-indigo-400/30" : ""}`}
          >
            {/* Top gradient bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${committee.color}`}></div>
            <div className={`bg-gradient-to-br ${committee.bg} p-5`}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${committee.color} flex items-center justify-center text-xl shadow-md flex-shrink-0`}>
                  {committee.icon}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${committee.badge} tracking-wider uppercase`}>
                  {committee.title}
                </span>
              </div>
              {/* Members */}
              <div className="space-y-3">
                {committee.members.map((member, idx) => {
                  const [name, ...rest] = member.split(",");
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${committee.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow`}>
                        {getInitials(name)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm leading-tight">{name.trim()}</p>
                        {rest.length > 0 && (
                          <p className="text-gray-500 text-xs mt-0.5 leading-snug">{rest.join(",").trim()}</p>
                        )}
                      </div>
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
