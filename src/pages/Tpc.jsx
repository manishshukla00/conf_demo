import React from "react";

const tpcMembers = [
  { name: "Dr. Shashi Bhushan", affiliation: "Amity University Punjab, India" },
  { name: "Dr. Manoj Kumar", affiliation: "University of Wollongong Dubai" },
  {
    name: "Dr. Sujith Jayaprakash",
    affiliation: "BlueCrest University College, Ghana",
  },
  {
    name: "Dr. Suman",
    affiliation: "Bhagwan Parshuram Institute of Technology, Delhi",
  },
  {
    name: "Dr. Abhilasha Singh",
    affiliation:
      "SRM Institute of Science and Technology, Delhi-NCR Campus, Ghaziabad",
  },
  {
    name: "Dr. Bhawna Suri",
    affiliation: "Bhagwan Parshuram Institute of Technology, Delhi",
  },
  { name: "Dr. Sherin Zafar", affiliation: "Jamia Hamdard, Delhi" },
  { name: "Prof(Dr)Laxmi Ahuja", affiliation: "Amity University, India" },
  {
    name: "Dr. Praveen Kumar",
    affiliation: "Amity University Tashkent Uzbekistan",
  },
  {
    name: "Dr.Seema Rawat",
    affiliation: "Amity University Tashkent, Uzbekistan",
  },
  { name: "Dr. Rana Majumdar", affiliation: "Sister Nivedita University" },
  {
    name: "Dr. Francisca Nonyelum Ogwueleka",
    affiliation: "University of Abuja, Nigeria",
  },
  { name: "Dr. Olumide Owolabi", affiliation: "University of Abuja, Nigeria" },
  { name: "Dr. Kirti Seth", affiliation: "Inha University Tashkeny" },
  {
    name: "Dr. Suleiman Salihu Jauro",
    affiliation: "Gombe State University Nigeria",
  },
  {
    name: "Dr. Valentina Emilia Balas",
    affiliation: "Aurel Vlaicu University of Arad, Romania",
  },
  { name: "Dr. Utkarsh Goel", affiliation: "IIIT Allahabad, India" },
  {
    name: "Dr. Abhay Kumar Agarwal",
    affiliation: "Kamla Nehru Institute of Technology, Sultanpur",
  },
  {
    name: "Dr Hashim Ibrahim Bisallah",
    affiliation: "Kampala International University, Uganda",
  },
  {
    name: "Dr. Sandeep Singh",
    affiliation: "Dept. of CSE, The NorthCap University, Gurugram",
  },
  {
    name: "Dr. Vikash Yadav",
    affiliation: "Board of Technical Education, Uttar Pradesh, India",
  },
  {
    name: "Dr. Alhassan Adamu",
    affiliation: "Kano University of Science and Technology, Wudil",
  },
  {
    name: "Dr.Gurseen Rakhra",
    affiliation:
      "Manav Rachna International Institute of Research and Studies, India",
  },
  { name: "Dr. H. M. Singh", affiliation: "SHUATS, Prayagraj, Uttar Pradesh" },
  { name: "Dr Sunil Kumar", affiliation: "Manipal University Jaipur" },
  {
    name: "Dr. Benatiallah Ali",
    affiliation: "Laboratory Leesi Adrar University, Algeria",
  },
  {
    name: "Dr. Bireshwar Dass Mazumdar",
    affiliation: "Bennet University Prayagraj",
  },
  {
    name: "Dr. Radha Raman Chandan",
    affiliation: "School of Management Sciences(SMS), Varanasi",
  },
  {
    name: "Dr Manmohan Mishra",
    affiliation: "United Institute of Management, India",
  },
  {
    name: "Dr. Praveen Kumar Shukla",
    affiliation:
      "Department of Computer Science & Engineering, Babu Banarasi Das University, Lucknow, India",
  },
  {
    name: "Dr Muhammed Kabir Ahmed",
    affiliation: "Department of Computer Science Gombe Sate University",
  },
  {
    name: "Dr. Yogesh Kumar Gupta",
    affiliation: "Banasthali Vidyapith, India",
  },
  {
    name: "Dr. Mahima Shanker Pandey",
    affiliation: "Galgotias College of Engineering & Technology, Greater Noida",
  },
  {
    name: "Dr. Neeraj Chugh",
    affiliation:
      "University of Petroleum and Energy Studies, Dehradun, Uttarakhand",
  },
  { name: "Dr. Arun Kumar Yadav", affiliation: "NIT Hamirpur, India" },
  { name: "Dr. Chintan Kr Mandal", affiliation: "Jadavpur University, India" },
  { name: "Dr. Dac-Nhuong Le", affiliation: "Haiphong University, Vietnam" },
  {
    name: "Dr. Piyush Mahendru",
    affiliation: "Manav Rachna University, India",
  },
  {
    name: "Dr. Audu Musa Mabu",
    affiliation: "Yobe State University, Damaturu. Nigeria",
  },
  {
    name: "Dr. P. Raghu Vamsi",
    affiliation: "Jaypee Institute of Information Technology, Noida, India.",
  },
  {
    name: "Dr. Avdhesh Gupta",
    affiliation: "Ajay Kumar Garg Engineering College, Ghaziabad",
  },
  {
    name: "Dr. Mustapha Ismail",
    affiliation: "Gombe State University, Nigeria",
  },
  {
    name: "Dr. Obunadike Georgina Nkolika",
    affiliation: "Federal University Dutsinma, Katsina State Nigeria",
  },
  {
    name: "Dr. Gaurav Khanna",
    affiliation: "Jaypee Institute of Information Technology, Noida, India",
  },
  { name: "Dr. Rajesh Kumar", affiliation: "University of Allahabad" },
  { name: "Dr. Arjun Singh", affiliation: "Manipal University Jaipur" },
  {
    name: "Dr. Sunita Tiwari",
    affiliation: "G B Pant DSEU Okhla-1 Campus, India",
  },
  { name: "Dr. B D Mazumdar", affiliation: "Bennet University, Noida, India" },
  {
    name: "Dr. Mukund Pratap Singh",
    affiliation: "Bennett University, Greater Noida",
  },
  { name: "Dr. Naveen Kumar", affiliation: "Thapar University, Punjab, India" },
  {
    name: "Dr. Rahul Bhandari",
    affiliation: "Chandigarh University, Punjab, India",
  },
  {
    name: "Dr. Shabir Ali",
    affiliation:
      "Galgotias University, Department of Engineering and Technology, Greater Noida",
  },
  {
    name: "Dr. Tribhuvan Singh",
    affiliation:
      "Siksha O Anusandhan (Deemed to be University), Bhubaneswar, Odisha, India",
  },
  {
    name: "Dr. Rakesh Ahuja",
    affiliation: "Chitkara University, Punjab, India",
  },
  {
    name: "Dr. Vijendra Pratap Singh",
    affiliation: "Mahatma Gandhi Kashi Vidyapith, Varanasi, India",
  },
  {
    name: "Dr. Rajwant Singh Rao",
    affiliation: "Guru Ghasidas Vishwavidyalaya Bilaspur Chhattisgarh, India",
  },
  {
    name: "Dr. Rohit Kumar Sachan",
    affiliation: "Bennett University Greater Noida",
  },
  {
    name: "Dr. Ashish Kumar Mishra",
    affiliation:
      "Rajkiya Engineering College Ambedkar Nagar Uttar Pradesh India",
  },
  {
    name: "Dr. Shivendu Mishra",
    affiliation: "Rajkiya Engineering College Ambedkar Nagar, India",
  },
  {
    name: "Dr. Prince Rajpoot",
    affiliation: "Rajkiya Engineering College Ambedkar Nagar, India",
  },
  {
    name: "Murali Natti",
    affiliation: "Apple Inc., USA",
  },
  // {
  //   name: "Wazahat Ahmed Chowdhury",
  //    //   affiliation: "Matrix Medical Health– Phoenix, USA",
  // },
  {
    name: "Sagar Kesarpu",
    affiliation: "McLean, USA",
  },
  {
    name: "Reena Chandra",
    affiliation: "Amazon Inc, USA ",
  },
  {
    name: "Swati Karni",
    affiliation: "SAIC/Department of Veteran Affairs, USA",
  },
  // {
  //   name: "Vishal Sharma",
  //    //   affiliation: "Broadridge Financial Services, USA",
  // },
  {
    name: "Ajay Prasad",
    affiliation: "Apple, USA",
  },
  {
    name: "Shilpi Yadav",
    affiliation: "IBM, USA",
  },
  {
    name: "Savi Grover",
    affiliation: "NBC Universal, USA",
  },
  {
    name: "Prassanna R Rajgopal",
    affiliation: "Cybersecurity Leader and Independent Researcher, USA.",
  },
  {
    name: "Naga Sai Mrunal",

    affiliation: "Humana Inc., USA",
  },
  {
    name: "Swapnil Joijode",

    affiliation: "Hauppauge Inc., USA",
  },
  {
    name: "Deepak Pai",

    affiliation: "IBM, USA",
  },
  {
    name: "Sheeba Bromia Amalraj",

    affiliation: "TBC Corporation, USA",
  },
  {
    name: "Vasudevan Senathi Ramdoss",

    affiliation: "Financial investment sector, USA",
  },
  {
    name: "Kishore Bandela",

    affiliation: "MassDOT, USA",
  },
  {
    name: "Karthik Sirigiri",

    affiliation: "RedMane Technology LLC, USA ",
  },
];

