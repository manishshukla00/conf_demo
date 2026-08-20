import React, { useState } from "react";

const tpcMembers = [
  { name: "Dr. Shashi Bhushan", affiliation: "Amity University Punjab, India" },
  { name: "Dr. Manoj Kumar", affiliation: "University of Wollongong Dubai" },
  { name: "Dr. Sujith Jayaprakash", affiliation: "BlueCrest University College, Ghana" },
  { name: "Dr. Suman", affiliation: "Bhagwan Parshuram Institute of Technology, Delhi" },
  { name: "Dr. Abhilasha Singh", affiliation: "SRM Institute of Science and Technology, Delhi-NCR Campus, Ghaziabad" },
  { name: "Dr. Bhawna Suri", affiliation: "Bhagwan Parshuram Institute of Technology, Delhi" },
  { name: "Dr. Sherin Zafar", affiliation: "Jamia Hamdard, Delhi" },
  { name: "Prof(Dr) Laxmi Ahuja", affiliation: "Amity University, India" },
  { name: "Dr. Praveen Kumar", affiliation: "Amity University Tashkent Uzbekistan" },
  { name: "Dr. Seema Rawat", affiliation: "Amity University Tashkent, Uzbekistan" },
  { name: "Dr. Rana Majumdar", affiliation: "Sister Nivedita University" },
  { name: "Dr. Francisca Nonyelum Ogwueleka", affiliation: "University of Abuja, Nigeria" },
  { name: "Dr. Olumide Owolabi", affiliation: "University of Abuja, Nigeria" },
  { name: "Dr. Kirti Seth", affiliation: "Inha University Tashkent" },
  { name: "Dr. Suleiman Salihu Jauro", affiliation: "Gombe State University Nigeria" },
  { name: "Dr. Valentina Emilia Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" },
  { name: "Dr. Utkarsh Goel", affiliation: "IIIT Allahabad, India" },
  { name: "Dr. Abhay Kumar Agarwal", affiliation: "Kamla Nehru Institute of Technology, Sultanpur" },
  { name: "Dr. Hashim Ibrahim Bisallah", affiliation: "Kampala International University, Uganda" },
  { name: "Dr. Sandeep Singh", affiliation: "Dept. of CSE, The NorthCap University, Gurugram" },
  { name: "Dr. Vikash Yadav", affiliation: "Board of Technical Education, Uttar Pradesh, India" },
  { name: "Dr. Alhassan Adamu", affiliation: "Kano University of Science and Technology, Wudil" },
  { name: "Dr. Gurseen Rakhra", affiliation: "Manav Rachna International Institute of Research and Studies, India" },
  { name: "Dr. H. M. Singh", affiliation: "SHUATS, Prayagraj, Uttar Pradesh" },
  { name: "Dr. Sunil Kumar", affiliation: "Manipal University Jaipur" },
  { name: "Dr. Benatiallah Ali", affiliation: "Laboratory Leesi Adrar University, Algeria" },
  { name: "Dr. Bireshwar Dass Mazumdar", affiliation: "Bennet University Prayagraj" },
  { name: "Dr. Radha Raman Chandan", affiliation: "School of Management Sciences (SMS), Varanasi" },
  { name: "Dr. Manmohan Mishra", affiliation: "United Institute of Management, India" },
  { name: "Dr. Praveen Kumar Shukla", affiliation: "Department of Computer Science & Engineering, Babu Banarasi Das University, Lucknow, India" },
  { name: "Dr. Muhammed Kabir Ahmed", affiliation: "Department of Computer Science Gombe State University" },
  { name: "Dr. Yogesh Kumar Gupta", affiliation: "Banasthali Vidyapith, India" },
  { name: "Dr. Mahima Shanker Pandey", affiliation: "Galgotias College of Engineering & Technology, Greater Noida" },
  { name: "Dr. Neeraj Chugh", affiliation: "University of Petroleum and Energy Studies, Dehradun, Uttarakhand" },
  { name: "Dr. Arun Kumar Yadav", affiliation: "NIT Hamirpur, India" },
  { name: "Dr. Chintan Kr Mandal", affiliation: "Jadavpur University, India" },
  { name: "Dr. Dac-Nhuong Le", affiliation: "Haiphong University, Vietnam" },
  { name: "Dr. Piyush Mahendru", affiliation: "Manav Rachna University, India" },
  { name: "Dr. Audu Musa Mabu", affiliation: "Yobe State University, Damaturu, Nigeria" },
  { name: "Dr. P. Raghu Vamsi", affiliation: "Jaypee Institute of Information Technology, Noida, India" },
  { name: "Dr. Avdhesh Gupta", affiliation: "Ajay Kumar Garg Engineering College, Ghaziabad" },
  { name: "Dr. Mustapha Ismail", affiliation: "Gombe State University, Nigeria" },
  { name: "Dr. Obunadike Georgina Nkolika", affiliation: "Federal University Dutsinma, Katsina State Nigeria" },
  { name: "Dr. Gaurav Khanna", affiliation: "Jaypee Institute of Information Technology, Noida, India" },
  { name: "Dr. Rajesh Kumar", affiliation: "University of Allahabad" },
  { name: "Dr. Arjun Singh", affiliation: "Manipal University Jaipur" },
  { name: "Dr. Sunita Tiwari", affiliation: "G B Pant DSEU Okhla-1 Campus, India" },
  { name: "Dr. B D Mazumdar", affiliation: "Bennet University, Noida, India" },
  { name: "Dr. Mukund Pratap Singh", affiliation: "Bennett University, Greater Noida" },
  { name: "Dr. Naveen Kumar", affiliation: "Thapar University, Punjab, India" },
  { name: "Dr. Rahul Bhandari", affiliation: "Chandigarh University, Punjab, India" },
  { name: "Dr. Shabir Ali", affiliation: "Galgotias University, Department of Engineering and Technology, Greater Noida" },
  { name: "Dr. Tribhuvan Singh", affiliation: "Siksha O Anusandhan (Deemed to be University), Bhubaneswar, Odisha, India" },
  { name: "Dr. Rakesh Ahuja", affiliation: "Chitkara University, Punjab, India" },
  { name: "Dr. Vijendra Pratap Singh", affiliation: "Mahatma Gandhi Kashi Vidyapith, Varanasi, India" },
  { name: "Dr. Rajwant Singh Rao", affiliation: "Guru Ghasidas Vishwavidyalaya Bilaspur Chhattisgarh, India" },
  { name: "Dr. Rohit Kumar Sachan", affiliation: "Bennett University Greater Noida" },
  { name: "Dr. Ashish Kumar Mishra", affiliation: "Rajkiya Engineering College Ambedkar Nagar Uttar Pradesh India" },
  { name: "Dr. Shivendu Mishra", affiliation: "Rajkiya Engineering College Ambedkar Nagar, India" },
  { name: "Dr. Prince Rajpoot", affiliation: "Rajkiya Engineering College Ambedkar Nagar, India" },
  { name: "Murali Natti", affiliation: "Apple Inc., USA" },
  { name: "Sagar Kesarpu", affiliation: "McLean, USA" },
  { name: "Reena Chandra", affiliation: "Amazon Inc, USA" },
  { name: "Swati Karni", affiliation: "SAIC/Department of Veteran Affairs, USA" },
  { name: "Ajay Prasad", affiliation: "Apple, USA" },
  { name: "Shilpi Yadav", affiliation: "IBM, USA" },
  { name: "Savi Grover", affiliation: "NBC Universal, USA" },
  { name: "Prassanna R Rajgopal", affiliation: "Cybersecurity Leader and Independent Researcher, USA" },
  { name: "Naga Sai Mrunal", affiliation: "Humana Inc., USA" },
  { name: "Swapnil Joijode", affiliation: "Hauppauge Inc., USA" },
  { name: "Deepak Pai", affiliation: "IBM, USA" },
  { name: "Sheeba Bromia Amalraj", affiliation: "TBC Corporation, USA" },
  { name: "Vasudevan Senathi Ramdoss", affiliation: "Financial investment sector, USA" },
  { name: "Kishore Bandela", affiliation: "MassDOT, USA" },
  { name: "Karthik Sirigiri", affiliation: "RedMane Technology LLC, USA" },
];

