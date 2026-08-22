import React from "react";

/* =========================================================
   ORIGINAL KeynotespeakersDATA
   KEPT COMMENTED — NOTHING DELETED
   ========================================================= */

// const Keynotespeakersembers = [
//   { name: "Dr. Shashi Bhushan", affiliation: "Amity University Punjab, India" },
//   { name: "Dr. Manoj Kumar", affiliation: "University of Wollongong Dubai" },
//   { name: "Dr. Sujith Jayaprakash", affiliation: "BlueCrest University College, Ghana" },
//   { name: "Dr. Suman", affiliation: "Bhagwan Parshuram Institute of Technology, Delhi" },
//   { name: "Dr. Abhilasha Singh", affiliation: "SRM Institute of Science and Technology, Delhi-NCR Campus, Ghaziabad" },
//   { name: "Dr. Bhawna Suri", affiliation: "Bhagwan Parshuram Institute of Technology, Delhi" },
//   { name: "Dr. Sherin Zafar", affiliation: "Jamia Hamdard, Delhi" },
//   { name: "Prof(Dr) Laxmi Ahuja", affiliation: "Amity University, India" },
//   { name: "Dr. Praveen Kumar", affiliation: "Amity University Tashkent Uzbekistan" },
//   { name: "Dr. Seema Rawat", affiliation: "Amity University Tashkent, Uzbekistan" },
//   { name: "Dr. Rana Majumdar", affiliation: "Sister Nivedita University" },
//   { name: "Dr. Francisca Nonyelum Ogwueleka", affiliation: "University of Abuja, Nigeria" },
//   { name: "Dr. Olumide Owolabi", affiliation: "University of Abuja, Nigeria" },
//   { name: "Dr. Kirti Seth", affiliation: "Inha University Tashkent" },
//   { name: "Dr. Suleiman Salihu Jauro", affiliation: "Gombe State University Nigeria" },
//   { name: "Dr. Valentina Emilia Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" },
//   { name: "Dr. Utkarsh Goel", affiliation: "IIIT Allahabad, India" },
//   { name: "Dr. Abhay Kumar Agarwal", affiliation: "Kamla Nehru Institute of Technology, Sultanpur" },
//   { name: "Dr. Hashim Ibrahim Bisallah", affiliation: "Kampala International University, Uganda" },
//   { name: "Dr. Sandeep Singh", affiliation: "Dept. of CSE, The NorthCap University, Gurugram" },
//   { name: "Dr. Vikash Yadav", affiliation: "Board of Technical Education, Uttar Pradesh, India" },
//   { name: "Dr. Alhassan Adamu", affiliation: "Kano University of Science and Technology, Wudil" },
//   { name: "Dr. Gurseen Rakhra", affiliation: "Manav Rachna International Institute of Research and Studies, India" },
//   { name: "Dr. H. M. Singh", affiliation: "SHUATS, Prayagraj, Uttar Pradesh" },
//   { name: "Dr. Sunil Kumar", affiliation: "Manipal University Jaipur" },
//   { name: "Dr. Benatiallah Ali", affiliation: "Laboratory Leesi Adrar University, Algeria" },
//   { name: "Dr. Bireshwar Dass Mazumdar", affiliation: "Bennet University Prayagraj" },
//   { name: "Dr. Radha Raman Chandan", affiliation: "School of Management Sciences (SMS), Varanasi" },
//   { name: "Dr. Manmohan Mishra", affiliation: "United Institute of Management, India" },
//   { name: "Dr. Praveen Kumar Shukla", affiliation: "Department of Computer Science & Engineering, Babu Banarasi Das University, Lucknow, India" },
//   { name: "Dr. Muhammed Kabir Ahmed", affiliation: "Department of Computer Science Gombe State University" },
//   { name: "Dr. Yogesh Kumar Gupta", affiliation: "Banasthali Vidyapith, India" },
//   { name: "Dr. Mahima Shanker Pandey", affiliation: "Galgotias College of Engineering & Technology, Greater Noida" },
//   { name: "Dr. Neeraj Chugh", affiliation: "University of Petroleum and Energy Studies, Dehradun, Uttarakhand" },
//   { name: "Dr. Arun Kumar Yadav", affiliation: "NIT Hamirpur, India" },
//   { name: "Dr. Chintan Kr Mandal", affiliation: "Jadavpur University, India" },
//   { name: "Dr. Dac-Nhuong Le", affiliation: "Haiphong University, Vietnam" },
//   { name: "Dr. Piyush Mahendru", affiliation: "Manav Rachna University, India" },
//   { name: "Dr. Audu Musa Mabu", affiliation: "Yobe State University, Damaturu, Nigeria" },
//   { name: "Dr. P. Raghu Vamsi", affiliation: "Jaypee Institute of Information Technology, Noida, India" },
//   { name: "Dr. Avdhesh Gupta", affiliation: "Ajay Kumar Garg Engineering College, Ghaziabad" },
//   { name: "Dr. Mustapha Ismail", affiliation: "Gombe State University, Nigeria" },
//   { name: "Dr. Obunadike Georgina Nkolika", affiliation: "Federal University Dutsinma, Katsina State Nigeria" },
//   { name: "Dr. Gaurav Khanna", affiliation: "Jaypee Institute of Information Technology, Noida, India" },
//   { name: "Dr. Rajesh Kumar", affiliation: "University of Allahabad" },
//   { name: "Dr. Arjun Singh", affiliation: "Manipal University Jaipur" },
//   { name: "Dr. Sunita Tiwari", affiliation: "G B Pant DSEU Okhla-1 Campus, India" },
//   { name: "Dr. B D Mazumdar", affiliation: "Bennet University, Noida, India" },
//   { name: "Dr. Mukund Pratap Singh", affiliation: "Bennett University, Greater Noida" },
//   { name: "Dr. Naveen Kumar", affiliation: "Thapar University, Punjab, India" },
//   { name: "Dr. Rahul Bhandari", affiliation: "Chandigarh University, Punjab, India" },
//   { name: "Dr. Shabir Ali", affiliation: "Galgotias University, Department of Engineering and Technology, Greater Noida" },
//   { name: "Dr. Tribhuvan Singh", affiliation: "Siksha O Anusandhan (Deemed to be University), Bhubaneswar, Odisha, India" },
//   { name: "Dr. Rakesh Ahuja", affiliation: "Chitkara University, Punjab, India" },
//   { name: "Dr. Vijendra Pratap Singh", affiliation: "Mahatma Gandhi Kashi Vidyapith, Varanasi, India" },
//   { name: "Dr. Rajwant Singh Rao", affiliation: "Guru Ghasidas Vishwavidyalaya Bilaspur Chhattisgarh, India" },
//   { name: "Dr. Rohit Kumar Sachan", affiliation: "Bennett University Greater Noida" },
//   { name: "Dr. Ashish Kumar Mishra", affiliation: "Rajkiya Engineering College Ambedkar Nagar Uttar Pradesh India" },
//   { name: "Dr. Shivendu Mishra", affiliation: "Rajkiya Engineering College Ambedkar Nagar, India" },
//   { name: "Dr. Prince Rajpoot", affiliation: "Rajkiya Engineering College Ambedkar Nagar, India" },
//   { name: "Murali Natti", affiliation: "Apple Inc., USA" },
//   { name: "Sagar Kesarpu", affiliation: "McLean, USA" },
//   { name: "Reena Chandra", affiliation: "Amazon Inc, USA" },
//   { name: "Swati Karni", affiliation: "SAIC/Department of Veteran Affairs, USA" },
//   { name: "Ajay Prasad", affiliation: "Apple, USA" },
//   { name: "Shilpi Yadav", affiliation: "IBM, USA" },
//   { name: "Savi Grover", affiliation: "NBC Universal, USA" },
//   { name: "Prassanna R Rajgopal", affiliation: "Cybersecurity Leader and Independent Researcher, USA" },
//   { name: "Naga Sai Mrunal", affiliation: "Humana Inc., USA" },
//   { name: "Swapnil Joijode", affiliation: "Hauppauge Inc., USA" },
//   { name: "Deepak Pai", affiliation: "IBM, USA" },
//   { name: "Sheeba Bromia Amalraj", affiliation: "TBC Corporation, USA" },
//   { name: "Vasudevan Senathi Ramdoss", affiliation: "Financial investment sector, USA" },
//   { name: "Kishore Bandela", affiliation: "MassDOT, USA" },
//   { name: "Karthik Sirigiri", affiliation: "RedMane Technology LLC, USA" },
// ];

