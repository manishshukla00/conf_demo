import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // <-- Add this import

const Keynotespeakers = () => {
  const speakers = [
    {
      name: "Murali Natti",
      image: "/images/1.jpg",
      designation: "Apple Inc., USA",
    },
    // {
    //   name: "Wazahat Ahmed Chowdhury",
    //   image: "/images/2.jpg",
    //   designation: "Matrix Medical Health– Phoenix, USA",
    // },
    {
      name: "Sagar Kesarpu",
      image: "/images/3.jpg",
      designation: "McLean, USA",
    },
    {
      name: "Dr. Rajesh Prasad",
      image: "/images/17.jpg",
      designation: "Professor, AKGEC , India",
    },
    {
      name: "Reena Chandra",
      image: "/images/4.jpg",
      designation: "Amazon Inc, USA ",
    },
    {
      name: "Swati Karni",
      image: "/images/5.jpg",
      designation: "SAIC/Department of Veteran Affairs, USA",
    },
    {
      name: "Dr. Mukund Pratap Singh",
      image: "/images/18.jpg",
      designation: "Bennet University, Noida, India",
    },
    {
      name: "Ajay Prasad",
      image: "/images/7.jpg",
      designation: "Apple, USA",
    },
    {
      name: "Prassanna R Rajgopal",
      image: "/images/23.jpg",
      designation: "Cybersecurity Leader and Independent Researcher, USA. ",
    },
    {
      name: "Shilpi Yadav",
      image: "/images/8.jpg",
      designation: "IBM, USA",
    },
    {
      name: "Dr. Rajesh Kumar",
      image: "/images/19.jpg",
      designation: "University of Allahabad",
    },
    {
      name: "Savi Grover",
      image: "/images/9.jpg",
      designation: "NBC Universal, USA",
    },
    {
      name: "Naga Sai Mrunal",
      image: "/images/10.jpg",
      designation: "Humana Inc., USA",
    },
    {
      name: "Dr. Ashish Kumar Mishra",
      image: "/images/20.jpg",
      designation: "REC Ambedkar Nagar",
    },
    {
      name: "Swapnil Joijode",
      image: "/images/11.jpg",
      designation: "Hauppauge Inc., USA",
    },
    {
      name: "Deepak Pai",
      image: "/images/12.jpg",
      designation: "IBM, USA",
    },
    {
      name: "Dr. Manish Raj",
      image: "/images/21.jpg",
      designation: "Galgotias University, Greater Noida",
    },
    {
      name: "Sheeba Bromia Amalraj",
      image: "/images/13.jpg",
      designation: "TBC Corporation, USA",
    },
    {
      name: "Vasudevan Senathi Ramdoss",
      image: "/images/14.jpg",
      designation: " Senior performance Engineer & independent researcher",
    },
    {
      name: "Kishore Bandela",
      image: "/images/15.jpg",
      designation: "MassDOT, USA",
    },
    {
      name: "Dr. Abdul Aleem",
      image: "/images/22.jpg",
      designation: " Galgotias University, Greater Noida",
    },
    {
      name: "Karthik Sirigiri",
      image: "/images/16.jpg",
      designation: "RedMane Technology LLC, USA ",
    },
  ];

  // Responsive items per slide
  const getItemsPerSlide = () => {
    if (window.innerWidth >= 1024) return 4; // lg
    if (window.innerWidth >= 640) return 2; // sm/md
    return 1; // xs
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => setItemsPerSlide(getItemsPerSlide());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(speakers.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const startIdx = currentSlide * itemsPerSlide;
  const visibleSpeakers = speakers.slice(startIdx, startIdx + itemsPerSlide);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 p-4">
      <div className="max-w-7xl mx-auto pt-20 relative">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6 pt-8">
          Meet Our{" "}
          <span className="text-violet-500">Keynote Speakers/Sessions Chair</span>
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center">
          Our conference features distinguished speakers who are experts in
          their respective fields. Learn from their insights and experiences.
        </p>

        {/* Carousel Controls (Icons centered vertically beside carousel grid) */}
        <div className="relative flex items-center mr2">
          {/* Left Icon */}
          <button
            onClick={handlePrev}
            className="flex items-center justify-center bg-white border-4 border-gray-300 text-blue-700 p-3 rounded-full shadow-lg hover:bg-blue-100 hover:text-violet-500 transition z-10"
            aria-label="Previous"
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <FaChevronLeft size={32} />
          </button>

          {/* Carousel Grid */}
          <div
            className={`w-full grid gap-6
              ${
                itemsPerSlide === 4
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                  : ""
              }
              ${itemsPerSlide === 2 ? "grid-cols-1 sm:grid-cols-2" : ""}
              ${itemsPerSlide === 1 ? "grid-cols-1" : ""}
            `}
            style={{ margin: "0 56px" }} // Add space for icons
          >
            {visibleSpeakers.map((speaker, index) => (
              <div
                key={startIdx + index}
                className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 p-1 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <div className="bg-white rounded-lg p-4 h-full flex flex-col items-center">
                  {/* Speaker Image */}
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mb-4 border-4 border-gray-300 shadow-md"
                  />
                  {/* Speaker Name */}
                  <h2 className="text-lg font-bold text-blue-700 mb-2 text-center">
                    {speaker.name}
                  </h2>
                  {/* Speaker Designation */}
                  <p className="text-gray-600 text-center text-sm">
                    {speaker.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Icon */}
          <button
            onClick={handleNext}
            className="flex items-center justify-center bg-white border-4 border-gray-300 text-blue-700 p-3 rounded-full shadow-lg hover:bg-blue-100 hover:text-violet-500 transition z-10"
            aria-label="Next"
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <FaChevronRight size={32} />
          </button>
        </div>
        {/* End Carousel Controls */}
      </div>
    </div>
  );
};

export default Keynotespeakers;


