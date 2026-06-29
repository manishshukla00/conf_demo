import { useState } from "react";

const fees = [
  { category: "Student / Research Scholar", amount: "₹7,000", icon: "🎓", color: "from-blue-500 to-cyan-400", bg: "bg-blue-50", border: "border-blue-200" },
  { category: "Academician", amount: "₹8,000", icon: "👨‍🏫", color: "from-violet-500 to-purple-400", bg: "bg-violet-50", border: "border-violet-200" },
  { category: "Industry Person", amount: "₹10,000", icon: "💼", color: "from-emerald-500 to-teal-400", bg: "bg-emerald-50", border: "border-emerald-200" },
  { category: "Foreign Student / Research Scholar", amount: "USD 200", icon: "🌍", color: "from-orange-500 to-amber-400", bg: "bg-orange-50", border: "border-orange-200" },
  { category: "Foreign Academics", amount: "USD 200", icon: "🏛️", color: "from-rose-500 to-pink-400", bg: "bg-rose-50", border: "border-rose-200" },
];

const accountDetails = [
  { label: "Account Holder", value: "United University" },
  { label: "Account Number", value: "50100366340061" },
  { label: "IFSC Code", value: "HDFC0006735" },
  { label: "SWIFT Code", value: "HDFCINBBNRI" },
  { label: "Branch", value: "HDFC, Rawatpur, Prayagraj" },
  { label: "Account Type", value: "Current Account" },
];

const Registration = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-16 px-4">

      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 mb-4 tracking-widest uppercase">
          AICCT 2025
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">
          Registration{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Details
          </span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Complete your registration before the deadline to secure your spot at AICCT 2025.
        </p>
        <div className="mt-5 flex justify-center gap-2">
          <div className="h-1 w-12 rounded-full bg-blue-500"></div>
          <div className="h-1 w-6 rounded-full bg-indigo-400"></div>
          <div className="h-1 w-3 rounded-full bg-violet-400"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">

        {/* Deadline Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📅</div>
            <div>
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Last Date of Registration</p>
              <p className="text-2xl font-black">August 25, 2025</p>
            </div>
          </div>
          <button
            onClick={() => setShowPopup(true)}
            className="px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-sm flex-shrink-0"
          >
            Register Here →
          </button>
        </div>

        {/* Registration Fees */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">₹</span>
            Registration Fees
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fees.map((fee, i) => (
              <div key={i} className={`${fee.bg} border ${fee.border} rounded-3xl p-5 hover:shadow-md transition-all duration-300 hover:scale-105`}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${fee.color} flex items-center justify-center text-2xl mb-4 shadow-md`}>
                  {fee.icon}
                </div>
                <p className="text-gray-600 text-sm font-medium mb-1">{fee.category}</p>
                <p className="text-2xl font-black text-gray-900">{fee.amount}</p>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-3xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">⚠️</div>
            <div>
              <p className="font-bold text-amber-800 text-sm mb-1">Important Note</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Fees above apply to a standard article of up to <strong>5 pages</strong>. Additional pages (up to 7 pages max) incur an extra charge of{" "}
                <strong>₹1,000/page</strong> for Indian authors and <strong>$15/page</strong> for international authors.
              </p>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm">🏦</span>
            Bank Account Details
          </h2>
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            {accountDetails.map((item, i) => (
              <div key={i} className={`flex items-center gap-4 px-6 py-4 ${i !== accountDetails.length - 1 ? "border-b border-gray-100" : ""} hover:bg-gray-50 transition-colors`}>
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 flex-shrink-0"></div>
                <span className="text-gray-500 text-sm font-semibold w-40 flex-shrink-0">{item.label}</span>
                <span className="text-gray-900 font-bold text-sm font-mono">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => setShowPopup(true)}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl text-lg"
          >
            Proceed to Register
          </button>
          <p className="text-gray-400 text-sm mt-3">Registration deadline: August 25, 2025</p>
        </div>

      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center relative border border-gray-100">
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-5 text-gray-400 hover:text-gray-700 text-2xl font-bold transition-colors">×</button>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">🔒</div>
            <h2 className="text-2xl font-black text-gray-900 mb-3">Registration Closed</h2>
            <p className="text-gray-500 leading-relaxed mb-6">Thank you for your interest. Registration for AICCT 2025 is now closed.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Registration;