/* =========================================================
   ORIGINAL GRADIENT DATA — KEPT COMMENTED
   ========================================================= */

// const gradients = [
//   "from-blue-500 to-cyan-400",
//   "from-violet-500 to-purple-400",
//   "from-emerald-500 to-teal-400",
//   "from-rose-500 to-pink-400",
//   "from-orange-500 to-amber-400",
//   "from-indigo-500 to-blue-400",
//   "from-teal-500 to-green-400",
//   "from-fuchsia-500 to-pink-400",
// ];

/* =========================================================
   COMING SOON PAGE
   ========================================================= */

const Keynotespeakers = () => {
  return (
    <main className="min-h-screen bg-[#070B18] overflow-hidden relative">
      {/* =====================================================
          OPTIMIZED CSS ANIMATION SYSTEM
          ===================================================== */}

      <style>
        {`
          @keyframes orbitSlow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes orbitReverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          @keyframes signalPulse {
            0%,
            100% {
              transform: scale(0.92);
              opacity: 0.35;
            }

            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
          }

          @keyframes corePulse {
            0%,
            100% {
              box-shadow:
                0 0 0 0 rgba(59, 130, 246, 0.08),
                0 0 30px rgba(59, 130, 246, 0.12);
            }

            50% {
              box-shadow:
                0 0 0 18px rgba(59, 130, 246, 0),
                0 0 55px rgba(99, 102, 241, 0.25);
            }
          }

          @keyframes scanLine {
            0% {
              transform: translateX(-120%);
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              transform: translateX(420%);
              opacity: 0;
            }
          }

          @keyframes floatParticle {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.25;
            }

            50% {
              transform: translate3d(0, -12px, 0);
              opacity: 0.8;
            }
          }

          @keyframes textGlow {
            0%,
            100% {
              opacity: 0.75;
            }

            50% {
              opacity: 1;
            }
          }

          @keyframes progressMove {
            0% {
              transform: translateX(-100%);
            }

            100% {
              transform: translateX(250%);
            }
          }

          .orbit-slow {
            animation: orbitSlow 18s linear infinite;
            will-change: transform;
          }

          .orbit-reverse {
            animation: orbitReverse 12s linear infinite;
            will-change: transform;
          }

          .signal-pulse {
            animation: signalPulse 3.2s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .core-pulse {
            animation: corePulse 3s ease-in-out infinite;
            will-change: box-shadow;
          }

          .scan-line {
            animation: scanLine 4s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .particle {
            animation: floatParticle 3.5s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .text-glow {
            animation: textGlow 3s ease-in-out infinite;
          }

          .progress-move {
            animation: progressMove 3s ease-in-out infinite;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .orbit-slow,
            .orbit-reverse,
            .signal-pulse,
            .core-pulse,
            .scan-line,
            .particle,
            .text-glow,
            .progress-move {
              animation: none !important;
            }
          }
        `}
      </style>

      {/* =====================================================
          BACKGROUND GRID
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.055]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* =====================================================
          AMBIENT LIGHT
          ===================================================== */}

      <div
        className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[520px]
          h-[520px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-100px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-violet-600/10
          blur-[110px]
          pointer-events-none
        "
      />

      {/* =====================================================
          FLOATING DATA PARTICLES
          ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <span className="particle absolute left-[12%] top-[28%] w-1.5 h-1.5 rounded-full bg-cyan-400" />

        <span
          className="particle absolute left-[22%] top-[68%] w-1 h-1 rounded-full bg-blue-400"
          style={{ animationDelay: "0.7s" }}
        />

        <span
          className="particle absolute right-[18%] top-[25%] w-1.5 h-1.5 rounded-full bg-violet-400"
          style={{ animationDelay: "1.2s" }}
        />

        <span
          className="particle absolute right-[12%] top-[65%] w-1 h-1 rounded-full bg-cyan-300"
          style={{ animationDelay: "1.8s" }}
        />

        <span
          className="particle absolute left-[35%] top-[18%] w-1 h-1 rounded-full bg-indigo-300"
          style={{ animationDelay: "2.2s" }}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <section
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-5
          py-24
        "
      >
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* =================================================
              CONFERENCE LABEL
              ================================================= */}

          <div className="mb-7">
            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-blue-400/20
                bg-blue-500/[0.08]
                text-blue-300
                text-[11px]
                sm:text-xs
                font-semibold
                tracking-[0.22em]
                uppercase
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              ConCISE-2027
            </span>
          </div>

          {/* =================================================
              UNIQUE TECH CORE
              ================================================= */}

          <div
            className="
              relative
              mx-auto
              w-[230px]
              h-[230px]
              sm:w-[270px]
              sm:h-[270px]
              flex
              items-center
              justify-center
              mb-10
            "
          >
            {/* Outer rotating orbital */}

            <div
              className="
                orbit-slow
                absolute
                inset-0
                rounded-full
                border
                border-dashed
                border-blue-400/20
              "
            >
              <span
                className="
                  absolute
                  -top-1
                  left-1/2
                  -translate-x-1/2
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_18px_rgba(34,211,238,0.9)]
                "
              />
            </div>

            {/* Reverse orbital */}

            <div
              className="
                orbit-reverse
                absolute
                inset-[24px]
                rounded-full
                border
                border-violet-400/20
              "
            >
              <span
                className="
                  absolute
                  top-1/2
                  -right-1
                  w-2
                  h-2
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_16px_rgba(167,139,250,0.9)]
                "
              />
            </div>

            {/* Pulsing outer signal */}

            <div
              className="
                signal-pulse
                absolute
                inset-[48px]
                rounded-full
                border
                border-blue-400/20
              "
            />

            {/* Central core */}

            <div
              className="
                core-pulse
                relative
                z-10
                w-[112px]
                h-[112px]
                sm:w-[128px]
                sm:h-[128px]
                rounded-full
                bg-gradient-to-br
                from-slate-900
                via-indigo-950
                to-blue-950
                border
                border-white/10
                flex
                items-center
                justify-center
                overflow-hidden
              "
            >
              {/* Inner glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)]
                "
              />

              {/* Scan */}

              <div
                className="
                  scan-line
                  absolute
                  left-0
                  top-1/2
                  w-1/3
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-300
                  to-transparent
                "
              />

              {/* Core text */}

              <div className="relative z-10">
                <div
                  className="
                    text-[10px]
                    sm:text-xs
                    font-semibold
                    tracking-[0.28em]
                    text-cyan-300
                    mb-1
                  "
                >
                  Keynotespeakers{" "}
                </div>

                <div
                  className="
                    text-2xl
                    sm:text-3xl
                    font-black
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  2027
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MAIN HEADING
              ================================================= */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              tracking-[-0.045em]
              text-white
              leading-tight
            "
          >
            Technical Program{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Committee
            </span>
          </h1>

          {/* =================================================
              COMING SOON
              ================================================= */}

          <div className="mt-6">
            <p
              className="
                text-2xl
                sm:text-3xl
                font-bold
                tracking-[0.08em]
                uppercase
                text-white
                text-glow
              "
            >
              Coming Soon
            </p>

            <p
              className="
                mt-3
                max-w-xl
                mx-auto
                text-sm
                sm:text-base
                leading-7
                text-slate-400
              "
            >
              Our distinguished Technical Program Committee members will be
              announced shortly.
            </p>
          </div>

          {/* =================================================
              MINIMAL PROGRESS SIGNAL
              ================================================= */}

          <div
            className="
              mx-auto
              mt-8
              w-[190px]
              sm:w-[240px]
              h-[2px]
              rounded-full
              bg-white/10
              overflow-hidden
            "
          >
            <div
              className="
                progress-move
                h-full
                w-1/2
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-cyan-400
                to-transparent
              "
            />
          </div>

          {/* =================================================
              FOOTNOTE
              ================================================= */}

          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-3
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.18em]
              text-slate-500
            "
          >
            <span>Research</span>

            <span className="w-1 h-1 rounded-full bg-blue-400" />

            <span>Innovation</span>

            <span className="w-1 h-1 rounded-full bg-violet-400" />

            <span>Technology</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Keynotespeakers;