const gradients = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-purple-400",
  "from-emerald-500 to-teal-400",
  "from-rose-500 to-pink-400",
  "from-orange-500 to-amber-400",
  "from-indigo-500 to-blue-400",
  "from-teal-500 to-green-400",
  "from-fuchsia-500 to-pink-400",
];

const getInitials = (name) => {
  const clean = name.replace(/^(Dr\.|Prof\.|Prof\(Dr\)|Mr\.|Mrs\.|Ms\.)\s*/i, "").trim();
  const parts = clean.split(" ");
  return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase();
};

const getCountryTag = (affiliation) => {
  if (/\bUSA\b/i.test(affiliation)) return { label: "USA", color: "bg-blue-100 text-blue-700" };
  if (/India/i.test(affiliation)) return { label: "India", color: "bg-orange-100 text-orange-700" };
  if (/Nigeria/i.test(affiliation)) return { label: "Nigeria", color: "bg-green-100 text-green-700" };
  if (/Uzbekistan/i.test(affiliation)) return { label: "Uzbekistan", color: "bg-teal-100 text-teal-700" };
  if (/Romania/i.test(affiliation)) return { label: "Romania", color: "bg-red-100 text-red-700" };
  if (/Uganda/i.test(affiliation)) return { label: "Uganda", color: "bg-yellow-100 text-yellow-700" };
  if (/Algeria/i.test(affiliation)) return { label: "Algeria", color: "bg-emerald-100 text-emerald-700" };
  if (/Vietnam/i.test(affiliation)) return { label: "Vietnam", color: "bg-rose-100 text-rose-700" };
  if (/Ghana/i.test(affiliation)) return { label: "Ghana", color: "bg-amber-100 text-amber-700" };
  if (/Dubai/i.test(affiliation)) return { label: "UAE", color: "bg-sky-100 text-sky-700" };
  if (/Croatia|Czech/i.test(affiliation)) return { label: "Europe", color: "bg-purple-100 text-purple-700" };
  return null;
};

