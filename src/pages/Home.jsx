import React from "react";
import Carousel from "../components/Carousel";
import Timer from "../components/Timer";
import About from "../components/About";
import ImportantDates from "../components/ImportantDates";
import Speakers from "../components/Speakers";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Timer />
      <ImportantDates />
      <About />
      <Speakers />
      <Newsletter />
    </div>
  );
};

export default Home;


