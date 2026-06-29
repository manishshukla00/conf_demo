import { useState } from "react";

const Registration = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };
  const handleClosePopup = () => setShowPopup(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 p-8">
      <div className="max-w-4xl mt-20 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 text-white text-center py-6">
          <h1 className="text-3xl font-extrabold">Registration Details</h1>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Last Date */}
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Last Date of Registration:
            </h2>
            <p className="text-gray-700 text-lg">August 25, 2025</p>
          </div>

          {/* Registration Fees */}
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Registration Fees
            </h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>
                <span className="font-bold">Student/ Research Scholar:</span>
                INR 7000
              </li>
              <li>
                <span className="font-bold">Academician</span>
                INR 8000
              </li>
              <li>
                <span className="font-bold">Industry Person:</span> INR 10000
              </li>
              <li>
                <span className="font-bold">
                  Foreign Student/ Research Scholar:
                </span>
                USD 200
              </li>
              <li>
                <span className="font-bold">Foreign Academics:</span> USD 200
              </li>
              {/* <li>
                <span className="font-bold">Foreign Industry:</span> USD 300
              </li> */}
            </ul>
            {/* Terms and Conditions Note */}
            <div className="mt-4 text-sm text-gray-700 bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <span className="font-semibold text-emerald-700">Note:</span> The
              fees mentioned above apply to a standard article of up to 5 pages.
              Additional pages, up to a maximum of 7 pages, will incur an extra
              charge of <span className="font-bold">₹1000 per page</span> for
              Indian authors and <span className="font-bold">$15 per page</span>
              for international authors.
            </div>
          </div>

          {/* Account Details */}
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Account Details
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Account Details:
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>
                <span className="font-bold">Account Holder Name:</span> United
                University
              </li>
              <li>
                <span className="font-bold">Account Number:</span>
                50100366340061
              </li>
              <li>
                <span className="font-bold">IFSC Code:</span> HDFC0006735
              </li>
              <li>
                <span className="font-bold">SWIFT Code:</span>HDFCINBBNRI
              </li>
              <li>
                <span className="font-bold">Branch:</span>
                HDFC,Rawatpur,Prayagraj
              </li>
              <li>
                <span className="font-bold">Account Type:</span> Current Account
              </li>
            </ul>
          </div>

          {/* Registration Link */}
          <div className="text-center">
            <button
              onClick={handleRegisterClick}
              className="inline-block bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transform transition-transform focus:outline-none"
            >
              Register Here
            </button>
            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
                <div
                  className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center relative animate-fadeIn border-4 border-blue-400"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-red-600">
                    Registration Closed
                  </h2>
                  <p className="mb-6 text-lg text-gray-800">
                    Thank you for your interest. Registration is now closed.
                  </p>
                  <button
                    onClick={handleClosePopup}
                    className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 text-white font-semibold px-5 py-2 rounded-lg shadow hover:scale-105 transition-transform"
                  >
                    Close
                  </button>
                  <span
                    className="absolute top-2 right-4 cursor-pointer text-blue-500 text-xl font-bold"
                    onClick={handleClosePopup}
                  >
                    &times;
                  </span>
                </div>
                <style>{`
                  @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                  }
                  .animate-fadeIn {
                    animation: fadeIn 0.3s ease;
                  }
                `}</style>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;


