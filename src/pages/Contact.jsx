const Contact = () => {
  return (
    <div
      className="bg-gradient-to-br from-blue-100 via-blue-200 to-emerald-100 py-10 px-4"
      style={{ fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-16">
        <h1
          className="text-4xl font-extrabold text-center text-blue-800 mb-4"
          style={{
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "1px",
            lineHeight: "1.2",
          }}
        >
          Contact Us
        </h1>

        {/* Responsive layout for contact info and map */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/2">
            <h2
              className="text-xl font-bold text-blue-700 mb-2"
              style={{
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontWeight: 600,
              }}
            >
              For any Queries:
            </h2>
            <div
              className="space-y-2 text-gray-700 text-center md:text-left"
              style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
            >
              <p>
                <span className="font-bold text-blue-800">Email:</span>
                <a
                  style={{
                    lineHeight: "1.0",
                  }}
                  href="mailto:aicct2025@uniteduniversity.edu.in"
                  className="text-blue-600 underline fh hover:text-blue-800"
                >
                  <br />
                  aicct@uniteduniversity.edu.in
                </a>
              </p>
              <p>
                <span className="font-bold text-blue-800">Phone:</span>
                <br /> +919161292060/+919935101906
              </p>
              <p>
                <span className="font-bold text-blue-800">Address:</span>
                <br /> Faculty of Engineering & Technology <br /> United
                University <br /> Rawatpur, Prayagraj, Uttar Pradesh, India,
                211012
              </p>
            </div>
          </div>
          {/* Google Map */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <iframe
              title="United University Map"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115337.73679665258!2d81.67447647392822!3d25.394623544207818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x398533a4e2e9d1b9%3A0x7d8f6607de9fcdc7!2sJhalwa%2C%20Rawatpur%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211012!3m2!1d25.3946465!2d81.756878!5e0!3m2!1sen!2sin!4v1754629779934!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{
                border: 0,
                borderRadius: "0.75rem",
                minWidth: "220px",
                maxWidth: "100%",
              }}
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


