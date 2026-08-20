const Contact = () => {
  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "aicct@uniteduniversity.edu.in",
      href: "mailto:aicct@uniteduniversity.edu.in",
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 9161292060 / +91 9935101906",
      href: "tel:+919161292060",
      color: "from-emerald-500 to-teal-400",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Address",
      value: "Faculty of Engineering & Technology, United University, Rawatpur, Prayagraj, Uttar Pradesh, India – 211012",
      href: null,
      color: "from-violet-500 to-purple-400",
      bg: "bg-violet-50",
      border: "border-violet-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-16 px-4">

      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 mb-4 tracking-widest uppercase">
          AICCT 2025
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">
          Contact{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Us
          </span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Have questions? We'd love to hear from you. Reach out to us anytime.
        </p>
        <div className="mt-5 flex justify-center gap-2">
          <div className="h-1 w-12 rounded-full bg-blue-500"></div>
          <div className="h-1 w-6 rounded-full bg-indigo-400"></div>
          <div className="h-1 w-3 rounded-full bg-violet-400"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left — Contact Cards */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-5">For any Queries:</h2>
          {contactItems.map((item, i) => (
            <div key={i} className={`${item.bg} border ${item.border} rounded-3xl p-5 flex items-start gap-4 hover:shadow-md transition-all duration-300 group`}>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-gray-800 font-semibold hover:text-blue-600 transition-colors text-sm leading-relaxed">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-800 font-semibold text-sm leading-relaxed">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Department badge */}
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-6 text-white mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-2">Organized by</p>
            <p className="font-bold text-lg">Department of Computer Science & Engineering</p>
            <p className="text-blue-200 text-sm mt-1">United University, Prayagraj</p>
          </div>
        </div>

        {/* Right — Map */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-800">Find Us</h2>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 flex-1 min-h-80">
            <iframe
              title="United University Map"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115337.73679665258!2d81.67447647392822!3d25.394623544207818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x398533a4e2e9d1b9%3A0x7d8f6607de9fcdc7!2sJhalwa%2C%20Rawatpur%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211012!3m2!1d25.3946465!2d81.756878!5e0!3m2!1sen!2sin!4v1754629779934!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
