import React from "react";
// import hero1 from "../../Assets/hero1.jpg";
import sliderimg2 from "../../Assets/sliderimg2.jpg";
import SliderData from "../Data/SliderData";

const Slider = () => {
  return (
    <>
      <div className="">
        <div className="w-[100%] h-screen">
          <img src={sliderimg2} alt="" className="w-[100%] h-[80%]" />
        </div>
      </div>
    </>
  );
};

export default Slider;
