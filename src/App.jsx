import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CommitteMember from "./pages/CommitteMember";
import Speakers from "./pages/Speakers";
import Registration from "./pages/Registration";
import Callforpapers from "./pages/Callforpapers";
import AuthorGuidlines from "./pages/AuthorGuidlines";
import PublicationEthics from "./pages/PublicationEthics";
import Keynotespeakers from "./pages/Keynotespeakers";
import Contact from "./pages/Contact";
import Tpc from "./pages/Tpc";

const App = () => {
  return (
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
        <Route path="/publication-ethics" element={<PublicationEthics />} />
        <Route path="/keynotespeakers" element={<Keynotespeakers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technicalprogramcommitte" element={<Tpc />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
