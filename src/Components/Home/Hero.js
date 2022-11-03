import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "./Slider";
import SliderData from "../Data/SliderData";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import logo from "../../Assets/logo3.png";

const Hero = () => {
  return (
    <>
      <section id="hero" className="h-full w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          //   navigation={true}
          //   pagination={{ clickable: true }}
          speed={3000}
          loop={true}
          autoplay={{ delay: 7000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {SliderData.map((val, index) => {
            return (
              <>
                <SwiperSlide>
                  <div className="w-[100%] h-screen opacity-70 ">
                    <img src={val.imgSrc} alt="" className="w-[100%] h-[80%]" />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        <div className="w-[100%] h-full mx-auto absolute top-[20%] z-10  hidden md:block">
          <img src={logo} alt="" className="mx-auto scale-50 text-[#fff]" />
        </div>
      </section>
    </>
  );
};

export default Hero;
