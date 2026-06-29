import React from "react";

const ImportantDates = () => {
  const dates = [
    {
      event: "Paper Submission Deadline:",
      date: (
        <span>
          <span className="line-through text-gray-400 mr-2">July 30, 2025</span>
          <span className="font-bold text-red-600 bg-yellow-200 px-2 py-1 rounded-full shadow">
            August 15, 2025
          </span>
        </span>
      ),
    },
    {
      event: "Notification of Acceptance:",
      date: (
        <span>
          <span className="line-through text-gray-400 mr-2">
            August 10, 2025
          </span>
          <span className="font-bold text-red-600 bg-yellow-200 px-2 py-1 rounded-full shadow">
            August 30, 2025
          </span>
        </span>
      ),
    },
    {
      event: "Final Paper Submission:",
      date: (
        <span>
          <span className="line-through text-gray-400 mr-2">
            August 20, 2025
          </span>
          <span className="font-bold text-red-600 bg-yellow-200 px-2 py-1 rounded-full shadow">
            August 30, 2025
          </span>
        </span>
      ),
    },
    { event: "Early Bird Registration:", date: "August 30, 2025" },
    { event: "Conference Date", date: "September 13-14, 2025" },
    {
      event: "Paper Submission Guidelines",
      date: (
        <a
          href="/files/Word_Sample_template_8.25 x11_column.docx"
          download
          className="text-blue-600 underline hover:text-blue-800"
        >
          MS Template Download{" "}
        </a>
      ),
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6 pt-4">
        Important{" "}
        <span className="text-emerald-500 font-serif font-thin"> Dates </span>
      </h2>
      {/* Card Section */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-violet-500 rounded-3xl shadow-lg py-6">
        <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 p-1 rounded-3xl shadow-lg">
          <table className="w-full bg-white text-gray-800 rounded-3xl overflow-hidden text-base sm:text-lg md:text-xl">
            <tbody>
              {dates.map((item, index) => (
                <tr
                  key={index}
                  className="font-thin border-b-2 border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  <td className="py-2 px-2 sm:py-3 sm:px-6 text-left align-top break-words max-w-[160px] sm:max-w-none text-sm sm:text-base md:text-xl">
                    {item.event}
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-6 text-right align-top break-words max-w-[180px] sm:max-w-none text-sm sm:text-base md:text-xl">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;


