import React from "react";
import Hero from "./Components/Home/Hero";
import Slider from "./Components/Home/Slider";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";
import Join from "./Components/Membership/Join";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <Hero />
      {/* <Slider /> */}
      <Join />
      <Footer />
    </>
  );
};

export default App;
