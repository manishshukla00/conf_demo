import React from "react";

const committeeData = [
  {
    title: "Chief Patron",
    members: [
      "Dr. Jagdish Gulati, Pro Chancellor, United University, Prayagraj, Uttar Pradesh, India",
    ],
  },
  {
    title: "Patron",
    members: ["Prof. A.M. Agarwal, Vice Chancellor, Prayagraj, U.P., India"],
  },
  {
    title: "General Chair",
    members: [
      "Prof. (Dr.) Siddhartha Bhattacharya, VSBTU, Ostrava, Czech Republic AUC, Zagreb, Croatia",
      "Prof. (Dr.) Jyoti Sekhar Banerjee, Bengal Institute of Technology, Kolkata, India",
      "Dr. Chetan Vyas, Dean, United University, Prayagraj, India",
    ],
  },
  {
    title: "Program Chair",
    members: [
      "Dr. Prashant Shukla, HoD (Faculty of Engg. and Technology), United University, Prayagraj, India",
      "Dr. Sanjeev Kumar, United University, Prayagraj, India",
    ],
  },
  {
    title: "Technical Chairs",
    members: [
      "Dr. Manoj Kumar Pal, United University, Prayagraj, India",

      "Dr. Ashutosh Kumar Tripathi, United University, Prayagraj, India",
      "Dr. Santosh Kumar Sharma, United University, Prayagraj, India",
    ],
  },
  {
    title: "Editorial Chair",
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
    members: ["Dr. Tulika Narang, United University, Prayagraj, India"],
  },
  {
    title: "Publicity Co-Chairs",
    members: [
      "Mr. Naveen Kumar Gupta, United University, Prayagraj, India",
      "Mr. Umakant Singh, United University, Prayagraj, India",
      "Mr. Saurabh Srivastava, United University, Prayagraj, India",
    ],
  },
  {
    title: "Finance Chair",
    members: ["Mrs. Archana Tandon, United University, Prayagraj, India"],
  },
  {
    title: "Finance Co-Chairs",
    members: [
      "Mr. Gaurav Dwivedi, United University, Prayagraj, India",
      "Mr. Ravindra Verma, United University, Prayagraj, India",
    ],
  },
  {
    title: "Sponsorship Chair",
    members: ["Dr. Sweta Singh, United University, Prayagraj, India"],
  },
  {
    title: "Sponsorship Co-Chairs",
    members: ["Dr. Mukesh Kumar, United University, Prayagraj, India"],
  },
  {
    title: "Local Organizing Chair",
    members: [
      "Mr. Rahul Vyas, United University, Prayagraj, India",
      "Mr. Praven Kumar Srivastva, United University, Prayagraj, India",
    ],
  },
  {
    title: "Local Organizing Co-Chairs",
    members: [
      "Mr. Biju Natesan, United University, Prayagraj, India",
      "Mr. Anurag Tripathi, United University, Prayagraj, India",
      "Mrs. Vibha Tripathi, United University, Prayagraj, India",
    ],
  },
  {
    title: "Conference Secretaries",
    members: [
      "Ms. Priyanka, United University, Prayagraj, India",
      "Ms. Kumkum Dwivedi, United University, Prayagraj, India",
    ],
  },
];

const CommitteMember = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 p-4"
      style={{
        fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
        paddingTop: "5.5rem", // Add space for navbar (adjust as needed)
      }}
    >
      <div className="max-w-4xl mx-auto pt-0">
        {/* Page Title */}
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-4 pt-2"
          style={{
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "1px",
            lineHeight: "1.2",
          }}
        >
          Conference Committees
        </h1>
        <p
          className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6 text-center"
          style={{
            fontFamily: "'Roboto', Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1.05rem",
            lineHeight: "1.5",
            letterSpacing: "0.2px",
          }}
        >
          Meet the esteemed members of the conference committees who are
          contributing to the success of AICCT-2025.
        </p>

        {/* Chief Patron Card */}
        <div className="mb-4 flex justify-center">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-500 p-[2px] rounded-lg shadow-lg hover:scale-105 transition-transform w-full max-w-md">
            <div className="bg-white rounded-lg p-4 flex flex-col items-center">
              {/* Image removed */}
              <h2
                className="text-xl font-extrabold text-blue-800 mb-2 text-center"
                style={{
                  fontFamily: "'Montserrat', Arial, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                Chief Patron
              </h2>
              <ul
                className="list-none space-y-1 text-base text-center text-gray-700"
                style={{
                  fontFamily: "'Roboto', Arial, sans-serif",
                  fontWeight: 400,
                }}
              >
                {committeeData[0].members.map((member, idx) => (
                  <li key={idx}>{member}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Patron Card */}
        <div className="mb-4 flex justify-center">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-500 p-[2px] rounded-lg shadow-lg hover:scale-105 transition-transform w-full max-w-md">
            <div className="bg-white rounded-lg p-4 flex flex-col items-center">
              {/* Image removed */}
              <h2
                className="text-xl font-extrabold text-blue-800 mb-2 text-center"
                style={{
                  fontFamily: "'Montserrat', Arial, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                Patron
              </h2>
              <ul
                className="list-none space-y-1 text-base text-center text-gray-700"
                style={{
                  fontFamily: "'Roboto', Arial, sans-serif",
                  fontWeight: 400,
                }}
              >
                {committeeData[1].members.map((member, idx) => (
                  <li key={idx}>{member}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other Committee Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {committeeData.slice(2).map((committee, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 p-[2px] rounded-lg shadow-lg hover:scale-105 transition-transform w-full"
            >
              <div className="bg-white rounded-lg p-3 h-full flex flex-col justify-center">
                <h2
                  className="text-base sm:text-lg font-bold text-blue-700 mb-2 text-center"
                  style={{
                    fontFamily: "'Montserrat', Arial, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {committee.title}
                </h2>
                <ul
                  className="list-disc list-inside space-y-1 text-sm text-justify text-gray-700"
                  style={{
                    fontFamily: "'Roboto', Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.98rem",
                    lineHeight: "1.5",
                  }}
                >
                  {committee.members.map((member, idx) => (
                    <li key={idx}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteMember;


