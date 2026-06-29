import React from "react";

const topics = [
  { track: "General Track" },
  { track: "Intelligent Communication Technologies" },
  { track: "Intelligent Computing Techniques" },
  { track: "Wireless Networks and Related Techniques" },
  { track: "Blockchain Computing and Applications" },
  { track: "Cyber Security" },
  { track: "Recent Advancements in AI, ML, IoT, Cyber Security & Blockchain" },
];

const specialSessions = [
  {
    track: "Leveraging AI for Enhanced Social Security and Health",
    chairs: [
      "Prof. Rahul Papalkar, Vishwakarma University, Pune",
      "Prof. Tareek M. Pattewar, Vishwakarma University, Pune",
      "Dr. Sandip S Thite, Vishwakarma University, Pune",
    ],
  },
  {
    track:
      "Harnessing AI and ML: NLP, Robotics, Financial Trading, Agriculture, and Climate Change",
    chairs: [
      "Prof. Naveen Kumar, SVNIT, Surat",
      "Prof. Ashutosh Kumar Singh, UCER, Prayagraj",
      "Prof. Tarun Kumar, CURAJ, Ajmer",
    ],
  },
  {
    track: "Evolutionary Computation, AI, Security and Privacy Techniques",
    chairs: ["Dr. Shahazad N. Qurashi, Jazan University, Saudi Arabia"],
  },
  {
    track: "AI and ML: Cross-Disciplinary Insights and Innovations",
    chairs: ["Dr. Raju Pal, Gautam Buddha University, Greater Noida"],
  },
];

const TopicsOfInterest = () => {
  return (
    <div className="w-2/3 m-auto p-6">
      <div className="flex flex-col justify-between items-center gap-4 mb-6">
        <h2 className="text-4xl font-semibold">
          Topics of{" "}
          <span className="text-emerald-400 font-serif font-thin">Interest</span>
        </h2>
        <p className="text-2xl font-semibold">
          The topics of interest include (but not limited to) the following:
        </p>
        <div>
          <button className="bg-emerald-600 hover:bg-emerald-800 text-white px-4 py-2 rounded-full mr-2">
            Author Instructions
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-800 text-white px-4 py-2 rounded-full">
            Submit Your Article
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            General Tracks
          </h3>
          <div className="space-y-4">
            {topics.map((item, index) => (
              <div
                key={index}
                className="bg-blue-200 p-4 rounded-2xl shadow hover:bg-blue-300 transition"
              >
                {item.track}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Special Sessions
          </h3>
          <div className="space-y-4">
            {specialSessions.map((session, index) => (
              <div
                key={index}
                className="bg-blue-200 p-4 rounded-2xl shadow hover:bg-blue-300 transition"
              >
                <p className="font-bold">{session.track}</p>
                <ul className="list-disc ml-5 mt-2 text-sm">
                  {session.chairs.map((chair, idx) => (
                    <li key={idx}>{chair}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsOfInterest;


