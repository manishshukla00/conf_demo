import React from "react";

const ImportantDates = () => {
  const dates = [
    { event: "Paper Submission Deadline:", date: "Sep 30, 2026" },
    { event: "Notification of Acceptance:", date: "Oct 30, 2026" },
    { event: "Final Paper Submission:", date: "Nov 30, 2026" },
    { event: "Early Bird Registration:", date: "Dec 30, 2026" },
    { event: "Conference Date", date: "Jan 08-09, 2027" },
    { event: "Paper Submission Guidelines", date: "MS Template Download" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-4 pt-4">
          Important
          <span className="text-emerald-400 font-serif font-thin">Dates</span>
        </h2>
        <table className="w-full bg-blue-600 text-white rounded-lg overflow-hidden shadow-lg">
          <tbody>
            {dates.map((item, index) => (
              <tr
                key={index}
                className="text-xl font-thin border-b-2 border-blue-500 hover:bg-blue-500 transition-colors"
              >
                <td className="py-3 px-6 text-left">{item.event}</td>
                <td className="py-3 px-6 text-right">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;


