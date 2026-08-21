import { useEffect, useState } from "react";

const fees = [
  {
    category: "Student / Research Scholar",
    amount: "₹7,000",
    icon: "🎓",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    category: "Academician",
    amount: "₹8,000",
    icon: "👨‍🏫",
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    category: "Industry Person",
    amount: "₹10,000",
    icon: "💼",
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    category: "Foreign Student / Research Scholar",
    amount: "USD 200",
    icon: "🌍",
    color: "from-orange-500 to-amber-400",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    category: "Foreign Academics",
    amount: "USD 200",
    icon: "🏛️",
    color: "from-rose-500 to-pink-400",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
];

const accountDetails = [
  {
    label: "Account Holder",
    value: "United University",
  },
  {
    label: "Account Number",
    value: "50100366340061",
  },
  {
    label: "IFSC Code",
    value: "HDFC0006735",
  },
  {
    label: "SWIFT Code",
    value: "HDFCINBBNRI",
  },
  {
    label: "Branch",
    value: "HDFC, Rawatpur, Prayagraj",
  },
  {
    label: "Account Type",
    value: "Current Account",
  },
];

const Registration = () => {
  const [showPopup, setShowPopup] = useState(false);

  /* =========================================================
     MODERN FONT
     ========================================================= */

  useEffect(() => {
    const fontId = "concise-registration-font";

    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");

      link.id = fontId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";

      document.head.appendChild(link);
    }
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-indigo-50
        pt-24
        sm:pt-24
        pb-12
        px-4
      "
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="text-center mb-9">
        <span
          className="
            inline-block
            px-4
            py-1
            bg-blue-100
            text-blue-700
            text-[11px]
            sm:text-xs
            font-semibold
            rounded-full
            border
            border-blue-200
            mb-3
            tracking-[0.16em]
            uppercase
          "
        >
          ConCISE-2027
        </span>

        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-[44px]
            font-semibold
            text-gray-900
            mb-2
            leading-tight
            tracking-[-0.035em]
          "
        >
          Registration{" "}
          <span
            className="
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-blue-600
              to-violet-600
            "
          >
            Details
          </span>
        </h1>

        <p
          className="
            text-gray-500
            text-sm
            sm:text-[15px]
            max-w-xl
            mx-auto
            leading-6
            font-normal
          "
        >
          Complete your registration before the deadline to secure your spot at
          ConCISE-2027.
        </p>

        <div className="mt-4 flex justify-center gap-2">
          <div className="h-1 w-10 rounded-full bg-blue-500"></div>
          <div className="h-1 w-5 rounded-full bg-indigo-400"></div>
          <div className="h-1 w-2.5 rounded-full bg-violet-400"></div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="max-w-5xl mx-auto space-y-6">
        {/* ===================================================
            DEADLINE BANNER
            =================================================== */}

        <div
          className="
            bg-gradient-to-r
            from-blue-600
            to-violet-600
            rounded-2xl
            px-5
            sm:px-6
            py-4
            sm:py-5
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            text-white
            shadow-lg
          "
        >
          <div className="flex items-center gap-3">
            <div className="text-3xl leading-none">📅</div>

            <div>
              <p
                className="
                  text-blue-200
                  text-[11px]
                  sm:text-xs
                  font-medium
                  uppercase
                  tracking-[0.12em]
                "
              >
                Last Date of Registration
              </p>

              <p
                className="
                  text-xl
                  sm:text-2xl
                  font-semibold
                  tracking-tight
                "
              >
                April 30, 2027
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowPopup(true)}
            className="
              px-6
              py-2.5
              bg-white
              text-blue-700
              font-semibold
              rounded-full
              hover:scale-[1.03]
              transition-all
              duration-200
              shadow-md
              text-sm
              flex-shrink-0
            "
          >
            Register Here →
          </button>
        </div>

        {/* ===================================================
            REGISTRATION FEES
            =================================================== */}

        <div>
          <h2
            className="
              text-xl
              sm:text-2xl
              font-semibold
              text-gray-900
              mb-4
              flex
              items-center
              gap-3
              tracking-[-0.02em]
            "
          >
            <span
              className="
                w-8
                h-8
                rounded-full
                bg-gradient-to-br
                from-blue-500
                to-violet-500
                flex
                items-center
                justify-center
                text-white
                text-sm
                font-semibold
                flex-shrink-0
              "
            >
              ₹
            </span>
            Registration Fees
          </h2>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
            "
          >
            {fees.map((fee, i) => (
              <div
                key={i}
                className={`
                  ${fee.bg}
                  border
                  ${fee.border}
                  rounded-2xl
                  p-4
                  sm:p-5
                  hover:shadow-md
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                `}
              >
                <div
                  className={`
                    w-11
                    h-11
                    rounded-xl
                    bg-gradient-to-br
                    ${fee.color}
                    flex
                    items-center
                    justify-center
                    text-xl
                    mb-3
                    shadow-md
                  `}
                >
                  {fee.icon}
                </div>

                <p
                  className="
                    text-gray-600
                    text-[13px]
                    sm:text-sm
                    font-medium
                    mb-1
                    leading-5
                  "
                >
                  {fee.category}
                </p>

                <p
                  className="
                    text-xl
                    sm:text-2xl
                    font-semibold
                    text-gray-900
                    tracking-[-0.02em]
                  "
                >
                  {fee.amount}
                </p>
              </div>
            ))}
          </div>

          {/* =================================================
              NOTE
              ================================================= */}

          {/* 
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-lg flex-shrink-0">
              ⚠️
            </div>

            <div>
              <p className="font-semibold text-amber-800 text-sm mb-1">
                Important Note
              </p>

              <p className="text-amber-700 text-sm leading-relaxed">
                Fees above apply to a standard article of up to
                <strong> 5 pages</strong>. Additional pages incur
                applicable charges.
              </p>
            </div>
          </div>
          */}
        </div>

        {/* ===================================================
            BANK ACCOUNT DETAILS
            =================================================== */}

        <div>
          <h2
            className="
              text-xl
              sm:text-2xl
              font-semibold
              text-gray-900
              mb-4
              flex
              items-center
              gap-3
              tracking-[-0.02em]
            "
          >
            <span
              className="
                w-8
                h-8
                rounded-full
                bg-gradient-to-br
                from-emerald-500
                to-teal-500
                flex
                items-center
                justify-center
                text-white
                text-sm
                flex-shrink-0
              "
            >
              🏦
            </span>
            Bank Account Details
          </h2>

          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              overflow-hidden
              shadow-sm
            "
          >
            {accountDetails.map((item, i) => (
              <div
                key={i}
                className={`
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  gap-1
                  sm:gap-4
                  px-5
                  sm:px-6
                  py-3
                  ${
                    i !== accountDetails.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }
                  hover:bg-gray-50
                  transition-colors
                `}
              >
                <div className="flex items-center gap-3 sm:w-40 flex-shrink-0">
                  <div
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-gradient-to-br
                      from-blue-400
                      to-violet-400
                      flex-shrink-0
                    "
                  ></div>

                  <span
                    className="
                      text-gray-500
                      text-[11px]
                      sm:text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                    "
                  >
                    {item.label}
                  </span>
                </div>

                <span
                  className="
                    text-gray-900
                    font-medium
                    text-sm
                    sm:text-[13px]
                    break-all
                    sm:break-normal
                    sm:ml-1
                  "
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            CTA
            =================================================== */}

        <div className="text-center pt-1">
          <button
            onClick={() => setShowPopup(true)}
            className="
              px-8
              py-3
              bg-gradient-to-r
              from-blue-600
              to-violet-600
              text-white
              font-semibold
              rounded-full
              hover:scale-[1.03]
              transition-all
              duration-200
              shadow-lg
              text-sm
            "
          >
            Proceed to Register →
          </button>

          <p
            className="
              text-gray-400
              text-xs
              mt-2
            "
          >
            Registration deadline: April 30, 2027
          </p>
        </div>
      </div>

      {/* =====================================================
          POPUP
          ===================================================== */}

      {showPopup && (
        <div
          className="
            fixed
            inset-0
            flex
            items-center
            justify-center
            z-50
            bg-black
            bg-opacity-50
            px-4
          "
        >
          <div
            className="
              bg-white
              rounded-2xl
              shadow-2xl
              p-7
              max-w-sm
              w-full
              text-center
              relative
              border
              border-gray-100
            "
          >
            {/* Close */}

            <button
              onClick={() => setShowPopup(false)}
              className="
                absolute
                top-3
                right-4
                text-gray-400
                hover:text-gray-700
                text-2xl
                font-medium
                transition-colors
              "
              aria-label="Close"
            >
              ×
            </button>

            {/* Icon */}

            <div
              className="
                w-14
                h-14
                bg-red-100
                rounded-full
                flex
                items-center
                justify-center
                text-2xl
                mx-auto
                mb-4
              "
            >
              🔒
            </div>

            <h2
              className="
                text-xl
                font-semibold
                text-gray-900
                mb-2
                tracking-tight
              "
            >
              Registration Closed
            </h2>

            <p
              className="
                text-gray-500
                text-sm
                leading-6
                mb-5
              "
            >
              Thank you for your interest. Registration for ConCISE-2027 is now
              closed.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="
                w-full
                py-2.5
                bg-gradient-to-r
                from-blue-600
                to-violet-600
                text-white
                font-semibold
                rounded-full
                hover:scale-[1.02]
                transition-all
                duration-200
                shadow-md
                text-sm
              "
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
