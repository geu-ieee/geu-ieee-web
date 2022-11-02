import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

const Topnavbar = () => {
  return (
    <>
      <section
        id="navbar"
        className="h-15 w-[100%] border-solid border-black border-b-2"
      >
        <div className="  max-w-[1200px] flex  justify-evenly  items-center mx-auto ">
          <div className=" grid grid-cols-5 md:grid-cols-3 ">
            <div className=" col-span-1 flex justify-center items-center mx-2">
              <span className="p-2 m-1">
                <SiGmail size={20} />
              </span>
              <p className="text-[0.8rem] font-medium p-2 m-1 hidden md:block">
                ieeegeu.studentbranch@gmail.com
              </p>
            </div>
            <div className="col-span-3 md:col-span-1">
              <ul className="flex justify-center items-center">
                <li className="p-2 m-1">
                  <BsInstagram size={20} />
                </li>
                <li className="p-2 m-2">
                  <FaLinkedinIn size={20} />
                </li>
                <li className="p-2 m-2">
                  <BsGithub size={20} />
                </li>
              </ul>
            </div>
            <div className="col-span-1  flex justify-center items-center mx-2">
              <span className="p-2 m-1">
                <IoCall size={20} />
              </span>
              <p className="text-[0.8rem] font-medium p-2 m-1 hidden md:block">
                +91 8456483999
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topnavbar;
