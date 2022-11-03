import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";
import Join from "./Components/Membership/Join"
import Footer from "./Components/Footer/Footer"
import Aboutus from "./Components/Aboutus/Aboutus";
import Home from "./Components/Home/Home";
const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <Home />
      <Join />
      <Footer />
    </>
  );
};

export default App;
