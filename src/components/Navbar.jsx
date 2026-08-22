import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

/* =========================================================
   ICONS
   ========================================================= */

const ChevronIcon = ({ open = false }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/* =========================================================
   NAVBAR
   ========================================================= */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  /* =======================================================
     LOAD FONT
     ======================================================= */

  useEffect(() => {
    const fontId = "concise-plus-jakarta-font";

    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");

      link.id = fontId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";

      document.head.appendChild(link);
    }
  }, []);

  /* =======================================================
     CLOSE MENU WHEN ENTERING DESKTOP
     
     IMPORTANT:
     Desktop breakpoint is now 1024px (lg)
     instead of 768px (md).
     ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =======================================================
     LOCK BODY SCROLL
     ======================================================= */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* =======================================================
     NAVIGATION DATA
     ======================================================= */

  const mainLinks = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
  ];

  const dropdowns = [
    {
      key: "committee",
      label: "Committee",
      links: [
        {
          to: "/committee-member",
          label: "Committee Members",
        },
        {
          to: "/technicalprogramcommitte",
          label: "Technical Program Committee",
        },
      ],
    },

    {
      key: "callforpapers",
      label: "Call for Papers",
      links: [
        {
          to: "/callforpapers",
          label: "Call for Papers",
        },
        {
          to: "/author-guidelines",
          label: "Submission",
        },
        {
          to: "/publication-ethics",
          label: "Publication Ethics",
        },
      ],
    },

    {
      key: "speakers",
      label: "Speakers",
      links: [
        {
          to: "/speakers",
          label: "Speakers",
        },
        {
          to: "/keynotespeakers",
          label: "Keynote Speakers",
        },
      ],
    },
  ];

  const rightLinks = [
    {
      to: "/registration",
      label: "Registration",
    },
    {
      to: "/contact",
      label: "Contact",
    },
  ];

  /* =======================================================
     FUNCTIONS
     ======================================================= */

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setMobileDropdown(null);
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleDesktopDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  /* =======================================================
     DESKTOP LINK STYLE
     ======================================================= */

  const desktopLinkClass = ({ isActive }) =>
    `
      relative
      flex
      items-center
      h-10
      px-3
      xl:px-3.5
      rounded-lg
      text-[13px]
      xl:text-[14px]
      font-semibold
      tracking-[-0.015em]
      transition-all
      duration-200
      ${
        isActive
          ? "text-blue-700 bg-blue-50/80"
          : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
      }
    `;

  /* =======================================================
     RETURN
     ======================================================= */

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
          ===================================================== */}

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-50

          h-[74px]
          sm:h-[80px]
          lg:h-[84px]

          bg-white/95
          backdrop-blur-xl

          border-b
          border-slate-200/80

          shadow-[0_4px_20px_rgba(15,23,42,0.06)]
        "
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <nav
          className="
            relative
            h-full
            max-w-[1440px]
            mx-auto

            px-4
            sm:px-6
            lg:px-8
            xl:px-10

            flex
            items-center
          "
          aria-label="Main navigation"
        >
          {/* =================================================
              UNIVERSITY BRANDING

              Below 1024px:
              Logo + university name + hamburger

              1024px+:
              Branding remains on left
              ================================================= */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              flex
              items-center
              shrink-0
              group
              focus:outline-none

              lg:absolute
              lg:left-8
              xl:left-10
              lg:top-1/2
              lg:-translate-y-1/2
              lg:z-20
            "
            aria-label="United University - ConCISE 2027"
          >
            {/* =================================================
                UU LOGO
                ================================================= */}

            <div
              className="
                relative
                flex
                items-center
                justify-center
                shrink-0

                w-[48px]
                h-[48px]

                sm:w-[54px]
                sm:h-[54px]

                md:w-[58px]
                md:h-[58px]

                lg:w-[66px]
                lg:h-[66px]

                xl:w-[70px]
                xl:h-[70px]

                rounded-full
                bg-white
                overflow-hidden

                transition-all
                duration-300

                group-hover:scale-[1.02]
                group-hover:shadow-lg

                shadow-sm
                ring-1
                ring-slate-200
              "
            >
              <img
                src="/images/uu_logo.jpeg"
                alt="United University"
                loading="eager"
                className="
                  w-full
                  h-full
                  object-contain
                  p-0.5
                  block
                "
              />
            </div>

            {/* =================================================
                UNITED UNIVERSITY WORDMARK

                Responsive sizing so it NEVER overlaps
                the mobile hamburger.
                ================================================= */}

            <div
              className="
                ml-2.5
                sm:ml-3
                md:ml-3.5
                lg:ml-4

                leading-none
                whitespace-nowrap
              "
            >
              {/* UNIVERSITY NAME */}

              <div
                className="
                  text-[11px]
                  sm:text-[12px]
                  md:text-[13px]
                  lg:text-[15px]
                  xl:text-[16px]

                  font-extrabold
                  tracking-[-0.035em]
                  uppercase
                "
              >
                <span className="text-[#123B72]">UNITED</span>

                <span className="text-[#E52B2B] ml-1">UNIVERSITY</span>
              </div>

              {/* LOCATION */}

              <div
                className="
                  mt-1

                  text-[7px]
                  sm:text-[8px]
                  md:text-[9px]
                  lg:text-[10px]

                  font-semibold
                  tracking-[0.13em]
                  text-[#123B72]
                  uppercase
                "
              >
                PRAYAGRAJ
              </div>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION

              IMPORTANT:
              lg = 1024px

              Therefore at 873px the desktop menu DOES NOT
              appear. The hamburger menu appears instead.
              ================================================= */}

          <div
            className="
              hidden
              lg:flex
              w-full
              items-center
              justify-center
            "
          >
            <div
              className="
                flex
                items-center
                gap-0.5
                xl:gap-1
              "
            >
              {/* =================================================
                  HOME + ABOUT
                  ================================================= */}

              {mainLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={desktopLinkClass}
                >
                  {label}
                </NavLink>
              ))}

              {/* =================================================
                  DROPDOWN MENUS
                  ================================================= */}

              {dropdowns.map(({ key, label, links }) => (
                <div key={key} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDesktopDropdown(key)}
                    className={`
                      relative
                      flex
                      items-center
                      gap-1.5

                      h-10

                      px-3
                      xl:px-3.5

                      rounded-lg

                      text-[13px]
                      xl:text-[14px]

                      font-semibold
                      tracking-[-0.015em]

                      transition-all
                      duration-200

                      ${
                        openDropdown === key
                          ? "text-blue-700 bg-blue-50/80"
                          : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                      }
                    `}
                  >
                    {label}

                    <ChevronIcon open={openDropdown === key} />
                  </button>

                  {/* DROPDOWN */}

                  <div
                    className={`
                      absolute
                      top-[calc(100%+9px)]
                      left-0

                      w-[255px]

                      rounded-xl

                      bg-white
                      border
                      border-slate-200

                      shadow-[0_15px_45px_rgba(15,23,42,0.12)]

                      overflow-hidden

                      transition-all
                      duration-200
                      origin-top

                      ${
                        openDropdown === key
                          ? "opacity-100 scale-100 visible"
                          : "opacity-0 scale-95 invisible pointer-events-none"
                      }
                    `}
                  >
                    <div
                      className="
                        h-[3px]
                        bg-gradient-to-r
                        from-blue-600
                        via-indigo-500
                        to-cyan-400
                      "
                    />

                    <div className="py-2">
                      {links.map(({ to, label: dropdownLabel }) => (
                        <NavLink
                          key={to}
                          to={to}
                          onClick={() => setOpenDropdown(null)}
                          className={({ isActive }) => `
                              group
                              flex
                              items-center
                              justify-between

                              mx-2
                              px-3.5
                              py-3

                              rounded-lg

                              text-[13px]
                              font-medium

                              transition-all
                              duration-200

                              ${
                                isActive
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                              }
                            `}
                        >
                          <span>{dropdownLabel}</span>

                          <svg
                            className="
                                w-4
                                h-4

                                opacity-0
                                -translate-x-1

                                group-hover:opacity-100
                                group-hover:translate-x-0

                                transition-all
                                duration-200
                              "
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* =================================================
                  REGISTRATION + CONTACT
                  ================================================= */}

              {rightLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `
                    relative
                    flex
                    items-center

                    h-10

                    px-3
                    xl:px-3.5

                    rounded-lg

                    text-[13px]
                    xl:text-[14px]

                    font-semibold
                    tracking-[-0.015em]

                    transition-all
                    duration-200

                    ${
                      to === "/registration"
                        ? isActive
                          ? "bg-blue-700 text-white shadow-md shadow-blue-700/20"
                          : "bg-slate-900 text-white hover:bg-blue-700 shadow-sm"
                        : isActive
                          ? "text-blue-700 bg-blue-50/80"
                          : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                    }
                  `}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* =================================================
              MOBILE / TABLET HAMBURGER

              Visible below 1024px
              ================================================= */}

          <div
            className="
              lg:hidden
              ml-auto
            "
          >
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              className="
                flex
                items-center
                justify-center

                w-10
                h-10

                rounded-xl

                text-slate-800
                bg-slate-50

                border
                border-slate-200

                hover:bg-blue-50
                hover:text-blue-700

                transition-all
                duration-200

                focus:outline-none
              "
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE / TABLET OVERLAY
          ===================================================== */}

      <div
        className={`
          lg:hidden

          fixed
          inset-0
          z-40

          bg-slate-950/30
          backdrop-blur-sm

          transition-all
          duration-300

          ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
        onClick={closeMobileMenu}
      >
        {/* ===================================================
            MOBILE PANEL
            =================================================== */}

        <div
          className={`
            absolute

            top-[74px]
            sm:top-[80px]

            left-0
            right-0

            bg-white

            border-t
            border-slate-200

            shadow-[0_20px_50px_rgba(15,23,42,0.15)]

            max-h-[calc(100vh-74px)]

            overflow-y-auto

            transition-all
            duration-300

            ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }
          `}
          onClick={(e) => e.stopPropagation()}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <div className="px-5 py-6">
            {/* =================================================
                CONFERENCE INFORMATION
                ================================================= */}

            <div
              className="
                mb-5
                pb-4
                border-b
                border-slate-100
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  font-bold
                  text-blue-600
                "
              >
                ConCISE 2027
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-slate-500
                "
              >
                International Conference
              </p>
            </div>

            <div className="space-y-1">
              {/* =================================================
                  HOME + ABOUT
                  ================================================= */}

              {mainLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `
                      flex
                      items-center

                      h-12

                      px-4

                      rounded-xl

                      text-[15px]
                      font-semibold

                      transition-all

                      ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                      }
                    `}
                >
                  {label}
                </NavLink>
              ))}

              {/* =================================================
                  MOBILE DROPDOWNS
                  ================================================= */}

              {dropdowns.map(({ key, label, links }) => (
                <div key={key}>
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(key)}
                    className={`
                        w-full
                        flex
                        items-center
                        justify-between

                        h-12

                        px-4

                        rounded-xl

                        text-[15px]
                        font-semibold

                        transition-all

                        ${
                          mobileDropdown === key
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                        }
                      `}
                  >
                    <span>{label}</span>

                    <ChevronIcon open={mobileDropdown === key} />
                  </button>

                  {mobileDropdown === key && (
                    <div
                      className="
                          ml-4
                          mt-1
                          mb-2

                          pl-3

                          border-l-2
                          border-blue-100

                          space-y-1
                        "
                    >
                      {links.map(({ to, label: dropdownLabel }) => (
                        <NavLink
                          key={to}
                          to={to}
                          onClick={closeMobileMenu}
                          className={({ isActive }) => `
                                flex
                                items-center

                                min-h-[44px]

                                px-3

                                rounded-lg

                                text-sm
                                font-medium

                                transition-all

                                ${
                                  isActive
                                    ? "text-blue-700 bg-blue-50"
                                    : "text-slate-600 hover:text-blue-700 hover:bg-slate-50"
                                }
                              `}
                        >
                          {dropdownLabel}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* =================================================
                  REGISTRATION
                  ================================================= */}

              <NavLink
                to="/registration"
                onClick={closeMobileMenu}
                className={({ isActive }) => `
                  flex
                  items-center
                  justify-center

                  h-12

                  mt-3

                  px-5

                  rounded-xl

                  text-[14px]
                  font-bold

                  transition-all

                  ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-slate-900 text-white hover:bg-blue-700"
                  }
                `}
              >
                Registration
              </NavLink>

              {/* =================================================
                  CONTACT
                  ================================================= */}

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={({ isActive }) => `
                  flex
                  items-center

                  h-12

                  mt-1

                  px-4

                  rounded-xl

                  text-[15px]
                  font-semibold

                  transition-all

                  ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }
                `}
              >
                Contact
              </NavLink>
            </div>

            {/* =================================================
                MOBILE FOOTER
                ================================================= */}

            <div
              className="
                mt-7
                pt-5
                border-t
                border-slate-100
              "
            >
              <p
                className="
                  text-xs
                  text-slate-400
                  leading-relaxed
                "
              >
                ConCISE 2027
                <br />
                International Conference on Computational Intelligence &amp;
                Systems Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