const Tpc = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-emerald-100 py-10 px-2"
      style={{
        fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
        paddingTop: "5.5rem",
      }}
    >
      <div className="mx-auto bg-white rounded-xl shadow-lg p-4 w-full md:w-3/4 max-w-4xl">
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-6"
          style={{
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "1px",
            lineHeight: "1.2",
          }}
        >
          Technical Program Committee
        </h1>
        <div>
          <table
            className="border border-blue-200 rounded-lg mx-auto w-full"
            style={{ tableLayout: "fixed" }}
          >
            <thead>
              <tr className="bg-gradient-to-r from-blue-200 via-violet-200 to-emerald-100">
                <th
                  className="py-2 px-3 text-left font-bold text-blue-700 whitespace-nowrap w-1/3 text-sm"
                  style={{
                    fontFamily: "'Montserrat', Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                  }}
                >
                  Name
                </th>
                <th
                  className="py-2 px-3 text-left font-bold text-blue-700 w-2/3 text-sm"
                  style={{
                    fontFamily: "'Montserrat', Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                  }}
                >
                  Affiliation
                </th>
              </tr>
            </thead>
            <tbody>
              {tpcMembers.map((member, idx) => (
                <tr
                  key={idx}
                  className={`transition ${
                    idx % 2 === 0 ? "bg-blue-50" : "bg-emerald-50"
                  }`}
                  style={{
                    fontFamily: "'Roboto', Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.92rem",
                    borderBottom: "1px solid #e9d5ff", // light purple border
                  }}
                >
                  <td className="py-1 px-3 align-top break-words text-sm">
                    {member.name}
                  </td>
                  <td className="py-1 px-3 align-top break-words text-sm">
                    {member.affiliation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tpc;


