import React from "react";
import Hero from "./Components/Home/Hero";
import Slider from "./Components/Home/Slider";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";

const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <Hero />
      {/* <Slider /> */}
    </>
  );
};

export default App;
