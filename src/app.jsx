import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CommitteMember from "./pages/CommitteMember";
import About from "./pages/About";
import Callforpapers from "./pages/Callforpapers";
import Speakers from "./pages/Speakers";
import Registration from "./pages/Registration";
import AuthorGuidlines from "./pages/AuthorGuidlines"; // Import the AuthorGuidlines page
import PublicationEthics from "./pages/PublicationEthics";
import Keynotespeakers from "./pages/Keynotespeakers";
import Contact from "./pages/Contact";
import Tpc from "./pages/Tpc";

const app = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee-member" element={<CommitteMember />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/callforpapers" element={<Callforpapers />} />
          <Route path="/author-guidelines" element={<AuthorGuidlines />} />
          <Route path="/author-guidelines" element={<AuthorGuidlines />} />
          <Route path="/publication-ethics" element={<PublicationEthics />} />
          <Route path="/keynotespeakers" element={<Keynotespeakers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technicalprogramcommitte" element={<Tpc />} />
          {/* New Route */}
          {/* <Route path="/schedule" element={<Schedule />} /> 
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default app;