const Tpc = () => {
  const [search, setSearch] = useState("");

  const filtered = tpcMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.affiliation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 pt-24 pb-16 px-4">

      {/* Hero Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 bg-indigo-500 bg-opacity-30 text-indigo-200 text-sm font-semibold rounded-full border border-indigo-400 border-opacity-40 mb-4 tracking-widest uppercase">
          AICCT 2025
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
          Technical Program{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
            Committee
          </span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-2">
          Distinguished researchers and academics from across the globe.
        </p>
        <span className="inline-block mt-2 px-4 py-1 bg-white bg-opacity-10 text-white text-sm font-semibold rounded-full border border-white border-opacity-20">
          {tpcMembers.length} Members Worldwide
        </span>
        <div className="mt-6 flex justify-center gap-2">
          <div className="h-1 w-12 rounded-full bg-cyan-400"></div>
          <div className="h-1 w-6 rounded-full bg-blue-400"></div>
          <div className="h-1 w-3 rounded-full bg-violet-400"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name or affiliation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-sm"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
              ✕
            </button>
          )}
        </div>
        {search && (
          <p className="text-center text-slate-400 text-sm mt-2">
            Showing {filtered.length} of {tpcMembers.length} members
          </p>
        )}
      </div>

      {/* Members Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((member, idx) => {
          const gradient = gradients[idx % gradients.length];
          const countryTag = getCountryTag(member.affiliation);
          return (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white border-opacity-10"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`}></div>

              <div className="p-5">
                {/* Avatar + Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>
                    {getInitials(member.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-sm leading-tight truncate">
                      {member.name}
                    </p>
                    {countryTag && (
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${countryTag.color}`}>
                        {countryTag.label}
                      </span>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px w-full bg-gradient-to-r ${gradient} opacity-30 mb-3`}></div>

                {/* Affiliation */}
                <p className="text-gray-500 text-xs leading-relaxed">
                  {member.affiliation}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-lg font-semibold">No members found</p>
          <p className="text-sm mt-1">Try a different name or affiliation</p>
        </div>
      )}
    </div>
  );
};

export default Tpc;
