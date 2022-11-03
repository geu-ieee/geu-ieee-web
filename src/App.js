import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";
import Join from "./Components/Membership/Join"
import Footer from "./Components/Footer/Footer"
const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <Join />
      <Footer />
    </>
  );
};

export default App;
